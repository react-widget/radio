import React from "react";

export interface RadioGroupContextValue {
	toggleChange: (option: { value: any; label: React.ReactNode }) => void;
	value: any;
	name: string | undefined;
	disabled: boolean;
	readOnly: boolean;
}

export default React.createContext<RadioGroupContextValue | null>(null);
