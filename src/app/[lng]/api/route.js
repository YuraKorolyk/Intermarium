export async function GET() {
  try {
    const response = await fetch('https://api.telegram.org/bot5858070417:AAHLfzyLGigxReIQl3ehhdZ38kp7NI-225c/sendMessage?chat_id=-815777950&text=newText', {
      method: 'GET'
    });

    if (response.ok) {
      console.log('GET request successful');
    } else {
      console.error('GET request failed');
    }
  } catch (error) {
    console.error('Error making GET request:', error);
  }
}
