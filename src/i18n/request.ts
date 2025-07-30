import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  let safeLocale = (locale ?? routing.defaultLocale) as (typeof routing.locales)[number];

  // ✅ Normalize English variants to 'en'
  if (safeLocale.toLowerCase().startsWith('en')) {
    safeLocale = 'en';
  }

  if (!routing.locales.includes(safeLocale)) {
    throw new Error(`Unsupported locale: ${safeLocale}`);
  }

  const messages = {
    businessDashboard: (await import(`../../messages/${safeLocale}/businessDashboard.json`)).default,
    boardingAndDaycareBusinessSettings: (await import(`../../messages/${safeLocale}/boardingAndDaycareBusinessSettings.json`)).default,
    boardingAndDaycarePendingRequests: (await import(`../../messages/${safeLocale}/boardingAndDaycarePendingRequests.json`)).default,
    boardingAndDaycareClientManagement: (await import(`../../messages/${safeLocale}/boardingAndDaycareClientManagement.json`)).default,
    businessSignUp: (await import(`../../messages/${safeLocale}/businessSignUp.json`)).default,
    individualSignUp: (await import(`../../messages/${safeLocale}/individualSignUp.json`)).default,
    individualDashboard: (await import(`../../messages/${safeLocale}/individualDashboard.json`)).default,
    individualEditProfile: (await import(`../../messages/${safeLocale}/individualEditProfile.json`)).default,
    individualSearchBusinesses: (await import(`../../messages/${safeLocale}/individualSearchBusinesses.json`)).default,
    individualSendClientRequest: (await import(`../../messages/${safeLocale}/individualSendClientRequest.json`)).default,
    individualReminders: (await import(`../../messages/${safeLocale}/individualReminders.json`)).default,
    individualMyPets: (await import(`../../messages/${safeLocale}/individualMyPets.json`)).default,
    individualAddEditPet: (await import(`../../messages/${safeLocale}/individualAddEditPet.json`)).default,
    individualNotifications: (await import(`../../messages/${safeLocale}/individualNotifications.json`)).default,
    individualUpcomingAppointments: (await import(`../../messages/${safeLocale}/individualUpcomingAppointments.json`)).default,
    individualBookServices: (await import(`../../messages/${safeLocale}/individualBookServices.json`)).default,
    individualSelectService: (await import(`../../messages/${safeLocale}/individualSelectService.json`)).default,
    individualBookDaycare: (await import(`../../messages/${safeLocale}/individualBookDaycare.json`)).default,
    individualBookBoarding: (await import(`../../messages/${safeLocale}/individualBookBoarding.json`)).default
  };

  return {
    locale: safeLocale,
    messages
  };
});
