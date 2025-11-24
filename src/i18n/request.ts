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

    // Existing namespaces
    adoptionApplicationForm: (await import(`../../messages/${safeLocale}/adoptionApplicationForm.json`)).default,
    businessDashboard: (await import(`../../messages/${safeLocale}/businessDashboard.json`)).default,
    boardingAndDaycareAddDogClientDogs: (await import(`../../messages/en/boardingAndDaycareAddDogClientDogs.json`)).default,
    boardingAndDaycareAddDogClientList: (await import(`../../messages/${safeLocale}/boardingAndDaycareAddDogClientList.json`)).default,
    boardingAndDaycareBusinessSettings: (await import(`../../messages/${safeLocale}/boardingAndDaycareBusinessSettings.json`)).default,
    boardingAndDaycarePendingRequests: (await import(`../../messages/${safeLocale}/boardingAndDaycarePendingRequests.json`)).default,
    boardingAndDaycareClientManagement: (await import(`../../messages/${safeLocale}/boardingAndDaycareClientManagement.json`)).default,
    boardingAndDaycareIndividualClient: (await import(`../../messages/${safeLocale}/boardingAndDaycareIndividualClient.json`)).default,
    boardingAndDaycareDogsOnProperty: (await import(`../../messages/${safeLocale}/boardingAndDaycareDogsOnProperty.json`)).default,
    boardingAndDaycareUpcomingReservations: (await import(`../../messages/${safeLocale}/boardingAndDaycareUpcomingReservations.json`)).default,
    boardingAndDaycareMessages: (await import(`../../messages/${safeLocale}/boardingAndDaycareMessages.json`)).default,
    boardingAndDaycareMessageClient: (await import(`../../messages/${safeLocale}/boardingAndDaycareMessageClient.json`)).default,
    breederBusinessSettings: (await import(`../../messages/${safeLocale}/breederBusinessSettings.json`)).default,
    breederClientManagement: (await import(`../../messages/${safeLocale}/breederClientManagement.json`)).default,
    breederDashboard: (await import(`../../messages/${safeLocale}/breederDashboard.json`)).default,
    breederMyDogs: (await import(`../../messages/${safeLocale}/breederMyDogs.json`)).default,
    breederPendingRequests: (await import(`../../messages/${safeLocale}/breederPendingRequests.json`)).default,
    breederApplicationsAndContracts: (await import(`../../messages/${safeLocale}/breederApplicationsAndContracts.json`)).default,
    breederSubmittedApplications: (await import(`../../messages/${safeLocale}/breederSubmittedApplications.json`)).default,
    breederSubmittedContracts: (await import(`../../messages/${safeLocale}/breederSubmittedContracts.json`)).default,
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
    individualBookBoarding: (await import(`../../messages/${safeLocale}/individualBookBoarding.json`)).default,
    individualEmployeeDogsOnProperty: (await import(`../../messages/${safeLocale}/individualEmployeeDogsOnProperty.json`)).default,
    individualEmployeeUpcomingReservations: (await import(`../../messages/${safeLocale}/individualEmployeeUpcomingReservations.json`)).default,
    individualMessages: (await import(`../../messages/${safeLocale}/individualMessages.json`)).default,
    individualMessageBusiness: (await import(`../../messages/${safeLocale}/individualMessageBusiness.json`)).default,
    waiverAgreement: (await import(`../../messages/${safeLocale}/waiverAgreement.json`)).default,
    walkerSitterBusinessSettings: (await import(`../../messages/${safeLocale}/walkerSitterBusinessSettings.json`)).default,
    walkerSitterClientManagement: (await import(`../../messages/${safeLocale}/walkerSitterClientManagement.json`)).default,
    walkerSitterDashboard: (await import(`../../messages/${safeLocale}/walkerSitterDashboard.json`)).default,
    walkerSitterPendingRequests: (await import(`../../messages/${safeLocale}/walkerSitterPendingRequests.json`)).default,
     walkerSitterTodayVisits: (await import(`../../messages/${safeLocale}/walkerSitterTodaysVisits.json`)).default
  } as const;

  return {
    locale: safeLocale,
    messages
  };
});
