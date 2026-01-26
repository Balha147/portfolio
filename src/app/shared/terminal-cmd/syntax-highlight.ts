import { Directive, effect, ElementRef, inject, input, untracked } from '@angular/core';

@Directive({
  selector: '[appSyntaxHighlight]',
})
export class SyntaxHighlight {
  private el = inject(ElementRef<HTMLElement>);
  text = input.required<string>();

  private lastText: string | null = null;

  constructor() {
    effect(() => {
      const code = this.text();
      if (code === this.lastText) return;
      this.lastText = code;

      const highlighted = untracked(() => this.highlight(code));
      this.el.nativeElement.innerHTML = highlighted;
    });
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  private tokenize(code: string): Token[] {
    const tokens: Token[] = [];
    let i = 0;

    while (i < code.length) {
      const char = code[i];

      if (char === "'" || char === '"' || char === '`') {
        const quote = char;
        let value = char;
        i++;
        while (i < code.length) {
          const c = code[i];
          value += c;
          if (c === quote && code[i - 1] !== '\\') break;
          i++;
        }
        tokens.push({ type: 'string', value });
        i++;
        continue;
      }

      if (/[\p{L}_]/u.test(char)) {
        let value = char;
        i++;
        while (i < code.length && /[\p{L}\p{N}_]/u.test(code[i])) {
          value += code[i++];
        }

        if (KEYWORDS.has(value)) {
          tokens.push({ type: 'keyword', value });
        } else if (value === 'true' || value === 'false') {
          tokens.push({ type: 'boolean', value });
        } else {
          tokens.push({ type: 'identifier', value });
        }
        continue;
      }

      if (/\d/.test(char)) {
        let value = char;
        i++;
        while (i < code.length && /[\d.]/.test(code[i])) {
          value += code[i++];
        }
        tokens.push({ type: 'number', value });
        continue;
      }

      const twoChar = code.slice(i, i + 2);
      if (TWO_CHAR_OPS.has(twoChar)) {
        tokens.push({ type: 'operator', value: twoChar });
        i += 2;
        continue;
      }

      if (/[{}()[\],.;]/.test(char)) {
        tokens.push({ type: 'symbol', value: char });
        i++;
        continue;
      }

      tokens.push({ type: 'text', value: char });
      i++;
    }

    return tokens;
  }

  private render(tokens: Token[]): string {
    return tokens.map(t => {
      const v = this.escapeHtml(t.value);
      return `<span class="${CLASS_MAP[t.type]}">${v}</span>`;
    }).join('');
  }

  private highlight(code: string): string {
    if (!code) return '';
    const tokens = this.tokenize(code);
    return this.render(tokens);
  }
}

const KEYWORDS = new Set(['const', 'let', 'var', 'return', 'function', 'if', 'else']);
const TWO_CHAR_OPS = new Set(['&&', '||', '>=', '<=', '==', '!=']);

const CLASS_MAP: Record<TokenType, string> = {
  keyword: 'text-[var(--code-keyword)] font-bold',
  string: 'text-[var(--code-string)]',
  number: 'text-[var(--code-number)] italic',
  boolean: 'text-[var(--code-number)] italic',
  identifier: 'text-[var(--code-id)]',
  operator: 'text-[var(--code-op)] font-bold',
  symbol: 'text-[var(--code-symbol)]',
  text: '',
};

type TokenType =
  | 'keyword'
  | 'string'
  | 'number'
  | 'boolean'
  | 'identifier'
  | 'operator'
  | 'symbol'
  | 'text';

interface Token {
  type: TokenType;
  value: string;
}
