// React
import { FC } from "react"


export const Testimonials: FC = () => {

    return (
        <>
            <section className="bg-background-dark-tertiary flex items-center justify-center pt-[60px] tablet:pt-[120px] pb-[60px] tablet:pb-[90px] relative">
                <div className="max-w-full tablet:max-w-[1156px] px-24px tablet:px-8px flex items-stretch flex-1 z-[1]">
                    <div className="flex flex-col flex-1 w-full">
                        <div className="typography-h4-strong tablet:typography-h2-strong pb-[16px] text-typography-dark-quaternary">
                            Loved by <span className="text-typography-dark-primary">Builders.</span>
                        </div>
                        <div className="typography-p4-medium tablet:typography-p2-medium text-typography-dark-secondary pb-[60px] tablet:pb-[80px]">
                            Attio is the customer relationship management tool
                            <br className="hidden tablet:inline" /> for everyone who values
                            collaboration.
                            <div className="pt-[32px]">
                                <a
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-secondaryOnDark hover:text-white enabled:active:text-white focus:text-white disabled:text-buttonNew-secondaryOnDark-disabled enabled:active:bg-buttonNew-secondaryOnDark-active focus:bg-buttonNew-secondaryOnDark-active border-[1px] border-buttonNew-secondaryOnDark hover:border-white enabled:active:border-white focus:border-white disabled:border-buttonNew-secondaryOnDark-disabled disabled shadow-none focus:shadow-buttonNew-secondaryOnDark-focus disabled:opacity-25"
                                    href="/customers"
                                >
                                    <span className="z-1 relative">More customer stories</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="tablet:h-[630px] overflow-hidden w-[calc(100%+28px)] tablet:max-w-[1156px] relative px-[14px] mx-[-14px] py-[14px] my-[-14px] h-[400px] phablet:h-[500px]">
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(transparent 0%, transparent 70%, #232529 90%, #232529 100%)"
                                    }}
                                />
                                <div className="flex flex-col phablet:flex-wrap phablet:flex-row tablet:flex-col phablet gap-24px tablet:h-[836px] w-full h-[400px] phablet:h-[500px]">
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/GW4Gdj31RIWmYJGwH87J"
                                                alt="Sebastiaan Debrouwere"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">
                                                    Sebastiaan Debrouwere
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @iamsebdeb
                                                </p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={24}
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"
                                            >
                                                <g clipPath="url(#clip0_651_130565)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_651_130565">
                                                        <rect
                                                            width={16}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(4.33337 5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                We use @attio on a daily basis for several internal processes,
                                                and I cannot rave enough about them. Incredible flexibility
                                                and features combined with super intuitive UI
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                10:01 PM · Apr 7, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/Kd0XUrnRRGmF7owczBfF"
                                                alt="Krishna"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">Krishna</p>
                                                <p className="typography-c1-medium text-[#505967]">@ntkris</p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={24}
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"
                                            >
                                                <g clipPath="url(#clip0_651_130565)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_651_130565">
                                                        <rect
                                                            width={16}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(4.33337 5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                Holy shit @attio is beautiful 😍 I&apos;ve run my CRM on Notion to
                                                date. Hubspot &amp; Salesforce too clunky. Sleek and simple,
                                                just what I need
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                1:03 PM · Mar 3, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/nrxRqK12Qmi1A2WiO496"
                                                alt="Eddy J. Prado 🔥"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">
                                                    Eddy J. Prado 🔥
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @eddyjprado
                                                </p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={24}
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"
                                            >
                                                <g clipPath="url(#clip0_651_130565)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_651_130565">
                                                        <rect
                                                            width={16}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(4.33337 5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                For those who use Airtable as a CRM this is a better option.
                                                And it&apos;s not as expensive as Hubspot and others. In addition
                                                to being friendly, it has good workflows and integrations.
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                9:46 PM · Jul 25, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/9RVsigJSSGHzx0TVtiEL"
                                                alt="Alon"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">Alon</p>
                                                <p className="typography-c1-medium text-[#505967]">@alon</p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={24}
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"
                                            >
                                                <g clipPath="url(#clip0_651_130565)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_651_130565">
                                                        <rect
                                                            width={16}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(4.33337 5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                As an early stage startup I’m really loving using @attio -
                                                great balance of flexibility and prescriptiveness
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                6:57 PM · Dec 1, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/WXNrZIfT6yPCwzB2JfYn"
                                                alt="Jono Bacon"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">
                                                    Jono Bacon
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @jonobacon
                                                </p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={24}
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"
                                            >
                                                <g clipPath="url(#clip0_651_130565)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_651_130565">
                                                        <rect
                                                            width={16}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(4.33337 5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                Let&apos;s be honest, most CRMs suck. Overcomplicated, expensive,
                                                and you have to bend to their will...not the other way around.
                                                I am a huge fan of @attio - their product is rock-solid,
                                                customer support is AAA, and it is *very* flexible and simple.
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                4:05 PM · Jan 9, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/SB3iTBW9Qs6HPQUvXtCw"
                                                alt="Meltem Demirors"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">
                                                    Meltem Demirors
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @Melt_Dem
                                                </p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={24}
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"
                                            >
                                                <g clipPath="url(#clip0_651_130565)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_651_130565">
                                                        <rect
                                                            width={16}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(4.33337 5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                @attio is the best i’ve ever used
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                2:25 AM · Apr 21, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/pJ9TAXxZSZqEsUuGOFPo"
                                                alt="Dimitry Gershenson"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">
                                                    Dimitry Gershenson
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @d_gershenson
                                                </p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={24}
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"
                                            >
                                                <g clipPath="url(#clip0_651_130565)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_651_130565">
                                                        <rect
                                                            width={16}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(4.33337 5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                We use our CRM @attio for sales, fundraising, and recruiting.
                                                It&apos;s awesome
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                1:32 PM · Jan 4, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-tablet:hidden max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/izYVyyVTY2jBQCqkVCtj"
                                                alt="Sri"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">Sri</p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @therealsrii
                                                </p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={24}
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"
                                            >
                                                <g clipPath="url(#clip0_651_130565)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_651_130565">
                                                        <rect
                                                            width={16}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(4.33337 5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                I&apos;ve been using @attio to track applicants, manage my deal
                                                pipeline and manage the associated notes/tasks. The use-cases
                                                are unlimited; it truly feels like the Notion of CRM.
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                10:17 PM · Jan 3, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-tablet:hidden max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/VafhvNR1SnGjecn5zVNT"
                                                alt="Fabian"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">Fabian</p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @FabstheAustrian
                                                </p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={24}
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"
                                            >
                                                <g clipPath="url(#clip0_651_130565)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_651_130565">
                                                        <rect
                                                            width={16}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(4.33337 5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                For CRM or deal flow, @attio is in a class of its own.
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                3:36 PM · Nov 8, 2022
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tablet:contents flex flex-col items-center w-full absolute bottom-0 left-0">
                                    <button className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-36px py-[10px] typography-p5-medium text-buttonNew-secondaryOnDark hover:text-white enabled:active:text-white focus:text-white disabled:text-buttonNew-secondaryOnDark-disabled enabled:active:bg-buttonNew-secondaryOnDark-active focus:bg-buttonNew-secondaryOnDark-active border-[1px] border-buttonNew-secondaryOnDark hover:border-white enabled:active:border-white focus:border-white disabled:border-buttonNew-secondaryOnDark-disabled disabled shadow-none focus:shadow-buttonNew-secondaryOnDark-focus disabled:opacity-25">
                                        <span className="z-1 relative">Load more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}