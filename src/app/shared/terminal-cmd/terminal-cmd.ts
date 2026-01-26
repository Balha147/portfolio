import { Component, computed, effect, input, signal } from '@angular/core';
import { SyntaxHighlight } from './syntax-highlight';

@Component({
  selector: 'app-terminal-cmd',
  templateUrl: './terminal-cmd.html',
  imports: [SyntaxHighlight]
})
export class TerminalCmd {
 text = input.required<string>();
  projectTitle = input<string | null>(null);
  animate = input<boolean>(true);

  rawText = signal('');
  index = signal(0);
  isTyping = signal(true);
  typingSpeed = 20;

  constructor() {
    effect(() => {
      if (!this.animate()) {
        this.rawText.set(this.text());
        this.isTyping.set(false);
        return;
      }

      if (!this.isTyping()) return;
      const fullText = this.text();
      const i = this.index();

      if (i < fullText.length) {
        const timeout = setTimeout(() => {
          this.rawText.update(v => v + fullText.charAt(i));
          this.index.set(i + 1);
        }, this.typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        this.isTyping.set(false);
        return;
      }
    });
  }

}
