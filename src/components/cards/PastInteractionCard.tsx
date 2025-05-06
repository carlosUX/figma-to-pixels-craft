import React from "react";

const InteractionItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center mb-2.5">
    <div
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.54541 2C7.99668 2 6.66956 3.10758 6.39252 4.63133L6.35458 4.83999L6.2571 4.85499C4.38145 5.14355 2.99688 6.75743 2.99688 8.65514V9.25C2.99688 10.1676 3.37719 10.9965 3.9888 11.5874C2.79699 12.3062 2 13.6132 2 15.1065C2 17.0869 3.41345 18.7852 5.36095 19.1447L5.37475 19.1472C5.78266 20.8178 7.28119 22 9.00888 22C10.2316 22 11.3173 21.4134 12 20.5063C12.6827 21.4134 13.7684 22 14.9911 22C16.7188 22 18.2173 20.8178 18.6252 19.1472L18.6391 19.1447C20.5866 18.7852 22 17.0869 22 15.1065C22 13.6124 21.2021 12.3048 20.0093 11.5863C20.6202 10.9954 21 10.167 21 9.25V8.65514C21 6.75743 19.6154 5.14355 17.7398 4.85499L17.6423 4.83999L17.6044 4.63133C17.3273 3.10758 16.0002 2 14.4515 2C13.467 2 12.5863 2.44389 11.9984 3.14243C11.4106 2.44389 10.5298 2 9.54541 2Z" fill="#242424"/></svg>`,
      }}
      className="mr-2.5"
    />
    <div className="text-base text-[#242424]">{text}</div>
  </div>
);

export const PastInteractionCard: React.FC = () => {
  return (
    <div className="flex flex-col w-[462px] shadow-[0px_2px_4px_rgba(0,0,0,0.14),0px_0px_2px_rgba(0,0,0,0.12)] border bg-white rounded-xl border-solid border-[#E0E0E0] max-sm:w-full max-sm:max-w-[400px]">
      <div className="flex items-center px-2.5 py-[11px] border-b-[#E0E0E0] border-b border-solid">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9V16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H15C14.4477 18 14 17.5523 14 17V9Z" fill="#242424"/></svg>`,
          }}
          className="mr-2.5"
        />
        <div className="font-semibold text-2xl text-[#242424] flex-1">
          Past interaction
        </div>
        <div className="text-sm text-[#242424]">
          Overview of previous conversations and actions taken by you
        </div>
      </div>
      <div className="p-2.5">
        <InteractionItem text="You have previously inquired about the latest features in Adobe Illustrator and requested updates on the Proseware project timeline." />
        <InteractionItem text="You have previously inquired about the latest features in Adobe Illustrator and requested updates on the Proseware project timeline." />
        <InteractionItem text="You have previously inquired about the latest features in Adobe Illustrator and requested updates on the Proseware project timeline." />
      </div>
    </div>
  );
};
