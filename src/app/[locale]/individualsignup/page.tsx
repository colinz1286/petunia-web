'use client';

import { useState } from 'react';

export default function IndividualSignUpPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyFirstName: '',
    emergencyLastName: '',
    emergencyPhoneNumber: ''
  });

  const [error, setError] = useState<string | null>(null);

  const usStates = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
  ];

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const {
      firstName, lastName, email, password, confirmPassword,
      phoneNumber, streetAddress, city, state, zipCode,
      emergencyFirstName, emergencyLastName, emergencyPhoneNumber
    } = form;

    if (!firstName || !lastName || !email || !password || !confirmPassword ||
        !phoneNumber || !streetAddress || !city || !state || !zipCode ||
        !emergencyFirstName || !emergencyLastName || !emergencyPhoneNumber) {
      setError('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // TODO: Firebase signup logic
    console.log('🟢 Submitting individual signup form:', form);
    setError(null);
  };

  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] font-sans flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-3xl font-bold text-center">Create Individual Account</h1>

        {/* Personal Info */}
        <div className="space-y-4">
          <input type="text" placeholder="First Name" value={form.firstName} onChange={e => handleChange('firstName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
          <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => handleChange('lastName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
          <input type="email" placeholder="Email" value={form.email} onChange={e => handleChange('email', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
          <input type="password" placeholder="Password" value={form.password} onChange={e => handleChange('password', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
          <input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={e => handleChange('confirmPassword', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
          <input type="text" placeholder="Phone Number" value={form.phoneNumber} onChange={e => handleChange('phoneNumber', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
        </div>

        {/* Address */}
        <h2 className="text-lg font-semibold mt-8">Address</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Street Address" value={form.streetAddress} onChange={e => handleChange('streetAddress', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
          <input type="text" placeholder="City" value={form.city} onChange={e => handleChange('city', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
          <select value={form.state} onChange={e => handleChange('state', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white">
            <option value="">State</option>
            {usStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <input type="text" placeholder="Zip Code" value={form.zipCode} onChange={e => handleChange('zipCode', e.target.value.slice(0, 5))} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
        </div>

        {/* Emergency Contact */}
        <h2 className="text-lg font-semibold mt-8">Emergency Contact</h2>
        <div className="space-y-4">
          <input type="text" placeholder="First Name" value={form.emergencyFirstName} onChange={e => handleChange('emergencyFirstName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
          <input type="text" placeholder="Last Name" value={form.emergencyLastName} onChange={e => handleChange('emergencyLastName', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
          <input type="text" placeholder="Phone Number" value={form.emergencyPhoneNumber} onChange={e => handleChange('emergencyPhoneNumber', e.target.value)} className="w-full px-4 py-2 border-2 border-gray-300 rounded outline-none bg-white" />
        </div>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <button onClick={handleSubmit} className="w-full bg-[#2c4a30] text-white py-3 rounded hover:bg-[#1e3624] transition mt-6">
          Create Account
        </button>
      </div>
    </main>
  );
}
