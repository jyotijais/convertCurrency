import { useState, useEffect } from 'react';

function useCurrencyInfo(baseCurrency) {
  const [currencyInfo, setCurrencyInfo] = useState(null);

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();
        setCurrencyInfo(data.rates);
      } catch (error) {
        console.error('Error fetching currency info:', error);
        setCurrencyInfo({});
      }
    };

    fetchCurrencyInfo();
  }, [baseCurrency]);

  return currencyInfo;
}

export default useCurrencyInfo;