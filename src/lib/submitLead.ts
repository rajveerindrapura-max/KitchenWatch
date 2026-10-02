export interface LeadData {
  name: string;
  business: string;
  outlets: string;
  phone: string;
  email: string;
  message?: string;
}

// TODO: Connect to email, Google Sheets, or CRM before launch
export async function submitLead(data: LeadData): Promise<void> {
  console.log('Lead submitted:', data);
  // Simulated network delay
  await new Promise<void>((resolve) => setTimeout(resolve, 1400));
}