export const EMAILJS_SERVICE_ID = 'service_xl27vif';
export const EMAILJS_TEMPLATE_ID = 'template_e2kwcix';
export const EMAILJS_PUBLIC_KEY = 'qZMeTf8j1_oc3zzDa';

export async function sendEmail(formElement) {
  const emailjs = (await import('@emailjs/browser')).default;

  if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return { success: true };
  }

  const result = await emailjs.sendForm(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    formElement,
    EMAILJS_PUBLIC_KEY
  );

  return { success: true, result };
}