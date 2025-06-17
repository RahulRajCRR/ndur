import { ContactFormValues } from '@/types/contact';

const GOOGLE_SHEETS_API = 'https://sheets.googleapis.com/v4/spreadsheets';
const GOOGLE_DRIVE_API = 'https://www.googleapis.com/drive/v3/files';
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
const FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;

export const submitToGoogleSheet = async (data: ContactFormValues): Promise<boolean> => {
  try {
    const response = await fetch(`${GOOGLE_SHEETS_API}/${SPREADSHEET_ID}/values/Sheet1!A:E:append`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await getGoogleAccessToken()}`,
      },
      body: JSON.stringify({
        values: [[
          new Date().toISOString(),
          data.name,
          data.email,
          data.phone || '',
          data.message
        ]],
        majorDimension: 'ROWS',
        valueInputOption: 'USER_ENTERED'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheet');
    }

    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    return false;
  }
};

export const uploadToGoogleDrive = async (file: File, email: string): Promise<string | null> => {
  try {
    // First, upload the file
    const metadata = {
      name: `${email}_${file.name}`,
      parents: [FOLDER_ID],
      mimeType: file.type
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);

    const response = await fetch(`${GOOGLE_DRIVE_API}?uploadType=multipart`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${await getGoogleAccessToken()}`
      },
      body: form
    });

    if (!response.ok) {
      throw new Error('Failed to upload to Google Drive');
    }

    const result = await response.json();
    return result.id;
  } catch (error) {
    console.error('Error uploading to Google Drive:', error);
    return null;
  }
};

// Helper function to get Google access token
const getGoogleAccessToken = async (): Promise<string> => {
  // This should be implemented based on your authentication method
  // For example, using Google OAuth2 or a service account
  return import.meta.env.VITE_GOOGLE_ACCESS_TOKEN;
}; 