import React, { useState } from 'react';

export default function PropertyValuation() {
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [squareFeet, setSquareFeet] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [customValue, setCustomValue] = useState('');
  const [valuation, setValuation] = useState(null);
  const [breakdown, setBreakdown] = useState(null);

  const locationFactorMap = {
    'urban': 1.3,
    'suburban': 1.1,
    'rural': 0.9
  };

  const handleValuation = () => {
    // Simple mock calculation based on inputs
    const basePrice = 100000;
    const sizeFactor = squareFeet ? parseInt(squareFeet, 10) * 50 : 0;
    const bedroomFactor = bedrooms ? parseInt(bedrooms, 10) * 10000 : 0;
    const bathroomFactor = bathrooms ? parseInt(bathrooms, 10) * 5000 : 0;
    const customFactor = customValue ? parseInt(customValue, 10) : 0;
    const locationMultiplier = locationFactorMap[location] || 1;

    const estimatedPrice = (basePrice + sizeFactor + bedroomFactor + bathroomFactor + customFactor) * locationMultiplier;
    setValuation(`Estimated Property Value: $${estimatedPrice.toLocaleString()}`);

    setBreakdown({
      basePrice,
      sizeFactor,
      bedroomFactor,
      bathroomFactor,
      customFactor,
      locationMultiplier,
      estimatedPrice
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h2 className="text-3xl font-bold mb-6">AI Property Valuation</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-2">Property Type:</label>
        <select className="w-full p-2 border rounded mb-4" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="commercial">Commercial</option>
        </select>

        <label className="block mb-2">Location Type:</label>
        <select className="w-full p-2 border rounded mb-4" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Select Location</option>
          <option value="urban">Urban</option>
          <option value="suburban">Suburban</option>
          <option value="rural">Rural</option>
        </select>

        <label className="block mb-2">Square Feet:</label>
        <input className="w-full p-2 border rounded mb-4" type="number" value={squareFeet} onChange={(e) => setSquareFeet(e.target.value)} />

        <label className="block mb-2">Bedrooms:</label>
        <input className="w-full p-2 border rounded mb-4" type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />

        <label className="block mb-2">Bathrooms:</label>
        <input className="w-full p-2 border rounded mb-4" type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />

        <label className="block mb-2">Custom Value Adjustments:</label>
        <input className="w-full p-2 border rounded mb-4" type="number" value={customValue} onChange={(e) => setCustomValue(e.target.value)} />

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg" onClick={handleValuation}>Estimate Value</button>
      </div>

      {valuation && (
        <div className="mt-6 text-xl font-semibold">
          <p>{valuation}</p>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Breakdown:</h3>
            <p>Base Price: ${breakdown.basePrice.toLocaleString()}</p>
            <p>Size Factor: +${breakdown.sizeFactor.toLocaleString()}</p>
            <p>Bedroom Factor: +${breakdown.bedroomFactor.toLocaleString()}</p>
            <p>Bathroom Factor: +${breakdown.bathroomFactor.toLocaleString()}</p>
            <p>Custom Adjustments: +${breakdown.customFactor.toLocaleString()}</p>
            <p>Location Multiplier: x{breakdown.locationMultiplier}</p>
            <p className="font-bold">Final Estimated Price: ${breakdown.estimatedPrice.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
