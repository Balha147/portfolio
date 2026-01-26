import { Service, signal } from "@angular/core";

@Service()
export class Announcer {
    readonly message = signal('');
    announce(text: string) { this.message.set(''); setTimeout(() => this.message.set(text), 60); }
}

