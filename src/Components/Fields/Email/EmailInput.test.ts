import { Mail } from './EmailUtils';

test('should return false given external link', () => {
    let myTestMailer = new Mail("mehmed@oye.agency");
    expect(myTestMailer.mailState).toBe(true);
})