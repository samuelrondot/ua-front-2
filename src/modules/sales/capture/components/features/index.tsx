// React
import { FC } from "react";

export const Features: FC = (props) => {
    return (
        <>
            <div className="bg-white pt-60px tablet:pt-120px">
                <section className="bg-background-light-primary flex items-center justify-center pl-48px px-24px tablet:px-[142px]">
                    <div className="pb-[64px] tablet:pb-[120px] relative w-[100%] phablet:max-w-[720px] tablet:max-w-[1155px] flex items-stretch">
                        <div className="absolute top-0 bottom-0 right-[calc(100%+7px)] tablet:right-full">
                            <div className="h-full flex flex-col items-center">
                                <svg
                                    className="shrink-0 w-[34px] h-[34px] tablet:w-[49px] tablet:h-[49px]"
                                    width={34}
                                    height={34}
                                    viewBox="0 0 34 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={17} cy="17.5999" r={17} fill="white" />
                                    <g clipPath="url(#clip0_102_199656)">
                                        <path
                                            d="M26.1938 9.94623L18.2162 6.13349C17.37 5.7248 16.3723 5.7801 15.5762 6.28039L7.34426 11.4642C6.54817 11.9645 6.06616 12.8415 6.07025 13.7812L6.10058 22.5968C6.10475 23.6388 6.70236 24.5884 7.64071 25.043L15.6183 28.8558C16.4645 29.2645 17.4622 29.2092 18.2583 28.7089L26.4902 23.525C27.2863 23.0247 27.7683 22.1478 27.7642 21.2081L27.7488 16.4685L27.7356 12.3925C27.7315 11.3504 27.1338 10.4009 26.1972 9.94793L26.1938 9.94623Z"
                                            fill="#FAFAFA"
                                            stroke="#383E47"
                                            strokeMiterlimit={10}
                                        />
                                        <g opacity="0.8">
                                            <path
                                                d="M14.9378 25.7565L9.24959 23.037C8.66805 22.7552 8.28935 22.154 8.28733 21.5061L8.26562 15.1409"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M14.9378 25.7565L9.24959 23.037C8.66805 22.7552 8.28935 22.154 8.28733 21.5061L8.26562 15.1409"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M10.4512 14.7192L15.3438 17.0859C15.9223 17.3723 16.2979 17.972 16.2999 18.6184L16.3195 24.224"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M10.4512 14.7192L15.3438 17.0859C15.9223 17.3723 16.2979 17.972 16.2999 18.6184L16.3195 24.224"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M8.27807 17.7716L8.26801 14.6092C8.2678 14.3255 8.46457 14.1703 8.54979 14.116C8.63501 14.0632 8.86126 13.9515 9.11714 14.0753L10.7377 14.8585"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M8.27807 17.7716L8.26801 14.6092C8.2678 14.3255 8.46457 14.1703 8.54979 14.116C8.63501 14.0632 8.86126 13.9515 9.11714 14.0753L10.7377 14.8585"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M16.3106 22.0647L16.3224 25.5294C16.3226 25.8115 16.1383 25.9589 16.0593 26.0086C15.9802 26.0583 15.7679 26.1623 15.5136 26.0385L11.9313 24.3296"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M16.3106 22.0647L16.3224 25.5294C16.3226 25.8115 16.1383 25.9589 16.0593 26.0086C15.9802 26.0583 15.7679 26.1623 15.5136 26.0385L11.9313 24.3296"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_102_199656">
                                            <rect
                                                width="26.0667"
                                                height="26.0667"
                                                fill="white"
                                                transform="translate(3.9668 4.56665)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="flex-1 w-[1px] line-gradient" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 max-w-[100%]">
                            <div className="pl-24px tablet:pl-40px">
                                <div className="typography-h4-strong tablet:typography-h2-strong text-typography-light-primary phone:whitespace-pre-line">
                                   Step 1: Find the Right Leads
                                </div>
                                <div className="mt-16px max-w-[480px] typography-p4-medium tablet:typography-p2-medium text-typography-light-secondary phone:whitespace-pre-line">
                                   Make a search on LinkedIn or LinkedIn Sales Navigator and scrape search results with our Chrome extension.
                                </div>
                            </div>
                            <div className="mt-60px tablet:mt-80px flex flex-col gap-24px relative min-h-[380px]">
                                <div className="hidden tablet:contents">
                                    <div className="rounded-[20px] overflow-hidden flex flex-col items-center pt-[36px] px-[40px] card-light-shadow bg-background-light-primary">
                                        <div className="z-10 flex flex-row gap-24px w-full pb-64px max-w-[1076px]">
                                            <button className="relative flex flex-col flex-1 gap-8px overflow-hidden rounded-12px transition-all duration-[140ms] transform">
                                                <div className="flex flex-row items-center gap-8px">
                                                    <svg
                                                        width={20}
                                                        height={19}
                                                        viewBox="0 0 20 19"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.0006 2.03633L7.96484 2.03633C6.06467 2.03634 5.11458 2.03634 4.3888 2.40613C3.7504 2.73142 3.23136 3.25046 2.90607 3.88887C2.53627 4.61464 2.53627 5.56473 2.53627 7.46491L2.53627 11.5363C2.53627 13.4365 2.53627 14.3865 2.90607 15.1123C3.23136 15.7507 3.7504 16.2698 4.38881 16.595C5.11458 16.9648 6.06467 16.9648 7.96485 16.9648L10.0006 16.9648M10.0006 2.03633L12.0363 2.03633C13.9364 2.03633 14.8865 2.03633 15.6123 2.40613C16.2507 2.73142 16.7698 3.25046 17.095 3.88887C17.4648 4.61464 17.4648 5.56473 17.4648 7.4649L17.4648 11.5363C17.4648 13.4364 17.4648 14.3865 17.095 15.1123C16.7698 15.7507 16.2507 16.2698 15.6123 16.595C14.8865 16.9648 13.9365 16.9648 12.0363 16.9648L10.0006 16.9648M10.0006 2.03633L10.0006 16.9648"
                                                            stroke="#99A2AF"
                                                            strokeWidth="1.49286"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M10 11.3667L2.53571 11.3667"
                                                            stroke="#99A2AF"
                                                            strokeWidth="1.49286"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M17.4648 7.63428L10.0006 7.63428"
                                                            stroke="#99A2AF"
                                                            strokeWidth="1.49286"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <h3 className="typography-p4-strong text-[#99A2AF]">
                                                        Scraper
                                                    </h3>
                                                </div>
                                                <div className="typography-p5-medium text-[#99A2AF] text-left">
                                                    Make a search on LinkedIn and export results to useArtemis.
                                                </div>
                                            </button>
                                            <button className="relative flex flex-col flex-1 gap-8px overflow-hidden rounded-12px transition-all duration-[140ms] transform">
                                                <div className="flex flex-row items-center gap-8px">
                                                    <svg
                                                        width={20}
                                                        height={19}
                                                        viewBox="0 0 20 19"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_943_164230)">
                                                            <path
                                                                d="M14.75 9.46127L14.75 6.78574C14.75 4.88555 14.75 3.93546 14.3802 3.20968C14.0549 2.57127 13.5359 2.05223 12.8975 1.72694C12.1717 1.35714 11.2216 1.35714 9.32141 1.35714L7.06233 1.35714C5.37256 1.35714 4.52767 1.35714 3.86798 1.65137C3.10364 1.99227 2.49227 2.60365 2.15137 3.36799C1.85714 4.02767 1.85714 4.87256 1.85714 6.56234L1.85714 8.82143C1.85714 10.7216 1.85714 11.6717 2.22694 12.3975C2.55223 13.0359 3.07127 13.5549 3.70967 13.8802C4.43545 14.25 5.38554 14.25 7.28571 14.25L9.96122 14.25C11.2605 14.25 11.9101 14.25 12.4345 14.0744C13.444 13.7364 14.2363 12.944 14.5744 11.9345C14.75 11.4101 14.75 10.7605 14.75 9.46127Z"
                                                                stroke="#99A2AF"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M17.464 6.10701C17.8901 6.67413 18.1426 7.37911 18.1426 8.14307L18.1426 12.8543C18.1426 13.5206 18.1426 13.8538 18.1036 14.1332C17.8526 15.936 16.4355 17.3531 14.6327 17.6042C14.3533 17.6431 14.0201 17.6431 13.3538 17.6431L9.09357 17.6431C8.21621 17.6431 7.4075 17.3491 6.76056 16.8543"
                                                                stroke="#99A2AF"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_943_164230">
                                                                <rect
                                                                    width={19}
                                                                    height={19}
                                                                    fill="white"
                                                                    transform="translate(19.5 19) rotate(180)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <h3 className="typography-p4-strong text-[#99A2AF]">
                                                        Refine
                                                    </h3>
                                                </div>
                                                <div className="typography-p5-medium text-[#99A2AF] text-left">
                                                    Use Attio’s intuitive UI and ultra-customizable blocks to
                                                    craft your ideal workflows.
                                                </div>
                                            </button>
                                            <button className="relative flex flex-col flex-1 gap-8px overflow-hidden rounded-12px transition-all duration-[140ms] transform">
                                                <div className="flex flex-row items-center gap-8px">
                                                    <svg
                                                        width={19}
                                                        height={19}
                                                        viewBox="0 0 19 19"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.34197 17.1338C6.34197 14.2261 7.90938 11.6058 10.817 11.6058C7.90938 11.6058 6.34197 8.98541 6.34197 6.07776C6.34197 8.98541 4.77457 11.6058 1.86691 11.6058C4.77457 11.6058 6.34197 14.2261 6.34197 17.1338Z"
                                                            stroke="#232529"
                                                            strokeWidth="1.49286"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M13.7127 8.71014C13.7127 6.96555 15.3902 5.28804 17.1348 5.28804C15.3902 5.28804 13.7127 3.61053 13.7127 1.86593C13.7127 3.61053 12.0351 5.28804 10.2906 5.28804C12.0351 5.28804 13.7127 6.96555 13.7127 8.71014Z"
                                                            stroke="#232529"
                                                            strokeWidth="1.49286"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <h3 className="typography-p4-strong text-[#99A2AF] text-[#24292F]">
                                                        Work
                                                    </h3>
                                                </div>
                                                <div className="typography-p5-medium text-[#99A2AF] text-left text-[#57606A]">
                                                    Help your business scale with enriched data, custom
                                                    attributes, and integrations.
                                                </div>
                                                <div className="hidden absolute left-0 bottom-0 h-[3px] w-full bg-greyscale-light-06 transition transform duration-[140ms] opacity-0 " />
                                                <div className="hidden absolute left-0 bottom-0 h-[3px] w-full origin-left bg-brand-light-primary transition transform duration-[140ms] opacity-0 " />
                                            </button>
                                            <button className="relative flex flex-col flex-1 gap-8px overflow-hidden rounded-12px transition-all duration-[140ms] transform">
                                                <div className="flex flex-row items-center gap-8px">
                                                    <svg
                                                        width={20}
                                                        height={19}
                                                        viewBox="0 0 20 19"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            x="2.53516"
                                                            y="2.03516"
                                                            width="14.9286"
                                                            height="14.9286"
                                                            rx="3.39286"
                                                            stroke="#99A2AF"
                                                            strokeWidth="1.49286"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M6.55469 7.20264L6.55469 12.9444"
                                                            stroke="#99A2AF"
                                                            strokeWidth="1.49286"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M10 6.05469V12.9448"
                                                            stroke="#99A2AF"
                                                            strokeWidth="1.49286"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M13.4434 9.49951V12.9446"
                                                            stroke="#99A2AF"
                                                            strokeWidth="1.49286"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <h3 className="typography-p4-strong text-[#99A2AF]">
                                                        Report
                                                    </h3>
                                                </div>
                                                <div className="typography-p5-medium text-[#99A2AF] text-left">
                                                    Analyze, track and share reports built on real-time data
                                                    from across your workspace.
                                                </div>
                                            </button>
                                        </div>
                                        <div className="w-full max-w-[1204px]">
                                            <div className="w-0 h-0" />
                                            <link
                                                rel="preload"
                                                type="image/webp"
                                                href="/build/_assets/mockup-build-SIZIHVT5.webp"
                                                as="image"
                                            />
                                            <div className="w-0 h-0" />
                                            <link
                                                rel="preload"
                                                type="image/webp"
                                                href="/build/_assets/mockup-refine-QIDSIUNL.webp"
                                                as="image"
                                            />
                                            <div className="w-0 h-0" />
                                            <link
                                                rel="preload"
                                                type="image/webp"
                                                href="/build/_assets/mockup-work-HQEVF3XL.webp"
                                                as="image"
                                            />
                                            <div className="w-0 h-0" />
                                            <link
                                                rel="preload"
                                                type="image/webp"
                                                href="/build/_assets/mockup-report-JAXR6WI3.webp"
                                                as="image"
                                            />
                                            <div className="w-full relative max-w-full z-10 rounded-[16px] p-[2px]">
                                                <div className="relative isolate">
                                                    <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                                        <source
                                                            srcSet="https://attio.com/build/_assets/mockup-work-HQEVF3XL.webp"
                                                            media="(min-width:992px)"
                                                            type="image/webp"
                                                            height={1293}
                                                            width={2295}
                                                        />
                                                        <source
                                                            srcSet="https://attio.com/build/_assets/mockup-work-HQEVF3XL.webp"
                                                            media="(min-width:992px)"
                                                            height={1293}
                                                            width={2295}
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            srcSet="https://attio.com"
                                                            className="rounded-[25px] relative rounded-[14px] w-full"
                                                            alt="A card labelled Stripe is moved from a Screening column to the next column along in a Pipeline view."
                                                            height={889}
                                                            width={686}
                                                        />
                                                    </picture>
                                                    <picture className="relative inset-0 z-0 w-full h-full">
                                                        <source
                                                            srcSet="https://attio.com/build/_assets/mockup-work-HQEVF3XL.webp"
                                                            media="(min-width:992px)"
                                                            type="image/webp"
                                                            height={1293}
                                                            width={2295}
                                                        />
                                                        <source
                                                            srcSet="https://attio.com/build/_assets/mockup-work-HQEVF3XL.webp"
                                                            media="(min-width:992px)"
                                                            height={1293}
                                                            width={2295}
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            srcSet="https://attio.com"
                                                            className="rounded-[25px] relative rounded-[14px] w-full"
                                                            height={889}
                                                            width={686}
                                                        />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contents tablet:hidden">
                                    <div className="tablet:hidden w-full absolute">
                                        <div className="overflow-x-auto snap-x snap-mandatory w-full flex hide-scrollbar gap-12px p-4px">
                                            <div className="rounded-[20px] overflow-hidden rounded-12px max-w-[495px] pt-24px snap-center transition duration-200 flex-shrink-0 w-[75vw] flex flex-col gap-[24px] justify-between card-light-shadow bg-background-light-primary">
                                                <div className="flex flex-col gap-8px px-24px">
                                                    <div className="flex flex-row gap-8px items-center">
                                                        <svg
                                                            width={20}
                                                            height={19}
                                                            viewBox="0 0 20 19"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M10.0006 2.03633L7.96484 2.03633C6.06467 2.03634 5.11458 2.03634 4.3888 2.40613C3.7504 2.73142 3.23136 3.25046 2.90607 3.88887C2.53627 4.61464 2.53627 5.56473 2.53627 7.46491L2.53627 11.5363C2.53627 13.4365 2.53627 14.3865 2.90607 15.1123C3.23136 15.7507 3.7504 16.2698 4.38881 16.595C5.11458 16.9648 6.06467 16.9648 7.96485 16.9648L10.0006 16.9648M10.0006 2.03633L12.0363 2.03633C13.9364 2.03633 14.8865 2.03633 15.6123 2.40613C16.2507 2.73142 16.7698 3.25046 17.095 3.88887C17.4648 4.61464 17.4648 5.56473 17.4648 7.4649L17.4648 11.5363C17.4648 13.4364 17.4648 14.3865 17.095 15.1123C16.7698 15.7507 16.2507 16.2698 15.6123 16.595C14.8865 16.9648 13.9365 16.9648 12.0363 16.9648L10.0006 16.9648M10.0006 2.03633L10.0006 16.9648"
                                                                stroke="#232529"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M10 11.3667L2.53571 11.3667"
                                                                stroke="#232529"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M17.4648 7.63428L10.0006 7.63428"
                                                                stroke="#232529"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <h3 className="typography-p4-strong text-[#24292F]">
                                                            Build
                                                        </h3>
                                                    </div>
                                                    <div className="text-left typography-p5-medium text-[#57606A] max-w-[280px]">
                                                        Create your dream CRM with powerful, flexible templates
                                                        for every use case.
                                                    </div>
                                                </div>
                                                <div className="flex justify-center w-[495px] overflow-hidden mx-auto">
                                                    <div className="self-center mx-auto">
                                                        <div className="relative isolate">
                                                            <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                                <source
                                                                    srcSet="https://attio.com/build/_assets/mockup-build-SIZIHVT5.webp"
                                                                    media="(max-width:991px)"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet="https://attio.com/build/_assets/mockup-build-SIZIHVT5.webp"
                                                                    className=""
                                                                    alt="A modal shows different options for creating a list from a template, such as Sales Pipeline, Customer Success and Enterprise Sales"
                                                                />
                                                            </picture>
                                                            <picture className="relative inset-0 z-0 w-full h-full">
                                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                                <source
                                                                    srcSet="https://attio.com/build/_assets/mockup-build-SIZIHVT5.webp"
                                                                    type="image/webp"
                                                                    media="(max-width:991px)"
                                                                />
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet="https://attio.com/build/_assets/mockup-build-SIZIHVT5.webp"
                                                                    className=""
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-[20px] overflow-hidden rounded-12px max-w-[495px] pt-24px snap-center transition duration-200 flex-shrink-0 w-[75vw] flex flex-col gap-[24px] justify-between card-light-shadow bg-background-light-primary">
                                                <div className="flex flex-col gap-8px px-24px">
                                                    <div className="flex flex-row gap-8px items-center">
                                                        <svg
                                                            width={20}
                                                            height={19}
                                                            viewBox="0 0 20 19"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_943_164230)">
                                                                <path
                                                                    d="M14.75 9.46127L14.75 6.78574C14.75 4.88555 14.75 3.93546 14.3802 3.20968C14.0549 2.57127 13.5359 2.05223 12.8975 1.72694C12.1717 1.35714 11.2216 1.35714 9.32141 1.35714L7.06233 1.35714C5.37256 1.35714 4.52767 1.35714 3.86798 1.65137C3.10364 1.99227 2.49227 2.60365 2.15137 3.36799C1.85714 4.02767 1.85714 4.87256 1.85714 6.56234L1.85714 8.82143C1.85714 10.7216 1.85714 11.6717 2.22694 12.3975C2.55223 13.0359 3.07127 13.5549 3.70967 13.8802C4.43545 14.25 5.38554 14.25 7.28571 14.25L9.96122 14.25C11.2605 14.25 11.9101 14.25 12.4345 14.0744C13.444 13.7364 14.2363 12.944 14.5744 11.9345C14.75 11.4101 14.75 10.7605 14.75 9.46127Z"
                                                                    stroke="#99A2AF"
                                                                    strokeWidth="1.49286"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M17.464 6.10701C17.8901 6.67413 18.1426 7.37911 18.1426 8.14307L18.1426 12.8543C18.1426 13.5206 18.1426 13.8538 18.1036 14.1332C17.8526 15.936 16.4355 17.3531 14.6327 17.6042C14.3533 17.6431 14.0201 17.6431 13.3538 17.6431L9.09357 17.6431C8.21621 17.6431 7.4075 17.3491 6.76056 16.8543"
                                                                    stroke="#99A2AF"
                                                                    strokeWidth="1.49286"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_943_164230">
                                                                    <rect
                                                                        width={19}
                                                                        height={19}
                                                                        fill="white"
                                                                        transform="translate(19.5 19) rotate(180)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <h3 className="typography-p4-strong text-[#24292F]">
                                                            Refine
                                                        </h3>
                                                    </div>
                                                    <div className="text-left typography-p5-medium text-[#57606A] max-w-[280px]">
                                                        Use Attio’s intuitive UI and ultra-customizable building
                                                        blocks to craft your ideal workflows.
                                                    </div>
                                                </div>
                                                <div className="flex justify-center w-[495px] overflow-hidden mx-auto">
                                                    <div className="self-center mx-auto">
                                                        <div className="relative isolate">
                                                            <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                                <source
                                                                    srcSet="https://attio.com/build/_assets/mockup-refine-QIDSIUNL.webp"
                                                                    media="(max-width:991px)"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet="https://attio.com/build/_assets/mockup-refine-QIDSIUNL.webp"
                                                                    className=""
                                                                    alt="A popup allows creating a new attribute in a list, choosing from a list of name, email address, Instagram and others."
                                                                />
                                                            </picture>
                                                            <picture className="relative inset-0 z-0 w-full h-full">
                                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                                <source
                                                                    srcSet="https://attio.com/build/_assets/mockup-refine-QIDSIUNL.webp"
                                                                    type="image/webp"
                                                                    media="(max-width:991px)"
                                                                />
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet="https://attio.com/build/_assets/mockup-refine-QIDSIUNL.webp"
                                                                    className=""
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-[20px] overflow-hidden rounded-12px max-w-[495px] pt-24px snap-center transition duration-200 flex-shrink-0 w-[75vw] flex flex-col gap-[24px] justify-between card-light-shadow bg-background-light-primary">
                                                <div className="flex flex-col gap-8px px-24px">
                                                    <div className="flex flex-row gap-8px items-center">
                                                        <svg
                                                            width={19}
                                                            height={19}
                                                            viewBox="0 0 19 19"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M6.34197 17.1338C6.34197 14.2261 7.90938 11.6058 10.817 11.6058C7.90938 11.6058 6.34197 8.98541 6.34197 6.07776C6.34197 8.98541 4.77457 11.6058 1.86691 11.6058C4.77457 11.6058 6.34197 14.2261 6.34197 17.1338Z"
                                                                stroke="#99A2AF"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M13.7127 8.71014C13.7127 6.96555 15.3902 5.28804 17.1348 5.28804C15.3902 5.28804 13.7127 3.61053 13.7127 1.86593C13.7127 3.61053 12.0351 5.28804 10.2906 5.28804C12.0351 5.28804 13.7127 6.96555 13.7127 8.71014Z"
                                                                stroke="#99A2AF"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <h3 className="typography-p4-strong text-[#24292F]">
                                                            Work
                                                        </h3>
                                                    </div>
                                                    <div className="text-left typography-p5-medium text-[#57606A] max-w-[280px]">
                                                        Grow your business at scale with enriched data, custom
                                                        attributes, and powerful integrations.
                                                    </div>
                                                </div>
                                                <div className="flex justify-center w-[495px] overflow-hidden mx-auto">
                                                    <div className="self-center mx-auto">
                                                        <div className="relative isolate">
                                                            <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                                <source
                                                                    srcSet="https://attio.com/build/_assets/mockup-work-HQEVF3XL.webp"
                                                                    media="(max-width:991px)"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet="https://attio.com/build/_assets/mockup-work-HQEVF3XL.webp"
                                                                    className=""
                                                                    alt="A card labelled Stripe is moved from a Screening column to the next column along in a Pipeline view."
                                                                />
                                                            </picture>
                                                            <picture className="relative inset-0 z-0 w-full h-full">
                                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                                <source
                                                                    srcSet="https://attio.com/build/_assets/mockup-work-HQEVF3XL.webp"
                                                                    type="image/webp"
                                                                    media="(max-width:991px)"
                                                                />
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet="https://attio.com/build/_assets/mockup-work-HQEVF3XL.webp"
                                                                    className=""
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-[20px] overflow-hidden rounded-12px max-w-[495px] pt-24px snap-center transition duration-200 flex-shrink-0 w-[75vw] flex flex-col gap-[24px] justify-between card-light-shadow bg-background-light-primary">
                                                <div className="flex flex-col gap-8px px-24px">
                                                    <div className="flex flex-row gap-8px items-center">
                                                        <svg
                                                            width={20}
                                                            height={19}
                                                            viewBox="0 0 20 19"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect
                                                                x="2.53516"
                                                                y="2.03516"
                                                                width="14.9286"
                                                                height="14.9286"
                                                                rx="3.39286"
                                                                stroke="#99A2AF"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M6.55469 7.20264L6.55469 12.9444"
                                                                stroke="#99A2AF"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M10 6.05469V12.9448"
                                                                stroke="#99A2AF"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M13.4434 9.49951V12.9446"
                                                                stroke="#99A2AF"
                                                                strokeWidth="1.49286"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <h3 className="typography-p4-strong text-[#24292F]">
                                                            Report
                                                        </h3>
                                                    </div>
                                                    <div className="text-left typography-p5-medium text-[#57606A] max-w-[280px]">
                                                        Analyze, track and share reports built on real-time data
                                                        from across your workspace.
                                                    </div>
                                                </div>
                                                <div className="flex justify-center w-[495px] overflow-hidden mx-auto">
                                                    <div className="self-center mx-auto">
                                                        <div className="relative isolate">
                                                            <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                                <source
                                                                    srcSet="https://attio.com/build/_assets/mockup-report-JAXR6WI3.webp"
                                                                    media="(max-width:991px)"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet="https://attio.com/build/_assets/mockup-report-JAXR6WI3.webp"
                                                                    className=""
                                                                    alt="A card labelled Stripe is moved from a Screening column to the next column along in a Pipeline view."
                                                                />
                                                            </picture>
                                                            <picture className="relative inset-0 z-0 w-full h-full">
                                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                                <source
                                                                    srcSet="https://attio.com/build/_assets/mockup-report-JAXR6WI3.webp"
                                                                    type="image/webp"
                                                                    media="(max-width:991px)"
                                                                />
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet="https://attio.com/build/_assets/mockup-report-JAXR6WI3.webp"
                                                                    className=""
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tablet:hidden flex flex-col items-center w-full pt-[22px] pb-24px">
                                            <div className="flex flex-row gap-8px ">
                                                <div className="rounded-2px w-[22px] h-4px bg-[#99A2AF]" />
                                                <div className="rounded-2px w-[22px] h-4px bg-[#E4E7EB]" />
                                                <div className="rounded-2px w-[22px] h-4px bg-[#E4E7EB]" />
                                                <div className="rounded-2px w-[22px] h-4px bg-[#E4E7EB]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[420px]" />
                                </div>
                                <div className="pt-40px pb-60px px-24px tablet:pt-[96px] tablet:pb-[120px] tablet:px-0">
                                    <div className="tablet:grid grid-cols-10 gap-x-24px gap-y-[50px]">
                                        <img
                                            className="h-[34px] tablet:h-44px col-start-2 col-end-5"
                                            src="https://attio.com/build/_assets/pallet-5SGACX5S.webp"
                                            alt="Pallet"
                                        />
                                        <div className="mt-24px tablet:mt-0 col-start-5 col-end-11">
                                            <p className="max-w-[530px] typography-p2-strong tablet:typography-h5 tablet:!leading-120 text-typography-light-tertiary">
                                                “My team loves Attio’s reporting system because it’s so
                                                dynamic. We can splice our data in so many different ways and
                                                combinations.”
                                            </p>
                                        </div>
                                        <div className="mt-24px tablet:mt-0 order-2 col-start-5 col-end-11 flex items-center gap-[18px]">
                                            <img
                                                className="w-60px h-60px rounded-12px"
                                                src="https://attio.com/build/_assets/pallet-avatar-APQMHBLM.webp"
                                                alt=""
                                            />
                                            <div>
                                                <p className="typography-p5-strong text-typography-light-secondary">
                                                    DeGrasse Schrader
                                                </p>
                                                <p className="typography-p5-medium text-typography-light-tertiary">
                                                    Chief of Staff, Pallet
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-[30px] tablet:mt-0 col-start-2 col-end-5 self-end tablet:mb-[6px]">
                                            <a
                                                className="typography-p5-strong text-attio-blue-main tablet:text-typography-light-tertiary group w-fit flex items-center gap-4px rounded-8px focus:shadow-[0px_0px_0px_2px_#FAFAFA,_0px_0px_0px_5px_rgba(38,_109,_240,_0.5)] focus:bg-[#FAFAFA]"
                                                href="/customers/pallet"
                                            >
                                                Read the full story
                                                <svg
                                                    className="mt-[2px] opacity-0 -translate-x-[3px] group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-x-0 group-focus:translate-x-0 transition-all"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7.125 5.25L10.875 9L7.125 12.75"
                                                        stroke="currentColor"
                                                        strokeWidth="1.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background-light-primary flex items-center justify-center pl-48px px-24px tablet:px-[142px]">
                    <div className="pb-[64px] tablet:pb-[120px] relative w-[100%] phablet:max-w-[720px] tablet:max-w-[1155px] flex items-stretch">
                        <div className="absolute top-0 bottom-0 right-[calc(100%+7px)] tablet:right-full">
                            <div className="h-full flex flex-col items-center">
                                <svg
                                    className="shrink-0 w-[34px] h-[34px] tablet:w-[49px] tablet:h-[49px]"
                                    width={34}
                                    height={34}
                                    viewBox="0 0 34 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={17} cy="17.5999" r={17} fill="white" />
                                    <g clipPath="url(#clip0_102_199656)">
                                        <path
                                            d="M26.1938 9.94623L18.2162 6.13349C17.37 5.7248 16.3723 5.7801 15.5762 6.28039L7.34426 11.4642C6.54817 11.9645 6.06616 12.8415 6.07025 13.7812L6.10058 22.5968C6.10475 23.6388 6.70236 24.5884 7.64071 25.043L15.6183 28.8558C16.4645 29.2645 17.4622 29.2092 18.2583 28.7089L26.4902 23.525C27.2863 23.0247 27.7683 22.1478 27.7642 21.2081L27.7488 16.4685L27.7356 12.3925C27.7315 11.3504 27.1338 10.4009 26.1972 9.94793L26.1938 9.94623Z"
                                            fill="#FAFAFA"
                                            stroke="#383E47"
                                            strokeMiterlimit={10}
                                        />
                                        <g opacity="0.8">
                                            <path
                                                d="M14.9378 25.7565L9.24959 23.037C8.66805 22.7552 8.28935 22.154 8.28733 21.5061L8.26562 15.1409"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M14.9378 25.7565L9.24959 23.037C8.66805 22.7552 8.28935 22.154 8.28733 21.5061L8.26562 15.1409"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M10.4512 14.7192L15.3438 17.0859C15.9223 17.3723 16.2979 17.972 16.2999 18.6184L16.3195 24.224"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M10.4512 14.7192L15.3438 17.0859C15.9223 17.3723 16.2979 17.972 16.2999 18.6184L16.3195 24.224"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M8.27807 17.7716L8.26801 14.6092C8.2678 14.3255 8.46457 14.1703 8.54979 14.116C8.63501 14.0632 8.86126 13.9515 9.11714 14.0753L10.7377 14.8585"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M8.27807 17.7716L8.26801 14.6092C8.2678 14.3255 8.46457 14.1703 8.54979 14.116C8.63501 14.0632 8.86126 13.9515 9.11714 14.0753L10.7377 14.8585"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M16.3106 22.0647L16.3224 25.5294C16.3226 25.8115 16.1383 25.9589 16.0593 26.0086C15.9802 26.0583 15.7679 26.1623 15.5136 26.0385L11.9313 24.3296"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M16.3106 22.0647L16.3224 25.5294C16.3226 25.8115 16.1383 25.9589 16.0593 26.0086C15.9802 26.0583 15.7679 26.1623 15.5136 26.0385L11.9313 24.3296"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_102_199656">
                                            <rect
                                                width="26.0667"
                                                height="26.0667"
                                                fill="white"
                                                transform="translate(3.9668 4.56665)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="flex-1 w-[1px] line-gradient" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 max-w-[100%]">
                            <div className="pl-24px tablet:pl-40px">
                                <div className="typography-h4-strong tablet:typography-h2-strong text-typography-light-primary phone:whitespace-pre-line">
                                    Real-time relationships need real-time data.
                                </div>
                                <div className="mt-16px max-w-[480px] typography-p4-medium tablet:typography-p2-medium text-typography-light-secondary phone:whitespace-pre-line">
                                    Your customers are always connected - why should your CRM be any
                                    different?
                                </div>
                            </div>
                            <div className="mt-60px tablet:mt-80px flex flex-col gap-24px relative min-h-[380px]">
                                <div className="rounded-[20px] overflow-hidden w-[100%] h-[503px] tablet:max-w-[1152px] flex flex-col tablet:flex-row pt-24px tablet:pt-[40px] pl-24px tablet:pl-[40px] tablet:pr-0 tablet:gap-[72px] card-light-shadow bg-background-light-primary">
                                    <div className="w-full max-w-[273px] phablet:max-w-[380px]">
                                        <span
                                            role="heading"
                                            aria-level={3}
                                            className="typography-p5-strong phablet:typography-p4-strong text-typography-light-secondary"
                                        >
                                            Instant visibility into all your relationships.
                                        </span>{" "}
                                        <span className="typography-p5-medium phablet:typography-p4-medium text-typography-light-tertiary max-w-[300px]">
                                            Real-time global database of every contact &amp; company your
                                            business interacts with.
                                        </span>
                                    </div>
                                    <div className="relative overflow-hidden mt-[48px] tablet:ml-auto tablet:mt-auto">
                                        <div
                                            className="absolute top-[0px] left-[0px] z-[0]"
                                            style={{ transform: "translateX(30px) translateZ(0px)" }}
                                        >
                                            <img
                                                loading="lazy"
                                                alt=""
                                                src="https://attio.com/build/_assets/instant-visibility-scroll-D3XNUTMR.webp"
                                                className="object-cover h-[441px] object-left"
                                            />
                                        </div>
                                        <img
                                            src="https://attio.com/build/_assets/instant-visibility-frame-6O6L4EIX.webp"
                                            loading="lazy"
                                            alt=""
                                            className="relative z-1 object-cover h-[441px] object-left"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col tablet:flex-row gap-24px">
                                    <div className="rounded-[20px] overflow-hidden w-[100%] tablet:max-w-[566px] flex-1 pt-[24px] tablet:pt-[40px] pl-[24px] tablet:pl-[40px] max-h-[540px] flex flex-col items-end card-light-shadow bg-background-light-primary">
                                        <span className="inline-block max-w-[420px] pb-[48px] pr-[24px] tablet:pb-60px self-start">
                                            <span
                                                role="heading"
                                                aria-level={3}
                                                className="typography-p5-strong phablet:typography-p4-strong text-typography-light-secondary"
                                            >
                                                Powerful relationship intel.
                                            </span>{" "}
                                            <span className="typography-p5-medium phablet:typography-p4-medium text-typography-light-tertiary">
                                                See all your team’s conversations with a contact or company
                                                and create enriched timelines for every interaction.
                                            </span>
                                        </span>
                                        <div
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                transition: "all 500ms ease 0s"
                                            }}
                                            className="relative left-0"
                                        >
                                            <svg
                                                width={196}
                                                height={267}
                                                viewBox="0 0 196 267"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute z-[3] top-[98px] left-[330px]"
                                            >
                                                <rect
                                                    width={1}
                                                    height={267}
                                                    fill="#E7E7E7"
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translateX(0px)",
                                                        transition: "all 400ms ease 700ms"
                                                    }}
                                                />
                                                <path
                                                    d="M27 26.5L30 29.5L33 26.5"
                                                    stroke="#5E5E5E"
                                                    strokeWidth="1.1"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translateX(0px)",
                                                        transition: "all 400ms ease 800ms"
                                                    }}
                                                />
                                                <path
                                                    d="M55.9432 26.1477H54.1705C54.1023 25.7689 53.9754 25.4356 53.7898 25.1477C53.6042 24.8598 53.3769 24.6155 53.108 24.4148C52.839 24.214 52.5379 24.0625 52.2045 23.9602C51.875 23.858 51.5246 23.8068 51.1534 23.8068C50.483 23.8068 49.8826 23.9754 49.3523 24.3125C48.8258 24.6496 48.4091 25.1439 48.1023 25.7955C47.7992 26.447 47.6477 27.2424 47.6477 28.1818C47.6477 29.1288 47.7992 29.928 48.1023 30.5795C48.4091 31.2311 48.8277 31.7235 49.358 32.0568C49.8883 32.3902 50.4848 32.5568 51.1477 32.5568C51.5152 32.5568 51.8636 32.5076 52.1932 32.4091C52.5265 32.3068 52.8277 32.1572 53.0966 31.9602C53.3655 31.7633 53.5928 31.5227 53.7784 31.2386C53.9678 30.9508 54.0985 30.6212 54.1705 30.25L55.9432 30.2557C55.8485 30.8277 55.6648 31.3542 55.392 31.8352C55.1231 32.3125 54.7765 32.7254 54.3523 33.0739C53.9318 33.4186 53.4508 33.6856 52.9091 33.875C52.3674 34.0644 51.7765 34.1591 51.1364 34.1591C50.1288 34.1591 49.2311 33.9205 48.4432 33.4432C47.6553 32.9621 47.0341 32.2746 46.5795 31.3807C46.1288 30.4867 45.9034 29.4205 45.9034 28.1818C45.9034 26.9394 46.1307 25.8731 46.5852 24.983C47.0398 24.089 47.661 23.4034 48.4489 22.9261C49.2367 22.4451 50.1326 22.2045 51.1364 22.2045C51.7538 22.2045 52.3295 22.2936 52.8636 22.4716C53.4015 22.6458 53.8845 22.9034 54.3125 23.2443C54.7405 23.5814 55.0947 23.9943 55.375 24.483C55.6553 24.9678 55.8447 25.5227 55.9432 26.1477ZM61.2638 34.1761C60.4456 34.1761 59.7316 33.9886 59.1218 33.6136C58.5119 33.2386 58.0384 32.714 57.7013 32.0398C57.3642 31.3655 57.1956 30.5777 57.1956 29.6761C57.1956 28.7708 57.3642 27.9792 57.7013 27.3011C58.0384 26.6231 58.5119 26.0966 59.1218 25.7216C59.7316 25.3466 60.4456 25.1591 61.2638 25.1591C62.082 25.1591 62.796 25.3466 63.4059 25.7216C64.0157 26.0966 64.4892 26.6231 64.8263 27.3011C65.1634 27.9792 65.332 28.7708 65.332 29.6761C65.332 30.5777 65.1634 31.3655 64.8263 32.0398C64.4892 32.714 64.0157 33.2386 63.4059 33.6136C62.796 33.9886 62.082 34.1761 61.2638 34.1761ZM61.2695 32.75C61.7998 32.75 62.2392 32.6098 62.5877 32.3295C62.9362 32.0492 63.1937 31.6761 63.3604 31.2102C63.5309 30.7443 63.6161 30.2311 63.6161 29.6705C63.6161 29.1136 63.5309 28.6023 63.3604 28.1364C63.1937 27.6667 62.9362 27.2898 62.5877 27.0057C62.2392 26.7216 61.7998 26.5795 61.2695 26.5795C60.7354 26.5795 60.2922 26.7216 59.9399 27.0057C59.5915 27.2898 59.332 27.6667 59.1615 28.1364C58.9949 28.6023 58.9115 29.1136 58.9115 29.6705C58.9115 30.2311 58.9949 30.7443 59.1615 31.2102C59.332 31.6761 59.5915 32.0492 59.9399 32.3295C60.2922 32.6098 60.7354 32.75 61.2695 32.75ZM68.6072 28.8182V34H66.9083V25.2727H68.539V26.6932H68.6469C68.8477 26.2311 69.1621 25.8598 69.5901 25.5795C70.0219 25.2992 70.5655 25.1591 71.2208 25.1591C71.8155 25.1591 72.3363 25.2841 72.7833 25.5341C73.2303 25.7803 73.5769 26.1477 73.8231 26.6364C74.0693 27.125 74.1924 27.7292 74.1924 28.4489V34H72.4935V28.6534C72.4935 28.0208 72.3288 27.5265 71.9992 27.1705C71.6697 26.8106 71.217 26.6307 70.6413 26.6307C70.2473 26.6307 69.8969 26.7159 69.5901 26.8864C69.2871 27.0568 69.0466 27.3068 68.8685 27.6364C68.6943 27.9621 68.6072 28.3561 68.6072 28.8182ZM80.2247 25.2727V26.6364H75.4576V25.2727H80.2247ZM76.736 23.1818H78.4349V31.4375C78.4349 31.767 78.4841 32.0152 78.5826 32.1818C78.6811 32.3447 78.808 32.4564 78.9633 32.517C79.1224 32.5739 79.2947 32.6023 79.4803 32.6023C79.6167 32.6023 79.736 32.5928 79.8383 32.5739C79.9406 32.5549 80.0201 32.5398 80.0769 32.5284L80.3838 33.9318C80.2853 33.9697 80.1451 34.0076 79.9633 34.0455C79.7815 34.0871 79.5542 34.1098 79.2815 34.1136C78.8345 34.1212 78.4178 34.0417 78.0315 33.875C77.6451 33.7083 77.3326 33.4508 77.094 33.1023C76.8553 32.7538 76.736 32.3163 76.736 31.7898V23.1818ZM84.3237 34.1932C83.7707 34.1932 83.2707 34.0909 82.8237 33.8864C82.3767 33.678 82.0226 33.3769 81.7612 32.983C81.5036 32.589 81.3748 32.1061 81.3748 31.5341C81.3748 31.0417 81.4695 30.6364 81.6589 30.3182C81.8483 30 82.104 29.7481 82.426 29.5625C82.7479 29.3769 83.1078 29.2367 83.5055 29.142C83.9032 29.0473 84.3085 28.9754 84.7214 28.9261C85.2441 28.8655 85.6684 28.8163 85.9941 28.7784C86.3199 28.7367 86.5566 28.6705 86.7044 28.5795C86.8521 28.4886 86.926 28.3409 86.926 28.1364V28.0966C86.926 27.6004 86.7858 27.2159 86.5055 26.9432C86.229 26.6705 85.8161 26.5341 85.2669 26.5341C84.6949 26.5341 84.2441 26.661 83.9146 26.9148C83.5888 27.1648 83.3635 27.4432 83.2385 27.75L81.6419 27.3864C81.8313 26.8561 82.1078 26.428 82.4714 26.1023C82.8388 25.7727 83.2612 25.5341 83.7385 25.3864C84.2157 25.2348 84.7176 25.1591 85.2441 25.1591C85.5926 25.1591 85.962 25.2008 86.3521 25.2841C86.746 25.3636 87.1135 25.5114 87.4544 25.7273C87.7991 25.9432 88.0813 26.2519 88.301 26.6534C88.5207 27.0511 88.6305 27.5682 88.6305 28.2045V34H86.9714V32.8068H86.9032C86.7934 33.0265 86.6286 33.2424 86.4089 33.4545C86.1892 33.6667 85.907 33.8428 85.5623 33.983C85.2176 34.1231 84.8048 34.1932 84.3237 34.1932ZM84.693 32.8295C85.1627 32.8295 85.5642 32.7367 85.8976 32.5511C86.2347 32.3655 86.4904 32.1231 86.6646 31.8239C86.8426 31.5208 86.9316 31.197 86.9316 30.8523V29.7273C86.871 29.7879 86.7536 29.8447 86.5794 29.8977C86.4089 29.947 86.2138 29.9905 85.9941 30.0284C85.7745 30.0625 85.5604 30.0947 85.3521 30.125C85.1438 30.1515 84.9695 30.1742 84.8294 30.1932C84.4998 30.2348 84.1987 30.3049 83.926 30.4034C83.657 30.5019 83.4411 30.6439 83.2782 30.8295C83.1191 31.0114 83.0396 31.2538 83.0396 31.5568C83.0396 31.9773 83.1949 32.2955 83.5055 32.5114C83.8161 32.7235 84.212 32.8295 84.693 32.8295ZM94.2494 34.1761C93.4047 34.1761 92.6775 33.9848 92.0676 33.6023C91.4616 33.2159 90.9956 32.6837 90.6699 32.0057C90.3441 31.3277 90.1813 30.5511 90.1813 29.6761C90.1813 28.7898 90.3479 28.0076 90.6813 27.3295C91.0146 26.6477 91.4843 26.1155 92.0903 25.733C92.6964 25.3504 93.4104 25.1591 94.2324 25.1591C94.8953 25.1591 95.4862 25.2822 96.0051 25.5284C96.5241 25.7708 96.9426 26.1117 97.2608 26.5511C97.5828 26.9905 97.7741 27.5038 97.8347 28.0909H96.1813C96.0903 27.6818 95.882 27.3295 95.5563 27.0341C95.2343 26.7386 94.8025 26.5909 94.2608 26.5909C93.7873 26.5909 93.3725 26.7159 93.0165 26.9659C92.6642 27.2121 92.3896 27.5644 92.1926 28.0227C91.9956 28.4773 91.8972 29.0152 91.8972 29.6364C91.8972 30.2727 91.9938 30.822 92.1869 31.2841C92.3801 31.7462 92.6528 32.1042 93.0051 32.358C93.3612 32.6117 93.7797 32.7386 94.2608 32.7386C94.5828 32.7386 94.8744 32.6799 95.1358 32.5625C95.4009 32.4413 95.6225 32.2689 95.8006 32.0455C95.9824 31.822 96.1093 31.553 96.1813 31.2386H97.8347C97.7741 31.803 97.5903 32.3068 97.2835 32.75C96.9767 33.1932 96.5657 33.5417 96.0506 33.7955C95.5392 34.0492 94.9388 34.1761 94.2494 34.1761ZM103.405 25.2727V26.6364H98.6382V25.2727H103.405ZM99.9166 23.1818H101.616V31.4375C101.616 31.767 101.665 32.0152 101.763 32.1818C101.862 32.3447 101.989 32.4564 102.144 32.517C102.303 32.5739 102.475 32.6023 102.661 32.6023C102.797 32.6023 102.917 32.5928 103.019 32.5739C103.121 32.5549 103.201 32.5398 103.258 32.5284L103.564 33.9318C103.466 33.9697 103.326 34.0076 103.144 34.0455C102.962 34.0871 102.735 34.1098 102.462 34.1136C102.015 34.1212 101.598 34.0417 101.212 33.875C100.826 33.7083 100.513 33.4508 100.275 33.1023C100.036 32.7538 99.9166 32.3163 99.9166 31.7898V23.1818ZM112.146 34.1705C111.441 34.1705 110.813 33.9905 110.26 33.6307C109.71 33.267 109.279 32.75 108.964 32.0795C108.654 31.4053 108.498 30.5966 108.498 29.6534C108.498 28.7102 108.655 27.9034 108.97 27.233C109.288 26.5625 109.724 26.0492 110.277 25.6932C110.83 25.3371 111.457 25.1591 112.157 25.1591C112.699 25.1591 113.135 25.25 113.464 25.4318C113.797 25.6098 114.055 25.8182 114.237 26.0568C114.422 26.2955 114.566 26.5057 114.669 26.6875H114.771V22.3636H116.47V34H114.811V32.642H114.669C114.566 32.8277 114.419 33.0398 114.226 33.2784C114.036 33.517 113.775 33.7254 113.441 33.9034C113.108 34.0814 112.676 34.1705 112.146 34.1705ZM112.521 32.7216C113.01 32.7216 113.422 32.5928 113.76 32.3352C114.101 32.0739 114.358 31.7121 114.532 31.25C114.71 30.7879 114.799 30.25 114.799 29.6364C114.799 29.0303 114.712 28.5 114.538 28.0455C114.364 27.5909 114.108 27.2367 113.771 26.983C113.434 26.7292 113.017 26.6023 112.521 26.6023C112.01 26.6023 111.583 26.7348 111.243 27C110.902 27.2652 110.644 27.6269 110.47 28.0852C110.299 28.5436 110.214 29.0606 110.214 29.6364C110.214 30.2197 110.301 30.7443 110.476 31.2102C110.65 31.6761 110.907 32.0455 111.248 32.3182C111.593 32.5871 112.017 32.7216 112.521 32.7216ZM122.336 34.1761C121.476 34.1761 120.736 33.9924 120.114 33.625C119.497 33.2538 119.02 32.733 118.683 32.0625C118.349 31.3883 118.183 30.5985 118.183 29.6932C118.183 28.7992 118.349 28.0114 118.683 27.3295C119.02 26.6477 119.489 26.1155 120.092 25.733C120.698 25.3504 121.406 25.1591 122.217 25.1591C122.709 25.1591 123.186 25.2405 123.648 25.4034C124.111 25.5663 124.525 25.822 124.893 26.1705C125.26 26.5189 125.55 26.9716 125.762 27.5284C125.974 28.0814 126.08 28.7538 126.08 29.5455V30.1477H119.143V28.875H124.415C124.415 28.428 124.325 28.0322 124.143 27.6875C123.961 27.339 123.705 27.0644 123.376 26.8636C123.05 26.6629 122.667 26.5625 122.228 26.5625C121.751 26.5625 121.334 26.6799 120.978 26.9148C120.626 27.1458 120.353 27.4489 120.16 27.8239C119.97 28.1951 119.876 28.5985 119.876 29.0341V30.0284C119.876 30.6117 119.978 31.108 120.183 31.517C120.391 31.9261 120.681 32.2386 121.052 32.4545C121.423 32.6667 121.857 32.7727 122.353 32.7727C122.675 32.7727 122.968 32.7273 123.234 32.6364C123.499 32.5417 123.728 32.4015 123.921 32.2159C124.114 32.0303 124.262 31.8011 124.364 31.5284L125.972 31.8182C125.843 32.2917 125.612 32.7064 125.279 33.0625C124.95 33.4148 124.535 33.6894 124.035 33.8864C123.539 34.0795 122.972 34.1761 122.336 34.1761ZM131.719 25.2727V26.6364H126.952V25.2727H131.719ZM128.23 23.1818H129.929V31.4375C129.929 31.767 129.979 32.0152 130.077 32.1818C130.175 32.3447 130.302 32.4564 130.458 32.517C130.617 32.5739 130.789 32.6023 130.975 32.6023C131.111 32.6023 131.23 32.5928 131.333 32.5739C131.435 32.5549 131.514 32.5398 131.571 32.5284L131.878 33.9318C131.78 33.9697 131.639 34.0076 131.458 34.0455C131.276 34.0871 131.049 34.1098 130.776 34.1136C130.329 34.1212 129.912 34.0417 129.526 33.875C129.139 33.7083 128.827 33.4508 128.588 33.1023C128.35 32.7538 128.23 32.3163 128.23 31.7898V23.1818ZM135.818 34.1932C135.265 34.1932 134.765 34.0909 134.318 33.8864C133.871 33.678 133.517 33.3769 133.256 32.983C132.998 32.589 132.869 32.1061 132.869 31.5341C132.869 31.0417 132.964 30.6364 133.153 30.3182C133.343 30 133.598 29.7481 133.92 29.5625C134.242 29.3769 134.602 29.2367 135 29.142C135.398 29.0473 135.803 28.9754 136.216 28.9261C136.739 28.8655 137.163 28.8163 137.489 28.7784C137.814 28.7367 138.051 28.6705 138.199 28.5795C138.346 28.4886 138.42 28.3409 138.42 28.1364V28.0966C138.42 27.6004 138.28 27.2159 138 26.9432C137.723 26.6705 137.31 26.5341 136.761 26.5341C136.189 26.5341 135.739 26.661 135.409 26.9148C135.083 27.1648 134.858 27.4432 134.733 27.75L133.136 27.3864C133.326 26.8561 133.602 26.428 133.966 26.1023C134.333 25.7727 134.756 25.5341 135.233 25.3864C135.71 25.2348 136.212 25.1591 136.739 25.1591C137.087 25.1591 137.456 25.2008 137.846 25.2841C138.24 25.3636 138.608 25.5114 138.949 25.7273C139.293 25.9432 139.576 26.2519 139.795 26.6534C140.015 27.0511 140.125 27.5682 140.125 28.2045V34H138.466V32.8068H138.398C138.288 33.0265 138.123 33.2424 137.903 33.4545C137.684 33.6667 137.401 33.8428 137.057 33.983C136.712 34.1231 136.299 34.1932 135.818 34.1932ZM136.187 32.8295C136.657 32.8295 137.059 32.7367 137.392 32.5511C137.729 32.3655 137.985 32.1231 138.159 31.8239C138.337 31.5208 138.426 31.197 138.426 30.8523V29.7273C138.365 29.7879 138.248 29.8447 138.074 29.8977C137.903 29.947 137.708 29.9905 137.489 30.0284C137.269 30.0625 137.055 30.0947 136.846 30.125C136.638 30.1515 136.464 30.1742 136.324 30.1932C135.994 30.2348 135.693 30.3049 135.42 30.4034C135.151 30.5019 134.935 30.6439 134.773 30.8295C134.614 31.0114 134.534 31.2538 134.534 31.5568C134.534 31.9773 134.689 32.2955 135 32.5114C135.31 32.7235 135.706 32.8295 136.187 32.8295ZM142.068 34V25.2727H143.767V34H142.068ZM142.926 23.9261C142.63 23.9261 142.376 23.8277 142.164 23.6307C141.956 23.4299 141.852 23.1913 141.852 22.9148C141.852 22.6345 141.956 22.3958 142.164 22.1989C142.376 21.9981 142.63 21.8977 142.926 21.8977C143.221 21.8977 143.473 21.9981 143.681 22.1989C143.893 22.3958 143.999 22.6345 143.999 22.9148C143.999 23.1913 143.893 23.4299 143.681 23.6307C143.473 23.8277 143.221 23.9261 142.926 23.9261ZM147.431 22.3636V34H145.732V22.3636H147.431ZM155.936 27.4034L154.396 27.6761C154.332 27.4792 154.23 27.2917 154.09 27.1136C153.953 26.9356 153.768 26.7898 153.533 26.6761C153.298 26.5625 153.004 26.5057 152.652 26.5057C152.171 26.5057 151.77 26.6136 151.448 26.8295C151.126 27.0417 150.965 27.3163 150.965 27.6534C150.965 27.9451 151.073 28.1799 151.288 28.358C151.504 28.536 151.853 28.6818 152.334 28.7955L153.72 29.1136C154.523 29.2992 155.122 29.5852 155.516 29.9716C155.91 30.358 156.107 30.8598 156.107 31.4773C156.107 32 155.955 32.4659 155.652 32.875C155.353 33.2803 154.934 33.5985 154.396 33.8295C153.862 34.0606 153.243 34.1761 152.538 34.1761C151.561 34.1761 150.764 33.9678 150.146 33.5511C149.529 33.1307 149.15 32.5341 149.01 31.7614L150.652 31.5114C150.754 31.9394 150.965 32.2633 151.283 32.483C151.601 32.6989 152.016 32.8068 152.527 32.8068C153.084 32.8068 153.529 32.6913 153.862 32.4602C154.196 32.2254 154.362 31.9394 154.362 31.6023C154.362 31.3295 154.26 31.1004 154.056 30.9148C153.855 30.7292 153.546 30.589 153.129 30.4943L151.652 30.1705C150.838 29.9848 150.235 29.6894 149.845 29.2841C149.459 28.8788 149.266 28.3655 149.266 27.7443C149.266 27.2292 149.41 26.7784 149.698 26.392C149.985 26.0057 150.383 25.7045 150.891 25.4886C151.398 25.2689 151.98 25.1591 152.635 25.1591C153.578 25.1591 154.321 25.3636 154.862 25.7727C155.404 26.178 155.762 26.7216 155.936 27.4034Z"
                                                    fill="#111111"
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translateX(0px)",
                                                        transition: "all 400ms ease 800ms"
                                                    }}
                                                />
                                                <g
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translateX(0px)",
                                                        transition: "all 400ms ease 1000ms"
                                                    }}
                                                >
                                                    <rect
                                                        x={24}
                                                        y={59}
                                                        width={12}
                                                        height={10}
                                                        rx="2.5"
                                                        stroke="#969696"
                                                        strokeWidth="1.1"
                                                    />
                                                    <path
                                                        d="M26.1016 61.6016L26.6115 62.1365C28.1653 63.7663 28.9423 64.5812 29.9262 64.5921C30.9102 64.6031 31.705 63.8056 33.2946 62.2106L33.9016 61.6016"
                                                        stroke="#969696"
                                                        strokeWidth="1.1"
                                                        strokeLinecap="round"
                                                    />
                                                    <path
                                                        d="M56.7614 63.0526L55.6065 63.2571C55.5582 63.1094 55.4815 62.9687 55.3764 62.8352C55.2741 62.7017 55.1349 62.5923 54.9588 62.5071C54.7827 62.4219 54.5625 62.3793 54.2983 62.3793C53.9375 62.3793 53.6364 62.4602 53.3949 62.6222C53.1534 62.7812 53.0327 62.9872 53.0327 63.2401C53.0327 63.4588 53.1136 63.6349 53.2756 63.7685C53.4375 63.902 53.6989 64.0114 54.0597 64.0966L55.0994 64.3352C55.7017 64.4744 56.1506 64.6889 56.446 64.9787C56.7415 65.2685 56.8892 65.6449 56.8892 66.108C56.8892 66.5 56.7756 66.8494 56.5483 67.1562C56.3239 67.4602 56.0099 67.6989 55.6065 67.8722C55.206 68.0455 54.7415 68.1321 54.2131 68.1321C53.4801 68.1321 52.8821 67.9759 52.419 67.6634C51.956 67.348 51.6719 66.9006 51.5668 66.321L52.7983 66.1335C52.875 66.4545 53.0327 66.6974 53.2713 66.8622C53.5099 67.0241 53.821 67.1051 54.2045 67.1051C54.6222 67.1051 54.956 67.0185 55.206 66.8452C55.456 66.669 55.581 66.4545 55.581 66.2017C55.581 65.9972 55.5043 65.8253 55.3509 65.6861C55.2003 65.5469 54.9688 65.4418 54.6562 65.3707L53.5483 65.1278C52.9375 64.9886 52.4858 64.767 52.1932 64.4631C51.9034 64.1591 51.7585 63.7741 51.7585 63.3082C51.7585 62.9219 51.8665 62.5838 52.0824 62.294C52.2983 62.0043 52.5966 61.7784 52.9773 61.6165C53.358 61.4517 53.794 61.3693 54.2855 61.3693C54.9929 61.3693 55.5497 61.5227 55.956 61.8295C56.3622 62.1335 56.6307 62.5412 56.7614 63.0526ZM62.4364 65.2855V61.4545H63.7148V68H62.462V66.8665H62.3938C62.2433 67.2159 62.0018 67.5071 61.6694 67.7401C61.3398 67.9702 60.9293 68.0852 60.4379 68.0852C60.0174 68.0852 59.6452 67.9929 59.3214 67.8082C59.0004 67.6207 58.7475 67.3438 58.5629 66.9773C58.381 66.6108 58.2901 66.1577 58.2901 65.6179V61.4545H59.5643V65.4645C59.5643 65.9105 59.6879 66.2656 59.935 66.5298C60.1822 66.794 60.5032 66.9261 60.8981 66.9261C61.1367 66.9261 61.3739 66.8665 61.6097 66.7472C61.8484 66.6278 62.0458 66.4474 62.2021 66.206C62.3612 65.9645 62.4393 65.6577 62.4364 65.2855ZM65.2905 68V67.1264L68.8359 62.6222V62.5625H65.4055V61.4545H70.4254V62.3835L67.0163 66.8324V66.892H70.5447V68H65.2905ZM73.9528 68.1449C73.538 68.1449 73.163 68.0682 72.8278 67.9148C72.4925 67.7585 72.2269 67.5327 72.0309 67.2372C71.8377 66.9418 71.7411 66.5795 71.7411 66.1506C71.7411 65.7812 71.8121 65.4773 71.9542 65.2386C72.0962 65 72.288 64.8111 72.5295 64.6719C72.771 64.5327 73.0408 64.4276 73.3391 64.3565C73.6374 64.2855 73.9414 64.2315 74.2511 64.1946C74.6431 64.1491 74.9613 64.1122 75.2056 64.0838C75.4499 64.0526 75.6275 64.0028 75.7383 63.9347C75.8491 63.8665 75.9045 63.7557 75.9045 63.6023V63.5724C75.9045 63.2003 75.7994 62.9119 75.5891 62.7074C75.3817 62.5028 75.0721 62.4006 74.6602 62.4006C74.2312 62.4006 73.8931 62.4957 73.646 62.6861C73.4016 62.8736 73.2326 63.0824 73.1388 63.3125L71.9414 63.0398C72.0835 62.642 72.2908 62.321 72.5636 62.0767C72.8391 61.8295 73.1559 61.6506 73.5138 61.5398C73.8718 61.4261 74.2482 61.3693 74.6431 61.3693C74.9045 61.3693 75.1815 61.4006 75.4741 61.4631C75.7695 61.5227 76.0451 61.6335 76.3008 61.7955C76.5593 61.9574 76.771 62.1889 76.9357 62.4901C77.1005 62.7884 77.1829 63.1761 77.1829 63.6534V68H75.9386V67.1051H75.8874C75.805 67.2699 75.6815 67.4318 75.5167 67.5909C75.3519 67.75 75.1403 67.8821 74.8817 67.9872C74.6232 68.0923 74.3136 68.1449 73.9528 68.1449ZM74.2298 67.1222C74.582 67.1222 74.8832 67.0526 75.1332 66.9134C75.386 66.7741 75.5778 66.5923 75.7085 66.3679C75.842 66.1406 75.9087 65.8977 75.9087 65.6392V64.7955C75.8633 64.8409 75.7752 64.8835 75.6445 64.9233C75.5167 64.9602 75.3704 64.9929 75.2056 65.0213C75.0408 65.0469 74.8803 65.071 74.7241 65.0938C74.5678 65.1136 74.4371 65.1307 74.332 65.1449C74.0849 65.1761 73.859 65.2287 73.6545 65.3026C73.4528 65.3764 73.2908 65.483 73.1687 65.6222C73.0494 65.7585 72.9897 65.9403 72.9897 66.1676C72.9897 66.483 73.1062 66.7216 73.3391 66.8835C73.5721 67.0426 73.869 67.1222 74.2298 67.1222ZM80.1541 64.1136V68H78.88V61.4545H80.103V62.5199H80.1839C80.3345 62.1733 80.5703 61.8949 80.8913 61.6847C81.2152 61.4744 81.6229 61.3693 82.1143 61.3693C82.5604 61.3693 82.951 61.4631 83.2862 61.6506C83.6214 61.8352 83.8814 62.1108 84.0661 62.4773C84.2507 62.8437 84.343 63.2969 84.343 63.8366V68H83.0689V63.9901C83.0689 63.5156 82.9453 63.1449 82.6982 62.8778C82.451 62.608 82.1115 62.473 81.6797 62.473C81.3842 62.473 81.1214 62.5369 80.8913 62.6648C80.6641 62.7926 80.4837 62.9801 80.3501 63.2273C80.2195 63.4716 80.1541 63.767 80.1541 64.1136ZM87.326 64.1136V68H86.0518V61.4545H87.2749V62.5199H87.3558C87.5064 62.1733 87.7422 61.8949 88.0632 61.6847C88.3871 61.4744 88.7947 61.3693 89.2862 61.3693C89.7322 61.3693 90.1229 61.4631 90.4581 61.6506C90.7933 61.8352 91.0533 62.1108 91.2379 62.4773C91.4226 62.8437 91.5149 63.2969 91.5149 63.8366V68H90.2408V63.9901C90.2408 63.5156 90.1172 63.1449 89.87 62.8778C89.6229 62.608 89.2834 62.473 88.8516 62.473C88.5561 62.473 88.2933 62.5369 88.0632 62.6648C87.8359 62.7926 87.6555 62.9801 87.522 63.2273C87.3913 63.4716 87.326 63.767 87.326 64.1136ZM96.0447 68.1321C95.3999 68.1321 94.8445 67.9943 94.3786 67.7188C93.9155 67.4403 93.5575 67.0497 93.3047 66.5469C93.0547 66.0412 92.9297 65.4489 92.9297 64.7699C92.9297 64.0994 93.0547 63.5085 93.3047 62.9972C93.5575 62.4858 93.9098 62.0866 94.3615 61.7997C94.8161 61.5128 95.3473 61.3693 95.9553 61.3693C96.3246 61.3693 96.6825 61.4304 97.0291 61.5526C97.3757 61.6747 97.6868 61.8665 97.9624 62.1278C98.2379 62.3892 98.4553 62.7287 98.6143 63.1463C98.7734 63.5611 98.853 64.0653 98.853 64.6591V65.1108H93.6499V64.1562H97.6044C97.6044 63.821 97.5362 63.5241 97.3999 63.2656C97.2635 63.0043 97.0717 62.7983 96.8246 62.6477C96.5803 62.4972 96.2933 62.4219 95.9638 62.4219C95.6058 62.4219 95.2933 62.5099 95.0263 62.6861C94.7621 62.8594 94.5575 63.0866 94.4126 63.3679C94.2706 63.6463 94.1996 63.9489 94.1996 64.2756V65.0213C94.1996 65.4588 94.2763 65.831 94.4297 66.1378C94.5859 66.4446 94.8033 66.679 95.0817 66.8409C95.3601 67 95.6854 67.0795 96.0575 67.0795C96.299 67.0795 96.5192 67.0455 96.718 66.9773C96.9169 66.9062 97.0888 66.8011 97.2337 66.6619C97.3786 66.5227 97.4893 66.3509 97.5661 66.1463L98.772 66.3636C98.6754 66.7187 98.5021 67.0298 98.2521 67.2969C98.005 67.5611 97.6939 67.767 97.3189 67.9148C96.9467 68.0597 96.522 68.1321 96.0447 68.1321ZM105.521 70.3736C104.64 70.3736 103.859 70.2528 103.177 70.0114C102.498 69.7727 101.926 69.4205 101.46 68.9545C100.994 68.4915 100.64 67.9233 100.399 67.25C100.157 66.5767 100.037 65.8082 100.037 64.9446C100.037 64.1037 100.159 63.348 100.403 62.6776C100.647 62.0071 101.002 61.4361 101.468 60.9645C101.937 60.4901 102.507 60.1278 103.177 59.8778C103.848 59.6278 104.609 59.5028 105.461 59.5028C106.277 59.5028 106.995 59.6307 107.618 59.8864C108.24 60.142 108.762 60.4929 109.186 60.9389C109.612 61.3849 109.933 61.8963 110.149 62.473C110.365 63.0497 110.473 63.6591 110.473 64.3011C110.473 64.75 110.444 65.1889 110.387 65.6179C110.331 66.044 110.225 66.4304 110.072 66.777C109.922 67.1207 109.703 67.3963 109.416 67.6037C109.132 67.8082 108.762 67.9148 108.308 67.9233C108.066 67.9318 107.832 67.9034 107.605 67.8381C107.377 67.7727 107.184 67.6676 107.025 67.5227C106.866 67.375 106.77 67.1875 106.735 66.9602H106.684C106.616 67.1278 106.502 67.2841 106.343 67.429C106.184 67.571 105.981 67.6847 105.734 67.7699C105.49 67.8523 105.206 67.8864 104.882 67.8722C104.524 67.858 104.201 67.777 103.914 67.6293C103.627 67.4815 103.382 67.277 103.177 67.0156C102.975 66.7543 102.821 66.4446 102.713 66.0866C102.605 65.7287 102.551 65.331 102.551 64.8935C102.551 64.473 102.612 64.0966 102.734 63.7642C102.856 63.429 103.022 63.1406 103.233 62.8991C103.446 62.6548 103.69 62.4616 103.966 62.3196C104.241 62.1776 104.532 62.0881 104.839 62.0511C105.137 62.017 105.412 62.0256 105.662 62.0767C105.912 62.1278 106.119 62.206 106.284 62.3111C106.451 62.4162 106.556 62.5312 106.599 62.6562H106.654V62.179H107.703V66.1335C107.703 66.358 107.761 66.5483 107.877 66.7045C107.997 66.8608 108.166 66.9389 108.385 66.9389C108.643 66.9389 108.845 66.8437 108.99 66.6534C109.137 66.4631 109.241 66.1705 109.301 65.7756C109.363 65.3807 109.395 64.875 109.395 64.2585C109.395 63.8267 109.336 63.4205 109.22 63.0398C109.106 62.6562 108.937 62.3097 108.713 62C108.491 61.6875 108.218 61.419 107.895 61.1946C107.571 60.9702 107.201 60.7969 106.787 60.6747C106.375 60.5526 105.919 60.4915 105.419 60.4915C104.74 60.4915 104.136 60.5966 103.608 60.8068C103.079 61.0142 102.633 61.3139 102.27 61.706C101.909 62.098 101.635 62.5682 101.447 63.1165C101.262 63.6619 101.17 64.2741 101.17 64.9531C101.17 65.6605 101.265 66.2884 101.456 66.8366C101.646 67.3821 101.927 67.8423 102.299 68.2173C102.672 68.5923 103.132 68.8764 103.68 69.0696C104.228 69.2656 104.86 69.3636 105.576 69.3636C105.895 69.3636 106.207 69.3352 106.514 69.2784C106.821 69.2244 107.093 69.1619 107.332 69.0909C107.574 69.0227 107.754 68.9673 107.873 68.9247L108.172 69.858C107.995 69.9403 107.761 70.0213 107.468 70.1009C107.179 70.1804 106.863 70.2457 106.522 70.2969C106.184 70.348 105.85 70.3736 105.521 70.3736ZM105.129 66.8281C105.498 66.8281 105.795 66.7543 106.02 66.6065C106.247 66.4588 106.41 66.2386 106.51 65.946C106.612 65.6506 106.663 65.2812 106.663 64.8381C106.66 64.4062 106.605 64.0625 106.497 63.8068C106.392 63.5483 106.227 63.3636 106.002 63.2528C105.781 63.1392 105.495 63.0824 105.146 63.0824C104.825 63.0824 104.551 63.1605 104.324 63.3168C104.099 63.473 103.927 63.6847 103.808 63.9517C103.691 64.2187 103.632 64.5156 103.629 64.8423C103.632 65.1861 103.68 65.5099 103.774 65.8139C103.87 66.1151 104.027 66.3594 104.243 66.5469C104.461 66.7344 104.757 66.8281 105.129 66.8281ZM116.785 63.0526L115.63 63.2571C115.582 63.1094 115.505 62.9687 115.4 62.8352C115.298 62.7017 115.158 62.5923 114.982 62.5071C114.806 62.4219 114.586 62.3793 114.322 62.3793C113.961 62.3793 113.66 62.4602 113.418 62.6222C113.177 62.7812 113.056 62.9872 113.056 63.2401C113.056 63.4588 113.137 63.6349 113.299 63.7685C113.461 63.902 113.722 64.0114 114.083 64.0966L115.123 64.3352C115.725 64.4744 116.174 64.6889 116.469 64.9787C116.765 65.2685 116.913 65.6449 116.913 66.108C116.913 66.5 116.799 66.8494 116.572 67.1562C116.347 67.4602 116.033 67.6989 115.63 67.8722C115.229 68.0455 114.765 68.1321 114.237 68.1321C113.504 68.1321 112.906 67.9759 112.442 67.6634C111.979 67.348 111.695 66.9006 111.59 66.321L112.822 66.1335C112.898 66.4545 113.056 66.6974 113.295 66.8622C113.533 67.0241 113.844 67.1051 114.228 67.1051C114.646 67.1051 114.979 67.0185 115.229 66.8452C115.479 66.669 115.604 66.4545 115.604 66.2017C115.604 65.9972 115.528 65.8253 115.374 65.6861C115.224 65.5469 114.992 65.4418 114.68 65.3707L113.572 65.1278C112.961 64.9886 112.509 64.767 112.217 64.4631C111.927 64.1591 111.782 63.7741 111.782 63.3082C111.782 62.9219 111.89 62.5838 112.106 62.294C112.322 62.0043 112.62 61.7784 113.001 61.6165C113.381 61.4517 113.817 61.3693 114.309 61.3693C115.016 61.3693 115.573 61.5227 115.979 61.8295C116.386 62.1335 116.654 62.5412 116.785 63.0526ZM121.369 61.4545V62.4773H117.794V61.4545H121.369ZM118.752 59.8864H120.027V66.0781C120.027 66.3253 120.064 66.5114 120.137 66.6364C120.211 66.7585 120.306 66.8423 120.423 66.8878C120.542 66.9304 120.672 66.9517 120.811 66.9517C120.913 66.9517 121.002 66.9446 121.079 66.9304C121.156 66.9162 121.216 66.9048 121.258 66.8963L121.488 67.9489C121.414 67.9773 121.309 68.0057 121.173 68.0341C121.037 68.0653 120.866 68.0824 120.662 68.0852C120.326 68.0909 120.014 68.0312 119.724 67.9062C119.434 67.7812 119.2 67.5881 119.021 67.3267C118.842 67.0653 118.752 66.7372 118.752 66.3423V59.8864ZM125.529 68.1321C124.884 68.1321 124.329 67.9943 123.863 67.7188C123.4 67.4403 123.042 67.0497 122.789 66.5469C122.539 66.0412 122.414 65.4489 122.414 64.7699C122.414 64.0994 122.539 63.5085 122.789 62.9972C123.042 62.4858 123.394 62.0866 123.846 61.7997C124.3 61.5128 124.832 61.3693 125.44 61.3693C125.809 61.3693 126.167 61.4304 126.513 61.5526C126.86 61.6747 127.171 61.8665 127.447 62.1278C127.722 62.3892 127.94 62.7287 128.099 63.1463C128.258 63.5611 128.337 64.0653 128.337 64.6591V65.1108H123.134V64.1562H127.089C127.089 63.821 127.021 63.5241 126.884 63.2656C126.748 63.0043 126.556 62.7983 126.309 62.6477C126.065 62.4972 125.778 62.4219 125.448 62.4219C125.09 62.4219 124.778 62.5099 124.511 62.6861C124.246 62.8594 124.042 63.0866 123.897 63.3679C123.755 63.6463 123.684 63.9489 123.684 64.2756V65.0213C123.684 65.4588 123.761 65.831 123.914 66.1378C124.07 66.4446 124.288 66.679 124.566 66.8409C124.844 67 125.17 67.0795 125.542 67.0795C125.783 67.0795 126.004 67.0455 126.202 66.9773C126.401 66.9062 126.573 66.8011 126.718 66.6619C126.863 66.5227 126.974 66.3509 127.05 66.1463L128.256 66.3636C128.16 66.7187 127.987 67.0298 127.737 67.2969C127.489 67.5611 127.178 67.767 126.803 67.9148C126.431 68.0597 126.006 68.1321 125.529 68.1321ZM131.025 59.2727V68H129.751V59.2727H131.025ZM134.013 59.2727V68H132.739V59.2727H134.013ZM137.632 68.1449C137.218 68.1449 136.843 68.0682 136.507 67.9148C136.172 67.7585 135.907 67.5327 135.711 67.2372C135.517 66.9418 135.421 66.5795 135.421 66.1506C135.421 65.7812 135.492 65.4773 135.634 65.2386C135.776 65 135.968 64.8111 136.209 64.6719C136.451 64.5327 136.721 64.4276 137.019 64.3565C137.317 64.2855 137.621 64.2315 137.931 64.1946C138.323 64.1491 138.641 64.1122 138.885 64.0838C139.13 64.0526 139.307 64.0028 139.418 63.9347C139.529 63.8665 139.584 63.7557 139.584 63.6023V63.5724C139.584 63.2003 139.479 62.9119 139.269 62.7074C139.061 62.5028 138.752 62.4006 138.34 62.4006C137.911 62.4006 137.573 62.4957 137.326 62.6861C137.081 62.8736 136.912 63.0824 136.819 63.3125L135.621 63.0398C135.763 62.642 135.971 62.321 136.243 62.0767C136.519 61.8295 136.836 61.6506 137.194 61.5398C137.551 61.4261 137.928 61.3693 138.323 61.3693C138.584 61.3693 138.861 61.4006 139.154 61.4631C139.449 61.5227 139.725 61.6335 139.98 61.7955C140.239 61.9574 140.451 62.1889 140.615 62.4901C140.78 62.7884 140.863 63.1761 140.863 63.6534V68H139.618V67.1051H139.567C139.485 67.2699 139.361 67.4318 139.196 67.5909C139.032 67.75 138.82 67.8821 138.561 67.9872C138.303 68.0923 137.993 68.1449 137.632 68.1449ZM137.909 67.1222C138.262 67.1222 138.563 67.0526 138.813 66.9134C139.066 66.7741 139.257 66.5923 139.388 66.3679C139.522 66.1406 139.588 65.8977 139.588 65.6392V64.7955C139.543 64.8409 139.455 64.8835 139.324 64.9233C139.196 64.9602 139.05 64.9929 138.885 65.0213C138.721 65.0469 138.56 65.071 138.404 65.0938C138.248 65.1136 138.117 65.1307 138.012 65.1449C137.765 65.1761 137.539 65.2287 137.334 65.3026C137.132 65.3764 136.971 65.483 136.848 65.6222C136.729 65.7585 136.669 65.9403 136.669 66.1676C136.669 66.483 136.786 66.7216 137.019 66.8835C137.252 67.0426 137.549 67.1222 137.909 67.1222ZM142.56 68V61.4545H143.791V62.4943H143.859C143.979 62.142 144.189 61.8651 144.49 61.6634C144.794 61.4588 145.138 61.3565 145.521 61.3565C145.601 61.3565 145.695 61.3594 145.803 61.3651C145.913 61.3707 146 61.3778 146.062 61.3864V62.6051C146.011 62.5909 145.92 62.5753 145.79 62.5582C145.659 62.5384 145.528 62.5284 145.398 62.5284C145.097 62.5284 144.828 62.5923 144.592 62.7202C144.359 62.8452 144.175 63.0199 144.038 63.2443C143.902 63.4659 143.834 63.7187 143.834 64.0028V68H142.56ZM147.165 68V61.4545H148.439V68H147.165ZM147.809 60.4446C147.587 60.4446 147.397 60.3707 147.238 60.223C147.081 60.0724 147.003 59.8935 147.003 59.6861C147.003 59.4759 147.081 59.2969 147.238 59.1491C147.397 58.9986 147.587 58.9233 147.809 58.9233C148.03 58.9233 148.219 58.9986 148.375 59.1491C148.534 59.2969 148.614 59.4759 148.614 59.6861C148.614 59.8935 148.534 60.0724 148.375 60.223C148.219 60.3707 148.03 60.4446 147.809 60.4446ZM155.058 63.0526L153.903 63.2571C153.855 63.1094 153.778 62.9687 153.673 62.8352C153.571 62.7017 153.432 62.5923 153.256 62.5071C153.08 62.4219 152.859 62.3793 152.595 62.3793C152.234 62.3793 151.933 62.4602 151.692 62.6222C151.45 62.7812 151.33 62.9872 151.33 63.2401C151.33 63.4588 151.411 63.6349 151.572 63.7685C151.734 63.902 151.996 64.0114 152.357 64.0966L153.396 64.3352C153.999 64.4744 154.447 64.6889 154.743 64.9787C155.038 65.2685 155.186 65.6449 155.186 66.108C155.186 66.5 155.072 66.8494 154.845 67.1562C154.621 67.4602 154.307 67.6989 153.903 67.8722C153.503 68.0455 153.038 68.1321 152.51 68.1321C151.777 68.1321 151.179 67.9759 150.716 67.6634C150.253 67.348 149.969 66.9006 149.864 66.321L151.095 66.1335C151.172 66.4545 151.33 66.6974 151.568 66.8622C151.807 67.0241 152.118 67.1051 152.501 67.1051C152.919 67.1051 153.253 67.0185 153.503 66.8452C153.753 66.669 153.878 66.4545 153.878 66.2017C153.878 65.9972 153.801 65.8253 153.648 65.6861C153.497 65.5469 153.266 65.4418 152.953 65.3707L151.845 65.1278C151.234 64.9886 150.783 64.767 150.49 64.4631C150.2 64.1591 150.055 63.7741 150.055 63.3082C150.055 62.9219 150.163 62.5838 150.379 62.294C150.595 62.0043 150.893 61.7784 151.274 61.6165C151.655 61.4517 152.091 61.3693 152.582 61.3693C153.29 61.3693 153.847 61.5227 154.253 61.8295C154.659 62.1335 154.928 62.5412 155.058 63.0526ZM157.426 68.081C157.194 68.081 156.993 67.9986 156.826 67.8338C156.658 67.6662 156.574 67.4645 156.574 67.2287C156.574 66.9957 156.658 66.7969 156.826 66.6321C156.993 66.4645 157.194 66.3807 157.426 66.3807C157.659 66.3807 157.86 66.4645 158.027 66.6321C158.195 66.7969 158.279 66.9957 158.279 67.2287C158.279 67.3849 158.239 67.5284 158.159 67.6591C158.083 67.7869 157.98 67.8892 157.853 67.9659C157.725 68.0426 157.583 68.081 157.426 68.081ZM162.743 68.1321C162.109 68.1321 161.564 67.9886 161.106 67.7017C160.652 67.4119 160.302 67.0128 160.058 66.5043C159.814 65.9957 159.691 65.4134 159.691 64.7571C159.691 64.0923 159.816 63.5057 160.066 62.9972C160.316 62.4858 160.669 62.0866 161.123 61.7997C161.578 61.5128 162.113 61.3693 162.73 61.3693C163.227 61.3693 163.67 61.4616 164.059 61.6463C164.449 61.8281 164.762 62.0838 165.001 62.4134C165.243 62.7429 165.386 63.1278 165.431 63.5682H164.191C164.123 63.2614 163.967 62.9972 163.723 62.7756C163.481 62.554 163.157 62.4432 162.751 62.4432C162.396 62.4432 162.085 62.5369 161.818 62.7244C161.554 62.9091 161.348 63.1733 161.2 63.517C161.052 63.858 160.978 64.2614 160.978 64.7273C160.978 65.2045 161.051 65.6165 161.196 65.9631C161.341 66.3097 161.545 66.5781 161.809 66.7685C162.076 66.9588 162.39 67.054 162.751 67.054C162.993 67.054 163.211 67.0099 163.407 66.9219C163.606 66.831 163.772 66.7017 163.906 66.5341C164.042 66.3665 164.137 66.1648 164.191 65.929H165.431C165.386 66.3523 165.248 66.7301 165.018 67.0625C164.788 67.3949 164.48 67.6562 164.093 67.8466C163.71 68.0369 163.26 68.1321 162.743 68.1321ZM169.551 68.1321C168.938 68.1321 168.402 67.9915 167.945 67.7102C167.487 67.429 167.132 67.0355 166.879 66.5298C166.626 66.0241 166.5 65.4332 166.5 64.7571C166.5 64.0781 166.626 63.4844 166.879 62.9759C167.132 62.4673 167.487 62.0724 167.945 61.7912C168.402 61.5099 168.938 61.3693 169.551 61.3693C170.165 61.3693 170.7 61.5099 171.158 61.7912C171.615 62.0724 171.97 62.4673 172.223 62.9759C172.476 63.4844 172.602 64.0781 172.602 64.7571C172.602 65.4332 172.476 66.0241 172.223 66.5298C171.97 67.0355 171.615 67.429 171.158 67.7102C170.7 67.9915 170.165 68.1321 169.551 68.1321ZM169.555 67.0625C169.953 67.0625 170.283 66.9574 170.544 66.7472C170.805 66.5369 170.999 66.2571 171.124 65.9077C171.251 65.5582 171.315 65.1733 171.315 64.7528C171.315 64.3352 171.251 63.9517 171.124 63.6023C170.999 63.25 170.805 62.9673 170.544 62.7543C170.283 62.5412 169.953 62.4347 169.555 62.4347C169.155 62.4347 168.822 62.5412 168.558 62.7543C168.297 62.9673 168.102 63.25 167.974 63.6023C167.849 63.9517 167.787 64.3352 167.787 64.7528C167.787 65.1733 167.849 65.5582 167.974 65.9077C168.102 66.2571 168.297 66.5369 168.558 66.7472C168.822 66.9574 169.155 67.0625 169.555 67.0625ZM174.025 68V61.4545H175.248V62.5199H175.328C175.465 62.1591 175.688 61.8778 175.998 61.6761C176.307 61.4716 176.678 61.3693 177.11 61.3693C177.547 61.3693 177.914 61.4716 178.209 61.6761C178.507 61.8807 178.728 62.1619 178.87 62.5199H178.938C179.094 62.1705 179.343 61.892 179.684 61.6847C180.025 61.4744 180.431 61.3693 180.902 61.3693C181.496 61.3693 181.98 61.5554 182.355 61.9276C182.733 62.2997 182.922 62.8608 182.922 63.6108V68H181.648V63.7301C181.648 63.2869 181.527 62.9659 181.286 62.767C181.044 62.5682 180.756 62.4688 180.421 62.4688C180.006 62.4688 179.684 62.5966 179.453 62.8523C179.223 63.1051 179.108 63.4304 179.108 63.8281V68H177.838V63.6491C177.838 63.294 177.728 63.0085 177.506 62.7926C177.284 62.5767 176.996 62.4688 176.641 62.4688C176.4 62.4688 176.176 62.5327 175.972 62.6605C175.77 62.7855 175.607 62.9602 175.482 63.1847C175.36 63.4091 175.299 63.669 175.299 63.9645V68H174.025Z"
                                                        fill="#0F6BE9"
                                                    />
                                                    <rect
                                                        x="45.5"
                                                        y="54.5"
                                                        width={144}
                                                        height={19}
                                                        rx="7.5"
                                                        stroke="#B5CAFD"
                                                    />
                                                </g>
                                                <g
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translateX(0px)",
                                                        transition: "all 400ms ease 1100ms"
                                                    }}
                                                >
                                                    <rect
                                                        x={24}
                                                        y={95}
                                                        width={12}
                                                        height={10}
                                                        rx="2.5"
                                                        stroke="#969696"
                                                        strokeWidth="1.1"
                                                    />
                                                    <rect
                                                        x={26}
                                                        y={97}
                                                        width="3.65"
                                                        height={6}
                                                        rx="1.05"
                                                        stroke="#969696"
                                                        strokeWidth="1.1"
                                                    />
                                                    <path
                                                        d="M31.6484 99H34.0484"
                                                        stroke="#969696"
                                                        strokeWidth="1.1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M31.6484 101H34.0484"
                                                        stroke="#969696"
                                                        strokeWidth="1.1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M53.2074 98.1108H51.8778C51.8267 97.8267 51.7315 97.5767 51.5923 97.3608C51.4531 97.1449 51.2827 96.9616 51.081 96.8111C50.8793 96.6605 50.6534 96.5469 50.4034 96.4702C50.1563 96.3935 49.8935 96.3551 49.6151 96.3551C49.1122 96.3551 48.6619 96.4815 48.2642 96.7344C47.8693 96.9872 47.5568 97.358 47.3267 97.8466C47.0994 98.3352 46.9858 98.9318 46.9858 99.6364C46.9858 100.347 47.0994 100.946 47.3267 101.435C47.5568 101.923 47.8707 102.293 48.2685 102.543C48.6662 102.793 49.1136 102.918 49.6108 102.918C49.8864 102.918 50.1477 102.881 50.3949 102.807C50.6449 102.73 50.8707 102.618 51.0724 102.47C51.2741 102.322 51.4446 102.142 51.5838 101.929C51.7259 101.713 51.8239 101.466 51.8778 101.188L53.2074 101.192C53.1364 101.621 52.9986 102.016 52.794 102.376C52.5923 102.734 52.3324 103.044 52.0142 103.305C51.6989 103.564 51.3381 103.764 50.9318 103.906C50.5256 104.048 50.0824 104.119 49.6023 104.119C48.8466 104.119 48.1733 103.94 47.5824 103.582C46.9915 103.222 46.5256 102.706 46.1847 102.036C45.8466 101.365 45.6776 100.565 45.6776 99.6364C45.6776 98.7045 45.848 97.9048 46.1889 97.2372C46.5298 96.5668 46.9957 96.0526 47.5866 95.6946C48.1776 95.3338 48.8494 95.1534 49.6023 95.1534C50.0653 95.1534 50.4972 95.2202 50.8977 95.3537C51.3011 95.4844 51.6634 95.6776 51.9844 95.9332C52.3054 96.1861 52.571 96.4957 52.7812 96.8622C52.9915 97.2259 53.1335 97.642 53.2074 98.1108ZM54.543 104V95.2727H60.0146V96.4062H55.8598V99.0653H59.7291V100.195H55.8598V102.866H60.0658V104H54.543ZM69.1145 99.6364C69.1145 100.568 68.944 101.369 68.6031 102.04C68.2622 102.707 67.7949 103.222 67.2011 103.582C66.6102 103.94 65.9383 104.119 65.1855 104.119C64.4298 104.119 63.7551 103.94 63.1613 103.582C62.5704 103.222 62.1045 102.706 61.7636 102.036C61.4227 101.365 61.2522 100.565 61.2522 99.6364C61.2522 98.7045 61.4227 97.9048 61.7636 97.2372C62.1045 96.5668 62.5704 96.0526 63.1613 95.6946C63.7551 95.3338 64.4298 95.1534 65.1855 95.1534C65.9383 95.1534 66.6102 95.3338 67.2011 95.6946C67.7949 96.0526 68.2622 96.5668 68.6031 97.2372C68.944 97.9048 69.1145 98.7045 69.1145 99.6364ZM67.8105 99.6364C67.8105 98.9261 67.6954 98.3281 67.4653 97.8423C67.238 97.3537 66.9255 96.9844 66.5278 96.7344C66.1329 96.4815 65.6855 96.3551 65.1855 96.3551C64.6826 96.3551 64.2338 96.4815 63.8389 96.7344C63.444 96.9844 63.1315 97.3537 62.9014 97.8423C62.6741 98.3281 62.5605 98.9261 62.5605 99.6364C62.5605 100.347 62.6741 100.946 62.9014 101.435C63.1315 101.92 63.444 102.29 63.8389 102.543C64.2338 102.793 64.6826 102.918 65.1855 102.918C65.6855 102.918 66.1329 102.793 66.5278 102.543C66.9255 102.29 67.238 101.92 67.4653 101.435C67.6954 100.946 67.8105 100.347 67.8105 99.6364ZM78.5656 105.116C77.6849 105.116 76.9036 104.996 76.2218 104.754C75.5428 104.516 74.9704 104.165 74.5045 103.702C74.0386 103.236 73.6849 102.666 73.4434 101.993C73.2019 101.32 73.0812 100.551 73.0812 99.6875C73.0812 98.8466 73.2034 98.0909 73.4477 97.4205C73.692 96.75 74.0471 96.179 74.513 95.7074C74.9818 95.233 75.5514 94.8707 76.2218 94.6207C76.8923 94.3707 77.6536 94.2457 78.5059 94.2457C79.3213 94.2457 80.04 94.3736 80.6622 94.6293C81.2843 94.8849 81.807 95.2358 82.2303 95.6818C82.6565 96.1278 82.9775 96.6392 83.1934 97.2159C83.4093 97.7926 83.5173 98.402 83.5173 99.044C83.5173 99.4929 83.4889 99.9318 83.432 100.361C83.3752 100.787 83.2701 101.173 83.1167 101.52C82.9661 101.864 82.7474 102.139 82.4605 102.347C82.1764 102.551 81.807 102.658 81.3525 102.666C81.111 102.675 80.8766 102.646 80.6494 102.581C80.4221 102.516 80.2289 102.411 80.0698 102.266C79.9107 102.118 79.8141 101.93 79.7801 101.703H79.7289C79.6607 101.871 79.5471 102.027 79.388 102.172C79.2289 102.314 79.0258 102.428 78.7786 102.513C78.5343 102.595 78.2502 102.629 77.9264 102.615C77.5684 102.601 77.246 102.52 76.959 102.372C76.6721 102.224 76.4264 102.02 76.2218 101.759C76.0201 101.497 75.8653 101.187 75.7573 100.83C75.6494 100.472 75.5954 100.074 75.5954 99.6364C75.5954 99.2159 75.6565 98.8395 75.7786 98.5071C75.9008 98.1719 76.067 97.8835 76.2772 97.642C76.4903 97.3977 76.7346 97.2045 77.0102 97.0625C77.2857 96.9205 77.5769 96.831 77.8838 96.794C78.182 96.7599 78.4562 96.7685 78.7062 96.8196C78.9562 96.8707 79.1636 96.9489 79.3284 97.054C79.496 97.1591 79.6011 97.2741 79.6437 97.3991H79.6991V96.9219H80.7474V100.876C80.7474 101.101 80.8056 101.291 80.9221 101.447C81.0414 101.604 81.2105 101.682 81.4292 101.682C81.6877 101.682 81.8894 101.587 82.0343 101.396C82.182 101.206 82.2857 100.913 82.3454 100.518C82.4079 100.124 82.4391 99.6179 82.4391 99.0014C82.4391 98.5696 82.3809 98.1634 82.2644 97.7827C82.1508 97.3991 81.9818 97.0526 81.7573 96.7429C81.5357 96.4304 81.263 96.1619 80.9391 95.9375C80.6153 95.7131 80.246 95.5398 79.8312 95.4176C79.4193 95.2955 78.9633 95.2344 78.4633 95.2344C77.7843 95.2344 77.1806 95.3395 76.6522 95.5497C76.1238 95.7571 75.6778 96.0568 75.3141 96.4489C74.9534 96.8409 74.6792 97.3111 74.4917 97.8594C74.307 98.4048 74.2147 99.017 74.2147 99.696C74.2147 100.403 74.3099 101.031 74.5002 101.58C74.6906 102.125 74.9718 102.585 75.344 102.96C75.7161 103.335 76.1764 103.621 76.7247 103.817C77.273 104.01 77.9051 104.107 78.621 104.107C78.9391 104.107 79.2516 104.078 79.5585 104.021C79.8653 103.967 80.138 103.906 80.3766 103.838C80.6181 103.767 80.7985 103.71 80.9178 103.668L81.2161 104.601C81.04 104.683 80.8056 104.764 80.513 104.844C80.2232 104.923 79.9079 104.989 79.567 105.04C79.2289 105.091 78.8951 105.116 78.5656 105.116ZM78.1735 101.571C78.5428 101.571 78.8397 101.497 79.0641 101.349C79.2914 101.202 79.4548 100.982 79.5542 100.689C79.6565 100.393 79.7076 100.024 79.7076 99.581C79.7048 99.1491 79.6494 98.8054 79.5414 98.5497C79.4363 98.2912 79.2715 98.1065 79.0471 97.9957C78.8255 97.8821 78.54 97.8253 78.1906 97.8253C77.8695 97.8253 77.5954 97.9034 77.3681 98.0597C77.1437 98.2159 76.9718 98.4276 76.8525 98.6946C76.736 98.9616 76.6764 99.2585 76.6735 99.5852C76.6764 99.929 76.7247 100.253 76.8184 100.557C76.915 100.858 77.0713 101.102 77.2872 101.29C77.5059 101.477 77.8014 101.571 78.1735 101.571ZM89.5852 97.5653C89.5397 97.1619 89.3522 96.8494 89.0227 96.6278C88.6931 96.4034 88.2783 96.2912 87.7783 96.2912C87.4204 96.2912 87.1107 96.348 86.8494 96.4616C86.588 96.5724 86.3849 96.7259 86.24 96.9219C86.0979 97.1151 86.0269 97.3352 86.0269 97.5824C86.0269 97.7898 86.0752 97.9687 86.1718 98.1193C86.2712 98.2699 86.4005 98.3963 86.5596 98.4986C86.7215 98.598 86.8948 98.6818 87.0795 98.75C87.2641 98.8153 87.4417 98.8693 87.6121 98.9119L88.4644 99.1335C88.7428 99.2017 89.0283 99.294 89.321 99.4105C89.6136 99.527 89.8849 99.6804 90.1349 99.8707C90.3849 100.061 90.5866 100.297 90.74 100.578C90.8962 100.859 90.9744 101.196 90.9744 101.588C90.9744 102.082 90.8465 102.521 90.5908 102.905C90.338 103.288 89.9701 103.591 89.4871 103.812C89.007 104.034 88.4261 104.145 87.7442 104.145C87.0908 104.145 86.5255 104.041 86.0482 103.834C85.571 103.626 85.1974 103.332 84.9275 102.952C84.6576 102.568 84.5085 102.114 84.48 101.588H85.8011C85.8266 101.903 85.9289 102.166 86.1079 102.376C86.2897 102.584 86.5212 102.739 86.8025 102.841C87.0866 102.94 87.3977 102.99 87.7357 102.99C88.1079 102.99 88.4388 102.932 88.7286 102.815C89.0212 102.696 89.2513 102.531 89.419 102.321C89.5866 102.108 89.6704 101.859 89.6704 101.575C89.6704 101.317 89.5965 101.105 89.4488 100.94C89.3039 100.776 89.1065 100.639 88.8565 100.531C88.6093 100.423 88.3295 100.328 88.017 100.246L86.9857 99.9645C86.2869 99.7741 85.7329 99.4943 85.3238 99.125C84.9175 98.7557 84.7144 98.267 84.7144 97.6591C84.7144 97.1562 84.8508 96.7173 85.1235 96.3423C85.3962 95.9673 85.7656 95.6761 86.2315 95.4688C86.6974 95.2585 87.2229 95.1534 87.8082 95.1534C88.3991 95.1534 88.9204 95.2571 89.3721 95.4645C89.8266 95.6719 90.1846 95.9574 90.446 96.321C90.7073 96.6818 90.8437 97.0966 90.855 97.5653H89.5852ZM95.261 97.4545V98.4773H91.6857V97.4545H95.261ZM92.6445 95.8864H93.9187V102.078C93.9187 102.325 93.9556 102.511 94.0295 102.636C94.1033 102.759 94.1985 102.842 94.315 102.888C94.4343 102.93 94.5636 102.952 94.7028 102.952C94.805 102.952 94.8945 102.945 94.9712 102.93C95.0479 102.916 95.1076 102.905 95.1502 102.896L95.3803 103.949C95.3065 103.977 95.2013 104.006 95.065 104.034C94.9286 104.065 94.7582 104.082 94.5536 104.085C94.2184 104.091 93.9059 104.031 93.6161 103.906C93.3263 103.781 93.092 103.588 92.913 103.327C92.734 103.065 92.6445 102.737 92.6445 102.342V95.8864ZM99.1812 104.132C98.5363 104.132 97.9809 103.994 97.515 103.719C97.0519 103.44 96.6939 103.05 96.4411 102.547C96.1911 102.041 96.0661 101.449 96.0661 100.77C96.0661 100.099 96.1911 99.5085 96.4411 98.9972C96.6939 98.4858 97.0462 98.0866 97.4979 97.7997C97.9525 97.5128 98.4837 97.3693 99.0917 97.3693C99.461 97.3693 99.8189 97.4304 100.166 97.5526C100.512 97.6747 100.823 97.8665 101.099 98.1278C101.374 98.3892 101.592 98.7287 101.751 99.1463C101.91 99.5611 101.989 100.065 101.989 100.659V101.111H96.7863V100.156H100.741C100.741 99.821 100.673 99.5241 100.536 99.2656C100.4 99.0043 100.208 98.7983 99.961 98.6477C99.7167 98.4972 99.4297 98.4219 99.1002 98.4219C98.7422 98.4219 98.4297 98.5099 98.1627 98.6861C97.8985 98.8594 97.6939 99.0866 97.549 99.3679C97.407 99.6463 97.336 99.9489 97.336 100.276V101.021C97.336 101.459 97.4127 101.831 97.5661 102.138C97.7223 102.445 97.9397 102.679 98.2181 102.841C98.4965 103 98.8218 103.08 99.1939 103.08C99.4354 103.08 99.6556 103.045 99.8544 102.977C100.053 102.906 100.225 102.801 100.37 102.662C100.515 102.523 100.626 102.351 100.702 102.146L101.908 102.364C101.812 102.719 101.639 103.03 101.389 103.297C101.141 103.561 100.83 103.767 100.455 103.915C100.083 104.06 99.6584 104.132 99.1812 104.132ZM104.437 95.2727V104H103.163V95.2727H104.437ZM107.186 95.2727V104H105.911V95.2727H107.186ZM110.564 104.145C110.15 104.145 109.775 104.068 109.439 103.915C109.104 103.759 108.839 103.533 108.643 103.237C108.449 102.942 108.353 102.58 108.353 102.151C108.353 101.781 108.424 101.477 108.566 101.239C108.708 101 108.9 100.811 109.141 100.672C109.383 100.533 109.653 100.428 109.951 100.357C110.249 100.286 110.553 100.232 110.863 100.195C111.255 100.149 111.573 100.112 111.817 100.084C112.062 100.053 112.239 100.003 112.35 99.9347C112.461 99.8665 112.516 99.7557 112.516 99.6023V99.5724C112.516 99.2003 112.411 98.9119 112.201 98.7074C111.993 98.5028 111.684 98.4006 111.272 98.4006C110.843 98.4006 110.505 98.4957 110.258 98.6861C110.013 98.8736 109.844 99.0824 109.751 99.3125L108.553 99.0398C108.695 98.642 108.903 98.321 109.175 98.0767C109.451 97.8295 109.768 97.6506 110.126 97.5398C110.484 97.4261 110.86 97.3693 111.255 97.3693C111.516 97.3693 111.793 97.4006 112.086 97.4631C112.381 97.5227 112.657 97.6335 112.912 97.7955C113.171 97.9574 113.383 98.1889 113.547 98.4901C113.712 98.7884 113.795 99.1761 113.795 99.6534V104H112.55V103.105H112.499C112.417 103.27 112.293 103.432 112.128 103.591C111.964 103.75 111.752 103.882 111.493 103.987C111.235 104.092 110.925 104.145 110.564 104.145ZM110.841 103.122C111.194 103.122 111.495 103.053 111.745 102.913C111.998 102.774 112.189 102.592 112.32 102.368C112.454 102.141 112.52 101.898 112.52 101.639V100.795C112.475 100.841 112.387 100.884 112.256 100.923C112.128 100.96 111.982 100.993 111.817 101.021C111.653 101.047 111.492 101.071 111.336 101.094C111.18 101.114 111.049 101.131 110.944 101.145C110.697 101.176 110.471 101.229 110.266 101.303C110.064 101.376 109.903 101.483 109.78 101.622C109.661 101.759 109.601 101.94 109.601 102.168C109.601 102.483 109.718 102.722 109.951 102.884C110.184 103.043 110.481 103.122 110.841 103.122ZM115.252 104V97.4545H116.483V98.4943H116.551C116.671 98.142 116.881 97.8651 117.182 97.6634C117.486 97.4588 117.83 97.3565 118.213 97.3565C118.293 97.3565 118.387 97.3594 118.495 97.3651C118.605 97.3707 118.692 97.3778 118.755 97.3864V98.6051C118.703 98.5909 118.612 98.5753 118.482 98.5582C118.351 98.5384 118.22 98.5284 118.09 98.5284C117.789 98.5284 117.52 98.5923 117.284 98.7202C117.051 98.8452 116.867 99.0199 116.73 99.2443C116.594 99.4659 116.526 99.7187 116.526 100.003V104H115.252ZM119.617 104V97.4545H120.891V104H119.617ZM120.261 96.4446C120.039 96.4446 119.849 96.3707 119.69 96.223C119.533 96.0724 119.455 95.8935 119.455 95.6861C119.455 95.4759 119.533 95.2969 119.69 95.1491C119.849 94.9986 120.039 94.9233 120.261 94.9233C120.482 94.9233 120.671 94.9986 120.827 95.1491C120.986 95.2969 121.066 95.4759 121.066 95.6861C121.066 95.8935 120.986 96.0724 120.827 96.223C120.671 96.3707 120.482 96.4446 120.261 96.4446ZM127.27 99.0526L126.115 99.2571C126.067 99.1094 125.99 98.9687 125.885 98.8352C125.783 98.7017 125.644 98.5923 125.468 98.5071C125.292 98.4219 125.071 98.3793 124.807 98.3793C124.446 98.3793 124.145 98.4602 123.904 98.6222C123.662 98.7812 123.542 98.9872 123.542 99.2401C123.542 99.4588 123.623 99.6349 123.784 99.7685C123.946 99.902 124.208 100.011 124.569 100.097L125.608 100.335C126.211 100.474 126.659 100.689 126.955 100.979C127.25 101.268 127.398 101.645 127.398 102.108C127.398 102.5 127.284 102.849 127.057 103.156C126.833 103.46 126.519 103.699 126.115 103.872C125.715 104.045 125.25 104.132 124.722 104.132C123.989 104.132 123.391 103.976 122.928 103.663C122.465 103.348 122.181 102.901 122.076 102.321L123.307 102.134C123.384 102.455 123.542 102.697 123.78 102.862C124.019 103.024 124.33 103.105 124.713 103.105C125.131 103.105 125.465 103.018 125.715 102.845C125.965 102.669 126.09 102.455 126.09 102.202C126.09 101.997 126.013 101.825 125.86 101.686C125.709 101.547 125.478 101.442 125.165 101.371L124.057 101.128C123.446 100.989 122.995 100.767 122.702 100.463C122.412 100.159 122.267 99.7741 122.267 99.3082C122.267 98.9219 122.375 98.5838 122.591 98.294C122.807 98.0043 123.105 97.7784 123.486 97.6165C123.867 97.4517 124.303 97.3693 124.794 97.3693C125.502 97.3693 126.059 97.5227 126.465 97.8295C126.871 98.1335 127.14 98.5412 127.27 99.0526ZM128.661 104V95.2727H129.978V99.0653H134.329V95.2727H135.65V104H134.329V100.195H129.978V104H128.661ZM140.046 104.132C139.401 104.132 138.846 103.994 138.38 103.719C137.917 103.44 137.559 103.05 137.306 102.547C137.056 102.041 136.931 101.449 136.931 100.77C136.931 100.099 137.056 99.5085 137.306 98.9972C137.559 98.4858 137.911 98.0866 138.363 97.7997C138.818 97.5128 139.349 97.3693 139.957 97.3693C140.326 97.3693 140.684 97.4304 141.031 97.5526C141.377 97.6747 141.688 97.8665 141.964 98.1278C142.239 98.3892 142.457 98.7287 142.616 99.1463C142.775 99.5611 142.855 100.065 142.855 100.659V101.111H137.651V100.156H141.606C141.606 99.821 141.538 99.5241 141.401 99.2656C141.265 99.0043 141.073 98.7983 140.826 98.6477C140.582 98.4972 140.295 98.4219 139.965 98.4219C139.607 98.4219 139.295 98.5099 139.028 98.6861C138.764 98.8594 138.559 99.0866 138.414 99.3679C138.272 99.6463 138.201 99.9489 138.201 100.276V101.021C138.201 101.459 138.278 101.831 138.431 102.138C138.588 102.445 138.805 102.679 139.083 102.841C139.362 103 139.687 103.08 140.059 103.08C140.301 103.08 140.521 103.045 140.72 102.977C140.918 102.906 141.09 102.801 141.235 102.662C141.38 102.523 141.491 102.351 141.568 102.146L142.774 102.364C142.677 102.719 142.504 103.03 142.254 103.297C142.007 103.561 141.695 103.767 141.32 103.915C140.948 104.06 140.524 104.132 140.046 104.132ZM145.933 104.145C145.518 104.145 145.143 104.068 144.808 103.915C144.473 103.759 144.207 103.533 144.011 103.237C143.818 102.942 143.721 102.58 143.721 102.151C143.721 101.781 143.792 101.477 143.935 101.239C144.077 101 144.268 100.811 144.51 100.672C144.751 100.533 145.021 100.428 145.319 100.357C145.618 100.286 145.922 100.232 146.231 100.195C146.623 100.149 146.942 100.112 147.186 100.084C147.43 100.053 147.608 100.003 147.719 99.9347C147.829 99.8665 147.885 99.7557 147.885 99.6023V99.5724C147.885 99.2003 147.78 98.9119 147.569 98.7074C147.362 98.5028 147.052 98.4006 146.64 98.4006C146.211 98.4006 145.873 98.4957 145.626 98.6861C145.382 98.8736 145.213 99.0824 145.119 99.3125L143.922 99.0398C144.064 98.642 144.271 98.321 144.544 98.0767C144.819 97.8295 145.136 97.6506 145.494 97.5398C145.852 97.4261 146.229 97.3693 146.623 97.3693C146.885 97.3693 147.162 97.4006 147.454 97.4631C147.75 97.5227 148.025 97.6335 148.281 97.7955C148.54 97.9574 148.751 98.1889 148.916 98.4901C149.081 98.7884 149.163 99.1761 149.163 99.6534V104H147.919V103.105H147.868C147.785 103.27 147.662 103.432 147.497 103.591C147.332 103.75 147.121 103.882 146.862 103.987C146.604 104.092 146.294 104.145 145.933 104.145ZM146.21 103.122C146.562 103.122 146.863 103.053 147.113 102.913C147.366 102.774 147.558 102.592 147.689 102.368C147.822 102.141 147.889 101.898 147.889 101.639V100.795C147.844 100.841 147.756 100.884 147.625 100.923C147.497 100.96 147.351 100.993 147.186 101.021C147.021 101.047 146.861 101.071 146.704 101.094C146.548 101.114 146.417 101.131 146.312 101.145C146.065 101.176 145.839 101.229 145.635 101.303C145.433 101.376 145.271 101.483 145.149 101.622C145.03 101.759 144.97 101.94 144.97 102.168C144.97 102.483 145.086 102.722 145.319 102.884C145.552 103.043 145.849 103.122 146.21 103.122ZM151.894 95.2727V104H150.62V95.2727H151.894ZM156.424 97.4545V98.4773H152.849V97.4545H156.424ZM153.807 95.8864H155.082V102.078C155.082 102.325 155.119 102.511 155.192 102.636C155.266 102.759 155.361 102.842 155.478 102.888C155.597 102.93 155.727 102.952 155.866 102.952C155.968 102.952 156.057 102.945 156.134 102.93C156.211 102.916 156.271 102.905 156.313 102.896L156.543 103.949C156.469 103.977 156.364 104.006 156.228 104.034C156.092 104.065 155.921 104.082 155.717 104.085C155.381 104.091 155.069 104.031 154.779 103.906C154.489 103.781 154.255 103.588 154.076 103.327C153.897 103.065 153.807 102.737 153.807 102.342V95.8864ZM159.008 100.114V104H157.734V95.2727H158.991V98.5199H159.072C159.226 98.1676 159.46 97.8878 159.775 97.6804C160.091 97.473 160.503 97.3693 161.011 97.3693C161.46 97.3693 161.852 97.4616 162.187 97.6463C162.525 97.831 162.787 98.1065 162.971 98.473C163.159 98.8366 163.253 99.2912 163.253 99.8366V104H161.978V99.9901C161.978 99.5099 161.855 99.1378 161.608 98.8736C161.36 98.6065 161.017 98.473 160.576 98.473C160.275 98.473 160.005 98.5369 159.767 98.6648C159.531 98.7926 159.345 98.9801 159.208 99.2273C159.075 99.4716 159.008 99.767 159.008 100.114Z"
                                                        fill="#353535"
                                                    />
                                                </g>
                                                <g
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translateX(0px)",
                                                        transition: "all 400ms ease 1200ms"
                                                    }}
                                                >
                                                    <path
                                                        d="M35 135.143C35 138.84 31.9281 142 30 142C28.0719 142 25 138.84 25 135.143C25 132.303 27.2386 130 30 130C32.7614 130 35 132.303 35 135.143Z"
                                                        stroke="#969696"
                                                        strokeWidth="1.1"
                                                    />
                                                    <circle
                                                        cx={30}
                                                        cy={135}
                                                        r="1.75"
                                                        stroke="#969696"
                                                        strokeWidth="1.1"
                                                    />
                                                    <path
                                                        d="M50.7188 133.565C50.6733 133.162 50.4858 132.849 50.1562 132.628C49.8267 132.403 49.4119 132.291 48.9119 132.291C48.554 132.291 48.2443 132.348 47.983 132.462C47.7216 132.572 47.5185 132.726 47.3736 132.922C47.2315 133.115 47.1605 133.335 47.1605 133.582C47.1605 133.79 47.2088 133.969 47.3054 134.119C47.4048 134.27 47.5341 134.396 47.6932 134.499C47.8551 134.598 48.0284 134.682 48.2131 134.75C48.3977 134.815 48.5753 134.869 48.7457 134.912L49.598 135.134C49.8764 135.202 50.1619 135.294 50.4545 135.411C50.7472 135.527 51.0185 135.68 51.2685 135.871C51.5185 136.061 51.7202 136.297 51.8736 136.578C52.0298 136.859 52.108 137.196 52.108 137.588C52.108 138.082 51.9801 138.521 51.7244 138.905C51.4716 139.288 51.1037 139.591 50.6207 139.812C50.1406 140.034 49.5597 140.145 48.8778 140.145C48.2244 140.145 47.6591 140.041 47.1818 139.834C46.7045 139.626 46.331 139.332 46.0611 138.952C45.7912 138.568 45.642 138.114 45.6136 137.588H46.9347C46.9602 137.903 47.0625 138.166 47.2415 138.376C47.4233 138.584 47.6548 138.739 47.9361 138.841C48.2202 138.94 48.5312 138.99 48.8693 138.99C49.2415 138.99 49.5724 138.932 49.8622 138.815C50.1548 138.696 50.3849 138.531 50.5526 138.321C50.7202 138.108 50.804 137.859 50.804 137.575C50.804 137.317 50.7301 137.105 50.5824 136.94C50.4375 136.776 50.2401 136.639 49.9901 136.531C49.7429 136.423 49.4631 136.328 49.1506 136.246L48.1193 135.964C47.4205 135.774 46.8665 135.494 46.4574 135.125C46.0511 134.756 45.848 134.267 45.848 133.659C45.848 133.156 45.9844 132.717 46.2571 132.342C46.5298 131.967 46.8991 131.676 47.3651 131.469C47.831 131.259 48.3565 131.153 48.9418 131.153C49.5327 131.153 50.054 131.257 50.5057 131.464C50.9602 131.672 51.3182 131.957 51.5795 132.321C51.8409 132.682 51.9773 133.097 51.9886 133.565H50.7188ZM55.244 140.145C54.8292 140.145 54.4542 140.068 54.119 139.915C53.7838 139.759 53.5182 139.533 53.3221 139.237C53.129 138.942 53.0324 138.58 53.0324 138.151C53.0324 137.781 53.1034 137.477 53.2454 137.239C53.3875 137 53.5792 136.811 53.8207 136.672C54.0622 136.533 54.3321 136.428 54.6304 136.357C54.9287 136.286 55.2327 136.232 55.5423 136.195C55.9344 136.149 56.2525 136.112 56.4969 136.084C56.7412 136.053 56.9187 136.003 57.0295 135.935C57.1403 135.866 57.1957 135.756 57.1957 135.602V135.572C57.1957 135.2 57.0906 134.912 56.8804 134.707C56.673 134.503 56.3633 134.401 55.9514 134.401C55.5224 134.401 55.1844 134.496 54.9372 134.686C54.6929 134.874 54.5238 135.082 54.4301 135.312L53.2327 135.04C53.3747 134.642 53.5821 134.321 53.8548 134.077C54.1304 133.83 54.4471 133.651 54.8051 133.54C55.1631 133.426 55.5395 133.369 55.9344 133.369C56.1957 133.369 56.4727 133.401 56.7653 133.463C57.0608 133.523 57.3363 133.634 57.592 133.795C57.8506 133.957 58.0622 134.189 58.227 134.49C58.3917 134.788 58.4741 135.176 58.4741 135.653V140H57.2298V139.105H57.1787C57.0963 139.27 56.9727 139.432 56.8079 139.591C56.6432 139.75 56.4315 139.882 56.173 139.987C55.9145 140.092 55.6048 140.145 55.244 140.145ZM55.521 139.122C55.8733 139.122 56.1744 139.053 56.4244 138.913C56.6773 138.774 56.869 138.592 56.9997 138.368C57.1332 138.141 57.2 137.898 57.2 137.639V136.795C57.1545 136.841 57.0665 136.884 56.9358 136.923C56.8079 136.96 56.6616 136.993 56.4969 137.021C56.3321 137.047 56.1716 137.071 56.0153 137.094C55.8591 137.114 55.7284 137.131 55.6233 137.145C55.3761 137.176 55.1503 137.229 54.9457 137.303C54.744 137.376 54.5821 137.483 54.4599 137.622C54.3406 137.759 54.281 137.94 54.281 138.168C54.281 138.483 54.3974 138.722 54.6304 138.884C54.8633 139.043 55.1602 139.122 55.521 139.122ZM61.2054 136.114V140H59.9312V133.455H61.1542V134.52H61.2352C61.3858 134.173 61.6216 133.895 61.9426 133.685C62.2664 133.474 62.6741 133.369 63.1656 133.369C63.6116 133.369 64.0022 133.463 64.3375 133.651C64.6727 133.835 64.9326 134.111 65.1173 134.477C65.302 134.844 65.3943 135.297 65.3943 135.837V140H64.1201V135.99C64.1201 135.516 63.9966 135.145 63.7494 134.878C63.5022 134.608 63.1628 134.473 62.7309 134.473C62.4355 134.473 62.1727 134.537 61.9426 134.665C61.7153 134.793 61.5349 134.98 61.4014 135.227C61.2707 135.472 61.2054 135.767 61.2054 136.114ZM69.9012 140V131.273H75.3131V132.406H71.2179V135.065H74.9253V136.195H71.2179V140H69.9012ZM76.5081 140V133.455H77.7396V134.494H77.8078C77.9271 134.142 78.1374 133.865 78.4385 133.663C78.7425 133.459 79.0862 133.357 79.4697 133.357C79.5493 133.357 79.643 133.359 79.751 133.365C79.8618 133.371 79.9484 133.378 80.0109 133.386V134.605C79.9598 134.591 79.8689 134.575 79.7382 134.558C79.6075 134.538 79.4768 134.528 79.3462 134.528C79.045 134.528 78.7766 134.592 78.5408 134.72C78.3078 134.845 78.1232 135.02 77.9868 135.244C77.8504 135.466 77.7822 135.719 77.7822 136.003V140H76.5081ZM82.7198 140.145C82.305 140.145 81.93 140.068 81.5948 139.915C81.2596 139.759 80.994 139.533 80.7979 139.237C80.6047 138.942 80.5082 138.58 80.5082 138.151C80.5082 137.781 80.5792 137.477 80.7212 137.239C80.8633 137 81.055 136.811 81.2965 136.672C81.538 136.533 81.8079 136.428 82.1062 136.357C82.4045 136.286 82.7084 136.232 83.0181 136.195C83.4101 136.149 83.7283 136.112 83.9726 136.084C84.217 136.053 84.3945 136.003 84.5053 135.935C84.6161 135.866 84.6715 135.756 84.6715 135.602V135.572C84.6715 135.2 84.5664 134.912 84.3562 134.707C84.1488 134.503 83.8391 134.401 83.4272 134.401C82.9982 134.401 82.6601 134.496 82.413 134.686C82.1687 134.874 81.9996 135.082 81.9059 135.312L80.7084 135.04C80.8505 134.642 81.0579 134.321 81.3306 134.077C81.6062 133.83 81.9229 133.651 82.2809 133.54C82.6388 133.426 83.0153 133.369 83.4101 133.369C83.6715 133.369 83.9485 133.401 84.2411 133.463C84.5366 133.523 84.8121 133.634 85.0678 133.795C85.3263 133.957 85.538 134.189 85.7028 134.49C85.8675 134.788 85.9499 135.176 85.9499 135.653V140H84.7056V139.105H84.6545C84.5721 139.27 84.4485 139.432 84.2837 139.591C84.119 139.75 83.9073 139.882 83.6488 139.987C83.3903 140.092 83.0806 140.145 82.7198 140.145ZM82.9968 139.122C83.3491 139.122 83.6502 139.053 83.9002 138.913C84.153 138.774 84.3448 138.592 84.4755 138.368C84.609 138.141 84.6758 137.898 84.6758 137.639V136.795C84.6303 136.841 84.5422 136.884 84.4116 136.923C84.2837 136.96 84.1374 136.993 83.9726 137.021C83.8079 137.047 83.6474 137.071 83.4911 137.094C83.3349 137.114 83.2042 137.131 83.0991 137.145C82.8519 137.176 82.6261 137.229 82.4215 137.303C82.2198 137.376 82.0579 137.483 81.9357 137.622C81.8164 137.759 81.7567 137.94 81.7567 138.168C81.7567 138.483 81.8732 138.722 82.1062 138.884C82.3391 139.043 82.636 139.122 82.9968 139.122ZM88.6812 136.114V140H87.407V133.455H88.63V134.52H88.711C88.8615 134.173 89.0973 133.895 89.4184 133.685C89.7422 133.474 90.1499 133.369 90.6414 133.369C91.0874 133.369 91.478 133.463 91.8133 133.651C92.1485 133.835 92.4084 134.111 92.5931 134.477C92.7777 134.844 92.8701 135.297 92.8701 135.837V140H91.5959V135.99C91.5959 135.516 91.4723 135.145 91.2252 134.878C90.978 134.608 90.6385 134.473 90.2067 134.473C89.9113 134.473 89.6485 134.537 89.4184 134.665C89.1911 134.793 89.0107 134.98 88.8772 135.227C88.7465 135.472 88.6812 135.767 88.6812 136.114ZM97.096 140.132C96.4625 140.132 95.917 139.989 95.4596 139.702C95.0051 139.412 94.6556 139.013 94.4113 138.504C94.167 137.996 94.0448 137.413 94.0448 136.757C94.0448 136.092 94.1698 135.506 94.4198 134.997C94.6698 134.486 95.0221 134.087 95.4767 133.8C95.9312 133.513 96.4667 133.369 97.0832 133.369C97.5804 133.369 98.0235 133.462 98.4127 133.646C98.8019 133.828 99.1159 134.084 99.3545 134.413C99.596 134.743 99.7394 135.128 99.7849 135.568H98.5448C98.4767 135.261 98.3204 134.997 98.0761 134.776C97.8346 134.554 97.5108 134.443 97.1045 134.443C96.7494 134.443 96.4383 134.537 96.1713 134.724C95.9071 134.909 95.7011 135.173 95.5534 135.517C95.4056 135.858 95.3318 136.261 95.3318 136.727C95.3318 137.205 95.4042 137.616 95.5491 137.963C95.694 138.31 95.8985 138.578 96.1627 138.768C96.4298 138.959 96.7437 139.054 97.1045 139.054C97.346 139.054 97.5647 139.01 97.7608 138.922C97.9596 138.831 98.1258 138.702 98.2593 138.534C98.3957 138.366 98.4909 138.165 98.5448 137.929H99.7849C99.7394 138.352 99.6017 138.73 99.3716 139.062C99.1414 139.395 98.8332 139.656 98.4468 139.847C98.0633 140.037 97.613 140.132 97.096 140.132ZM100.907 140V133.455H102.182V140H100.907ZM101.551 132.445C101.329 132.445 101.139 132.371 100.98 132.223C100.824 132.072 100.746 131.893 100.746 131.686C100.746 131.476 100.824 131.297 100.98 131.149C101.139 130.999 101.329 130.923 101.551 130.923C101.773 130.923 101.961 130.999 102.118 131.149C102.277 131.297 102.356 131.476 102.356 131.686C102.356 131.893 102.277 132.072 102.118 132.223C101.961 132.371 101.773 132.445 101.551 132.445ZM108.561 135.053L107.406 135.257C107.357 135.109 107.281 134.969 107.176 134.835C107.073 134.702 106.934 134.592 106.758 134.507C106.582 134.422 106.362 134.379 106.098 134.379C105.737 134.379 105.436 134.46 105.194 134.622C104.953 134.781 104.832 134.987 104.832 135.24C104.832 135.459 104.913 135.635 105.075 135.768C105.237 135.902 105.498 136.011 105.859 136.097L106.899 136.335C107.501 136.474 107.95 136.689 108.245 136.979C108.541 137.268 108.688 137.645 108.688 138.108C108.688 138.5 108.575 138.849 108.348 139.156C108.123 139.46 107.809 139.699 107.406 139.872C107.005 140.045 106.541 140.132 106.012 140.132C105.279 140.132 104.681 139.976 104.218 139.663C103.755 139.348 103.471 138.901 103.366 138.321L104.598 138.134C104.674 138.455 104.832 138.697 105.071 138.862C105.309 139.024 105.62 139.105 106.004 139.105C106.421 139.105 106.755 139.018 107.005 138.845C107.255 138.669 107.38 138.455 107.38 138.202C107.38 137.997 107.303 137.825 107.15 137.686C107 137.547 106.768 137.442 106.455 137.371L105.348 137.128C104.737 136.989 104.285 136.767 103.992 136.463C103.703 136.159 103.558 135.774 103.558 135.308C103.558 134.922 103.666 134.584 103.882 134.294C104.098 134.004 104.396 133.778 104.776 133.616C105.157 133.452 105.593 133.369 106.085 133.369C106.792 133.369 107.349 133.523 107.755 133.83C108.161 134.134 108.43 134.541 108.561 135.053ZM112.606 140.132C111.973 140.132 111.427 139.989 110.97 139.702C110.516 139.412 110.166 139.013 109.922 138.504C109.677 137.996 109.555 137.413 109.555 136.757C109.555 136.092 109.68 135.506 109.93 134.997C110.18 134.486 110.533 134.087 110.987 133.8C111.442 133.513 111.977 133.369 112.594 133.369C113.091 133.369 113.534 133.462 113.923 133.646C114.312 133.828 114.626 134.084 114.865 134.413C115.106 134.743 115.25 135.128 115.295 135.568H114.055C113.987 135.261 113.831 134.997 113.587 134.776C113.345 134.554 113.021 134.443 112.615 134.443C112.26 134.443 111.949 134.537 111.682 134.724C111.418 134.909 111.212 135.173 111.064 135.517C110.916 135.858 110.842 136.261 110.842 136.727C110.842 137.205 110.915 137.616 111.06 137.963C111.204 138.31 111.409 138.578 111.673 138.768C111.94 138.959 112.254 139.054 112.615 139.054C112.856 139.054 113.075 139.01 113.271 138.922C113.47 138.831 113.636 138.702 113.77 138.534C113.906 138.366 114.001 138.165 114.055 137.929H115.295C115.25 138.352 115.112 138.73 114.882 139.062C114.652 139.395 114.344 139.656 113.957 139.847C113.574 140.037 113.123 140.132 112.606 140.132ZM119.175 140.132C118.561 140.132 118.026 139.991 117.569 139.71C117.111 139.429 116.756 139.036 116.503 138.53C116.25 138.024 116.124 137.433 116.124 136.757C116.124 136.078 116.25 135.484 116.503 134.976C116.756 134.467 117.111 134.072 117.569 133.791C118.026 133.51 118.561 133.369 119.175 133.369C119.789 133.369 120.324 133.51 120.782 133.791C121.239 134.072 121.594 134.467 121.847 134.976C122.1 135.484 122.226 136.078 122.226 136.757C122.226 137.433 122.1 138.024 121.847 138.53C121.594 139.036 121.239 139.429 120.782 139.71C120.324 139.991 119.789 140.132 119.175 140.132ZM119.179 139.062C119.577 139.062 119.907 138.957 120.168 138.747C120.429 138.537 120.622 138.257 120.747 137.908C120.875 137.558 120.939 137.173 120.939 136.753C120.939 136.335 120.875 135.952 120.747 135.602C120.622 135.25 120.429 134.967 120.168 134.754C119.907 134.541 119.577 134.435 119.179 134.435C118.779 134.435 118.446 134.541 118.182 134.754C117.921 134.967 117.726 135.25 117.598 135.602C117.473 135.952 117.411 136.335 117.411 136.753C117.411 137.173 117.473 137.558 117.598 137.908C117.726 138.257 117.921 138.537 118.182 138.747C118.446 138.957 118.779 139.062 119.179 139.062ZM125.066 138.807L125.002 139.271C124.96 139.612 124.887 139.967 124.785 140.337C124.685 140.709 124.582 141.054 124.474 141.372C124.369 141.69 124.282 141.943 124.214 142.131H123.31C123.347 141.955 123.398 141.716 123.464 141.415C123.529 141.116 123.593 140.783 123.656 140.413C123.718 140.044 123.765 139.668 123.796 139.284L123.839 138.807H125.066ZM129.523 140V131.273H132.719C133.338 131.273 133.851 131.375 134.257 131.58C134.663 131.781 134.967 132.055 135.169 132.402C135.371 132.746 135.472 133.134 135.472 133.565C135.472 133.929 135.405 134.236 135.271 134.486C135.138 134.733 134.959 134.932 134.735 135.082C134.513 135.23 134.269 135.338 134.002 135.406V135.491C134.291 135.506 134.574 135.599 134.85 135.773C135.128 135.943 135.358 136.186 135.54 136.501C135.722 136.817 135.813 137.2 135.813 137.652C135.813 138.098 135.708 138.499 135.497 138.854C135.29 139.206 134.969 139.486 134.534 139.693C134.1 139.898 133.544 140 132.868 140H129.523ZM130.84 138.871H132.74C133.371 138.871 133.823 138.749 134.095 138.504C134.368 138.26 134.504 137.955 134.504 137.588C134.504 137.312 134.435 137.06 134.296 136.83C134.156 136.599 133.958 136.416 133.699 136.28C133.443 136.143 133.139 136.075 132.787 136.075H130.84V138.871ZM130.84 135.048H132.604C132.899 135.048 133.165 134.991 133.401 134.878C133.639 134.764 133.828 134.605 133.967 134.401C134.11 134.193 134.181 133.949 134.181 133.668C134.181 133.307 134.054 133.004 133.801 132.76C133.548 132.516 133.161 132.393 132.638 132.393H130.84V135.048ZM138.937 140.145C138.522 140.145 138.147 140.068 137.812 139.915C137.477 139.759 137.211 139.533 137.015 139.237C136.822 138.942 136.725 138.58 136.725 138.151C136.725 137.781 136.796 137.477 136.938 137.239C137.08 137 137.272 136.811 137.514 136.672C137.755 136.533 138.025 136.428 138.323 136.357C138.622 136.286 138.926 136.232 139.235 136.195C139.627 136.149 139.946 136.112 140.19 136.084C140.434 136.053 140.612 136.003 140.723 135.935C140.833 135.866 140.889 135.756 140.889 135.602V135.572C140.889 135.2 140.784 134.912 140.573 134.707C140.366 134.503 140.056 134.401 139.644 134.401C139.215 134.401 138.877 134.496 138.63 134.686C138.386 134.874 138.217 135.082 138.123 135.312L136.926 135.04C137.068 134.642 137.275 134.321 137.548 134.077C137.823 133.83 138.14 133.651 138.498 133.54C138.856 133.426 139.232 133.369 139.627 133.369C139.889 133.369 140.166 133.401 140.458 133.463C140.754 133.523 141.029 133.634 141.285 133.795C141.544 133.957 141.755 134.189 141.92 134.49C142.085 134.788 142.167 135.176 142.167 135.653V140H140.923V139.105H140.872C140.789 139.27 140.666 139.432 140.501 139.591C140.336 139.75 140.124 139.882 139.866 139.987C139.607 140.092 139.298 140.145 138.937 140.145ZM139.214 139.122C139.566 139.122 139.867 139.053 140.117 138.913C140.37 138.774 140.562 138.592 140.693 138.368C140.826 138.141 140.893 137.898 140.893 137.639V136.795C140.848 136.841 140.759 136.884 140.629 136.923C140.501 136.96 140.355 136.993 140.19 137.021C140.025 137.047 139.865 137.071 139.708 137.094C139.552 137.114 139.421 137.131 139.316 137.145C139.069 137.176 138.843 137.229 138.639 137.303C138.437 137.376 138.275 137.483 138.153 137.622C138.034 137.759 137.974 137.94 137.974 138.168C137.974 138.483 138.09 138.722 138.323 138.884C138.556 139.043 138.853 139.122 139.214 139.122ZM144.195 142.455C144.005 142.455 143.832 142.439 143.675 142.408C143.519 142.379 143.403 142.348 143.326 142.314L143.633 141.27C143.866 141.332 144.073 141.359 144.255 141.351C144.437 141.342 144.597 141.274 144.736 141.146C144.878 141.018 145.003 140.81 145.111 140.52L145.269 140.085L142.874 133.455H144.238L145.895 138.534H145.964L147.621 133.455H148.989L146.292 140.874C146.167 141.214 146.008 141.503 145.815 141.739C145.621 141.977 145.391 142.156 145.124 142.276C144.857 142.395 144.547 142.455 144.195 142.455ZM153.722 140H152.324L155.465 131.273H156.986L160.127 140H158.729L156.262 132.858H156.194L153.722 140ZM153.956 136.582H158.49V137.69H153.956V136.582ZM161.045 140V133.455H162.276V134.494H162.345C162.464 134.142 162.674 133.865 162.975 133.663C163.279 133.459 163.623 133.357 164.006 133.357C164.086 133.357 164.18 133.359 164.288 133.365C164.399 133.371 164.485 133.378 164.548 133.386V134.605C164.497 134.591 164.406 134.575 164.275 134.558C164.144 134.538 164.014 134.528 163.883 134.528C163.582 134.528 163.313 134.592 163.077 134.72C162.845 134.845 162.66 135.02 162.524 135.244C162.387 135.466 162.319 135.719 162.319 136.003V140H161.045ZM167.997 140.132C167.352 140.132 166.797 139.994 166.331 139.719C165.868 139.44 165.51 139.05 165.257 138.547C165.007 138.041 164.882 137.449 164.882 136.77C164.882 136.099 165.007 135.509 165.257 134.997C165.51 134.486 165.862 134.087 166.314 133.8C166.768 133.513 167.299 133.369 167.907 133.369C168.277 133.369 168.635 133.43 168.981 133.553C169.328 133.675 169.639 133.866 169.915 134.128C170.19 134.389 170.407 134.729 170.567 135.146C170.726 135.561 170.805 136.065 170.805 136.659V137.111H165.602V136.156H169.557C169.557 135.821 169.488 135.524 169.352 135.266C169.216 135.004 169.024 134.798 168.777 134.648C168.532 134.497 168.246 134.422 167.916 134.422C167.558 134.422 167.246 134.51 166.978 134.686C166.714 134.859 166.51 135.087 166.365 135.368C166.223 135.646 166.152 135.949 166.152 136.276V137.021C166.152 137.459 166.228 137.831 166.382 138.138C166.538 138.445 166.755 138.679 167.034 138.841C167.312 139 167.638 139.08 168.01 139.08C168.251 139.08 168.471 139.045 168.67 138.977C168.869 138.906 169.041 138.801 169.186 138.662C169.331 138.523 169.442 138.351 169.518 138.146L170.724 138.364C170.628 138.719 170.454 139.03 170.204 139.297C169.957 139.561 169.646 139.767 169.271 139.915C168.899 140.06 168.474 140.132 167.997 140.132ZM173.884 140.145C173.469 140.145 173.094 140.068 172.759 139.915C172.423 139.759 172.158 139.533 171.962 139.237C171.769 138.942 171.672 138.58 171.672 138.151C171.672 137.781 171.743 137.477 171.885 137.239C172.027 137 172.219 136.811 172.46 136.672C172.702 136.533 172.972 136.428 173.27 136.357C173.568 136.286 173.872 136.232 174.182 136.195C174.574 136.149 174.892 136.112 175.137 136.084C175.381 136.053 175.558 136.003 175.669 135.935C175.78 135.866 175.835 135.756 175.835 135.602V135.572C175.835 135.2 175.73 134.912 175.52 134.707C175.313 134.503 175.003 134.401 174.591 134.401C174.162 134.401 173.824 134.496 173.577 134.686C173.333 134.874 173.164 135.082 173.07 135.312L171.872 135.04C172.014 134.642 172.222 134.321 172.495 134.077C172.77 133.83 173.087 133.651 173.445 133.54C173.803 133.426 174.179 133.369 174.574 133.369C174.835 133.369 175.112 133.401 175.405 133.463C175.7 133.523 175.976 133.634 176.232 133.795C176.49 133.957 176.702 134.189 176.867 134.49C177.031 134.788 177.114 135.176 177.114 135.653V140H175.87V139.105H175.818C175.736 139.27 175.612 139.432 175.448 139.591C175.283 139.75 175.071 139.882 174.813 139.987C174.554 140.092 174.245 140.145 173.884 140.145ZM174.161 139.122C174.513 139.122 174.814 139.053 175.064 138.913C175.317 138.774 175.509 138.592 175.639 138.368C175.773 138.141 175.84 137.898 175.84 137.639V136.795C175.794 136.841 175.706 136.884 175.575 136.923C175.448 136.96 175.301 136.993 175.137 137.021C174.972 137.047 174.811 137.071 174.655 137.094C174.499 137.114 174.368 137.131 174.263 137.145C174.016 137.176 173.79 137.229 173.585 137.303C173.384 137.376 173.222 137.483 173.1 137.622C172.98 137.759 172.921 137.94 172.921 138.168C172.921 138.483 173.037 138.722 173.27 138.884C173.503 139.043 173.8 139.122 174.161 139.122Z"
                                                        fill="#353535"
                                                    />
                                                </g>
                                                <g
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translateX(0px)",
                                                        transition: "all 400ms ease 1300ms"
                                                    }}
                                                >
                                                    <g clipPath="url(#clip0_0_1)">
                                                        <path
                                                            d="M24.5 170.5C24.5 169.1 24.5 168.4 24.7725 167.865C25.0122 167.395 25.3946 167.012 25.865 166.772C26.3998 166.5 27.0999 166.5 28.5 166.5H30H31.5C32.9001 166.5 33.6002 166.5 34.135 166.772C34.6054 167.012 34.9878 167.395 35.2275 167.865C35.5 168.4 35.5 169.1 35.5 170.5V173.5C35.5 174.9 35.5 175.6 35.2275 176.135C34.9878 176.606 34.6054 176.988 34.135 177.228C33.6002 177.5 32.9001 177.5 31.5 177.5H30H28.5C27.0999 177.5 26.3998 177.5 25.865 177.228C25.3946 176.988 25.0122 176.606 24.7725 176.135C24.5 175.6 24.5 174.9 24.5 173.5V170.5Z"
                                                            stroke="#969696"
                                                            strokeWidth="1.1"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M29.4922 174.37V172.847C29.4922 172.006 30.1741 171.324 31.0153 171.324C31.8564 171.324 32.5383 172.006 32.5383 172.847V174.37"
                                                            stroke="#969696"
                                                            strokeWidth="1.1"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M29.4922 171.324V174.37"
                                                            stroke="#969696"
                                                            strokeWidth="1.1"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M27.4609 171.324V174.37"
                                                            stroke="#969696"
                                                            strokeWidth="1.1"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M27.4609 169.461V169.529"
                                                            stroke="#969696"
                                                            strokeWidth="1.1"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M53.1307 167.273V176H51.8565V167.273H53.1307ZM54.8448 176V169.455H56.119V176H54.8448ZM55.4883 168.445C55.2667 168.445 55.0763 168.371 54.9173 168.223C54.761 168.072 54.6829 167.893 54.6829 167.686C54.6829 167.476 54.761 167.297 54.9173 167.149C55.0763 166.999 55.2667 166.923 55.4883 166.923C55.7099 166.923 55.8988 166.999 56.055 167.149C56.2141 167.297 56.2937 167.476 56.2937 167.686C56.2937 167.893 56.2141 168.072 56.055 168.223C55.8988 168.371 55.7099 168.445 55.4883 168.445ZM59.1072 172.114V176H57.8331V169.455H59.0561V170.52H59.1371C59.2876 170.173 59.5234 169.895 59.8445 169.685C60.1683 169.474 60.576 169.369 61.0675 169.369C61.5135 169.369 61.9041 169.463 62.2393 169.651C62.5746 169.835 62.8345 170.111 63.0192 170.477C63.2038 170.844 63.2962 171.297 63.2962 171.837V176H62.022V171.99C62.022 171.516 61.8984 171.145 61.6513 170.878C61.4041 170.608 61.0646 170.473 60.6328 170.473C60.3374 170.473 60.0746 170.537 59.8445 170.665C59.6172 170.793 59.4368 170.98 59.3033 171.227C59.1726 171.472 59.1072 171.767 59.1072 172.114ZM66.1768 173.78L66.1683 172.224H66.3899L68.9979 169.455H70.5234L67.549 172.608H67.3487L66.1768 173.78ZM65.005 176V167.273H66.2791V176H65.005ZM69.1385 176L66.7947 172.889L67.6726 171.999L70.7024 176H69.1385ZM74.2362 176.132C73.5913 176.132 73.0359 175.994 72.57 175.719C72.1069 175.44 71.7489 175.05 71.4961 174.547C71.2461 174.041 71.1211 173.449 71.1211 172.77C71.1211 172.099 71.2461 171.509 71.4961 170.997C71.7489 170.486 72.1012 170.087 72.5529 169.8C73.0075 169.513 73.5387 169.369 74.1467 169.369C74.516 169.369 74.8739 169.43 75.2205 169.553C75.5671 169.675 75.8782 169.866 76.1538 170.128C76.4293 170.389 76.6467 170.729 76.8058 171.146C76.9648 171.561 77.0444 172.065 77.0444 172.659V173.111H71.8413V172.156H75.7958C75.7958 171.821 75.7276 171.524 75.5913 171.266C75.4549 171.004 75.2631 170.798 75.016 170.648C74.7717 170.497 74.4847 170.422 74.1552 170.422C73.7972 170.422 73.4847 170.51 73.2177 170.686C72.9535 170.859 72.7489 171.087 72.604 171.368C72.462 171.646 72.391 171.949 72.391 172.276V173.021C72.391 173.459 72.4677 173.831 72.6211 174.138C72.7773 174.445 72.9947 174.679 73.2731 174.841C73.5515 175 73.8768 175.08 74.2489 175.08C74.4904 175.08 74.7106 175.045 74.9094 174.977C75.1083 174.906 75.2802 174.801 75.4251 174.662C75.57 174.523 75.6808 174.351 75.7575 174.146L76.9634 174.364C76.8668 174.719 76.6935 175.03 76.4435 175.297C76.1964 175.561 75.8853 175.767 75.5103 175.915C75.1381 176.06 74.7134 176.132 74.2362 176.132ZM80.9084 176.128C80.38 176.128 79.9084 175.993 79.4936 175.723C79.0817 175.45 78.7578 175.062 78.522 174.56C78.2891 174.054 78.1726 173.447 78.1726 172.74C78.1726 172.033 78.2905 171.428 78.5263 170.925C78.7649 170.422 79.0916 170.037 79.5064 169.77C79.9212 169.503 80.3913 169.369 80.9169 169.369C81.3232 169.369 81.6499 169.438 81.897 169.574C82.147 169.707 82.3402 169.864 82.4766 170.043C82.6158 170.222 82.7237 170.379 82.8004 170.516H82.8771V167.273H84.1513V176H82.907V174.982H82.8004C82.7237 175.121 82.6129 175.28 82.468 175.459C82.326 175.638 82.13 175.794 81.88 175.928C81.63 176.061 81.3061 176.128 80.9084 176.128ZM81.1896 175.041C81.5561 175.041 81.8658 174.945 82.1186 174.751C82.3743 174.555 82.5675 174.284 82.6982 173.938C82.8317 173.591 82.8984 173.187 82.8984 172.727C82.8984 172.273 82.8331 171.875 82.7024 171.534C82.5717 171.193 82.38 170.928 82.1271 170.737C81.8743 170.547 81.5618 170.452 81.1896 170.452C80.8061 170.452 80.4865 170.551 80.2308 170.75C79.9751 170.949 79.782 171.22 79.6513 171.564C79.5234 171.908 79.4595 172.295 79.4595 172.727C79.4595 173.165 79.5249 173.558 79.6555 173.908C79.7862 174.257 79.9794 174.534 80.2351 174.739C80.4936 174.94 80.8118 175.041 81.1896 175.041ZM85.9698 176V169.455H87.244V176H85.9698ZM86.6133 168.445C86.3917 168.445 86.2013 168.371 86.0423 168.223C85.886 168.072 85.8079 167.893 85.8079 167.686C85.8079 167.476 85.886 167.297 86.0423 167.149C86.2013 166.999 86.3917 166.923 86.6133 166.923C86.8349 166.923 87.0238 166.999 87.18 167.149C87.3391 167.297 87.4187 167.476 87.4187 167.686C87.4187 167.893 87.3391 168.072 87.18 168.223C87.0238 168.371 86.8349 168.445 86.6133 168.445ZM90.2322 172.114V176H88.9581V169.455H90.1811V170.52H90.2621C90.4126 170.173 90.6484 169.895 90.9695 169.685C91.2933 169.474 91.701 169.369 92.1925 169.369C92.6385 169.369 93.0291 169.463 93.3643 169.651C93.6996 169.835 93.9595 170.111 94.1442 170.477C94.3288 170.844 94.4212 171.297 94.4212 171.837V176H93.147V171.99C93.147 171.516 93.0234 171.145 92.7763 170.878C92.5291 170.608 92.1896 170.473 91.7578 170.473C91.4624 170.473 91.1996 170.537 90.9695 170.665C90.7422 170.793 90.5618 170.98 90.4283 171.227C90.2976 171.472 90.2322 171.767 90.2322 172.114ZM96.9695 176.081C96.7365 176.081 96.5362 175.999 96.3686 175.834C96.201 175.666 96.1172 175.464 96.1172 175.229C96.1172 174.996 96.201 174.797 96.3686 174.632C96.5362 174.464 96.7365 174.381 96.9695 174.381C97.2024 174.381 97.4027 174.464 97.5703 174.632C97.7379 174.797 97.8217 174.996 97.8217 175.229C97.8217 175.385 97.782 175.528 97.7024 175.659C97.6257 175.787 97.5234 175.889 97.3956 175.966C97.2678 176.043 97.1257 176.081 96.9695 176.081ZM102.286 176.132C101.652 176.132 101.107 175.989 100.649 175.702C100.195 175.412 99.8452 175.013 99.6009 174.504C99.3565 173.996 99.2344 173.413 99.2344 172.757C99.2344 172.092 99.3594 171.506 99.6094 170.997C99.8594 170.486 100.212 170.087 100.666 169.8C101.121 169.513 101.656 169.369 102.273 169.369C102.77 169.369 103.213 169.462 103.602 169.646C103.991 169.828 104.305 170.084 104.544 170.413C104.786 170.743 104.929 171.128 104.974 171.568H103.734C103.666 171.261 103.51 170.997 103.266 170.776C103.024 170.554 102.7 170.443 102.294 170.443C101.939 170.443 101.628 170.537 101.361 170.724C101.097 170.909 100.891 171.173 100.743 171.517C100.595 171.858 100.521 172.261 100.521 172.727C100.521 173.205 100.594 173.616 100.739 173.963C100.884 174.31 101.088 174.578 101.352 174.768C101.619 174.959 101.933 175.054 102.294 175.054C102.536 175.054 102.754 175.01 102.95 174.922C103.149 174.831 103.315 174.702 103.449 174.534C103.585 174.366 103.68 174.165 103.734 173.929H104.974C104.929 174.352 104.791 174.73 104.561 175.062C104.331 175.395 104.023 175.656 103.636 175.847C103.253 176.037 102.803 176.132 102.286 176.132ZM109.094 176.132C108.48 176.132 107.945 175.991 107.488 175.71C107.03 175.429 106.675 175.036 106.422 174.53C106.169 174.024 106.043 173.433 106.043 172.757C106.043 172.078 106.169 171.484 106.422 170.976C106.675 170.467 107.03 170.072 107.488 169.791C107.945 169.51 108.48 169.369 109.094 169.369C109.708 169.369 110.243 169.51 110.701 169.791C111.158 170.072 111.513 170.467 111.766 170.976C112.019 171.484 112.145 172.078 112.145 172.757C112.145 173.433 112.019 174.024 111.766 174.53C111.513 175.036 111.158 175.429 110.701 175.71C110.243 175.991 109.708 176.132 109.094 176.132ZM109.098 175.062C109.496 175.062 109.826 174.957 110.087 174.747C110.348 174.537 110.542 174.257 110.667 173.908C110.794 173.558 110.858 173.173 110.858 172.753C110.858 172.335 110.794 171.952 110.667 171.602C110.542 171.25 110.348 170.967 110.087 170.754C109.826 170.541 109.496 170.435 109.098 170.435C108.698 170.435 108.365 170.541 108.101 170.754C107.84 170.967 107.645 171.25 107.517 171.602C107.392 171.952 107.33 172.335 107.33 172.753C107.33 173.173 107.392 173.558 107.517 173.908C107.645 174.257 107.84 174.537 108.101 174.747C108.365 174.957 108.698 175.062 109.098 175.062ZM113.567 176V169.455H114.79V170.52H114.871C115.008 170.159 115.231 169.878 115.54 169.676C115.85 169.472 116.221 169.369 116.653 169.369C117.09 169.369 117.457 169.472 117.752 169.676C118.05 169.881 118.271 170.162 118.413 170.52H118.481C118.637 170.17 118.886 169.892 119.227 169.685C119.567 169.474 119.974 169.369 120.445 169.369C121.039 169.369 121.523 169.555 121.898 169.928C122.276 170.3 122.465 170.861 122.465 171.611V176H121.191V171.73C121.191 171.287 121.07 170.966 120.829 170.767C120.587 170.568 120.299 170.469 119.964 170.469C119.549 170.469 119.227 170.597 118.996 170.852C118.766 171.105 118.651 171.43 118.651 171.828V176H117.381V171.649C117.381 171.294 117.271 171.009 117.049 170.793C116.827 170.577 116.539 170.469 116.184 170.469C115.942 170.469 115.719 170.533 115.515 170.661C115.313 170.786 115.15 170.96 115.025 171.185C114.903 171.409 114.842 171.669 114.842 171.964V176H113.567ZM127.497 166.864L124.684 177.312H123.547L126.359 166.864H127.497ZM133.484 171.053L132.329 171.257C132.281 171.109 132.204 170.969 132.099 170.835C131.997 170.702 131.858 170.592 131.681 170.507C131.505 170.422 131.285 170.379 131.021 170.379C130.66 170.379 130.359 170.46 130.118 170.622C129.876 170.781 129.755 170.987 129.755 171.24C129.755 171.459 129.836 171.635 129.998 171.768C130.16 171.902 130.422 172.011 130.782 172.097L131.822 172.335C132.424 172.474 132.873 172.689 133.169 172.979C133.464 173.268 133.612 173.645 133.612 174.108C133.612 174.5 133.498 174.849 133.271 175.156C133.047 175.46 132.733 175.699 132.329 175.872C131.929 176.045 131.464 176.132 130.936 176.132C130.203 176.132 129.605 175.976 129.142 175.663C128.679 175.348 128.395 174.901 128.289 174.321L129.521 174.134C129.598 174.455 129.755 174.697 129.994 174.862C130.233 175.024 130.544 175.105 130.927 175.105C131.345 175.105 131.679 175.018 131.929 174.845C132.179 174.669 132.304 174.455 132.304 174.202C132.304 173.997 132.227 173.825 132.074 173.686C131.923 173.547 131.691 173.442 131.379 173.371L130.271 173.128C129.66 172.989 129.208 172.767 128.916 172.463C128.626 172.159 128.481 171.774 128.481 171.308C128.481 170.922 128.589 170.584 128.805 170.294C129.021 170.004 129.319 169.778 129.7 169.616C130.081 169.452 130.517 169.369 131.008 169.369C131.716 169.369 132.272 169.523 132.679 169.83C133.085 170.134 133.353 170.541 133.484 171.053ZM139.159 173.286V169.455H140.438V176H139.185V174.866H139.116C138.966 175.216 138.724 175.507 138.392 175.74C138.063 175.97 137.652 176.085 137.161 176.085C136.74 176.085 136.368 175.993 136.044 175.808C135.723 175.621 135.47 175.344 135.286 174.977C135.104 174.611 135.013 174.158 135.013 173.618V169.455H136.287V173.464C136.287 173.911 136.411 174.266 136.658 174.53C136.905 174.794 137.226 174.926 137.621 174.926C137.859 174.926 138.097 174.866 138.332 174.747C138.571 174.628 138.768 174.447 138.925 174.206C139.084 173.964 139.162 173.658 139.159 173.286ZM142.013 176V175.126L145.559 170.622V170.562H142.128V169.455H147.148V170.384L143.739 174.832V174.892H147.267V176H142.013ZM150.675 176.145C150.261 176.145 149.886 176.068 149.55 175.915C149.215 175.759 148.95 175.533 148.754 175.237C148.56 174.942 148.464 174.58 148.464 174.151C148.464 173.781 148.535 173.477 148.677 173.239C148.819 173 149.011 172.811 149.252 172.672C149.494 172.533 149.763 172.428 150.062 172.357C150.36 172.286 150.664 172.232 150.974 172.195C151.366 172.149 151.684 172.112 151.928 172.084C152.173 172.053 152.35 172.003 152.461 171.935C152.572 171.866 152.627 171.756 152.627 171.602V171.572C152.627 171.2 152.522 170.912 152.312 170.707C152.104 170.503 151.795 170.401 151.383 170.401C150.954 170.401 150.616 170.496 150.369 170.686C150.124 170.874 149.955 171.082 149.862 171.312L148.664 171.04C148.806 170.642 149.013 170.321 149.286 170.077C149.562 169.83 149.879 169.651 150.237 169.54C150.594 169.426 150.971 169.369 151.366 169.369C151.627 169.369 151.904 169.401 152.197 169.463C152.492 169.523 152.768 169.634 153.023 169.795C153.282 169.957 153.494 170.189 153.658 170.49C153.823 170.788 153.906 171.176 153.906 171.653V176H152.661V175.105H152.61C152.528 175.27 152.404 175.432 152.239 175.591C152.075 175.75 151.863 175.882 151.604 175.987C151.346 176.092 151.036 176.145 150.675 176.145ZM150.952 175.122C151.305 175.122 151.606 175.053 151.856 174.913C152.109 174.774 152.3 174.592 152.431 174.368C152.565 174.141 152.631 173.898 152.631 173.639V172.795C152.586 172.841 152.498 172.884 152.367 172.923C152.239 172.96 152.093 172.993 151.928 173.021C151.763 173.047 151.603 173.071 151.447 173.094C151.29 173.114 151.16 173.131 151.055 173.145C150.808 173.176 150.582 173.229 150.377 173.303C150.175 173.376 150.013 173.483 149.891 173.622C149.772 173.759 149.712 173.94 149.712 174.168C149.712 174.483 149.829 174.722 150.062 174.884C150.295 175.043 150.592 175.122 150.952 175.122ZM156.877 172.114V176H155.603V169.455H156.826V170.52H156.907C157.057 170.173 157.293 169.895 157.614 169.685C157.938 169.474 158.346 169.369 158.837 169.369C159.283 169.369 159.674 169.463 160.009 169.651C160.344 169.835 160.604 170.111 160.789 170.477C160.973 170.844 161.066 171.297 161.066 171.837V176H159.792V171.99C159.792 171.516 159.668 171.145 159.421 170.878C159.174 170.608 158.834 170.473 158.402 170.473C158.107 170.473 157.844 170.537 157.614 170.665C157.387 170.793 157.206 170.98 157.073 171.227C156.942 171.472 156.877 171.767 156.877 172.114ZM164.049 172.114V176H162.775V169.455H163.998V170.52H164.078C164.229 170.173 164.465 169.895 164.786 169.685C165.11 169.474 165.517 169.369 166.009 169.369C166.455 169.369 166.846 169.463 167.181 169.651C167.516 169.835 167.776 170.111 167.961 170.477C168.145 170.844 168.238 171.297 168.238 171.837V176H166.963V171.99C166.963 171.516 166.84 171.145 166.593 170.878C166.346 170.608 166.006 170.473 165.574 170.473C165.279 170.473 165.016 170.537 164.786 170.665C164.559 170.793 164.378 170.98 164.245 171.227C164.114 171.472 164.049 171.767 164.049 172.114ZM172.767 176.132C172.123 176.132 171.567 175.994 171.101 175.719C170.638 175.44 170.28 175.05 170.027 174.547C169.777 174.041 169.652 173.449 169.652 172.77C169.652 172.099 169.777 171.509 170.027 170.997C170.28 170.486 170.632 170.087 171.084 169.8C171.539 169.513 172.07 169.369 172.678 169.369C173.047 169.369 173.405 169.43 173.752 169.553C174.098 169.675 174.409 169.866 174.685 170.128C174.961 170.389 175.178 170.729 175.337 171.146C175.496 171.561 175.576 172.065 175.576 172.659V173.111H170.373V172.156H174.327C174.327 171.821 174.259 171.524 174.123 171.266C173.986 171.004 173.794 170.798 173.547 170.648C173.303 170.497 173.016 170.422 172.686 170.422C172.328 170.422 172.016 170.51 171.749 170.686C171.485 170.859 171.28 171.087 171.135 171.368C170.993 171.646 170.922 171.949 170.922 172.276V173.021C170.922 173.459 170.999 173.831 171.152 174.138C171.309 174.445 171.526 174.679 171.804 174.841C172.083 175 172.408 175.08 172.78 175.08C173.022 175.08 173.242 175.045 173.441 174.977C173.64 174.906 173.811 174.801 173.956 174.662C174.101 174.523 174.212 174.351 174.289 174.146L175.495 174.364C175.398 174.719 175.225 175.03 174.975 175.297C174.728 175.561 174.417 175.767 174.042 175.915C173.669 176.06 173.245 176.132 172.767 176.132ZM179.746 176.132C179.113 176.132 178.567 175.989 178.11 175.702C177.656 175.412 177.306 175.013 177.062 174.504C176.817 173.996 176.695 173.413 176.695 172.757C176.695 172.092 176.82 171.506 177.07 170.997C177.32 170.486 177.673 170.087 178.127 169.8C178.582 169.513 179.117 169.369 179.734 169.369C180.231 169.369 180.674 169.462 181.063 169.646C181.452 169.828 181.766 170.084 182.005 170.413C182.246 170.743 182.39 171.128 182.435 171.568H181.195C181.127 171.261 180.971 170.997 180.727 170.776C180.485 170.554 180.161 170.443 179.755 170.443C179.4 170.443 179.089 170.537 178.822 170.724C178.558 170.909 178.352 171.173 178.204 171.517C178.056 171.858 177.982 172.261 177.982 172.727C177.982 173.205 178.055 173.616 178.2 173.963C178.344 174.31 178.549 174.578 178.813 174.768C179.08 174.959 179.394 175.054 179.755 175.054C179.996 175.054 180.215 175.01 180.411 174.922C180.61 174.831 180.776 174.702 180.91 174.534C181.046 174.366 181.141 174.165 181.195 173.929H182.435C182.39 174.352 182.252 174.73 182.022 175.062C181.792 175.395 181.484 175.656 181.097 175.847C180.714 176.037 180.263 176.132 179.746 176.132Z"
                                                        fill="#0F6BE9"
                                                    />
                                                    <rect
                                                        x="45.5"
                                                        y="162.5"
                                                        width={143}
                                                        height={19}
                                                        rx="7.5"
                                                        stroke="#B5CAFD"
                                                    />
                                                </g>
                                                <path
                                                    d="M27.7656 206.638C27.7277 206.302 27.5715 206.041 27.2969 205.857C27.0223 205.67 26.6766 205.576 26.2599 205.576C25.9616 205.576 25.7036 205.623 25.4858 205.718C25.268 205.81 25.0987 205.938 24.978 206.102C24.8596 206.263 24.8004 206.446 24.8004 206.652C24.8004 206.825 24.8407 206.974 24.9212 207.099C25.004 207.225 25.1117 207.33 25.2443 207.415C25.3793 207.498 25.5237 207.568 25.6776 207.625C25.8314 207.679 25.9794 207.724 26.1214 207.76L26.8317 207.945C27.0637 208.001 27.3016 208.078 27.5455 208.175C27.7893 208.272 28.0154 208.4 28.2237 208.559C28.4321 208.718 28.6001 208.914 28.728 209.148C28.8582 209.383 28.9233 209.663 28.9233 209.99C28.9233 210.402 28.8168 210.768 28.6037 211.087C28.393 211.407 28.0864 211.659 27.6839 211.844C27.2839 212.028 26.7997 212.121 26.2315 212.121C25.687 212.121 25.2159 212.034 24.8182 211.862C24.4205 211.689 24.1091 211.444 23.8842 211.126C23.6593 210.807 23.535 210.428 23.5114 209.99H24.6122C24.6335 210.253 24.7188 210.472 24.8679 210.647C25.0194 210.82 25.2124 210.949 25.4467 211.034C25.6835 211.117 25.9427 211.158 26.2244 211.158C26.5346 211.158 26.8104 211.11 27.0518 211.013C27.2957 210.913 27.4875 210.776 27.6271 210.601C27.7668 210.423 27.8366 210.216 27.8366 209.979C27.8366 209.764 27.7751 209.588 27.652 209.45C27.5313 209.313 27.3667 209.199 27.1584 209.109C26.9524 209.019 26.7192 208.94 26.4588 208.871L25.5994 208.637C25.017 208.478 24.5554 208.245 24.2145 207.938C23.8759 207.63 23.7067 207.223 23.7067 206.716C23.7067 206.297 23.8203 205.931 24.0476 205.619C24.2749 205.306 24.5826 205.063 24.9709 204.891C25.3591 204.715 25.7971 204.628 26.2848 204.628C26.7772 204.628 27.2116 204.714 27.5881 204.887C27.9669 205.06 28.2652 205.298 28.483 205.601C28.7008 205.902 28.8144 206.247 28.8239 206.638H27.7656ZM31.2111 208.761V212H30.1493V204.727H31.1969V207.433H31.2644C31.3922 207.14 31.5875 206.906 31.8503 206.734C32.1131 206.561 32.4564 206.474 32.8801 206.474C33.2542 206.474 33.5809 206.551 33.8603 206.705C34.142 206.859 34.3598 207.089 34.5137 207.394C34.6699 207.697 34.748 208.076 34.748 208.531V212H33.6863V208.658C33.6863 208.258 33.5833 207.948 33.3773 207.728C33.1713 207.505 32.8849 207.394 32.5179 207.394C32.267 207.394 32.0421 207.447 31.8432 207.554C31.6467 207.661 31.4917 207.817 31.378 208.023C31.2667 208.226 31.2111 208.473 31.2111 208.761ZM38.4625 212.11C37.9512 212.11 37.5049 211.993 37.1238 211.759C36.7426 211.524 36.4467 211.196 36.236 210.775C36.0253 210.353 35.9199 209.861 35.9199 209.298C35.9199 208.732 36.0253 208.237 36.236 207.813C36.4467 207.389 36.7426 207.06 37.1238 206.826C37.5049 206.592 37.9512 206.474 38.4625 206.474C38.9739 206.474 39.4202 206.592 39.8013 206.826C40.1825 207.06 40.4784 207.389 40.6891 207.813C40.8998 208.237 41.0051 208.732 41.0051 209.298C41.0051 209.861 40.8998 210.353 40.6891 210.775C40.4784 211.196 40.1825 211.524 39.8013 211.759C39.4202 211.993 38.9739 212.11 38.4625 212.11ZM38.4661 211.219C38.7975 211.219 39.0721 211.131 39.29 210.956C39.5078 210.781 39.6687 210.548 39.7729 210.256C39.8794 209.965 39.9327 209.644 39.9327 209.294C39.9327 208.946 39.8794 208.626 39.7729 208.335C39.6687 208.042 39.5078 207.806 39.29 207.629C39.0721 207.451 38.7975 207.362 38.4661 207.362C38.1323 207.362 37.8553 207.451 37.6351 207.629C37.4173 207.806 37.2551 208.042 37.1486 208.335C37.0444 208.626 36.9924 208.946 36.9924 209.294C36.9924 209.644 37.0444 209.965 37.1486 210.256C37.2551 210.548 37.4173 210.781 37.6351 210.956C37.8553 211.131 38.1323 211.219 38.4661 211.219ZM43.2069 212L41.6017 206.545H42.699L43.7679 210.551H43.8212L44.8936 206.545H45.9909L47.0563 210.533H47.1096L48.1713 206.545H49.2686L47.6671 212H46.584L45.476 208.062H45.3944L44.2864 212H43.2069ZM52.9228 212V206.545H53.9419V207.433H54.0094C54.123 207.133 54.3089 206.898 54.5669 206.73C54.825 206.56 55.1339 206.474 55.4938 206.474C55.8584 206.474 56.1638 206.56 56.41 206.73C56.6586 206.901 56.842 207.135 56.9604 207.433H57.0172C57.1474 207.142 57.3546 206.91 57.6387 206.737C57.9228 206.562 58.2613 206.474 58.6543 206.474C59.1491 206.474 59.5527 206.629 59.8652 206.94C60.1801 207.25 60.3375 207.717 60.3375 208.342V212H59.2757V208.442C59.2757 208.072 59.1751 207.805 58.9739 207.639C58.7727 207.473 58.5324 207.391 58.253 207.391C57.9074 207.391 57.6387 207.497 57.4469 207.71C57.2551 207.921 57.1593 208.192 57.1593 208.523V212H56.101V208.374C56.101 208.078 56.0087 207.84 55.824 207.661C55.6394 207.481 55.3991 207.391 55.1032 207.391C54.9019 207.391 54.7161 207.444 54.5456 207.55C54.3775 207.655 54.2414 207.8 54.1373 207.987C54.0355 208.174 53.9846 208.391 53.9846 208.637V212H52.9228ZM64.0582 212.11C63.5469 212.11 63.1006 211.993 62.7195 211.759C62.3383 211.524 62.0424 211.196 61.8317 210.775C61.621 210.353 61.5156 209.861 61.5156 209.298C61.5156 208.732 61.621 208.237 61.8317 207.813C62.0424 207.389 62.3383 207.06 62.7195 206.826C63.1006 206.592 63.5469 206.474 64.0582 206.474C64.5696 206.474 65.0159 206.592 65.397 206.826C65.7782 207.06 66.0741 207.389 66.2848 207.813C66.4955 208.237 66.6009 208.732 66.6009 209.298C66.6009 209.861 66.4955 210.353 66.2848 210.775C66.0741 211.196 65.7782 211.524 65.397 211.759C65.0159 211.993 64.5696 212.11 64.0582 212.11ZM64.0618 211.219C64.3932 211.219 64.6679 211.131 64.8857 210.956C65.1035 210.781 65.2644 210.548 65.3686 210.256C65.4751 209.965 65.5284 209.644 65.5284 209.294C65.5284 208.946 65.4751 208.626 65.3686 208.335C65.2644 208.042 65.1035 207.806 64.8857 207.629C64.6679 207.451 64.3932 207.362 64.0618 207.362C63.728 207.362 63.451 207.451 63.2308 207.629C63.013 207.806 62.8509 208.042 62.7443 208.335C62.6402 208.626 62.5881 208.946 62.5881 209.294C62.5881 209.644 62.6402 209.965 62.7443 210.256C62.8509 210.548 63.013 210.781 63.2308 210.956C63.451 211.131 63.728 211.219 64.0618 211.219ZM67.786 212V206.545H68.8123V207.412H68.8691C68.9686 207.118 69.1438 206.888 69.3947 206.719C69.648 206.549 69.9345 206.464 70.2541 206.464C70.3204 206.464 70.3985 206.466 70.4885 206.471C70.5808 206.476 70.653 206.482 70.7051 206.489V207.504C70.6625 207.492 70.5867 207.479 70.4778 207.465C70.3689 207.449 70.26 207.44 70.1511 207.44C69.9002 207.44 69.6764 207.494 69.4799 207.6C69.2858 207.704 69.1319 207.85 69.0183 208.037C68.9047 208.222 68.8478 208.432 68.8478 208.669V212H67.786ZM73.7795 212.11C73.2421 212.11 72.7792 211.995 72.391 211.766C72.0051 211.534 71.7068 211.208 71.4961 210.789C71.2878 210.368 71.1836 209.874 71.1836 209.308C71.1836 208.75 71.2878 208.257 71.4961 207.831C71.7068 207.405 72.0004 207.072 72.3768 206.833C72.7556 206.594 73.1983 206.474 73.7049 206.474C74.0127 206.474 74.311 206.525 74.5998 206.627C74.8886 206.729 75.1478 206.889 75.3775 207.107C75.6071 207.324 75.7882 207.607 75.9208 207.955C76.0534 208.301 76.1197 208.721 76.1197 209.216V209.592H71.7837V208.797H75.0792C75.0792 208.518 75.0224 208.27 74.9087 208.055C74.7951 207.837 74.6353 207.665 74.4293 207.54C74.2257 207.414 73.9866 207.352 73.712 207.352C73.4137 207.352 73.1533 207.425 72.9308 207.572C72.7106 207.716 72.5401 207.906 72.4194 208.14C72.301 208.372 72.2418 208.624 72.2418 208.896V209.518C72.2418 209.882 72.3058 210.192 72.4336 210.448C72.5638 210.704 72.7449 210.899 72.9769 211.034C73.2089 211.167 73.48 211.233 73.7901 211.233C73.9914 211.233 74.1748 211.205 74.3406 211.148C74.5063 211.089 74.6495 211.001 74.7702 210.885C74.891 210.769 74.9833 210.626 75.0472 210.455L76.0522 210.636C75.9717 210.932 75.8273 211.192 75.619 211.414C75.413 211.634 75.1538 211.806 74.8413 211.929C74.5311 212.05 74.1772 212.11 73.7795 212.11Z"
                                                    fill="#5E5E5E"
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translateX(0px)",
                                                        transition: "all 400ms ease 1400ms"
                                                    }}
                                                />
                                                <g
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translateX(0px)",
                                                        transition: "all 400ms ease 1500ms"
                                                    }}
                                                >
                                                    <path
                                                        d="M28.5 249L31.5 246L28.5 243"
                                                        stroke="#5E5E5E"
                                                        strokeWidth="1.1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M46.2784 252V240.364H48.0341V250.489H53.3068V252H46.2784ZM54.8533 252V243.273H56.5522V252H54.8533ZM55.7113 241.926C55.4158 241.926 55.162 241.828 54.9499 241.631C54.7416 241.43 54.6374 241.191 54.6374 240.915C54.6374 240.634 54.7416 240.396 54.9499 240.199C55.162 239.998 55.4158 239.898 55.7113 239.898C56.0067 239.898 56.2586 239.998 56.4669 240.199C56.6791 240.396 56.7851 240.634 56.7851 240.915C56.7851 241.191 56.6791 241.43 56.4669 241.631C56.2586 241.828 56.0067 241.926 55.7113 241.926ZM65.0574 245.403L63.5177 245.676C63.4533 245.479 63.351 245.292 63.2109 245.114C63.0745 244.936 62.8889 244.79 62.654 244.676C62.4192 244.562 62.1256 244.506 61.7734 244.506C61.2923 244.506 60.8908 244.614 60.5688 244.83C60.2468 245.042 60.0859 245.316 60.0859 245.653C60.0859 245.945 60.1938 246.18 60.4097 246.358C60.6256 246.536 60.9741 246.682 61.4552 246.795L62.8415 247.114C63.6446 247.299 64.243 247.585 64.637 247.972C65.0309 248.358 65.2279 248.86 65.2279 249.477C65.2279 250 65.0764 250.466 64.7734 250.875C64.4741 251.28 64.0555 251.598 63.5177 251.83C62.9836 252.061 62.3643 252.176 61.6597 252.176C60.6824 252.176 59.8851 251.968 59.2677 251.551C58.6502 251.131 58.2715 250.534 58.1313 249.761L59.7734 249.511C59.8756 249.939 60.0859 250.263 60.404 250.483C60.7222 250.699 61.137 250.807 61.6484 250.807C62.2052 250.807 62.6502 250.691 62.9836 250.46C63.3169 250.225 63.4836 249.939 63.4836 249.602C63.4836 249.33 63.3813 249.1 63.1768 248.915C62.976 248.729 62.6673 248.589 62.2506 248.494L60.7734 248.17C59.959 247.985 59.3567 247.689 58.9665 247.284C58.5802 246.879 58.387 246.366 58.387 245.744C58.387 245.229 58.5309 244.778 58.8188 244.392C59.1067 244.006 59.5044 243.705 60.012 243.489C60.5196 243.269 61.101 243.159 61.7563 243.159C62.6995 243.159 63.4419 243.364 63.9836 243.773C64.5252 244.178 64.8832 244.722 65.0574 245.403ZM70.8497 243.273V244.636H66.0826V243.273H70.8497ZM67.361 241.182H69.0599V249.438C69.0599 249.767 69.1091 250.015 69.2076 250.182C69.3061 250.345 69.433 250.456 69.5883 250.517C69.7474 250.574 69.9197 250.602 70.1053 250.602C70.2417 250.602 70.361 250.593 70.4633 250.574C70.5656 250.555 70.6451 250.54 70.7019 250.528L71.0088 251.932C70.9103 251.97 70.7701 252.008 70.5883 252.045C70.4065 252.087 70.1792 252.11 69.9065 252.114C69.4595 252.121 69.0428 252.042 68.6565 251.875C68.2701 251.708 67.9576 251.451 67.719 251.102C67.4803 250.754 67.361 250.316 67.361 249.79V241.182ZM78.8081 245.403L77.2683 245.676C77.2039 245.479 77.1016 245.292 76.9615 245.114C76.8251 244.936 76.6395 244.79 76.4047 244.676C76.1698 244.562 75.8762 244.506 75.524 244.506C75.0429 244.506 74.6414 244.614 74.3194 244.83C73.9975 245.042 73.8365 245.316 73.8365 245.653C73.8365 245.945 73.9444 246.18 74.1603 246.358C74.3762 246.536 74.7247 246.682 75.2058 246.795L76.5922 247.114C77.3952 247.299 77.9937 247.585 78.3876 247.972C78.7816 248.358 78.9785 248.86 78.9785 249.477C78.9785 250 78.827 250.466 78.524 250.875C78.2247 251.28 77.8062 251.598 77.2683 251.83C76.7342 252.061 76.1149 252.176 75.4103 252.176C74.4331 252.176 73.6357 251.968 73.0183 251.551C72.4009 251.131 72.0221 250.534 71.8819 249.761L73.524 249.511C73.6262 249.939 73.8365 250.263 74.1547 250.483C74.4728 250.699 74.8876 250.807 75.399 250.807C75.9558 250.807 76.4009 250.691 76.7342 250.46C77.0675 250.225 77.2342 249.939 77.2342 249.602C77.2342 249.33 77.1319 249.1 76.9274 248.915C76.7266 248.729 76.4179 248.589 76.0012 248.494L74.524 248.17C73.7096 247.985 73.1073 247.689 72.7172 247.284C72.3308 246.879 72.1376 246.366 72.1376 245.744C72.1376 245.229 72.2816 244.778 72.5694 244.392C72.8573 244.006 73.255 243.705 73.7626 243.489C74.2702 243.269 74.8516 243.159 75.5069 243.159C76.4501 243.159 77.1925 243.364 77.7342 243.773C78.2759 244.178 78.6338 244.722 78.8081 245.403Z"
                                                        fill="#111111"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_0_1">
                                                        <rect
                                                            width={14}
                                                            height={14}
                                                            fill="white"
                                                            transform="translate(23 165)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <svg
                                                width={292}
                                                height={222}
                                                viewBox="0 0 292 222"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute z-[2] top-[136px] left-[36px]"
                                                style={{
                                                    opacity: 1,
                                                    transform: "translateY(0px)",
                                                    transition: "all 400ms ease 700ms"
                                                }}
                                            >
                                                <g filter="url(#filter0_ddddd_342_339844)">
                                                    <g clipPath="url(#clip0_342_339844)">
                                                        <rect
                                                            x="18.6895"
                                                            y="6.47607"
                                                            width="254.311"
                                                            height="173.897"
                                                            rx="12.2416"
                                                            fill="white"
                                                        />
                                                        <rect
                                                            width="254.311"
                                                            height="173.897"
                                                            transform="translate(18.6895 6.47607)"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M35.9869 33.683V23.3256H39.8709C40.6666 23.3256 41.3342 23.4638 41.8736 23.7403C42.4165 24.0167 42.8261 24.4045 43.1026 24.9035C43.3824 25.3991 43.5223 25.9773 43.5223 26.6381C43.5223 27.3023 43.3807 27.8789 43.0975 28.3677C42.8177 28.8532 42.4047 29.2292 41.8585 29.4955C41.3123 29.7585 40.6413 29.89 39.8457 29.89H37.0793V28.3323H39.5928C40.0581 28.3323 40.439 28.2683 40.7357 28.1402C41.0324 28.0087 41.2516 27.8182 41.3932 27.5687C41.5382 27.3158 41.6107 27.0056 41.6107 26.6381C41.6107 26.2706 41.5382 25.9571 41.3932 25.6975C41.2482 25.4345 41.0274 25.2356 40.7307 25.1007C40.434 24.9625 40.0513 24.8933 39.5827 24.8933H37.8632V33.683H35.9869ZM41.3376 28.9898L43.9016 33.683H41.8079L39.2893 28.9898H41.3376ZM48.2114 33.8347C47.4326 33.8347 46.7599 33.6729 46.1935 33.3492C45.6305 33.0222 45.1972 32.5603 44.8938 31.9635C44.5903 31.3634 44.4386 30.657 44.4386 29.8445C44.4386 29.0454 44.5903 28.3441 44.8938 27.7406C45.2006 27.1337 45.6288 26.6617 46.1783 26.3246C46.7279 25.984 47.3736 25.8138 48.1153 25.8138C48.5941 25.8138 49.0458 25.8913 49.4707 26.0464C49.8988 26.1981 50.2765 26.4341 50.6035 26.7544C50.9339 27.0747 51.1935 27.4827 51.3823 27.9783C51.5711 28.4706 51.6655 29.0572 51.6655 29.7383V30.2996H45.2984V29.0656H49.9106C49.9073 28.715 49.8314 28.4031 49.6831 28.13C49.5347 27.8536 49.3274 27.6361 49.061 27.4776C48.798 27.3192 48.4912 27.2399 48.1406 27.2399C47.7663 27.2399 47.4376 27.331 47.1544 27.513C46.8712 27.6917 46.6504 27.9277 46.4919 28.2211C46.3368 28.511 46.2576 28.8296 46.2542 29.1769V30.2541C46.2542 30.7059 46.3368 31.0936 46.502 31.4173C46.6672 31.7376 46.8982 31.9837 47.1949 32.1557C47.4916 32.3242 47.8388 32.4085 48.2367 32.4085C48.503 32.4085 48.7441 32.3714 48.9599 32.2973C49.1756 32.2197 49.3628 32.1068 49.5212 31.9584C49.6797 31.8101 49.7994 31.6263 49.8803 31.4072L51.5897 31.5994C51.4818 32.0512 51.2761 32.4456 50.9727 32.7828C50.6726 33.1166 50.2883 33.3762 49.8196 33.5616C49.351 33.7437 48.8149 33.8347 48.2114 33.8347ZM54.0573 33.7942C53.7505 33.7942 53.4875 33.6864 53.2684 33.4706C53.0492 33.2548 52.9413 32.9918 52.9447 32.6816C52.9413 32.3782 53.0492 32.1186 53.2684 31.9028C53.4875 31.687 53.7505 31.5791 54.0573 31.5791C54.354 31.5791 54.6119 31.687 54.8311 31.9028C55.0536 32.1186 55.1665 32.3782 55.1699 32.6816C55.1665 32.8873 55.1126 33.0744 55.0081 33.243C54.9069 33.4116 54.7721 33.5464 54.6035 33.6476C54.4383 33.7454 54.2562 33.7942 54.0573 33.7942ZM54.0573 28.2514C53.7505 28.2514 53.4875 28.1435 53.2684 27.9277C53.0492 27.7086 52.9413 27.4456 52.9447 27.1388C52.9413 26.8354 53.0492 26.5758 53.2684 26.36C53.4875 26.1408 53.7505 26.0312 54.0573 26.0312C54.354 26.0312 54.6119 26.1408 54.8311 26.36C55.0536 26.5758 55.1665 26.8354 55.1699 27.1388C55.1665 27.3411 55.1126 27.5265 55.0081 27.6951C54.9069 27.8637 54.7721 27.9985 54.6035 28.0997C54.4383 28.2008 54.2562 28.2514 54.0573 28.2514ZM60.1039 33.683V23.3256H63.9879C64.7836 23.3256 65.4512 23.4739 65.9906 23.7706C66.5334 24.0673 66.9431 24.4753 67.2196 24.9945C67.4994 25.5103 67.6393 26.097 67.6393 26.7544C67.6393 27.4186 67.4994 28.0087 67.2196 28.5245C66.9397 29.0404 66.5267 29.4466 65.9805 29.7433C65.4343 30.0366 64.7617 30.1833 63.9626 30.1833H61.3885V28.6408H63.7098C64.175 28.6408 64.556 28.5599 64.8527 28.3981C65.1494 28.2362 65.3686 28.0137 65.5102 27.7305C65.6552 27.4473 65.7276 27.1219 65.7276 26.7544C65.7276 26.3869 65.6552 26.0633 65.5102 25.7834C65.3686 25.5036 65.1477 25.2861 64.8477 25.131C64.551 24.9726 64.1683 24.8933 63.6997 24.8933H61.9802V33.683H60.1039ZM70.9996 33.8398C70.5073 33.8398 70.0639 33.7521 69.6695 33.5768C69.2784 33.3981 68.9682 33.1351 68.7389 32.7878C68.513 32.4406 68.4001 32.0124 68.4001 31.5033C68.4001 31.065 68.481 30.7025 68.6428 30.4159C68.8047 30.1294 69.0255 29.9001 69.3053 29.7282C69.5852 29.5562 69.9004 29.4264 70.2511 29.3387C70.6051 29.2477 70.9709 29.182 71.3485 29.1415C71.8037 29.0943 72.1729 29.0522 72.4561 29.0151C72.7393 28.9746 72.9449 28.9139 73.0731 28.833C73.2045 28.7487 73.2703 28.6189 73.2703 28.4436V28.4132C73.2703 28.0323 73.1573 27.7373 72.9315 27.5282C72.7056 27.3192 72.3802 27.2147 71.9554 27.2147C71.507 27.2147 71.1513 27.3124 70.8883 27.508C70.6287 27.7035 70.4534 27.9345 70.3623 28.2008L68.653 27.9581C68.7878 27.4861 69.0103 27.0916 69.3205 26.7747C69.6307 26.4544 70.01 26.215 70.4584 26.0565C70.9068 25.8947 71.4025 25.8138 71.9453 25.8138C72.3195 25.8138 72.6921 25.8576 73.0629 25.9453C73.4338 26.0329 73.7727 26.1779 74.0795 26.3802C74.3863 26.5791 74.6324 26.8505 74.8178 27.1944C75.0066 27.5383 75.101 27.9682 75.101 28.484V33.683H73.3411V32.6159H73.2804C73.1691 32.8317 73.0124 33.034 72.8101 33.2228C72.6112 33.4082 72.36 33.5582 72.0565 33.6729C71.7565 33.7841 71.4041 33.8398 70.9996 33.8398ZM71.4749 32.4945C71.8424 32.4945 72.1611 32.422 72.4308 32.277C72.7005 32.1287 72.9079 31.9331 73.0528 31.6904C73.2012 31.4476 73.2754 31.183 73.2754 30.8964V29.981C73.218 30.0282 73.1203 30.0721 72.982 30.1125C72.8472 30.153 72.6954 30.1884 72.5269 30.2187C72.3583 30.2491 72.1914 30.276 72.0262 30.2996C71.861 30.3232 71.7177 30.3435 71.5963 30.3603C71.3232 30.3974 71.0788 30.4581 70.863 30.5424C70.6472 30.6267 70.477 30.7447 70.3522 30.8964C70.2275 31.0447 70.1651 31.2369 70.1651 31.4729C70.1651 31.8101 70.2882 32.0646 70.5343 32.2366C70.7804 32.4085 71.094 32.4945 71.4749 32.4945ZM76.6571 33.683V25.9149H78.4322V27.2096H78.5131C78.6547 26.7612 78.8975 26.4156 79.2414 26.1729C79.5887 25.9267 79.9848 25.8037 80.4299 25.8037C80.531 25.8037 80.6439 25.8087 80.7687 25.8188C80.8968 25.8256 81.003 25.8374 81.0873 25.8542V27.5383C81.0098 27.5114 80.8867 27.4878 80.7181 27.4675C80.5529 27.4439 80.3928 27.4321 80.2377 27.4321C79.9039 27.4321 79.6038 27.5046 79.3375 27.6496C79.0745 27.7912 78.8671 27.9884 78.7154 28.2413C78.5637 28.4942 78.4878 28.7858 78.4878 29.1162V33.683H76.6571ZM86.315 25.9149V27.331H81.8493V25.9149H86.315ZM82.9518 24.0538H84.7826V31.3465C84.7826 31.5926 84.8197 31.7814 84.8939 31.9129C84.9714 32.041 85.0725 32.1287 85.1973 32.1759C85.322 32.2231 85.4603 32.2467 85.612 32.2467C85.7266 32.2467 85.8311 32.2383 85.9256 32.2214C86.0233 32.2046 86.0975 32.1894 86.1481 32.1759L86.4566 33.6071C86.3588 33.6408 86.2189 33.6779 86.0368 33.7184C85.8581 33.7588 85.639 33.7824 85.3794 33.7892C84.9208 33.8027 84.5078 33.7336 84.1403 33.5818C83.7728 33.4267 83.4812 33.1874 83.2654 32.8637C83.053 32.54 82.9485 32.1354 82.9518 31.6499V24.0538ZM89.392 29.1314V33.683H87.5612V25.9149H89.3111V27.2349H89.4021C89.5808 26.8 89.8657 26.4544 90.2568 26.1981C90.6513 25.9419 91.1385 25.8138 91.7184 25.8138C92.2544 25.8138 92.7214 25.9284 93.1192 26.1577C93.5205 26.3869 93.8306 26.719 94.0498 27.154C94.2723 27.5889 94.3819 28.1166 94.3785 28.7369V33.683H92.5478V29.0201C92.5478 28.5009 92.4129 28.0946 92.1432 27.8013C91.8768 27.508 91.5076 27.3613 91.0356 27.3613C90.7153 27.3613 90.4304 27.4321 90.1809 27.5737C89.9348 27.712 89.741 27.9126 89.5993 28.1756C89.4611 28.4385 89.392 28.7571 89.392 29.1314ZM99.3938 33.8347C98.6149 33.8347 97.9423 33.6729 97.3759 33.3492C96.8128 33.0222 96.3796 32.5603 96.0762 31.9635C95.7727 31.3634 95.621 30.657 95.621 29.8445C95.621 29.0454 95.7727 28.3441 96.0762 27.7406C96.383 27.1337 96.8112 26.6617 97.3607 26.3246C97.9103 25.984 98.5559 25.8138 99.2977 25.8138C99.7764 25.8138 100.228 25.8913 100.653 26.0464C101.081 26.1981 101.459 26.4341 101.786 26.7544C102.116 27.0747 102.376 27.4827 102.565 27.9783C102.754 28.4706 102.848 29.0572 102.848 29.7383V30.2996H96.4808V29.0656H101.093C101.09 28.715 101.014 28.4031 100.865 28.13C100.717 27.8536 100.51 27.6361 100.243 27.4776C99.9804 27.3192 99.6736 27.2399 99.323 27.2399C98.9487 27.2399 98.62 27.331 98.3368 27.513C98.0536 27.6917 97.8327 27.9277 97.6743 28.2211C97.5192 28.511 97.44 28.8296 97.4366 29.1769V30.2541C97.4366 30.7059 97.5192 31.0936 97.6844 31.4173C97.8496 31.7376 98.0806 31.9837 98.3772 32.1557C98.6739 32.3242 99.0212 32.4085 99.4191 32.4085C99.6854 32.4085 99.9265 32.3714 100.142 32.2973C100.358 32.2197 100.545 32.1068 100.704 31.9584C100.862 31.8101 100.982 31.6263 101.063 31.4072L102.772 31.5994C102.664 32.0512 102.459 32.4456 102.155 32.7828C101.855 33.1166 101.471 33.3762 101.002 33.5616C100.533 33.7437 99.9973 33.8347 99.3938 33.8347ZM104.112 33.683V25.9149H105.887V27.2096H105.968C106.11 26.7612 106.352 26.4156 106.696 26.1729C107.043 25.9267 107.44 25.8037 107.885 25.8037C107.986 25.8037 108.099 25.8087 108.224 25.8188C108.352 25.8256 108.458 25.8374 108.542 25.8542V27.5383C108.465 27.5114 108.342 27.4878 108.173 27.4675C108.008 27.4439 107.848 27.4321 107.692 27.4321C107.359 27.4321 107.059 27.5046 106.792 27.6496C106.529 27.7912 106.322 27.9884 106.17 28.2413C106.019 28.4942 105.943 28.7858 105.943 29.1162V33.683H104.112ZM115.613 27.9682L113.944 28.1503C113.897 27.9817 113.814 27.8232 113.696 27.6749C113.582 27.5265 113.427 27.4068 113.231 27.3158C113.036 27.2248 112.796 27.1793 112.513 27.1793C112.132 27.1793 111.812 27.2619 111.552 27.4271C111.296 27.5923 111.169 27.8064 111.173 28.0693C111.169 28.2952 111.252 28.479 111.421 28.6206C111.593 28.7622 111.876 28.8785 112.27 28.9696L113.595 29.2528C114.33 29.4112 114.876 29.6624 115.234 30.0063C115.595 30.3502 115.777 30.8003 115.78 31.3566C115.777 31.8455 115.633 32.277 115.35 32.6513C115.07 33.0222 114.681 33.3121 114.182 33.5211C113.683 33.7302 113.11 33.8347 112.462 33.8347C111.512 33.8347 110.746 33.6358 110.166 33.2379C109.587 32.8367 109.241 32.2787 109.13 31.564L110.915 31.392C110.996 31.7427 111.168 32.0073 111.431 32.186C111.694 32.3647 112.036 32.4541 112.457 32.4541C112.892 32.4541 113.241 32.3647 113.504 32.186C113.771 32.0073 113.904 31.7865 113.904 31.5235C113.904 31.301 113.818 31.1172 113.646 30.9723C113.477 30.8273 113.214 30.716 112.857 30.6385L111.532 30.3603C110.787 30.2052 110.236 29.9439 109.878 29.5764C109.521 29.2056 109.344 28.7369 109.347 28.1705C109.344 27.6917 109.474 27.277 109.737 26.9264C110.003 26.5724 110.372 26.2993 110.844 26.1071C111.32 25.9116 111.867 25.8138 112.488 25.8138C113.398 25.8138 114.115 26.0076 114.637 26.3954C115.163 26.7831 115.488 27.3074 115.613 27.9682ZM118.836 29.1314V33.683H117.005V23.3256H118.795V27.2349H118.886C119.068 26.7966 119.35 26.451 119.731 26.1981C120.115 25.9419 120.604 25.8138 121.197 25.8138C121.737 25.8138 122.207 25.9267 122.608 26.1526C123.01 26.3785 123.32 26.7089 123.539 27.1439C123.761 27.5788 123.873 28.1098 123.873 28.7369V33.683H122.042V29.0201C122.042 28.4975 121.907 28.0913 121.637 27.8013C121.371 27.508 120.997 27.3613 120.515 27.3613C120.191 27.3613 119.901 27.4321 119.645 27.5737C119.392 27.712 119.193 27.9126 119.048 28.1756C118.906 28.4385 118.836 28.7571 118.836 29.1314ZM125.454 33.683V25.9149H127.285V33.683H125.454ZM126.374 24.8124C126.085 24.8124 125.835 24.7163 125.626 24.5242C125.417 24.3286 125.312 24.0943 125.312 23.8212C125.312 23.5447 125.417 23.3104 125.626 23.1182C125.835 22.9227 126.085 22.8249 126.374 22.8249C126.668 22.8249 126.917 22.9227 127.123 23.1182C127.332 23.3104 127.437 23.5447 127.437 23.8212C127.437 24.0943 127.332 24.3286 127.123 24.5242C126.917 24.7163 126.668 24.8124 126.374 24.8124ZM128.883 36.596V25.9149H130.683V27.1995H130.789C130.884 27.0107 131.017 26.8101 131.189 26.5977C131.361 26.3819 131.593 26.1981 131.887 26.0464C132.18 25.8913 132.554 25.8138 133.009 25.8138C133.609 25.8138 134.151 25.9672 134.633 26.274C135.118 26.5774 135.503 27.0275 135.786 27.6243C136.072 28.2177 136.216 28.946 136.216 29.8091C136.216 30.6621 136.076 31.387 135.796 31.9837C135.516 32.5805 135.135 33.0356 134.653 33.3492C134.171 33.6628 133.625 33.8195 133.014 33.8195C132.569 33.8195 132.2 33.7454 131.907 33.597C131.614 33.4487 131.377 33.27 131.199 33.0609C131.023 32.8485 130.887 32.6479 130.789 32.4591H130.713V36.596H128.883ZM130.678 29.799C130.678 30.3013 130.749 30.7413 130.89 31.1189C131.035 31.4965 131.243 31.7915 131.512 32.004C131.785 32.213 132.116 32.3175 132.504 32.3175C132.908 32.3175 133.247 32.2096 133.52 31.9938C133.793 31.7747 133.999 31.4763 134.137 31.0987C134.279 30.7177 134.35 30.2845 134.35 29.799C134.35 29.3168 134.28 28.8886 134.142 28.5144C134.004 28.1402 133.798 27.8468 133.525 27.6344C133.252 27.422 132.912 27.3158 132.504 27.3158C132.112 27.3158 131.78 27.4186 131.507 27.6243C131.234 27.83 131.027 28.1182 130.885 28.4891C130.747 28.86 130.678 29.2966 130.678 29.799Z"
                                                            fill="#111111"
                                                        />
                                                        <g clipPath="url(#clip1_342_339844)">
                                                            <circle
                                                                cx="43.1033"
                                                                cy="54.252"
                                                                r="8.13796"
                                                                fill="#E3A407"
                                                            />
                                                            <path
                                                                d="M44.5204 52.2048C44.4857 51.897 44.3427 51.6586 44.0912 51.4895C43.8398 51.3183 43.5234 51.2327 43.1419 51.2327C42.8688 51.2327 42.6326 51.2761 42.4332 51.3627C42.2338 51.4473 42.0788 51.5643 41.9682 51.7139C41.8599 51.8613 41.8057 52.0292 41.8057 52.2178C41.8057 52.376 41.8425 52.5126 41.9162 52.6274C41.9921 52.7423 42.0907 52.8388 42.2121 52.9168C42.3356 52.9927 42.4678 53.0566 42.6087 53.1086C42.7496 53.1585 42.8851 53.1996 43.0151 53.2322L43.6653 53.4012C43.8777 53.4532 44.0956 53.5237 44.3188 53.6125C44.5421 53.7014 44.749 53.8184 44.9398 53.9637C45.1305 54.1089 45.2844 54.2888 45.4014 54.5033C45.5207 54.7179 45.5803 54.9748 45.5803 55.2739C45.5803 55.651 45.4827 55.9859 45.2877 56.2785C45.0948 56.5711 44.8141 56.8019 44.4456 56.971C44.0793 57.14 43.6361 57.2246 43.1159 57.2246C42.6174 57.2246 42.1861 57.1454 41.8219 56.9872C41.4578 56.829 41.1728 56.6047 40.9669 56.3142C40.761 56.0216 40.6472 55.6748 40.6255 55.2739H41.6334C41.6529 55.5145 41.7309 55.7149 41.8675 55.8753C42.0062 56.0336 42.1828 56.1517 42.3974 56.2297C42.6141 56.3056 42.8515 56.3435 43.1094 56.3435C43.3933 56.3435 43.6458 56.2991 43.8669 56.2102C44.0902 56.1192 44.2657 55.9935 44.3936 55.8331C44.5215 55.6705 44.5854 55.4809 44.5854 55.2641C44.5854 55.0669 44.5291 54.9054 44.4163 54.7797C44.3058 54.654 44.1552 54.5499 43.9644 54.4676C43.7759 54.3852 43.5624 54.3126 43.324 54.2498L42.5372 54.0352C42.004 53.89 41.5814 53.6765 41.2692 53.3947C40.9593 53.1129 40.8043 52.7401 40.8043 52.2763C40.8043 51.8927 40.9084 51.5578 41.1164 51.2717C41.3245 50.9856 41.6063 50.7635 41.9617 50.6052C42.3172 50.4448 42.7182 50.3646 43.1647 50.3646C43.6155 50.3646 44.0132 50.4438 44.3578 50.602C44.7046 50.7602 44.9777 50.978 45.1771 51.2555C45.3765 51.5307 45.4806 51.8472 45.4892 52.2048H44.5204Z"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M65.1968 52.2063C65.1505 51.796 64.9598 51.4781 64.6246 51.2527C64.2893 51.0244 63.8674 50.9102 63.3588 50.9102C62.9947 50.9102 62.6797 50.968 62.4138 51.0836C62.1479 51.1963 61.9413 51.3524 61.7939 51.5518C61.6494 51.7483 61.5772 51.9722 61.5772 52.2237C61.5772 52.4346 61.6263 52.6167 61.7245 52.7699C61.8257 52.923 61.9572 53.0516 62.119 53.1557C62.2837 53.2568 62.46 53.3421 62.6479 53.4114C62.8357 53.4779 63.0163 53.5328 63.1897 53.5761L64.0567 53.8016C64.3399 53.8709 64.6303 53.9648 64.928 54.0833C65.2257 54.2018 65.5017 54.3579 65.756 54.5515C66.0103 54.7451 66.2155 54.985 66.3715 55.2711C66.5305 55.5572 66.6099 55.8996 66.6099 56.2984C66.6099 56.8013 66.4799 57.2478 66.2198 57.6379C65.9626 58.028 65.5883 58.3358 65.0971 58.5612C64.6087 58.7866 64.0177 58.8993 63.3241 58.8993C62.6594 58.8993 62.0843 58.7939 61.5988 58.5829C61.1133 58.3719 60.7333 58.0728 60.4588 57.6856C60.1842 57.2954 60.0325 56.8331 60.0036 56.2984H61.3474C61.3734 56.6192 61.4775 56.8865 61.6595 57.1004C61.8445 57.3113 62.08 57.4688 62.3661 57.5729C62.6551 57.674 62.9715 57.7246 63.3154 57.7246C63.694 57.7246 64.0307 57.6653 64.3255 57.5469C64.6231 57.4255 64.8572 57.2579 65.0277 57.044C65.1982 56.8273 65.2835 56.5744 65.2835 56.2854C65.2835 56.0224 65.2083 55.8071 65.0581 55.6395C64.9107 55.4719 64.7098 55.3332 64.4555 55.2234C64.2041 55.1136 63.9194 55.0168 63.6015 54.9329L62.5525 54.6468C61.8416 54.4532 61.2781 54.1686 60.8619 53.7929C60.4487 53.4172 60.242 52.9201 60.242 52.3017C60.242 51.7902 60.3807 51.3437 60.6582 50.9622C60.9356 50.5808 61.3113 50.2845 61.7852 50.0736C62.2592 49.8597 62.7938 49.7528 63.3891 49.7528C63.9902 49.7528 64.5205 49.8583 64.98 50.0692C65.4424 50.2802 65.8065 50.5706 66.0724 50.9405C66.3383 51.3076 66.477 51.7295 66.4886 52.2063H65.1968ZM72.0802 55.9907V52.0936H73.3807V58.752H72.1062V57.5989H72.0369C71.8837 57.9543 71.6381 58.2506 71.2999 58.4875C70.9647 58.7216 70.5471 58.8387 70.0472 58.8387C69.6195 58.8387 69.2409 58.7447 68.9114 58.5569C68.5849 58.3662 68.3277 58.0844 68.1398 57.7116C67.9549 57.3388 67.8624 56.8779 67.8624 56.3288V52.0936H69.1585V56.1727C69.1585 56.6264 69.2842 56.9877 69.5357 57.2564C69.7871 57.5252 70.1136 57.6596 70.5153 57.6596C70.7581 57.6596 70.9994 57.5989 71.2392 57.4775C71.482 57.3561 71.6828 57.1726 71.8418 56.927C72.0036 56.6813 72.0831 56.3692 72.0802 55.9907ZM74.7393 58.752V57.8633L78.3459 53.2814V53.2207H74.8564V52.0936H79.9628V53.0386L76.495 57.5642V57.6249H80.0842V58.752H74.7393ZM83.3069 58.8993C82.8849 58.8993 82.5035 58.8213 82.1625 58.6653C81.8215 58.5063 81.5513 58.2766 81.3519 57.976C81.1553 57.6755 81.0571 57.307 81.0571 56.8706C81.0571 56.4949 81.1293 56.1857 81.2738 55.943C81.4183 55.7002 81.6134 55.508 81.859 55.3664C82.1047 55.2248 82.3792 55.1179 82.6827 55.0457C82.9861 54.9734 83.2953 54.9185 83.6103 54.8809C84.0091 54.8347 84.3328 54.7971 84.5813 54.7682C84.8298 54.7364 85.0105 54.6859 85.1232 54.6165C85.2359 54.5471 85.2922 54.4344 85.2922 54.2784V54.248C85.2922 53.8695 85.1853 53.5761 84.9715 53.3681C84.7605 53.16 84.4455 53.056 84.0265 53.056C83.5901 53.056 83.2462 53.1528 82.9948 53.3464C82.7462 53.5371 82.5743 53.7495 82.4789 53.9836L81.2608 53.7062C81.4053 53.3016 81.6163 52.975 81.8937 52.7265C82.174 52.4751 82.4963 52.293 82.8604 52.1803C83.2245 52.0647 83.6074 52.0069 84.0091 52.0069C84.275 52.0069 84.5568 52.0387 84.8544 52.1023C85.155 52.163 85.4353 52.2757 85.6954 52.4404C85.9584 52.6051 86.1737 52.8407 86.3413 53.147C86.5089 53.4504 86.5927 53.8449 86.5927 54.3304V58.752H85.3269V57.8416H85.2749C85.1911 58.0092 85.0654 58.174 84.8978 58.3358C84.7301 58.4976 84.5149 58.632 84.2519 58.7389C83.9889 58.8459 83.6739 58.8993 83.3069 58.8993ZM83.5886 57.859C83.947 57.859 84.2533 57.7882 84.5076 57.6466C84.7648 57.505 84.9599 57.32 85.0928 57.0917C85.2287 56.8605 85.2966 56.6134 85.2966 56.3504V55.4921C85.2503 55.5384 85.1607 55.5817 85.0278 55.6222C84.8978 55.6598 84.7489 55.693 84.5813 55.7219C84.4137 55.7479 84.2504 55.7725 84.0915 55.7956C83.9325 55.8158 83.7996 55.8332 83.6927 55.8476C83.4413 55.8794 83.2115 55.9329 83.0034 56.008C82.7982 56.0831 82.6335 56.1915 82.5093 56.3331C82.3879 56.4718 82.3272 56.6568 82.3272 56.888C82.3272 57.2087 82.4457 57.4515 82.6827 57.6162C82.9196 57.7781 83.2216 57.859 83.5886 57.859ZM89.371 54.7986V58.752H88.0749V52.0936H89.319V53.1773H89.4014C89.5545 52.8248 89.7944 52.5416 90.121 52.3277C90.4504 52.1138 90.8651 52.0069 91.3651 52.0069C91.8188 52.0069 92.2161 52.1023 92.5571 52.293C92.8982 52.4809 93.1626 52.7612 93.3504 53.134C93.5383 53.5068 93.6322 53.9677 93.6322 54.5168V58.752H92.3361V54.6729C92.3361 54.1902 92.2104 53.8131 91.9589 53.5415C91.7075 53.2669 91.3622 53.1296 90.9229 53.1296C90.6224 53.1296 90.355 53.1947 90.121 53.3247C89.8898 53.4548 89.7063 53.6455 89.5704 53.8969C89.4375 54.1454 89.371 54.446 89.371 54.7986ZM96.4224 54.7986V58.752H95.1263V52.0936H96.3704V53.1773H96.4528C96.606 52.8248 96.8458 52.5416 97.1724 52.3277C97.5018 52.1138 97.9165 52.0069 98.4165 52.0069C98.8702 52.0069 99.2676 52.1023 99.6086 52.293C99.9496 52.4809 100.214 52.7612 100.402 53.134C100.59 53.5068 100.684 53.9677 100.684 54.5168V58.752H99.3875V54.6729C99.3875 54.1902 99.2618 53.8131 99.0104 53.5415C98.7589 53.2669 98.4136 53.1296 97.9743 53.1296C97.6738 53.1296 97.4065 53.1947 97.1724 53.3247C96.9412 53.4548 96.7577 53.6455 96.6218 53.8969C96.4889 54.1454 96.4224 54.446 96.4224 54.7986ZM105.047 58.8863C104.391 58.8863 103.826 58.7462 103.352 58.4659C102.881 58.1826 102.517 57.7853 102.26 57.2738C102.006 56.7594 101.879 56.1568 101.879 55.4661C101.879 54.7841 102.006 54.183 102.26 53.6628C102.517 53.1427 102.876 52.7366 103.335 52.4447C103.798 52.1529 104.338 52.0069 104.956 52.0069C105.332 52.0069 105.696 52.0691 106.049 52.1933C106.401 52.3176 106.718 52.5127 106.998 52.7785C107.278 53.0444 107.499 53.3897 107.661 53.8146C107.823 54.2365 107.904 54.7494 107.904 55.3534V55.8129H102.611V54.8419H106.634C106.634 54.5009 106.565 54.1989 106.426 53.9359C106.287 53.6701 106.092 53.4605 105.841 53.3074C105.592 53.1542 105.3 53.0776 104.965 53.0776C104.601 53.0776 104.283 53.1672 104.011 53.3464C103.743 53.5227 103.535 53.7539 103.387 54.04C103.243 54.3232 103.17 54.631 103.17 54.9633V55.7219C103.17 56.1669 103.248 56.5455 103.405 56.8576C103.563 57.1697 103.785 57.4081 104.068 57.5729C104.351 57.7347 104.682 57.8156 105.06 57.8156C105.306 57.8156 105.53 57.7809 105.732 57.7116C105.935 57.6393 106.109 57.5324 106.257 57.3908C106.404 57.2492 106.517 57.0744 106.595 56.8663L107.822 57.0874C107.723 57.4486 107.547 57.7651 107.293 58.0367C107.041 58.3055 106.725 58.515 106.344 58.6653C105.965 58.8126 105.533 58.8863 105.047 58.8863ZM119.562 52.7612H118.21C118.158 52.4722 118.061 52.2179 117.919 51.9983C117.778 51.7786 117.604 51.5922 117.399 51.4391C117.194 51.2859 116.964 51.1703 116.71 51.0923C116.458 51.0142 116.191 50.9752 115.908 50.9752C115.396 50.9752 114.938 51.1038 114.534 51.361C114.132 51.6182 113.814 51.9954 113.58 52.4924C113.349 52.9895 113.233 53.5964 113.233 54.3131C113.233 55.0355 113.349 55.6453 113.58 56.1424C113.814 56.6394 114.133 57.0151 114.538 57.2694C114.943 57.5237 115.398 57.6509 115.903 57.6509C116.184 57.6509 116.45 57.6133 116.701 57.5382C116.955 57.4602 117.185 57.346 117.39 57.1957C117.595 57.0455 117.769 56.862 117.91 56.6452C118.055 56.4256 118.155 56.1742 118.21 55.891L119.562 55.8953C119.49 56.3317 119.35 56.7334 119.142 57.1004C118.936 57.4645 118.672 57.7795 118.348 58.0454C118.028 58.3084 117.661 58.5121 117.247 58.6566C116.834 58.8011 116.383 58.8733 115.895 58.8733C115.126 58.8733 114.441 58.6913 113.84 58.3271C113.239 57.9601 112.765 57.4356 112.418 56.7536C112.074 56.0716 111.902 55.2581 111.902 54.3131C111.902 53.3652 112.076 52.5517 112.423 51.8725C112.769 51.1905 113.243 50.6675 113.844 50.3033C114.445 49.9363 115.129 49.7528 115.895 49.7528C116.366 49.7528 116.805 49.8207 117.213 49.9565C117.623 50.0895 117.991 50.286 118.318 50.5461C118.645 50.8033 118.915 51.1183 119.129 51.4911C119.342 51.861 119.487 52.2844 119.562 52.7612ZM122.113 49.8742V58.752H120.817V49.8742H122.113ZM125.55 58.8993C125.128 58.8993 124.747 58.8213 124.406 58.6653C124.065 58.5063 123.794 58.2766 123.595 57.976C123.399 57.6755 123.3 57.307 123.3 56.8706C123.3 56.4949 123.373 56.1857 123.517 55.943C123.662 55.7002 123.857 55.508 124.102 55.3664C124.348 55.2248 124.622 55.1179 124.926 55.0457C125.229 54.9734 125.538 54.9185 125.853 54.8809C126.252 54.8347 126.576 54.7971 126.825 54.7682C127.073 54.7364 127.254 54.6859 127.366 54.6165C127.479 54.5471 127.535 54.4344 127.535 54.2784V54.248C127.535 53.8695 127.428 53.5761 127.215 53.3681C127.004 53.16 126.689 53.056 126.27 53.056C125.833 53.056 125.489 53.1528 125.238 53.3464C124.989 53.5371 124.817 53.7495 124.722 53.9836L123.504 53.7062C123.648 53.3016 123.859 52.975 124.137 52.7265C124.417 52.4751 124.739 52.293 125.104 52.1803C125.468 52.0647 125.851 52.0069 126.252 52.0069C126.518 52.0069 126.8 52.0387 127.098 52.1023C127.398 52.163 127.678 52.2757 127.939 52.4404C128.202 52.6051 128.417 52.8407 128.584 53.147C128.752 53.4504 128.836 53.8449 128.836 54.3304V58.752H127.57V57.8416H127.518C127.434 58.0092 127.309 58.174 127.141 58.3358C126.973 58.4976 126.758 58.632 126.495 58.7389C126.232 58.8459 125.917 58.8993 125.55 58.8993ZM125.832 57.859C126.19 57.859 126.496 57.7882 126.751 57.6466C127.008 57.505 127.203 57.32 127.336 57.0917C127.472 56.8605 127.54 56.6134 127.54 56.3504V55.4921C127.494 55.5384 127.404 55.5817 127.271 55.6222C127.141 55.6598 126.992 55.693 126.825 55.7219C126.657 55.7479 126.494 55.7725 126.335 55.7956C126.176 55.8158 126.043 55.8332 125.936 55.8476C125.684 55.8794 125.455 55.9329 125.247 56.008C125.041 56.0831 124.877 56.1915 124.752 56.3331C124.631 56.4718 124.57 56.6568 124.57 56.888C124.57 57.2087 124.689 57.4515 124.926 57.6162C125.163 57.7781 125.465 57.859 125.832 57.859ZM130.899 61.2488C130.705 61.2488 130.529 61.2329 130.37 61.2011C130.211 61.1722 130.093 61.1405 130.015 61.1058L130.327 60.0437C130.564 60.1073 130.775 60.1348 130.96 60.1261C131.145 60.1174 131.308 60.0481 131.449 59.918C131.594 59.788 131.721 59.5756 131.831 59.2808L131.991 58.8387L129.555 52.0936H130.942L132.629 57.2608H132.698L134.384 52.0936H135.776L133.032 59.6406C132.905 59.9874 132.743 60.2807 132.546 60.5206C132.35 60.7633 132.116 60.9454 131.844 61.0668C131.572 61.1881 131.257 61.2488 130.899 61.2488ZM139.858 52.0936V53.134H136.221V52.0936H139.858ZM137.196 50.4984H138.492V56.7969C138.492 57.0484 138.53 57.2376 138.605 57.3648C138.68 57.4891 138.777 57.5743 138.895 57.6206C139.017 57.6639 139.148 57.6856 139.29 57.6856C139.394 57.6856 139.485 57.6784 139.563 57.6639C139.641 57.6495 139.702 57.6379 139.745 57.6292L139.979 58.6999C139.904 58.7288 139.797 58.7577 139.658 58.7866C139.52 58.8184 139.346 58.8358 139.138 58.8387C138.797 58.8444 138.479 58.7837 138.184 58.6566C137.89 58.5294 137.651 58.3329 137.469 58.067C137.287 57.8012 137.196 57.4674 137.196 57.0657V50.4984ZM143.78 58.8863C143.156 58.8863 142.611 58.7433 142.146 58.4572C141.681 58.1711 141.32 57.7708 141.063 57.2564C140.805 56.742 140.677 56.1409 140.677 55.4531C140.677 54.7624 140.805 54.1585 141.063 53.6412C141.32 53.1239 141.681 52.7222 142.146 52.4361C142.611 52.15 143.156 52.0069 143.78 52.0069C144.405 52.0069 144.949 52.15 145.415 52.4361C145.88 52.7222 146.241 53.1239 146.498 53.6412C146.756 54.1585 146.884 54.7624 146.884 55.4531C146.884 56.1409 146.756 56.742 146.498 57.2564C146.241 57.7708 145.88 58.1711 145.415 58.4572C144.949 58.7433 144.405 58.8863 143.78 58.8863ZM143.785 57.7983C144.189 57.7983 144.525 57.6914 144.79 57.4775C145.056 57.2637 145.253 56.979 145.38 56.6235C145.51 56.2681 145.575 55.8765 145.575 55.4488C145.575 55.024 145.51 54.6338 145.38 54.2784C145.253 53.92 145.056 53.6325 144.79 53.4157C144.525 53.199 144.189 53.0906 143.785 53.0906C143.377 53.0906 143.039 53.199 142.77 53.4157C142.505 53.6325 142.307 53.92 142.177 54.2784C142.049 54.6338 141.986 55.024 141.986 55.4488C141.986 55.8765 142.049 56.2681 142.177 56.6235C142.307 56.979 142.505 57.2637 142.77 57.4775C143.039 57.6914 143.377 57.7983 143.785 57.7983ZM149.383 54.7986V58.752H148.087V52.0936H149.331V53.1773H149.413C149.566 52.8248 149.806 52.5416 150.133 52.3277C150.462 52.1138 150.877 52.0069 151.377 52.0069C151.831 52.0069 152.228 52.1023 152.569 52.293C152.91 52.4809 153.175 52.7612 153.362 53.134C153.55 53.5068 153.644 53.9677 153.644 54.5168V58.752H152.348V54.6729C152.348 54.1902 152.222 53.8131 151.971 53.5415C151.719 53.2669 151.374 53.1296 150.935 53.1296C150.634 53.1296 150.367 53.1947 150.133 53.3247C149.902 53.4548 149.718 53.6455 149.582 53.8969C149.449 54.1454 149.383 54.446 149.383 54.7986Z"
                                                            fill="#111111"
                                                        />
                                                        <path
                                                            d="M164.055 51.0272V49.8742H170.925V51.0272H168.155V58.752H166.82V51.0272H164.055ZM173.935 58.8863C173.31 58.8863 172.766 58.7433 172.3 58.4572C171.835 58.1711 171.474 57.7708 171.217 57.2564C170.959 56.742 170.831 56.1409 170.831 55.4531C170.831 54.7624 170.959 54.1585 171.217 53.6412C171.474 53.1239 171.835 52.7222 172.3 52.4361C172.766 52.15 173.31 52.0069 173.935 52.0069C174.559 52.0069 175.103 52.15 175.569 52.4361C176.034 52.7222 176.395 53.1239 176.652 53.6412C176.91 54.1585 177.038 54.7624 177.038 55.4531C177.038 56.1409 176.91 56.742 176.652 57.2564C176.395 57.7708 176.034 58.1711 175.569 58.4572C175.103 58.7433 174.559 58.8863 173.935 58.8863ZM173.939 57.7983C174.343 57.7983 174.679 57.6914 174.945 57.4775C175.21 57.2637 175.407 56.979 175.534 56.6235C175.664 56.2681 175.729 55.8765 175.729 55.4488C175.729 55.024 175.664 54.6338 175.534 54.2784C175.407 53.92 175.21 53.6325 174.945 53.4157C174.679 53.199 174.343 53.0906 173.939 53.0906C173.531 53.0906 173.193 53.199 172.925 53.4157C172.659 53.6325 172.461 53.92 172.331 54.2784C172.203 54.6338 172.14 55.024 172.14 55.4488C172.14 55.8765 172.203 56.2681 172.331 56.6235C172.461 56.979 172.659 57.2637 172.925 57.4775C173.193 57.6914 173.531 57.7983 173.939 57.7983ZM179.537 54.7986V58.752H178.241V52.0936H179.485V53.1773H179.567C179.721 52.8248 179.96 52.5416 180.287 52.3277C180.616 52.1138 181.031 52.0069 181.531 52.0069C181.985 52.0069 182.382 52.1023 182.723 52.293C183.064 52.4809 183.329 52.7612 183.516 53.134C183.704 53.5068 183.798 53.9677 183.798 54.5168V58.752H182.502V54.6729C182.502 54.1902 182.376 53.8131 182.125 53.5415C181.874 53.2669 181.528 53.1296 181.089 53.1296C180.788 53.1296 180.521 53.1947 180.287 53.3247C180.056 53.4548 179.872 53.6455 179.736 53.8969C179.603 54.1454 179.537 54.446 179.537 54.7986ZM185.873 61.2488C185.68 61.2488 185.503 61.2329 185.344 61.2011C185.185 61.1722 185.067 61.1405 184.989 61.1058L185.301 60.0437C185.538 60.1073 185.749 60.1348 185.934 60.1261C186.119 60.1174 186.282 60.0481 186.424 59.918C186.568 59.788 186.695 59.5756 186.805 59.2808L186.966 58.8387L184.529 52.0936H185.917L187.603 57.2608H187.672L189.358 52.0936H190.75L188.006 59.6406C187.879 59.9874 187.717 60.2807 187.52 60.5206C187.324 60.7633 187.09 60.9454 186.818 61.0668C186.547 61.1881 186.232 61.2488 185.873 61.2488ZM202.188 52.7612H200.835C200.783 52.4722 200.687 52.2179 200.545 51.9983C200.403 51.7786 200.23 51.5922 200.025 51.4391C199.82 51.2859 199.59 51.1703 199.336 51.0923C199.084 51.0142 198.817 50.9752 198.534 50.9752C198.022 50.9752 197.564 51.1038 197.159 51.361C196.758 51.6182 196.44 51.9954 196.206 52.4924C195.975 52.9895 195.859 53.5964 195.859 54.3131C195.859 55.0355 195.975 55.6453 196.206 56.1424C196.44 56.6394 196.759 57.0151 197.164 57.2694C197.568 57.5237 198.024 57.6509 198.529 57.6509C198.81 57.6509 199.075 57.6133 199.327 57.5382C199.581 57.4602 199.811 57.346 200.016 57.1957C200.221 57.0455 200.395 56.862 200.536 56.6452C200.681 56.4256 200.78 56.1742 200.835 55.891L202.188 55.8953C202.116 56.3317 201.975 56.7334 201.767 57.1004C201.562 57.4645 201.298 57.7795 200.974 58.0454C200.653 58.3084 200.286 58.5121 199.873 58.6566C199.46 58.8011 199.009 58.8733 198.521 58.8733C197.752 58.8733 197.067 58.6913 196.466 58.3271C195.865 57.9601 195.391 57.4356 195.044 56.7536C194.7 56.0716 194.528 55.2581 194.528 54.3131C194.528 53.3652 194.702 52.5517 195.048 51.8725C195.395 51.1905 195.869 50.6675 196.47 50.3033C197.071 49.9363 197.755 49.7528 198.521 49.7528C198.992 49.7528 199.431 49.8207 199.838 49.9565C200.249 50.0895 200.617 50.286 200.944 50.5461C201.27 50.8033 201.541 51.1183 201.754 51.4911C201.968 51.861 202.113 52.2844 202.188 52.7612ZM204.739 54.7986V58.752H203.443V49.8742H204.721V53.1773H204.804C204.96 52.819 205.198 52.5343 205.519 52.3234C205.84 52.1124 206.259 52.0069 206.776 52.0069C207.233 52.0069 207.631 52.1008 207.972 52.2887C208.316 52.4765 208.582 52.7569 208.77 53.1296C208.961 53.4996 209.056 53.9619 209.056 54.5168V58.752H207.76V54.6729C207.76 54.1845 207.634 53.8059 207.383 53.5371C207.131 53.2655 206.782 53.1296 206.334 53.1296C206.028 53.1296 205.753 53.1947 205.51 53.3247C205.27 53.4548 205.081 53.6455 204.942 53.8969C204.807 54.1454 204.739 54.446 204.739 54.7986ZM210.542 58.752V52.0936H211.794V53.1513H211.864C211.985 52.793 212.199 52.5112 212.505 52.306C212.815 52.098 213.164 51.9939 213.554 51.9939C213.635 51.9939 213.731 51.9968 213.84 52.0026C213.953 52.0084 214.041 52.0156 214.105 52.0243V53.264C214.053 53.2496 213.96 53.2337 213.827 53.2163C213.694 53.1961 213.562 53.186 213.429 53.186C213.122 53.186 212.849 53.251 212.609 53.3811C212.372 53.5082 212.185 53.686 212.046 53.9143C211.907 54.1397 211.838 54.3969 211.838 54.6859V58.752H210.542ZM214.982 58.752V52.0936H216.278V58.752H214.982ZM215.637 51.0663C215.412 51.0663 215.218 50.9911 215.056 50.8408C214.897 50.6877 214.818 50.5056 214.818 50.2947C214.818 50.0808 214.897 49.8987 215.056 49.7485C215.218 49.5953 215.412 49.5187 215.637 49.5187C215.862 49.5187 216.055 49.5953 216.213 49.7485C216.375 49.8987 216.456 50.0808 216.456 50.2947C216.456 50.5056 216.375 50.6877 216.213 50.8408C216.055 50.9911 215.862 51.0663 215.637 51.0663ZM222.767 53.7192L221.593 53.9273C221.544 53.777 221.466 53.6339 221.359 53.4981C221.255 53.3623 221.113 53.251 220.934 53.1643C220.755 53.0776 220.531 53.0343 220.262 53.0343C219.895 53.0343 219.589 53.1166 219.343 53.2814C219.097 53.4432 218.974 53.6527 218.974 53.9099C218.974 54.1324 219.057 54.3116 219.222 54.4474C219.386 54.5833 219.652 54.6945 220.019 54.7812L221.077 55.024C221.69 55.1656 222.146 55.3838 222.447 55.6785C222.747 55.9733 222.898 56.3562 222.898 56.8273C222.898 57.2261 222.782 57.5815 222.551 57.8937C222.322 58.2029 222.003 58.4456 221.593 58.6219C221.185 58.7982 220.713 58.8863 220.175 58.8863C219.43 58.8863 218.821 58.7274 218.35 58.4095C217.879 58.0887 217.59 57.6336 217.483 57.044L218.736 56.8533C218.814 57.1798 218.974 57.4269 219.217 57.5945C219.46 57.7593 219.776 57.8416 220.167 57.8416C220.591 57.8416 220.931 57.7535 221.185 57.5772C221.44 57.398 221.567 57.1798 221.567 56.9226C221.567 56.7146 221.489 56.5397 221.333 56.3981C221.179 56.2565 220.944 56.1496 220.626 56.0773L219.499 55.8303C218.878 55.6887 218.418 55.4632 218.121 55.154C217.826 54.8448 217.678 54.4532 217.678 53.9793C217.678 53.5863 217.788 53.2424 218.008 52.9476C218.227 52.6528 218.531 52.4231 218.918 52.2583C219.305 52.0907 219.749 52.0069 220.249 52.0069C220.968 52.0069 221.535 52.163 221.948 52.4751C222.361 52.7843 222.635 53.199 222.767 53.7192ZM227.187 52.0936V53.134H223.55V52.0936H227.187ZM224.525 50.4984H225.821V56.7969C225.821 57.0484 225.859 57.2376 225.934 57.3648C226.009 57.4891 226.106 57.5743 226.224 57.6206C226.346 57.6639 226.477 57.6856 226.619 57.6856C226.723 57.6856 226.814 57.6784 226.892 57.6639C226.97 57.6495 227.03 57.6379 227.074 57.6292L227.308 58.6999C227.233 58.7288 227.126 58.7577 226.987 58.7866C226.848 58.8184 226.675 58.8358 226.467 58.8387C226.126 58.8444 225.808 58.7837 225.513 58.6566C225.219 58.5294 224.98 58.3329 224.798 58.067C224.616 57.8012 224.525 57.4674 224.525 57.0657V50.4984ZM228.376 58.752V52.0936H229.672V58.752H228.376ZM229.031 51.0663C228.805 51.0663 228.612 50.9911 228.45 50.8408C228.291 50.6877 228.211 50.5056 228.211 50.2947C228.211 50.0808 228.291 49.8987 228.45 49.7485C228.612 49.5953 228.805 49.5187 229.031 49.5187C229.256 49.5187 229.448 49.5953 229.607 49.7485C229.769 49.8987 229.85 50.0808 229.85 50.2947C229.85 50.5056 229.769 50.6877 229.607 50.8408C229.448 50.9911 229.256 51.0663 229.031 51.0663ZM234.041 58.8863C233.385 58.8863 232.821 58.7462 232.347 58.4659C231.876 58.1826 231.511 57.7853 231.254 57.2738C231 56.7594 230.873 56.1568 230.873 55.4661C230.873 54.7841 231 54.183 231.254 53.6628C231.511 53.1427 231.87 52.7366 232.329 52.4447C232.792 52.1529 233.332 52.0069 233.95 52.0069C234.326 52.0069 234.69 52.0691 235.043 52.1933C235.395 52.3176 235.712 52.5127 235.992 52.7785C236.273 53.0444 236.494 53.3897 236.655 53.8146C236.817 54.2365 236.898 54.7494 236.898 55.3534V55.8129H231.605V54.8419H235.628C235.628 54.5009 235.559 54.1989 235.42 53.9359C235.281 53.6701 235.086 53.4605 234.835 53.3074C234.586 53.1542 234.294 53.0776 233.959 53.0776C233.595 53.0776 233.277 53.1672 233.005 53.3464C232.737 53.5227 232.529 53.7539 232.381 54.04C232.237 54.3232 232.165 54.631 232.165 54.9633V55.7219C232.165 56.1669 232.243 56.5455 232.399 56.8576C232.558 57.1697 232.779 57.4081 233.062 57.5729C233.345 57.7347 233.676 57.8156 234.055 57.8156C234.3 57.8156 234.524 57.7809 234.726 57.7116C234.929 57.6393 235.104 57.5324 235.251 57.3908C235.398 57.2492 235.511 57.0744 235.589 56.8663L236.816 57.0874C236.718 57.4486 236.541 57.7651 236.287 58.0367C236.036 58.3055 235.719 58.515 235.338 58.6653C234.959 58.8126 234.527 58.8863 234.041 58.8863Z"
                                                            fill="#5E5E5E"
                                                        />
                                                        <path
                                                            d="M35.9407 86.89V78.0122H37.2801V81.8703H41.706V78.0122H43.0498V86.89H41.706V83.019H37.2801V86.89H35.9407ZM44.6523 86.89V80.2317H45.9485V86.89H44.6523ZM45.3069 79.2043C45.0815 79.2043 44.8879 79.1292 44.726 78.9789C44.5671 78.8257 44.4876 78.6437 44.4876 78.4327C44.4876 78.2189 44.5671 78.0368 44.726 77.8865C44.8879 77.7334 45.0815 77.6568 45.3069 77.6568C45.5323 77.6568 45.7245 77.7334 45.8834 77.8865C46.0453 78.0368 46.1262 78.2189 46.1262 78.4327C46.1262 78.6437 46.0453 78.8257 45.8834 78.9789C45.7245 79.1292 45.5323 79.2043 45.3069 79.2043ZM55.3805 80.3444C55.3343 79.934 55.1435 79.6161 54.8083 79.3907C54.4731 79.1624 54.0511 79.0483 53.5425 79.0483C53.1784 79.0483 52.8634 79.1061 52.5975 79.2217C52.3316 79.3344 52.125 79.4904 51.9776 79.6898C51.8331 79.8863 51.7609 80.1103 51.7609 80.3617C51.7609 80.5727 51.81 80.7548 51.9083 80.9079C52.0094 81.0611 52.1409 81.1897 52.3027 81.2937C52.4675 81.3949 52.6438 81.4801 52.8316 81.5495C53.0194 81.6159 53.2001 81.6709 53.3735 81.7142L54.2404 81.9396C54.5236 82.009 54.8141 82.1029 55.1117 82.2214C55.4094 82.3399 55.6854 82.4959 55.9397 82.6895C56.194 82.8832 56.3992 83.123 56.5552 83.4091C56.7142 83.6952 56.7937 84.0377 56.7937 84.4365C56.7937 84.9393 56.6636 85.3858 56.4035 85.776C56.1463 86.1661 55.7721 86.4739 55.2808 86.6993C54.7924 86.9247 54.2014 87.0374 53.5078 87.0374C52.8432 87.0374 52.2681 86.9319 51.7826 86.721C51.2971 86.51 50.917 86.2109 50.6425 85.8236C50.368 85.4335 50.2162 84.9711 50.1873 84.4365H51.5311C51.5572 84.7573 51.6612 85.0246 51.8433 85.2384C52.0282 85.4494 52.2637 85.6069 52.5498 85.7109C52.8388 85.8121 53.1553 85.8627 53.4992 85.8627C53.8777 85.8627 54.2144 85.8034 54.5092 85.6849C54.8068 85.5635 55.0409 85.3959 55.2114 85.1821C55.3819 84.9653 55.4672 84.7125 55.4672 84.4235C55.4672 84.1605 55.3921 83.9452 55.2418 83.7776C55.0944 83.61 54.8935 83.4713 54.6392 83.3614C54.3878 83.2516 54.1032 83.1548 53.7853 83.071L52.7362 82.7849C52.0253 82.5913 51.4618 82.3066 51.0456 81.9309C50.6324 81.5553 50.4258 81.0582 50.4258 80.4398C50.4258 79.9282 50.5645 79.4818 50.8419 79.1003C51.1193 78.7188 51.495 78.4226 51.969 78.2116C52.4429 77.9978 52.9775 77.8909 53.5729 77.8909C54.174 77.8909 54.7043 77.9963 55.1638 78.2073C55.6261 78.4183 55.9903 78.7087 56.2561 79.0786C56.522 79.4456 56.6607 79.8676 56.6723 80.3444H55.3805ZM62.2639 84.1287V80.2317H63.5644V86.89H62.2899V85.7369H62.2206C62.0674 86.0924 61.8218 86.3886 61.4837 86.6256C61.1484 86.8597 60.7308 86.9767 60.2309 86.9767C59.8032 86.9767 59.4246 86.8828 59.0952 86.6949C58.7686 86.5042 58.5114 86.2224 58.3236 85.8496C58.1386 85.4769 58.0461 85.0159 58.0461 84.4668V80.2317H59.3422V84.3108C59.3422 84.7645 59.468 85.1257 59.7194 85.3945C59.9708 85.6633 60.2974 85.7976 60.6991 85.7976C60.9418 85.7976 61.1831 85.7369 61.423 85.6156C61.6657 85.4942 61.8666 85.3107 62.0255 85.065C62.1874 84.8194 62.2668 84.5073 62.2639 84.1287ZM64.9231 86.89V86.0014L68.5297 81.4194V81.3587H65.0401V80.2317H70.1466V81.1767L66.6787 85.7023V85.763H70.2679V86.89H64.9231ZM73.4906 87.0374C73.0687 87.0374 72.6872 86.9594 72.3462 86.8033C72.0052 86.6444 71.735 86.4146 71.5356 86.1141C71.3391 85.8135 71.2408 85.4451 71.2408 85.0087C71.2408 84.633 71.3131 84.3238 71.4576 84.081C71.602 83.8383 71.7971 83.6461 72.0428 83.5045C72.2884 83.3629 72.5629 83.256 72.8664 83.1837C73.1698 83.1115 73.479 83.0566 73.794 83.019C74.1928 82.9728 74.5165 82.9352 74.765 82.9063C75.0136 82.8745 75.1942 82.8239 75.3069 82.7546C75.4196 82.6852 75.476 82.5725 75.476 82.4164V82.3861C75.476 82.0075 75.369 81.7142 75.1552 81.5061C74.9442 81.2981 74.6292 81.194 74.2102 81.194C73.7738 81.194 73.4299 81.2908 73.1785 81.4845C72.93 81.6752 72.758 81.8876 72.6626 82.1217L71.4445 81.8442C71.589 81.4397 71.8 81.1131 72.0774 80.8646C72.3578 80.6131 72.68 80.4311 73.0441 80.3184C73.4082 80.2028 73.7911 80.145 74.1928 80.145C74.4587 80.145 74.7405 80.1768 75.0381 80.2404C75.3387 80.301 75.619 80.4137 75.8791 80.5785C76.1421 80.7432 76.3574 80.9787 76.525 81.285C76.6926 81.5885 76.7764 81.983 76.7764 82.4685V86.89H75.5106V85.9797H75.4586C75.3748 86.1473 75.2491 86.312 75.0815 86.4739C74.9139 86.6357 74.6986 86.7701 74.4356 86.877C74.1726 86.9839 73.8576 87.0374 73.4906 87.0374ZM73.7724 85.997C74.1307 85.997 74.437 85.9262 74.6914 85.7846C74.9486 85.643 75.1436 85.4581 75.2766 85.2298C75.4124 84.9986 75.4803 84.7515 75.4803 84.4885V83.6302C75.4341 83.6764 75.3445 83.7198 75.2115 83.7603C75.0815 83.7978 74.9327 83.8311 74.765 83.86C74.5974 83.886 74.4342 83.9105 74.2752 83.9336C74.1163 83.9539 73.9833 83.9712 73.8764 83.9857C73.625 84.0175 73.3952 84.0709 73.1872 84.1461C72.982 84.2212 72.8173 84.3296 72.693 84.4712C72.5716 84.6099 72.5109 84.7948 72.5109 85.026C72.5109 85.3468 72.6294 85.5896 72.8664 85.7543C73.1034 85.9161 73.4053 85.997 73.7724 85.997ZM79.5548 82.9366V86.89H78.2586V80.2317H79.5027V81.3154H79.5851C79.7383 80.9628 79.9781 80.6796 80.3047 80.4658C80.6341 80.2519 81.0488 80.145 81.5488 80.145C82.0025 80.145 82.3999 80.2404 82.7409 80.4311C83.0819 80.6189 83.3463 80.8992 83.5342 81.272C83.722 81.6448 83.8159 82.1058 83.8159 82.6549V86.89H82.5198V82.8109C82.5198 82.3283 82.3941 81.9512 82.1427 81.6795C81.8912 81.405 81.5459 81.2677 81.1066 81.2677C80.8061 81.2677 80.5388 81.3327 80.3047 81.4628C80.0735 81.5928 79.89 81.7836 79.7542 82.035C79.6212 82.2835 79.5548 82.5841 79.5548 82.9366ZM86.6062 82.9366V86.89H85.3101V80.2317H86.5542V81.3154H86.6365C86.7897 80.9628 87.0295 80.6796 87.3561 80.4658C87.6856 80.2519 88.1003 80.145 88.6002 80.145C89.0539 80.145 89.4513 80.2404 89.7923 80.4311C90.1333 80.6189 90.3977 80.8992 90.5856 81.272C90.7734 81.6448 90.8673 82.1058 90.8673 82.6549V86.89H89.5712V82.8109C89.5712 82.3283 89.4455 81.9512 89.1941 81.6795C88.9427 81.405 88.5973 81.2677 88.1581 81.2677C87.8575 81.2677 87.5902 81.3327 87.3561 81.4628C87.1249 81.5928 86.9414 81.7836 86.8056 82.035C86.6726 82.2835 86.6062 82.5841 86.6062 82.9366ZM95.2311 87.0244C94.5751 87.0244 94.0102 86.8842 93.5362 86.6039C93.0652 86.3207 92.701 85.9233 92.4438 85.4118C92.1895 84.8974 92.0624 84.2949 92.0624 83.6042C92.0624 82.9222 92.1895 82.3211 92.4438 81.8009C92.701 81.2807 93.0594 80.8747 93.5189 80.5828C93.9813 80.2909 94.5217 80.145 95.1401 80.145C95.5158 80.145 95.8799 80.2071 96.2325 80.3314C96.5851 80.4556 96.9015 80.6507 97.1818 80.9166C97.4621 81.1825 97.6832 81.5278 97.8451 81.9526C98.0069 82.3745 98.0878 82.8875 98.0878 83.4915V83.951H92.795V82.98H96.8177C96.8177 82.639 96.7483 82.337 96.6096 82.074C96.4709 81.8081 96.2758 81.5986 96.0244 81.4454C95.7759 81.2923 95.484 81.2157 95.1488 81.2157C94.7847 81.2157 94.4668 81.3053 94.1951 81.4845C93.9264 81.6607 93.7183 81.8919 93.5709 82.178C93.4264 82.4612 93.3542 82.769 93.3542 83.1014V83.86C93.3542 84.305 93.4322 84.6836 93.5882 84.9957C93.7472 85.3078 93.9683 85.5462 94.2515 85.7109C94.5347 85.8728 94.8656 85.9537 95.2441 85.9537C95.4898 85.9537 95.7138 85.919 95.9161 85.8496C96.1183 85.7774 96.2932 85.6705 96.4406 85.5289C96.588 85.3873 96.7007 85.2124 96.7787 85.0044L98.0054 85.2254C97.9072 85.5867 97.7309 85.9031 97.4766 86.1748C97.2252 86.4435 96.9087 86.653 96.5273 86.8033C96.1487 86.9507 95.7166 87.0244 95.2311 87.0244ZM100.968 85.6763L100.903 86.1488C100.86 86.4955 100.786 86.8568 100.682 87.2325C100.581 87.611 100.475 87.9622 100.365 88.2858C100.259 88.6095 100.17 88.8667 100.101 89.0574H99.1821C99.2196 88.8783 99.2716 88.6355 99.3381 88.3292C99.4046 88.0257 99.4696 87.6862 99.5332 87.3105C99.5968 86.9348 99.6444 86.5519 99.6762 86.1618L99.7196 85.6763H100.968ZM105.398 89.3869V80.2317H106.663V81.3111H106.772C106.847 81.1723 106.955 81.012 107.097 80.8299C107.238 80.6478 107.435 80.4889 107.686 80.3531C107.938 80.2143 108.27 80.145 108.683 80.145C109.221 80.145 109.701 80.2808 110.123 80.5525C110.545 80.8241 110.875 81.2157 111.115 81.7272C111.358 82.2387 111.479 82.8543 111.479 83.5739C111.479 84.2934 111.359 84.9104 111.12 85.4248C110.88 85.9363 110.55 86.3308 110.131 86.6082C109.712 86.8828 109.234 87.0201 108.696 87.0201C108.292 87.0201 107.961 86.9521 107.704 86.8163C107.449 86.6805 107.25 86.5216 107.106 86.3395C106.961 86.1574 106.85 85.9956 106.772 85.854H106.694V89.3869H105.398ZM106.668 83.5608C106.668 84.029 106.736 84.4394 106.871 84.7919C107.007 85.1445 107.204 85.4205 107.461 85.6199C107.718 85.8164 108.033 85.9147 108.406 85.9147C108.793 85.9147 109.117 85.8121 109.377 85.6069C109.637 85.3988 109.834 85.1171 109.967 84.7616C110.102 84.4061 110.17 84.0059 110.17 83.5608C110.17 83.1216 110.104 82.7271 109.971 82.3774C109.841 82.0278 109.644 81.7518 109.381 81.5495C109.121 81.3472 108.796 81.246 108.406 81.246C108.03 81.246 107.712 81.3428 107.452 81.5365C107.195 81.7301 107 82.0003 106.867 82.3471C106.734 82.6939 106.668 83.0985 106.668 83.5608ZM113.984 78.0122V86.89H112.687V78.0122H113.984ZM118.353 87.0244C117.697 87.0244 117.132 86.8842 116.658 86.6039C116.187 86.3207 115.823 85.9233 115.566 85.4118C115.311 84.8974 115.184 84.2949 115.184 83.6042C115.184 82.9222 115.311 82.3211 115.566 81.8009C115.823 81.2807 116.181 80.8747 116.641 80.5828C117.103 80.2909 117.643 80.145 118.262 80.145C118.637 80.145 119.002 80.2071 119.354 80.3314C119.707 80.4556 120.023 80.6507 120.304 80.9166C120.584 81.1825 120.805 81.5278 120.967 81.9526C121.129 82.3745 121.209 82.8875 121.209 83.4915V83.951H115.917V82.98H119.939C119.939 82.639 119.87 82.337 119.731 82.074C119.593 81.8081 119.398 81.5986 119.146 81.4454C118.898 81.2923 118.606 81.2157 118.27 81.2157C117.906 81.2157 117.588 81.3053 117.317 81.4845C117.048 81.6607 116.84 81.8919 116.693 82.178C116.548 82.4612 116.476 82.769 116.476 83.1014V83.86C116.476 84.305 116.554 84.6836 116.71 84.9957C116.869 85.3078 117.09 85.5462 117.373 85.7109C117.656 85.8728 117.987 85.9537 118.366 85.9537C118.611 85.9537 118.835 85.919 119.038 85.8496C119.24 85.7774 119.415 85.6705 119.562 85.5289C119.71 85.3873 119.822 85.2124 119.9 85.0044L121.127 85.2254C121.029 85.5867 120.853 85.9031 120.598 86.1748C120.347 86.4435 120.03 86.653 119.649 86.8033C119.27 86.9507 118.838 87.0244 118.353 87.0244ZM124.341 87.0374C123.919 87.0374 123.538 86.9594 123.197 86.8033C122.856 86.6444 122.585 86.4146 122.386 86.1141C122.19 85.8135 122.091 85.4451 122.091 85.0087C122.091 84.633 122.164 84.3238 122.308 84.081C122.453 83.8383 122.648 83.6461 122.893 83.5045C123.139 83.3629 123.413 83.256 123.717 83.1837C124.02 83.1115 124.33 83.0566 124.645 83.019C125.043 82.9728 125.367 82.9352 125.616 82.9063C125.864 82.8745 126.045 82.8239 126.157 82.7546C126.27 82.6852 126.326 82.5725 126.326 82.4164V82.3861C126.326 82.0075 126.22 81.7142 126.006 81.5061C125.795 81.2981 125.48 81.194 125.061 81.194C124.624 81.194 124.28 81.2908 124.029 81.4845C123.78 81.6752 123.609 81.8876 123.513 82.1217L122.295 81.8442C122.44 81.4397 122.651 81.1131 122.928 80.8646C123.208 80.6131 123.53 80.4311 123.895 80.3184C124.259 80.2028 124.642 80.145 125.043 80.145C125.309 80.145 125.591 80.1768 125.889 80.2404C126.189 80.301 126.47 80.4137 126.73 80.5785C126.993 80.7432 127.208 80.9787 127.376 81.285C127.543 81.5885 127.627 81.983 127.627 82.4685V86.89H126.361V85.9797H126.309C126.225 86.1473 126.1 86.312 125.932 86.4739C125.764 86.6357 125.549 86.7701 125.286 86.877C125.023 86.9839 124.708 87.0374 124.341 87.0374ZM124.623 85.997C124.981 85.997 125.288 85.9262 125.542 85.7846C125.799 85.643 125.994 85.4581 126.127 85.2298C126.263 84.9986 126.331 84.7515 126.331 84.4885V83.6302C126.285 83.6764 126.195 83.7198 126.062 83.7603C125.932 83.7978 125.783 83.8311 125.616 83.86C125.448 83.886 125.285 83.9105 125.126 83.9336C124.967 83.9539 124.834 83.9712 124.727 83.9857C124.475 84.0175 124.246 84.0709 124.038 84.1461C123.832 84.2212 123.668 84.3296 123.543 84.4712C123.422 84.6099 123.361 84.7948 123.361 85.026C123.361 85.3468 123.48 85.5896 123.717 85.7543C123.954 85.9161 124.256 85.997 124.623 85.997ZM134.099 81.8573L132.924 82.0653C132.875 81.915 132.797 81.772 132.69 81.6362C132.586 81.5003 132.444 81.3891 132.265 81.3024C132.086 81.2157 131.862 81.1723 131.593 81.1723C131.226 81.1723 130.92 81.2547 130.674 81.4194C130.428 81.5813 130.306 81.7908 130.306 82.048C130.306 82.2705 130.388 82.4497 130.553 82.5855C130.717 82.7213 130.983 82.8326 131.35 82.9193L132.408 83.162C133.021 83.3036 133.477 83.5218 133.778 83.8166C134.078 84.1114 134.229 84.4943 134.229 84.9653C134.229 85.3641 134.113 85.7196 133.882 86.0317C133.654 86.3409 133.334 86.5837 132.924 86.76C132.516 86.9363 132.044 87.0244 131.506 87.0244C130.761 87.0244 130.152 86.8655 129.681 86.5476C129.21 86.2268 128.921 85.7716 128.814 85.1821L130.067 84.9913C130.145 85.3179 130.306 85.565 130.548 85.7326C130.791 85.8973 131.108 85.9797 131.498 85.9797C131.922 85.9797 132.262 85.8916 132.516 85.7153C132.771 85.5361 132.898 85.3179 132.898 85.0607C132.898 84.8526 132.82 84.6778 132.664 84.5362C132.511 84.3946 132.275 84.2877 131.957 84.2154L130.83 83.9683C130.209 83.8267 129.749 83.6013 129.452 83.2921C129.157 82.9829 129.009 82.5913 129.009 82.1173C129.009 81.7243 129.119 81.3804 129.339 81.0856C129.559 80.7909 129.862 80.5611 130.249 80.3964C130.636 80.2288 131.08 80.145 131.58 80.145C132.3 80.145 132.866 80.301 133.279 80.6131C133.693 80.9224 133.966 81.3371 134.099 81.8573ZM138.279 87.0244C137.623 87.0244 137.058 86.8842 136.584 86.6039C136.113 86.3207 135.749 85.9233 135.492 85.4118C135.238 84.8974 135.11 84.2949 135.11 83.6042C135.11 82.9222 135.238 82.3211 135.492 81.8009C135.749 81.2807 136.107 80.8747 136.567 80.5828C137.029 80.2909 137.57 80.145 138.188 80.145C138.564 80.145 138.928 80.2071 139.281 80.3314C139.633 80.4556 139.95 80.6507 140.23 80.9166C140.51 81.1825 140.731 81.5278 140.893 81.9526C141.055 82.3745 141.136 82.8875 141.136 83.4915V83.951H135.843V82.98H139.866C139.866 82.639 139.796 82.337 139.658 82.074C139.519 81.8081 139.324 81.5986 139.073 81.4454C138.824 81.2923 138.532 81.2157 138.197 81.2157C137.833 81.2157 137.515 81.3053 137.243 81.4845C136.974 81.6607 136.766 81.8919 136.619 82.178C136.474 82.4612 136.402 82.769 136.402 83.1014V83.86C136.402 84.305 136.48 84.6836 136.636 84.9957C136.795 85.3078 137.016 85.5462 137.3 85.7109C137.583 85.8728 137.914 85.9537 138.292 85.9537C138.538 85.9537 138.762 85.919 138.964 85.8496C139.166 85.7774 139.341 85.6705 139.489 85.5289C139.636 85.3873 139.749 85.2124 139.827 85.0044L141.054 85.2254C140.955 85.5867 140.779 85.9031 140.525 86.1748C140.273 86.4435 139.957 86.653 139.575 86.8033C139.197 86.9507 138.765 87.0244 138.279 87.0244ZM148.485 80.2317V81.272H144.722V80.2317H148.485ZM145.754 86.89V79.4601C145.754 79.0439 145.845 78.6986 146.027 78.424C146.209 78.1466 146.451 77.94 146.751 77.8042C147.052 77.6654 147.378 77.5961 147.731 77.5961C147.991 77.5961 148.213 77.6178 148.398 77.6611C148.583 77.7016 148.721 77.7391 148.81 77.7738L148.507 78.8229C148.446 78.8055 148.368 78.7853 148.273 78.7622C148.177 78.7362 148.062 78.7232 147.926 78.7232C147.611 78.7232 147.385 78.8012 147.25 78.9572C147.117 79.1133 147.05 79.3387 147.05 79.6335V86.89H145.754ZM149.578 86.89V80.2317H150.874V86.89H149.578ZM150.233 79.2043C150.007 79.2043 149.814 79.1292 149.652 78.9789C149.493 78.8257 149.413 78.6437 149.413 78.4327C149.413 78.2189 149.493 78.0368 149.652 77.8865C149.814 77.7334 150.007 77.6568 150.233 77.6568C150.458 77.6568 150.65 77.7334 150.809 77.8865C150.971 78.0368 151.052 78.2189 151.052 78.4327C151.052 78.6437 150.971 78.8257 150.809 78.9789C150.65 79.1292 150.458 79.2043 150.233 79.2043ZM153.67 82.9366V86.89H152.374V80.2317H153.618V81.3154H153.7C153.853 80.9628 154.093 80.6796 154.42 80.4658C154.749 80.2519 155.164 80.145 155.664 80.145C156.118 80.145 156.515 80.2404 156.856 80.4311C157.197 80.6189 157.462 80.8992 157.649 81.272C157.837 81.6448 157.931 82.1058 157.931 82.6549V86.89H156.635V82.8109C156.635 82.3283 156.509 81.9512 156.258 81.6795C156.006 81.405 155.661 81.2677 155.222 81.2677C154.921 81.2677 154.654 81.3327 154.42 81.4628C154.189 81.5928 154.005 81.7836 153.869 82.035C153.736 82.2835 153.67 82.5841 153.67 82.9366ZM161.918 87.0201C161.38 87.0201 160.901 86.8828 160.479 86.6082C160.06 86.3308 159.73 85.9363 159.49 85.4248C159.253 84.9104 159.135 84.2934 159.135 83.5739C159.135 82.8543 159.255 82.2387 159.495 81.7272C159.737 81.2157 160.07 80.8241 160.492 80.5525C160.914 80.2808 161.392 80.145 161.926 80.145C162.34 80.145 162.672 80.2143 162.924 80.3531C163.178 80.4889 163.374 80.6478 163.513 80.8299C163.655 81.012 163.764 81.1723 163.842 81.3111H163.921V78.0122H165.217V86.89H163.951V85.854H163.842C163.764 85.9956 163.652 86.1574 163.504 86.3395C163.36 86.5216 163.16 86.6805 162.906 86.8163C162.652 86.9521 162.322 87.0201 161.918 87.0201ZM162.204 85.9147C162.577 85.9147 162.892 85.8164 163.149 85.6199C163.409 85.4205 163.606 85.1445 163.738 84.7919C163.874 84.4394 163.942 84.029 163.942 83.5608C163.942 83.0985 163.876 82.6939 163.743 82.3471C163.61 82.0003 163.415 81.7301 163.158 81.5365C162.9 81.3428 162.583 81.246 162.204 81.246C161.814 81.246 161.489 81.3472 161.229 81.5495C160.968 81.7518 160.772 82.0278 160.639 82.3774C160.509 82.7271 160.444 83.1216 160.444 83.5608C160.444 84.0059 160.51 84.4061 160.643 84.7616C160.776 85.1171 160.973 85.3988 161.233 85.6069C161.496 85.8121 161.82 85.9147 162.204 85.9147ZM171.746 87.0374C171.325 87.0374 170.943 86.9594 170.602 86.8033C170.261 86.6444 169.991 86.4146 169.791 86.1141C169.595 85.8135 169.497 85.4451 169.497 85.0087C169.497 84.633 169.569 84.3238 169.713 84.081C169.858 83.8383 170.053 83.6461 170.299 83.5045C170.544 83.3629 170.819 83.256 171.122 83.1837C171.426 83.1115 171.735 83.0566 172.05 83.019C172.449 82.9728 172.772 82.9352 173.021 82.9063C173.269 82.8745 173.45 82.8239 173.563 82.7546C173.676 82.6852 173.732 82.5725 173.732 82.4164V82.3861C173.732 82.0075 173.625 81.7142 173.411 81.5061C173.2 81.2981 172.885 81.194 172.466 81.194C172.03 81.194 171.686 81.2908 171.434 81.4845C171.186 81.6752 171.014 81.8876 170.919 82.1217L169.7 81.8442C169.845 81.4397 170.056 81.1131 170.333 80.8646C170.614 80.6131 170.936 80.4311 171.3 80.3184C171.664 80.2028 172.047 80.145 172.449 80.145C172.715 80.145 172.996 80.1768 173.294 80.2404C173.595 80.301 173.875 80.4137 174.135 80.5785C174.398 80.7432 174.613 80.9787 174.781 81.285C174.949 81.5885 175.032 81.983 175.032 82.4685V86.89H173.767V85.9797H173.715C173.631 86.1473 173.505 86.312 173.337 86.4739C173.17 86.6357 172.954 86.7701 172.691 86.877C172.429 86.9839 172.114 87.0374 171.746 87.0374ZM172.028 85.997C172.387 85.997 172.693 85.9262 172.947 85.7846C173.204 85.643 173.4 85.4581 173.532 85.2298C173.668 84.9986 173.736 84.7515 173.736 84.4885V83.6302C173.69 83.6764 173.6 83.7198 173.467 83.7603C173.337 83.7978 173.189 83.8311 173.021 83.86C172.853 83.886 172.69 83.9105 172.531 83.9336C172.372 83.9539 172.239 83.9712 172.132 83.9857C171.881 84.0175 171.651 84.0709 171.443 84.1461C171.238 84.2212 171.073 84.3296 170.949 84.4712C170.828 84.6099 170.767 84.7948 170.767 85.026C170.767 85.3468 170.885 85.5896 171.122 85.7543C171.359 85.9161 171.661 85.997 172.028 85.997ZM179.623 80.2317V81.272H175.986V80.2317H179.623ZM176.961 78.6365H178.257V84.935C178.257 85.1864 178.295 85.3757 178.37 85.5029C178.445 85.6271 178.542 85.7124 178.66 85.7586C178.782 85.802 178.913 85.8236 179.055 85.8236C179.159 85.8236 179.25 85.8164 179.328 85.802C179.406 85.7875 179.467 85.776 179.51 85.7673L179.744 86.838C179.669 86.8669 179.562 86.8958 179.423 86.9247C179.284 86.9565 179.111 86.9738 178.903 86.9767C178.562 86.9825 178.244 86.9218 177.949 86.7946C177.655 86.6675 177.416 86.471 177.234 86.2051C177.052 85.9392 176.961 85.6055 176.961 85.2038V78.6365ZM183.92 80.2317V81.272H180.283V80.2317H183.92ZM181.259 78.6365H182.555V84.935C182.555 85.1864 182.592 85.3757 182.668 85.5029C182.743 85.6271 182.84 85.7124 182.958 85.7586C183.079 85.802 183.211 85.8236 183.352 85.8236C183.456 85.8236 183.548 85.8164 183.626 85.802C183.704 85.7875 183.764 85.776 183.808 85.7673L184.042 86.838C183.967 86.8669 183.86 86.8958 183.721 86.9247C183.582 86.9565 183.409 86.9738 183.201 86.9767C182.86 86.9825 182.542 86.9218 182.247 86.7946C181.952 86.6675 181.714 86.471 181.532 86.2051C181.35 85.9392 181.259 85.6055 181.259 85.2038V78.6365ZM187.048 87.0374C186.626 87.0374 186.244 86.9594 185.903 86.8033C185.562 86.6444 185.292 86.4146 185.093 86.1141C184.896 85.8135 184.798 85.4451 184.798 85.0087C184.798 84.633 184.87 84.3238 185.015 84.081C185.159 83.8383 185.354 83.6461 185.6 83.5045C185.845 83.3629 186.12 83.256 186.423 83.1837C186.727 83.1115 187.036 83.0566 187.351 83.019C187.75 82.9728 188.074 82.9352 188.322 82.9063C188.571 82.8745 188.751 82.8239 188.864 82.7546C188.977 82.6852 189.033 82.5725 189.033 82.4164V82.3861C189.033 82.0075 188.926 81.7142 188.712 81.5061C188.501 81.2981 188.186 81.194 187.767 81.194C187.331 81.194 186.987 81.2908 186.736 81.4845C186.487 81.6752 186.315 81.8876 186.22 82.1217L185.002 81.8442C185.146 81.4397 185.357 81.1131 185.634 80.8646C185.915 80.6131 186.237 80.4311 186.601 80.3184C186.965 80.2028 187.348 80.145 187.75 80.145C188.016 80.145 188.297 80.1768 188.595 80.2404C188.896 80.301 189.176 80.4137 189.436 80.5785C189.699 80.7432 189.914 80.9787 190.082 81.285C190.25 81.5885 190.333 81.983 190.333 82.4685V86.89H189.068V85.9797H189.016C188.932 86.1473 188.806 86.312 188.639 86.4739C188.471 86.6357 188.256 86.7701 187.993 86.877C187.73 86.9839 187.415 87.0374 187.048 87.0374ZM187.329 85.997C187.688 85.997 187.994 85.9262 188.248 85.7846C188.506 85.643 188.701 85.4581 188.834 85.2298C188.969 84.9986 189.037 84.7515 189.037 84.4885V83.6302C188.991 83.6764 188.901 83.7198 188.769 83.7603C188.639 83.7978 188.49 83.8311 188.322 83.86C188.154 83.886 187.991 83.9105 187.832 83.9336C187.673 83.9539 187.54 83.9712 187.433 83.9857C187.182 84.0175 186.952 84.0709 186.744 84.1461C186.539 84.2212 186.374 84.3296 186.25 84.4712C186.129 84.6099 186.068 84.7948 186.068 85.026C186.068 85.3468 186.186 85.5896 186.423 85.7543C186.66 85.9161 186.962 85.997 187.329 85.997ZM194.62 87.0244C193.976 87.0244 193.421 86.8785 192.956 86.5866C192.493 86.2918 192.138 85.8858 191.889 85.3685C191.641 84.8512 191.517 84.2588 191.517 83.5912C191.517 82.915 191.644 82.3182 191.898 81.8009C192.152 81.2807 192.511 80.8747 192.973 80.5828C193.435 80.2909 193.98 80.145 194.607 80.145C195.113 80.145 195.564 80.2389 195.96 80.4267C196.356 80.6117 196.675 80.8718 196.918 81.207C197.163 81.5423 197.309 81.9338 197.356 82.3818H196.094C196.025 82.0697 195.866 81.8009 195.617 81.5755C195.372 81.3501 195.042 81.2374 194.629 81.2374C194.268 81.2374 193.951 81.3327 193.68 81.5235C193.411 81.7113 193.201 81.9801 193.051 82.3297C192.901 82.6765 192.826 83.0869 192.826 83.5608C192.826 84.0464 192.899 84.4654 193.047 84.818C193.194 85.1705 193.402 85.4436 193.671 85.6372C193.943 85.8309 194.262 85.9277 194.629 85.9277C194.875 85.9277 195.097 85.8829 195.297 85.7933C195.499 85.7008 195.668 85.5693 195.804 85.3988C195.942 85.2283 196.039 85.0231 196.094 84.7833H197.356C197.309 85.2139 197.169 85.5982 196.935 85.9363C196.701 86.2745 196.387 86.5403 195.994 86.734C195.604 86.9276 195.146 87.0244 194.62 87.0244ZM199.794 82.9366V86.89H198.498V78.0122H199.776V81.3154H199.859C200.015 80.957 200.253 80.6724 200.574 80.4614C200.895 80.2505 201.314 80.145 201.831 80.145C202.288 80.145 202.686 80.2389 203.027 80.4267C203.371 80.6146 203.637 80.8949 203.825 81.2677C204.016 81.6376 204.111 82.1 204.111 82.6549V86.89H202.815V82.8109C202.815 82.3225 202.689 81.9439 202.438 81.6752C202.186 81.4035 201.837 81.2677 201.389 81.2677C201.083 81.2677 200.808 81.3327 200.565 81.4628C200.325 81.5928 200.136 81.7836 199.997 82.035C199.862 82.2835 199.794 82.5841 199.794 82.9366ZM208.466 87.0244C207.81 87.0244 207.245 86.8842 206.771 86.6039C206.3 86.3207 205.936 85.9233 205.679 85.4118C205.425 84.8974 205.298 84.2949 205.298 83.6042C205.298 82.9222 205.425 82.3211 205.679 81.8009C205.936 81.2807 206.295 80.8747 206.754 80.5828C207.216 80.2909 207.757 80.145 208.375 80.145C208.751 80.145 209.115 80.2071 209.468 80.3314C209.82 80.4556 210.137 80.6507 210.417 80.9166C210.697 81.1825 210.918 81.5278 211.08 81.9526C211.242 82.3745 211.323 82.8875 211.323 83.4915V83.951H206.03V82.98H210.053C210.053 82.639 209.984 82.337 209.845 82.074C209.706 81.8081 209.511 81.5986 209.26 81.4454C209.011 81.2923 208.719 81.2157 208.384 81.2157C208.02 81.2157 207.702 81.3053 207.43 81.4845C207.162 81.6607 206.953 81.8919 206.806 82.178C206.662 82.4612 206.589 82.769 206.589 83.1014V83.86C206.589 84.305 206.667 84.6836 206.823 84.9957C206.982 85.3078 207.203 85.5462 207.487 85.7109C207.77 85.8728 208.101 85.9537 208.479 85.9537C208.725 85.9537 208.949 85.919 209.151 85.8496C209.354 85.7774 209.528 85.6705 209.676 85.5289C209.823 85.3873 209.936 85.2124 210.014 85.0044L211.241 85.2254C211.142 85.5867 210.966 85.9031 210.712 86.1748C210.46 86.4435 210.144 86.653 209.762 86.8033C209.384 86.9507 208.952 87.0244 208.466 87.0244ZM215.009 87.0201C214.472 87.0201 213.992 86.8828 213.57 86.6082C213.151 86.3308 212.822 85.9363 212.582 85.4248C212.345 84.9104 212.226 84.2934 212.226 83.5739C212.226 82.8543 212.346 82.2387 212.586 81.7272C212.829 81.2157 213.161 80.8241 213.583 80.5525C214.005 80.2808 214.483 80.145 215.018 80.145C215.431 80.145 215.764 80.2143 216.015 80.3531C216.269 80.4889 216.466 80.6478 216.605 80.8299C216.746 81.012 216.856 81.1723 216.934 81.3111H217.012V78.0122H218.308V86.89H217.043V85.854H216.934C216.856 85.9956 216.743 86.1574 216.596 86.3395C216.452 86.5216 216.252 86.6805 215.998 86.8163C215.743 86.9521 215.414 87.0201 215.009 87.0201ZM215.296 85.9147C215.668 85.9147 215.983 85.8164 216.241 85.6199C216.501 85.4205 216.697 85.1445 216.83 84.7919C216.966 84.4394 217.034 84.029 217.034 83.5608C217.034 83.0985 216.967 82.6939 216.834 82.3471C216.701 82.0003 216.506 81.7301 216.249 81.5365C215.992 81.3428 215.674 81.246 215.296 81.246C214.905 81.246 214.58 81.3472 214.32 81.5495C214.06 81.7518 213.864 82.0278 213.731 82.3774C213.601 82.7271 213.536 83.1216 213.536 83.5608C213.536 84.0059 213.602 84.4061 213.735 84.7616C213.868 85.1171 214.064 85.3988 214.325 85.6069C214.588 85.8121 214.911 85.9147 215.296 85.9147ZM226.009 80.2317V81.272H222.372V80.2317H226.009ZM223.347 78.6365H224.643V84.935C224.643 85.1864 224.681 85.3757 224.756 85.5029C224.831 85.6271 224.928 85.7124 225.046 85.7586C225.168 85.802 225.299 85.8236 225.441 85.8236C225.545 85.8236 225.636 85.8164 225.714 85.802C225.792 85.7875 225.852 85.776 225.896 85.7673L226.13 86.838C226.055 86.8669 225.948 86.8958 225.809 86.9247C225.67 86.9565 225.497 86.9738 225.289 86.9767C224.948 86.9825 224.63 86.9218 224.335 86.7946C224.041 86.6675 223.802 86.471 223.62 86.2051C223.438 85.9392 223.347 85.6055 223.347 85.2038V78.6365ZM228.637 82.9366V86.89H227.341V78.0122H228.62V81.3154H228.702C228.858 80.957 229.097 80.6724 229.418 80.4614C229.738 80.2505 230.157 80.145 230.675 80.145C231.131 80.145 231.53 80.2389 231.871 80.4267C232.215 80.6146 232.481 80.8949 232.669 81.2677C232.859 81.6376 232.955 82.1 232.955 82.6549V86.89H231.659V82.8109C231.659 82.3225 231.533 81.9439 231.282 81.6752C231.03 81.4035 230.68 81.2677 230.233 81.2677C229.926 81.2677 229.652 81.3327 229.409 81.4628C229.169 81.5928 228.98 81.7836 228.841 82.035C228.705 82.2835 228.637 82.5841 228.637 82.9366ZM237.31 87.0244C236.654 87.0244 236.089 86.8842 235.615 86.6039C235.144 86.3207 234.78 85.9233 234.523 85.4118C234.268 84.8974 234.141 84.2949 234.141 83.6042C234.141 82.9222 234.268 82.3211 234.523 81.8009C234.78 81.2807 235.138 80.8747 235.598 80.5828C236.06 80.2909 236.601 80.145 237.219 80.145C237.595 80.145 237.959 80.2071 238.311 80.3314C238.664 80.4556 238.98 80.6507 239.261 80.9166C239.541 81.1825 239.762 81.5278 239.924 81.9526C240.086 82.3745 240.167 82.8875 240.167 83.4915V83.951H234.874V82.98H238.897C238.897 82.639 238.827 82.337 238.688 82.074C238.55 81.8081 238.355 81.5986 238.103 81.4454C237.855 81.2923 237.563 81.2157 237.228 81.2157C236.863 81.2157 236.546 81.3053 236.274 81.4845C236.005 81.6607 235.797 81.8919 235.65 82.178C235.505 82.4612 235.433 82.769 235.433 83.1014V83.86C235.433 84.305 235.511 84.6836 235.667 84.9957C235.826 85.3078 236.047 85.5462 236.33 85.7109C236.614 85.8728 236.944 85.9537 237.323 85.9537C237.569 85.9537 237.793 85.919 237.995 85.8496C238.197 85.7774 238.372 85.6705 238.519 85.5289C238.667 85.3873 238.779 85.2124 238.858 85.0044L240.084 85.2254C239.986 85.5867 239.81 85.9031 239.555 86.1748C239.304 86.4435 238.988 86.653 238.606 86.8033C238.228 86.9507 237.795 87.0244 237.31 87.0244ZM37.7743 106.037C37.3524 106.037 36.9709 105.959 36.6299 105.803C36.2889 105.644 36.0187 105.415 35.8193 105.114C35.6228 104.814 35.5245 104.445 35.5245 104.009C35.5245 103.633 35.5968 103.324 35.7413 103.081C35.8858 102.838 36.0808 102.646 36.3265 102.504C36.5721 102.363 36.8467 102.256 37.1501 102.184C37.4535 102.111 37.7628 102.057 38.0778 102.019C38.4766 101.973 38.8002 101.935 39.0488 101.906C39.2973 101.874 39.4779 101.824 39.5906 101.755C39.7033 101.685 39.7597 101.573 39.7597 101.416V101.386C39.7597 101.008 39.6528 100.714 39.4389 100.506C39.2279 100.298 38.9129 100.194 38.4939 100.194C38.0575 100.194 37.7136 100.291 37.4622 100.484C37.2137 100.675 37.0417 100.888 36.9464 101.122L35.7283 100.844C35.8728 100.44 36.0837 100.113 36.3612 99.8646C36.6415 99.6131 36.9637 99.4311 37.3278 99.3184C37.692 99.2028 38.0749 99.145 38.4766 99.145C38.7424 99.145 39.0242 99.1768 39.3219 99.2404C39.6224 99.301 39.9027 99.4137 40.1628 99.5785C40.4258 99.7432 40.6411 99.9787 40.8087 100.285C40.9763 100.588 41.0601 100.983 41.0601 101.468V105.89H39.7944V104.98H39.7423C39.6585 105.147 39.5328 105.312 39.3652 105.474C39.1976 105.636 38.9823 105.77 38.7193 105.877C38.4563 105.984 38.1413 106.037 37.7743 106.037ZM38.0561 104.997C38.4144 104.997 38.7208 104.926 38.9751 104.785C39.2323 104.643 39.4273 104.458 39.5603 104.23C39.6961 103.999 39.764 103.751 39.764 103.489V102.63C39.7178 102.676 39.6282 102.72 39.4953 102.76C39.3652 102.798 39.2164 102.831 39.0488 102.86C38.8811 102.886 38.7179 102.911 38.5589 102.934C38.4 102.954 38.267 102.971 38.1601 102.986C37.9087 103.017 37.6789 103.071 37.4709 103.146C37.2657 103.221 37.101 103.33 36.9767 103.471C36.8553 103.61 36.7946 103.795 36.7946 104.026C36.7946 104.347 36.9131 104.59 37.1501 104.754C37.3871 104.916 37.6891 104.997 38.0561 104.997ZM45.334 108.526C44.8051 108.526 44.35 108.456 43.9685 108.318C43.5899 108.179 43.2807 107.995 43.0409 107.767C42.801 107.539 42.6218 107.289 42.5033 107.017L43.6174 106.558C43.6954 106.685 43.7995 106.819 43.9295 106.961C44.0624 107.105 44.2416 107.228 44.467 107.329C44.6953 107.43 44.9887 107.481 45.347 107.481C45.8383 107.481 46.2443 107.361 46.5651 107.121C46.8859 106.884 47.0463 106.506 47.0463 105.985V104.676H46.9639C46.8859 104.818 46.7732 104.975 46.6258 105.149C46.4813 105.322 46.2819 105.472 46.0276 105.6C45.7733 105.727 45.4424 105.79 45.0349 105.79C44.5089 105.79 44.035 105.667 43.6131 105.422C43.194 105.173 42.8617 104.808 42.616 104.325C42.3733 103.84 42.2519 103.243 42.2519 102.535C42.2519 101.827 42.3718 101.22 42.6117 100.714C42.8545 100.208 43.1868 99.8212 43.6087 99.5525C44.0307 99.2808 44.5089 99.145 45.0436 99.145C45.4568 99.145 45.7906 99.2143 46.0449 99.3531C46.2992 99.4889 46.4972 99.6478 46.6388 99.8299C46.7833 100.012 46.8945 100.172 46.9726 100.311H47.0679V99.2317H48.3381V106.037C48.3381 106.61 48.2051 107.079 47.9392 107.446C47.6734 107.813 47.3136 108.085 46.8599 108.261C46.409 108.437 45.9004 108.526 45.334 108.526ZM45.321 104.715C45.6938 104.715 46.0088 104.629 46.266 104.455C46.5261 104.279 46.7226 104.027 46.8555 103.701C46.9914 103.371 47.0593 102.977 47.0593 102.517C47.0593 102.07 46.9928 101.675 46.8599 101.334C46.7269 100.993 46.5319 100.727 46.2747 100.536C46.0175 100.343 45.6996 100.246 45.321 100.246C44.9309 100.246 44.6057 100.347 44.3457 100.549C44.0856 100.749 43.889 101.021 43.7561 101.364C43.6261 101.708 43.561 102.093 43.561 102.517C43.561 102.954 43.6275 103.337 43.7604 103.666C43.8934 103.996 44.0899 104.253 44.35 104.438C44.613 104.623 44.9366 104.715 45.321 104.715ZM49.8322 105.89V99.2317H51.085V100.289H51.1543C51.2757 99.931 51.4895 99.6493 51.7959 99.4441C52.1051 99.236 52.4548 99.132 52.8449 99.132C52.9258 99.132 53.0212 99.1349 53.131 99.1406C53.2437 99.1464 53.3319 99.1537 53.3954 99.1623V100.402C53.3434 100.388 53.2509 100.372 53.118 100.354C52.9851 100.334 52.8521 100.324 52.7192 100.324C52.4129 100.324 52.1398 100.389 51.8999 100.519C51.6629 100.646 51.4751 100.824 51.3364 101.052C51.1977 101.278 51.1283 101.535 51.1283 101.824V105.89H49.8322ZM56.9042 106.024C56.2482 106.024 55.6832 105.884 55.2093 105.604C54.7382 105.321 54.3741 104.923 54.1169 104.412C53.8626 103.897 53.7354 103.295 53.7354 102.604C53.7354 101.922 53.8626 101.321 54.1169 100.801C54.3741 100.281 54.7324 99.8747 55.1919 99.5828C55.6543 99.2909 56.1947 99.145 56.8132 99.145C57.1889 99.145 57.553 99.2071 57.9055 99.3314C58.2581 99.4556 58.5746 99.6507 58.8549 99.9166C59.1352 100.182 59.3563 100.528 59.5181 100.953C59.6799 101.375 59.7609 101.888 59.7609 102.491V102.951H54.468V101.98H58.4908C58.4908 101.639 58.4214 101.337 58.2827 101.074C58.144 100.808 57.9489 100.599 57.6975 100.445C57.4489 100.292 57.1571 100.216 56.8218 100.216C56.4577 100.216 56.1398 100.305 55.8682 100.484C55.5994 100.661 55.3913 100.892 55.2439 101.178C55.0995 101.461 55.0272 101.769 55.0272 102.101V102.86C55.0272 103.305 55.1052 103.684 55.2613 103.996C55.4202 104.308 55.6413 104.546 55.9245 104.711C56.2077 104.873 56.5386 104.954 56.9172 104.954C57.1628 104.954 57.3868 104.919 57.5891 104.85C57.7914 104.777 57.9662 104.67 58.1136 104.529C58.261 104.387 58.3737 104.212 58.4517 104.004L59.6785 104.225C59.5802 104.587 59.404 104.903 59.1496 105.175C58.8982 105.444 58.5818 105.653 58.2003 105.803C57.8217 105.951 57.3897 106.024 56.9042 106.024ZM63.8245 106.024C63.1685 106.024 62.6035 105.884 62.1296 105.604C61.6585 105.321 61.2944 104.923 61.0372 104.412C60.7829 103.897 60.6557 103.295 60.6557 102.604C60.6557 101.922 60.7829 101.321 61.0372 100.801C61.2944 100.281 61.6527 99.8747 62.1122 99.5828C62.5746 99.2909 63.115 99.145 63.7335 99.145C64.1091 99.145 64.4733 99.2071 64.8258 99.3314C65.1784 99.4556 65.4948 99.6507 65.7752 99.9166C66.0555 100.182 66.2766 100.528 66.4384 100.953C66.6002 101.375 66.6812 101.888 66.6812 102.491V102.951H61.3883V101.98H65.411C65.411 101.639 65.3417 101.337 65.203 101.074C65.0643 100.808 64.8692 100.599 64.6178 100.445C64.3692 100.292 64.0773 100.216 63.7421 100.216C63.378 100.216 63.0601 100.305 62.7885 100.484C62.5197 100.661 62.3116 100.892 62.1642 101.178C62.0197 101.461 61.9475 101.769 61.9475 102.101V102.86C61.9475 103.305 62.0255 103.684 62.1816 103.996C62.3405 104.308 62.5616 104.546 62.8448 104.711C63.128 104.873 63.4589 104.954 63.8375 104.954C64.0831 104.954 64.3071 104.919 64.5094 104.85C64.7117 104.777 64.8865 104.67 65.0339 104.529C65.1813 104.387 65.294 104.212 65.372 104.004L66.5988 104.225C66.5005 104.587 66.3242 104.903 66.0699 105.175C65.8185 105.444 65.5021 105.653 65.1206 105.803C64.742 105.951 64.31 106.024 63.8245 106.024ZM67.8751 105.89V99.2317H69.1192V100.315H69.2016C69.3403 99.9484 69.5671 99.6623 69.8821 99.4571C70.1971 99.249 70.5743 99.145 71.0135 99.145C71.4586 99.145 71.8314 99.249 72.1319 99.4571C72.4354 99.6652 72.6593 99.9513 72.8038 100.315H72.8732C73.0321 99.9599 73.285 99.6767 73.6318 99.4658C73.9786 99.2519 74.3918 99.145 74.8716 99.145C75.4755 99.145 75.9683 99.3343 76.3497 99.7128C76.7341 100.091 76.9263 100.662 76.9263 101.425V105.89H75.6302V101.546C75.6302 101.096 75.5073 100.769 75.2617 100.567C75.016 100.365 74.7227 100.263 74.3817 100.263C73.9598 100.263 73.6318 100.393 73.3977 100.654C73.1636 100.911 73.0466 101.242 73.0466 101.646V105.89H71.7548V101.464C71.7548 101.103 71.6421 100.812 71.4167 100.593C71.1913 100.373 70.8979 100.263 70.5367 100.263C70.2911 100.263 70.0642 100.328 69.8561 100.458C69.6509 100.586 69.4848 100.763 69.3576 100.992C69.2334 101.22 69.1712 101.484 69.1712 101.785V105.89H67.8751ZM81.289 106.024C80.633 106.024 80.068 105.884 79.5941 105.604C79.123 105.321 78.7589 104.923 78.5017 104.412C78.2474 103.897 78.1202 103.295 78.1202 102.604C78.1202 101.922 78.2474 101.321 78.5017 100.801C78.7589 100.281 79.1172 99.8747 79.5767 99.5828C80.0391 99.2909 80.5795 99.145 81.198 99.145C81.5737 99.145 81.9378 99.2071 82.2903 99.3314C82.6429 99.4556 82.9594 99.6507 83.2397 99.9166C83.52 100.182 83.7411 100.528 83.9029 100.953C84.0647 101.375 84.1457 101.888 84.1457 102.491V102.951H78.8528V101.98H82.8756C82.8756 101.639 82.8062 101.337 82.6675 101.074C82.5288 100.808 82.3337 100.599 82.0823 100.445C81.8337 100.292 81.5419 100.216 81.2066 100.216C80.8425 100.216 80.5246 100.305 80.253 100.484C79.9842 100.661 79.7761 100.892 79.6287 101.178C79.4843 101.461 79.412 101.769 79.412 102.101V102.86C79.412 103.305 79.49 103.684 79.6461 103.996C79.805 104.308 80.0261 104.546 80.3093 104.711C80.5925 104.873 80.9234 104.954 81.302 104.954C81.5476 104.954 81.7716 104.919 81.9739 104.85C82.1762 104.777 82.351 104.67 82.4984 104.529C82.6458 104.387 82.7585 104.212 82.8365 104.004L84.0633 104.225C83.965 104.587 83.7888 104.903 83.5345 105.175C83.283 105.444 82.9666 105.653 82.5851 105.803C82.2065 105.951 81.7745 106.024 81.289 106.024ZM86.6357 101.937V105.89H85.3396V99.2317H86.5837V100.315H86.6661C86.8192 99.9628 87.0591 99.6796 87.3857 99.4658C87.7151 99.2519 88.1298 99.145 88.6298 99.145C89.0835 99.145 89.4808 99.2404 89.8219 99.4311C90.1629 99.6189 90.4273 99.8992 90.6151 100.272C90.803 100.645 90.8969 101.106 90.8969 101.655V105.89H89.6008V101.811C89.6008 101.328 89.4751 100.951 89.2236 100.68C88.9722 100.405 88.6269 100.268 88.1876 100.268C87.8871 100.268 87.6197 100.333 87.3857 100.463C87.1545 100.593 86.971 100.784 86.8351 101.035C86.7022 101.284 86.6357 101.584 86.6357 101.937ZM95.4991 99.2317V100.272H91.8622V99.2317H95.4991ZM92.8375 97.6365H94.1336V103.935C94.1336 104.186 94.1712 104.376 94.2463 104.503C94.3215 104.627 94.4183 104.712 94.5368 104.759C94.6582 104.802 94.7896 104.824 94.9313 104.824C95.0353 104.824 95.1263 104.816 95.2044 104.802C95.2824 104.788 95.3431 104.776 95.3864 104.767L95.6205 105.838C95.5454 105.867 95.4384 105.896 95.2997 105.925C95.161 105.956 94.9876 105.974 94.7795 105.977C94.4385 105.982 94.1206 105.922 93.8259 105.795C93.5311 105.667 93.2927 105.471 93.1106 105.205C92.9286 104.939 92.8375 104.605 92.8375 104.204V97.6365ZM102.783 99.2317V100.272H99.1463V99.2317H102.783ZM100.122 97.6365H101.418V103.935C101.418 104.186 101.455 104.376 101.53 104.503C101.606 104.627 101.702 104.712 101.821 104.759C101.942 104.802 102.074 104.824 102.215 104.824C102.319 104.824 102.41 104.816 102.488 104.802C102.566 104.788 102.627 104.776 102.671 104.767L102.905 105.838C102.829 105.867 102.723 105.896 102.584 105.925C102.445 105.956 102.272 105.974 102.064 105.977C101.723 105.982 101.405 105.922 101.11 105.795C100.815 105.667 100.577 105.471 100.395 105.205C100.213 104.939 100.122 104.605 100.122 104.204V97.6365ZM105.412 101.937V105.89H104.116V97.0122H105.395V100.315H105.477C105.633 99.957 105.872 99.6724 106.192 99.4614C106.513 99.2505 106.932 99.145 107.449 99.145C107.906 99.145 108.305 99.2389 108.646 99.4267C108.99 99.6146 109.256 99.8949 109.443 100.268C109.634 100.638 109.73 101.1 109.73 101.655V105.89H108.433V101.811C108.433 101.323 108.308 100.944 108.056 100.675C107.805 100.404 107.455 100.268 107.007 100.268C106.701 100.268 106.426 100.333 106.184 100.463C105.944 100.593 105.754 100.784 105.616 101.035C105.48 101.284 105.412 101.584 105.412 101.937ZM113.153 106.037C112.731 106.037 112.349 105.959 112.008 105.803C111.667 105.644 111.397 105.415 111.198 105.114C111.001 104.814 110.903 104.445 110.903 104.009C110.903 103.633 110.975 103.324 111.12 103.081C111.264 102.838 111.459 102.646 111.705 102.504C111.95 102.363 112.225 102.256 112.528 102.184C112.832 102.111 113.141 102.057 113.456 102.019C113.855 101.973 114.179 101.935 114.427 101.906C114.676 101.874 114.856 101.824 114.969 101.755C115.082 101.685 115.138 101.573 115.138 101.416V101.386C115.138 101.008 115.031 100.714 114.817 100.506C114.606 100.298 114.291 100.194 113.872 100.194C113.436 100.194 113.092 100.291 112.841 100.484C112.592 100.675 112.42 100.888 112.325 101.122L111.107 100.844C111.251 100.44 111.462 100.113 111.74 99.8646C112.02 99.6131 112.342 99.4311 112.706 99.3184C113.07 99.2028 113.453 99.145 113.855 99.145C114.121 99.145 114.403 99.1768 114.7 99.2404C115.001 99.301 115.281 99.4137 115.541 99.5785C115.804 99.7432 116.019 99.9787 116.187 100.285C116.355 100.588 116.438 100.983 116.438 101.468V105.89H115.173V104.98H115.121C115.037 105.147 114.911 105.312 114.744 105.474C114.576 105.636 114.361 105.77 114.098 105.877C113.835 105.984 113.52 106.037 113.153 106.037ZM113.434 104.997C113.793 104.997 114.099 104.926 114.353 104.785C114.611 104.643 114.806 104.458 114.939 104.23C115.074 103.999 115.142 103.751 115.142 103.489V102.63C115.096 102.676 115.007 102.72 114.874 102.76C114.744 102.798 114.595 102.831 114.427 102.86C114.26 102.886 114.096 102.911 113.937 102.934C113.778 102.954 113.645 102.971 113.538 102.986C113.287 103.017 113.057 103.071 112.849 103.146C112.644 103.221 112.479 103.33 112.355 103.471C112.234 103.61 112.173 103.795 112.173 104.026C112.173 104.347 112.291 104.59 112.528 104.754C112.765 104.916 113.067 104.997 113.434 104.997ZM121.029 99.2317V100.272H117.392V99.2317H121.029ZM118.367 97.6365H119.663V103.935C119.663 104.186 119.701 104.376 119.776 104.503C119.851 104.627 119.948 104.712 120.066 104.759C120.188 104.802 120.319 104.824 120.461 104.824C120.565 104.824 120.656 104.816 120.734 104.802C120.812 104.788 120.873 104.776 120.916 104.767L121.15 105.838C121.075 105.867 120.968 105.896 120.829 105.925C120.691 105.956 120.517 105.974 120.309 105.977C119.968 105.982 119.65 105.922 119.356 105.795C119.061 105.667 118.822 105.471 118.64 105.205C118.458 104.939 118.367 104.605 118.367 104.204V97.6365ZM126.648 105.89L124.689 99.2317H126.028L127.333 104.121H127.398L128.707 99.2317H130.047L131.347 104.1H131.412L132.708 99.2317H134.048L132.093 105.89H130.771L129.418 101.083H129.319L127.966 105.89H126.648ZM137.701 106.024C137.045 106.024 136.48 105.884 136.006 105.604C135.535 105.321 135.171 104.923 134.914 104.412C134.659 103.897 134.532 103.295 134.532 102.604C134.532 101.922 134.659 101.321 134.914 100.801C135.171 100.281 135.529 99.8747 135.989 99.5828C136.451 99.2909 136.991 99.145 137.61 99.145C137.985 99.145 138.35 99.2071 138.702 99.3314C139.055 99.4556 139.371 99.6507 139.652 99.9166C139.932 100.182 140.153 100.528 140.315 100.953C140.477 101.375 140.557 101.888 140.557 102.491V102.951H135.265V101.98H139.287C139.287 101.639 139.218 101.337 139.079 101.074C138.941 100.808 138.746 100.599 138.494 100.445C138.246 100.292 137.954 100.216 137.618 100.216C137.254 100.216 136.936 100.305 136.665 100.484C136.396 100.661 136.188 100.892 136.041 101.178C135.896 101.461 135.824 101.769 135.824 102.101V102.86C135.824 103.305 135.902 103.684 136.058 103.996C136.217 104.308 136.438 104.546 136.721 104.711C137.004 104.873 137.335 104.954 137.714 104.954C137.959 104.954 138.183 104.919 138.386 104.85C138.588 104.777 138.763 104.67 138.91 104.529C139.058 104.387 139.17 104.212 139.248 104.004L140.475 104.225C140.377 104.587 140.201 104.903 139.946 105.175C139.695 105.444 139.378 105.653 138.997 105.803C138.618 105.951 138.186 106.024 137.701 106.024ZM147.543 106.024C146.898 106.024 146.343 105.878 145.878 105.587C145.416 105.292 145.06 104.886 144.812 104.368C144.563 103.851 144.439 103.259 144.439 102.591C144.439 101.915 144.566 101.318 144.82 100.801C145.075 100.281 145.433 99.8747 145.895 99.5828C146.358 99.2909 146.902 99.145 147.529 99.145C148.035 99.145 148.486 99.2389 148.882 99.4267C149.278 99.6117 149.597 99.8718 149.84 100.207C150.086 100.542 150.232 100.934 150.278 101.382H149.016C148.947 101.07 148.788 100.801 148.54 100.575C148.294 100.35 147.964 100.237 147.551 100.237C147.19 100.237 146.873 100.333 146.602 100.523C146.333 100.711 146.124 100.98 145.973 101.33C145.823 101.677 145.748 102.087 145.748 102.561C145.748 103.046 145.822 103.465 145.969 103.818C146.116 104.171 146.324 104.444 146.593 104.637C146.865 104.831 147.184 104.928 147.551 104.928C147.797 104.928 148.019 104.883 148.219 104.793C148.421 104.701 148.59 104.569 148.726 104.399C148.865 104.228 148.961 104.023 149.016 103.783H150.278C150.232 104.214 150.091 104.598 149.857 104.936C149.623 105.274 149.31 105.54 148.917 105.734C148.527 105.928 148.068 106.024 147.543 106.024ZM153.357 106.037C152.935 106.037 152.554 105.959 152.213 105.803C151.872 105.644 151.602 105.415 151.402 105.114C151.206 104.814 151.108 104.445 151.108 104.009C151.108 103.633 151.18 103.324 151.324 103.081C151.469 102.838 151.664 102.646 151.91 102.504C152.155 102.363 152.43 102.256 152.733 102.184C153.037 102.111 153.346 102.057 153.661 102.019C154.06 101.973 154.383 101.935 154.632 101.906C154.88 101.874 155.061 101.824 155.174 101.755C155.286 101.685 155.343 101.573 155.343 101.416V101.386C155.343 101.008 155.236 100.714 155.022 100.506C154.811 100.298 154.496 100.194 154.077 100.194C153.641 100.194 153.297 100.291 153.045 100.484C152.797 100.675 152.625 100.888 152.529 101.122L151.311 100.844C151.456 100.44 151.667 100.113 151.944 99.8646C152.225 99.6131 152.547 99.4311 152.911 99.3184C153.275 99.2028 153.658 99.145 154.06 99.145C154.326 99.145 154.607 99.1768 154.905 99.2404C155.205 99.301 155.486 99.4137 155.746 99.5785C156.009 99.7432 156.224 99.9787 156.392 100.285C156.559 100.588 156.643 100.983 156.643 101.468V105.89H155.377V104.98H155.325C155.242 105.147 155.116 105.312 154.948 105.474C154.781 105.636 154.565 105.77 154.302 105.877C154.039 105.984 153.724 106.037 153.357 106.037ZM153.639 104.997C153.998 104.997 154.304 104.926 154.558 104.785C154.815 104.643 155.01 104.458 155.143 104.23C155.279 103.999 155.347 103.751 155.347 103.489V102.63C155.301 102.676 155.211 102.72 155.078 102.76C154.948 102.798 154.799 102.831 154.632 102.86C154.464 102.886 154.301 102.911 154.142 102.934C153.983 102.954 153.85 102.971 153.743 102.986C153.492 103.017 153.262 103.071 153.054 103.146C152.849 103.221 152.684 103.33 152.56 103.471C152.438 103.61 152.378 103.795 152.378 104.026C152.378 104.347 152.496 104.59 152.733 104.754C152.97 104.916 153.272 104.997 153.639 104.997ZM158.125 105.89V99.2317H159.37V100.315H159.452C159.591 99.9484 159.817 99.6623 160.132 99.4571C160.447 99.249 160.825 99.145 161.264 99.145C161.709 99.145 162.082 99.249 162.382 99.4571C162.686 99.6652 162.91 99.9513 163.054 100.315H163.124C163.282 99.9599 163.535 99.6767 163.882 99.4658C164.229 99.2519 164.642 99.145 165.122 99.145C165.726 99.145 166.219 99.3343 166.6 99.7128C166.984 100.091 167.177 100.662 167.177 101.425V105.89H165.88V101.546C165.88 101.096 165.758 100.769 165.512 100.567C165.266 100.365 164.973 100.263 164.632 100.263C164.21 100.263 163.882 100.393 163.648 100.654C163.414 100.911 163.297 101.242 163.297 101.646V105.89H162.005V101.464C162.005 101.103 161.892 100.812 161.667 100.593C161.442 100.373 161.148 100.263 160.787 100.263C160.541 100.263 160.315 100.328 160.106 100.458C159.901 100.586 159.735 100.763 159.608 100.992C159.484 101.22 159.422 101.484 159.422 101.785V105.89H158.125ZM171.539 106.024C170.883 106.024 170.318 105.884 169.844 105.604C169.373 105.321 169.009 104.923 168.752 104.412C168.498 103.897 168.371 103.295 168.371 102.604C168.371 101.922 168.498 101.321 168.752 100.801C169.009 100.281 169.368 99.8747 169.827 99.5828C170.289 99.2909 170.83 99.145 171.448 99.145C171.824 99.145 172.188 99.2071 172.541 99.3314C172.893 99.4556 173.21 99.6507 173.49 99.9166C173.77 100.182 173.991 100.528 174.153 100.953C174.315 101.375 174.396 101.888 174.396 102.491V102.951H169.103V101.98H173.126C173.126 101.639 173.057 101.337 172.918 101.074C172.779 100.808 172.584 100.599 172.333 100.445C172.084 100.292 171.792 100.216 171.457 100.216C171.093 100.216 170.775 100.305 170.503 100.484C170.235 100.661 170.026 100.892 169.879 101.178C169.735 101.461 169.662 101.769 169.662 102.101V102.86C169.662 103.305 169.74 103.684 169.896 103.996C170.055 104.308 170.276 104.546 170.56 104.711C170.843 104.873 171.174 104.954 171.552 104.954C171.798 104.954 172.022 104.919 172.224 104.85C172.427 104.777 172.601 104.67 172.749 104.529C172.896 104.387 173.009 104.212 173.087 104.004L174.314 104.225C174.215 104.587 174.039 104.903 173.785 105.175C173.533 105.444 173.217 105.653 172.835 105.803C172.457 105.951 172.025 106.024 171.539 106.024ZM181.684 99.2317V100.272H178.048V99.2317H181.684ZM179.023 97.6365H180.319V103.935C180.319 104.186 180.357 104.376 180.432 104.503C180.507 104.627 180.604 104.712 180.722 104.759C180.843 104.802 180.975 104.824 181.117 104.824C181.221 104.824 181.312 104.816 181.39 104.802C181.468 104.788 181.528 104.776 181.572 104.767L181.806 105.838C181.731 105.867 181.624 105.896 181.485 105.925C181.346 105.956 181.173 105.974 180.965 105.977C180.624 105.982 180.306 105.922 180.011 105.795C179.716 105.667 179.478 105.471 179.296 105.205C179.114 104.939 179.023 104.605 179.023 104.204V97.6365ZM185.607 106.024C184.983 106.024 184.438 105.881 183.973 105.595C183.508 105.309 183.146 104.909 182.889 104.394C182.632 103.88 182.503 103.279 182.503 102.591C182.503 101.901 182.632 101.297 182.889 100.779C183.146 100.262 183.508 99.8602 183.973 99.5741C184.438 99.288 184.983 99.145 185.607 99.145C186.231 99.145 186.776 99.288 187.241 99.5741C187.707 99.8602 188.068 100.262 188.325 100.779C188.582 101.297 188.711 101.901 188.711 102.591C188.711 103.279 188.582 103.88 188.325 104.394C188.068 104.909 187.707 105.309 187.241 105.595C186.776 105.881 186.231 106.024 185.607 106.024ZM185.612 104.936C186.016 104.936 186.351 104.829 186.617 104.616C186.883 104.402 187.08 104.117 187.207 103.762C187.337 103.406 187.402 103.015 187.402 102.587C187.402 102.162 187.337 101.772 187.207 101.416C187.08 101.058 186.883 100.771 186.617 100.554C186.351 100.337 186.016 100.229 185.612 100.229C185.204 100.229 184.866 100.337 184.597 100.554C184.331 100.771 184.133 101.058 184.003 101.416C183.876 101.772 183.813 102.162 183.813 102.587C183.813 103.015 183.876 103.406 184.003 103.762C184.133 104.117 184.331 104.402 184.597 104.616C184.866 104.829 185.204 104.936 185.612 104.936ZM192.9 105.89V99.2317H194.153V100.289H194.222C194.343 99.931 194.557 99.6493 194.864 99.4441C195.173 99.236 195.523 99.132 195.913 99.132C195.994 99.132 196.089 99.1349 196.199 99.1406C196.312 99.1464 196.4 99.1537 196.463 99.1623V100.402C196.411 100.388 196.319 100.372 196.186 100.354C196.053 100.334 195.92 100.324 195.787 100.324C195.481 100.324 195.208 100.389 194.968 100.519C194.731 100.646 194.543 100.824 194.404 101.052C194.265 101.278 194.196 101.535 194.196 101.824V105.89H192.9ZM199.972 106.024C199.316 106.024 198.751 105.884 198.277 105.604C197.806 105.321 197.442 104.923 197.185 104.412C196.93 103.897 196.803 103.295 196.803 102.604C196.803 101.922 196.93 101.321 197.185 100.801C197.442 100.281 197.8 99.8747 198.26 99.5828C198.722 99.2909 199.263 99.145 199.881 99.145C200.257 99.145 200.621 99.2071 200.973 99.3314C201.326 99.4556 201.642 99.6507 201.923 99.9166C202.203 100.182 202.424 100.528 202.586 100.953C202.748 101.375 202.829 101.888 202.829 102.491V102.951H197.536V101.98H201.559C201.559 101.639 201.489 101.337 201.35 101.074C201.212 100.808 201.017 100.599 200.765 100.445C200.517 100.292 200.225 100.216 199.89 100.216C199.525 100.216 199.208 100.305 198.936 100.484C198.667 100.661 198.459 100.892 198.312 101.178C198.167 101.461 198.095 101.769 198.095 102.101V102.86C198.095 103.305 198.173 103.684 198.329 103.996C198.488 104.308 198.709 104.546 198.992 104.711C199.276 104.873 199.606 104.954 199.985 104.954C200.231 104.954 200.455 104.919 200.657 104.85C200.859 104.777 201.034 104.67 201.181 104.529C201.329 104.387 201.441 104.212 201.52 104.004L202.746 104.225C202.648 104.587 202.472 104.903 202.217 105.175C201.966 105.444 201.65 105.653 201.268 105.803C200.89 105.951 200.457 106.024 199.972 106.024ZM206.814 108.526C206.285 108.526 205.83 108.456 205.449 108.318C205.07 108.179 204.761 107.995 204.521 107.767C204.281 107.539 204.102 107.289 203.984 107.017L205.098 106.558C205.176 106.685 205.28 106.819 205.41 106.961C205.543 107.105 205.722 107.228 205.947 107.329C206.176 107.43 206.469 107.481 206.827 107.481C207.319 107.481 207.725 107.361 208.045 107.121C208.366 106.884 208.527 106.506 208.527 105.985V104.676H208.444C208.366 104.818 208.253 104.975 208.106 105.149C207.962 105.322 207.762 105.472 207.508 105.6C207.254 105.727 206.923 105.79 206.515 105.79C205.989 105.79 205.515 105.667 205.093 105.422C204.674 105.173 204.342 104.808 204.096 104.325C203.854 103.84 203.732 103.243 203.732 102.535C203.732 101.827 203.852 101.22 204.092 100.714C204.335 100.208 204.667 99.8212 205.089 99.5525C205.511 99.2808 205.989 99.145 206.524 99.145C206.937 99.145 207.271 99.2143 207.525 99.3531C207.779 99.4889 207.977 99.6478 208.119 99.8299C208.264 100.012 208.375 100.172 208.453 100.311H208.548V99.2317H209.818V106.037C209.818 106.61 209.685 107.079 209.419 107.446C209.154 107.813 208.794 108.085 208.34 108.261C207.889 108.437 207.381 108.526 206.814 108.526ZM206.801 104.715C207.174 104.715 207.489 104.629 207.746 104.455C208.006 104.279 208.203 104.027 208.336 103.701C208.472 103.371 208.54 102.977 208.54 102.517C208.54 102.07 208.473 101.675 208.34 101.334C208.207 100.993 208.012 100.727 207.755 100.536C207.498 100.343 207.18 100.246 206.801 100.246C206.411 100.246 206.086 100.347 205.826 100.549C205.566 100.749 205.369 101.021 205.236 101.364C205.106 101.708 205.041 102.093 205.041 102.517C205.041 102.954 205.108 103.337 205.241 103.666C205.374 103.996 205.57 104.253 205.83 104.438C206.093 104.623 206.417 104.715 206.801 104.715ZM213.25 106.037C212.828 106.037 212.447 105.959 212.106 105.803C211.765 105.644 211.495 105.415 211.295 105.114C211.099 104.814 211 104.445 211 104.009C211 103.633 211.073 103.324 211.217 103.081C211.362 102.838 211.557 102.646 211.802 102.504C212.048 102.363 212.322 102.256 212.626 102.184C212.929 102.111 213.239 102.057 213.554 102.019C213.952 101.973 214.276 101.935 214.525 101.906C214.773 101.874 214.954 101.824 215.066 101.755C215.179 101.685 215.235 101.573 215.235 101.416V101.386C215.235 101.008 215.129 100.714 214.915 100.506C214.704 100.298 214.389 100.194 213.97 100.194C213.533 100.194 213.189 100.291 212.938 100.484C212.689 100.675 212.518 100.888 212.422 101.122L211.204 100.844C211.349 100.44 211.56 100.113 211.837 99.8646C212.117 99.6131 212.439 99.4311 212.804 99.3184C213.168 99.2028 213.551 99.145 213.952 99.145C214.218 99.145 214.5 99.1768 214.798 99.2404C215.098 99.301 215.379 99.4137 215.639 99.5785C215.902 99.7432 216.117 99.9787 216.285 100.285C216.452 100.588 216.536 100.983 216.536 101.468V105.89H215.27V104.98H215.218C215.134 105.147 215.009 105.312 214.841 105.474C214.673 105.636 214.458 105.77 214.195 105.877C213.932 105.984 213.617 106.037 213.25 106.037ZM213.532 104.997C213.89 104.997 214.197 104.926 214.451 104.785C214.708 104.643 214.903 104.458 215.036 104.23C215.172 103.999 215.24 103.751 215.24 103.489V102.63C215.194 102.676 215.104 102.72 214.971 102.76C214.841 102.798 214.692 102.831 214.525 102.86C214.357 102.886 214.194 102.911 214.035 102.934C213.876 102.954 213.743 102.971 213.636 102.986C213.384 103.017 213.155 103.071 212.947 103.146C212.741 103.221 212.577 103.33 212.453 103.471C212.331 103.61 212.27 103.795 212.27 104.026C212.27 104.347 212.389 104.59 212.626 104.754C212.863 104.916 213.165 104.997 213.532 104.997ZM218.018 105.89V99.2317H219.271V100.289H219.34C219.462 99.931 219.675 99.6493 219.982 99.4441C220.291 99.236 220.641 99.132 221.031 99.132C221.112 99.132 221.207 99.1349 221.317 99.1406C221.43 99.1464 221.518 99.1537 221.581 99.1623V100.402C221.529 100.388 221.437 100.372 221.304 100.354C221.171 100.334 221.038 100.324 220.905 100.324C220.599 100.324 220.326 100.389 220.086 100.519C219.849 100.646 219.661 100.824 219.522 101.052C219.384 101.278 219.314 101.535 219.314 101.824V105.89H218.018ZM224.713 106.02C224.176 106.02 223.696 105.883 223.274 105.608C222.855 105.331 222.525 104.936 222.286 104.425C222.049 103.91 221.93 103.293 221.93 102.574C221.93 101.854 222.05 101.239 222.29 100.727C222.533 100.216 222.865 99.8241 223.287 99.5525C223.709 99.2808 224.187 99.145 224.722 99.145C225.135 99.145 225.467 99.2143 225.719 99.3531C225.973 99.4889 226.17 99.6478 226.308 99.8299C226.45 100.012 226.56 100.172 226.638 100.311H226.716V97.0122H228.012V105.89H226.746V104.854H226.638C226.56 104.996 226.447 105.157 226.3 105.339C226.155 105.522 225.956 105.68 225.701 105.816C225.447 105.952 225.118 106.02 224.713 106.02ZM224.999 104.915C225.372 104.915 225.687 104.816 225.944 104.62C226.204 104.42 226.401 104.145 226.534 103.792C226.669 103.439 226.737 103.029 226.737 102.561C226.737 102.098 226.671 101.694 226.538 101.347C226.405 101 226.21 100.73 225.953 100.536C225.696 100.343 225.378 100.246 224.999 100.246C224.609 100.246 224.284 100.347 224.024 100.549C223.764 100.752 223.567 101.028 223.434 101.377C223.304 101.727 223.239 102.122 223.239 102.561C223.239 103.006 223.306 103.406 223.439 103.762C223.572 104.117 223.768 104.399 224.028 104.607C224.291 104.812 224.615 104.915 224.999 104.915ZM229.618 105.89V99.2317H230.914V105.89H229.618ZM230.272 98.2043C230.047 98.2043 229.853 98.1292 229.691 97.9789C229.532 97.8257 229.453 97.6437 229.453 97.4327C229.453 97.2189 229.532 97.0368 229.691 96.8865C229.853 96.7334 230.047 96.6568 230.272 96.6568C230.498 96.6568 230.69 96.7334 230.849 96.8865C231.011 97.0368 231.091 97.2189 231.091 97.4327C231.091 97.6437 231.011 97.8257 230.849 97.9789C230.69 98.1292 230.498 98.2043 230.272 98.2043ZM233.709 101.937V105.89H232.413V99.2317H233.657V100.315H233.74C233.893 99.9628 234.133 99.6796 234.459 99.4658C234.789 99.2519 235.203 99.145 235.703 99.145C236.157 99.145 236.555 99.2404 236.896 99.4311C237.237 99.6189 237.501 99.8992 237.689 100.272C237.877 100.645 237.971 101.106 237.971 101.655V105.89H236.674V101.811C236.674 101.328 236.549 100.951 236.297 100.68C236.046 100.405 235.701 100.268 235.261 100.268C234.961 100.268 234.693 100.333 234.459 100.463C234.228 100.593 234.045 100.784 233.909 101.035C233.776 101.284 233.709 101.584 233.709 101.937ZM242.256 108.526C241.727 108.526 241.272 108.456 240.891 108.318C240.512 108.179 240.203 107.995 239.963 107.767C239.723 107.539 239.544 107.289 239.426 107.017L240.54 106.558C240.618 106.685 240.722 106.819 240.852 106.961C240.985 107.105 241.164 107.228 241.389 107.329C241.618 107.43 241.911 107.481 242.269 107.481C242.761 107.481 243.167 107.361 243.487 107.121C243.808 106.884 243.969 106.506 243.969 105.985V104.676H243.886C243.808 104.818 243.696 104.975 243.548 105.149C243.404 105.322 243.204 105.472 242.95 105.6C242.696 105.727 242.365 105.79 241.957 105.79C241.431 105.79 240.957 105.667 240.535 105.422C240.116 105.173 239.784 104.808 239.538 104.325C239.296 103.84 239.174 103.243 239.174 102.535C239.174 101.827 239.294 101.22 239.534 100.714C239.777 100.208 240.109 99.8212 240.531 99.5525C240.953 99.2808 241.431 99.145 241.966 99.145C242.379 99.145 242.713 99.2143 242.967 99.3531C243.222 99.4889 243.42 99.6478 243.561 99.8299C243.706 100.012 243.817 100.172 243.895 100.311H243.99V99.2317H245.26V106.037C245.26 106.61 245.127 107.079 244.862 107.446C244.596 107.813 244.236 108.085 243.782 108.261C243.331 108.437 242.823 108.526 242.256 108.526ZM242.243 104.715C242.616 104.715 242.931 104.629 243.188 104.455C243.448 104.279 243.645 104.027 243.778 103.701C243.914 103.371 243.982 102.977 243.982 102.517C243.982 102.07 243.915 101.675 243.782 101.334C243.649 100.993 243.454 100.727 243.197 100.536C242.94 100.343 242.622 100.246 242.243 100.246C241.853 100.246 241.528 100.347 241.268 100.549C241.008 100.749 240.811 101.021 240.678 101.364C240.548 101.708 240.483 102.093 240.483 102.517C240.483 102.954 240.55 103.337 240.683 103.666C240.816 103.996 241.012 104.253 241.272 104.438C241.535 104.623 241.859 104.715 242.243 104.715ZM38.6413 126.024C38.0171 126.024 37.4723 125.881 37.007 125.595C36.5418 125.309 36.1805 124.909 35.9233 124.394C35.6661 123.88 35.5375 123.279 35.5375 122.591C35.5375 121.901 35.6661 121.297 35.9233 120.779C36.1805 120.262 36.5418 119.86 37.007 119.574C37.4723 119.288 38.0171 119.145 38.6413 119.145C39.2655 119.145 39.8103 119.288 40.2755 119.574C40.7408 119.86 41.102 120.262 41.3592 120.779C41.6164 121.297 41.745 121.901 41.745 122.591C41.745 123.279 41.6164 123.88 41.3592 124.394C41.102 124.909 40.7408 125.309 40.2755 125.595C39.8103 125.881 39.2655 126.024 38.6413 126.024ZM38.6456 124.936C39.0502 124.936 39.3854 124.829 39.6513 124.616C39.9172 124.402 40.1137 124.117 40.2408 123.762C40.3709 123.406 40.4359 123.015 40.4359 122.587C40.4359 122.162 40.3709 121.772 40.2408 121.416C40.1137 121.058 39.9172 120.771 39.6513 120.554C39.3854 120.337 39.0502 120.229 38.6456 120.229C38.2381 120.229 37.9 120.337 37.6313 120.554C37.3654 120.771 37.1674 121.058 37.0374 121.416C36.9102 121.772 36.8467 122.162 36.8467 122.587C36.8467 123.015 36.9102 123.406 37.0374 123.762C37.1674 124.117 37.3654 124.402 37.6313 124.616C37.9 124.829 38.2381 124.936 38.6456 124.936ZM47.1655 123.129V119.232H48.4659V125.89H47.1915V124.737H47.1221C46.969 125.092 46.7233 125.389 46.3852 125.626C46.05 125.86 45.6324 125.977 45.1324 125.977C44.7047 125.977 44.3261 125.883 43.9967 125.695C43.6701 125.504 43.4129 125.222 43.2251 124.85C43.0401 124.477 42.9477 124.016 42.9477 123.467V119.232H44.2438V123.311C44.2438 123.764 44.3695 124.126 44.6209 124.394C44.8723 124.663 45.1989 124.798 45.6006 124.798C45.8433 124.798 46.0846 124.737 46.3245 124.616C46.5673 124.494 46.7681 124.311 46.9271 124.065C47.0889 123.819 47.1684 123.507 47.1655 123.129ZM49.9633 125.89V119.232H51.2161V120.289H51.2854C51.4068 119.931 51.6207 119.649 51.927 119.444C52.2362 119.236 52.5859 119.132 52.976 119.132C53.057 119.132 53.1523 119.135 53.2621 119.141C53.3748 119.146 53.463 119.154 53.5266 119.162V120.402C53.4745 120.388 53.3821 120.372 53.2491 120.354C53.1162 120.334 52.9833 120.324 52.8503 120.324C52.544 120.324 52.2709 120.389 52.031 120.519C51.7941 120.646 51.6062 120.824 51.4675 121.052C51.3288 121.278 51.2594 121.535 51.2594 121.824V125.89H49.9633ZM57.3905 128.387V119.232H58.6563V120.311H58.7646C58.8398 120.172 58.9481 120.012 59.0897 119.83C59.2313 119.648 59.4279 119.489 59.6793 119.353C59.9307 119.214 60.263 119.145 60.6763 119.145C61.2138 119.145 61.6935 119.281 62.1155 119.552C62.5374 119.824 62.8683 120.216 63.1082 120.727C63.3509 121.239 63.4723 121.854 63.4723 122.574C63.4723 123.293 63.3523 123.91 63.1125 124.425C62.8726 124.936 62.5432 125.331 62.1241 125.608C61.7051 125.883 61.2268 126.02 60.6893 126.02C60.2847 126.02 59.9538 125.952 59.6966 125.816C59.4423 125.68 59.2429 125.522 59.0984 125.339C58.9539 125.157 58.8427 124.996 58.7646 124.854H58.6866V128.387H57.3905ZM58.6606 122.561C58.6606 123.029 58.7285 123.439 58.8643 123.792C59.0002 124.145 59.1967 124.42 59.4539 124.62C59.7111 124.816 60.0261 124.915 60.3989 124.915C60.7861 124.915 61.1098 124.812 61.3699 124.607C61.63 124.399 61.8265 124.117 61.9594 123.762C62.0952 123.406 62.1632 123.006 62.1632 122.561C62.1632 122.122 62.0967 121.727 61.9637 121.377C61.8337 121.028 61.6372 120.752 61.3742 120.549C61.1141 120.347 60.789 120.246 60.3989 120.246C60.0232 120.246 59.7053 120.343 59.4452 120.536C59.188 120.73 58.9929 121 58.86 121.347C58.7271 121.694 58.6606 122.098 58.6606 122.561ZM66.618 126.037C66.1961 126.037 65.8146 125.959 65.4736 125.803C65.1326 125.644 64.8624 125.415 64.663 125.114C64.4665 124.814 64.3682 124.445 64.3682 124.009C64.3682 123.633 64.4405 123.324 64.5849 123.081C64.7294 122.838 64.9245 122.646 65.1702 122.504C65.4158 122.363 65.6903 122.256 65.9938 122.184C66.2972 122.111 66.6064 122.057 66.9214 122.019C67.3202 121.973 67.6439 121.935 67.8924 121.906C68.141 121.874 68.3216 121.824 68.4343 121.755C68.547 121.685 68.6034 121.573 68.6034 121.416V121.386C68.6034 121.008 68.4964 120.714 68.2826 120.506C68.0716 120.298 67.7566 120.194 67.3376 120.194C66.9012 120.194 66.5573 120.291 66.3059 120.484C66.0574 120.675 65.8854 120.888 65.79 121.122L64.5719 120.844C64.7164 120.44 64.9274 120.113 65.2048 119.865C65.4852 119.613 65.8074 119.431 66.1715 119.318C66.5356 119.203 66.9185 119.145 67.3202 119.145C67.5861 119.145 67.8679 119.177 68.1655 119.24C68.4661 119.301 68.7464 119.414 69.0065 119.578C69.2695 119.743 69.4848 119.979 69.6524 120.285C69.82 120.588 69.9038 120.983 69.9038 121.468V125.89H68.638V124.98H68.586C68.5022 125.147 68.3765 125.312 68.2089 125.474C68.0413 125.636 67.826 125.77 67.563 125.877C67.3 125.984 66.985 126.037 66.618 126.037ZM66.8998 124.997C67.2581 124.997 67.5644 124.926 67.8187 124.785C68.0759 124.643 68.271 124.458 68.404 124.23C68.5398 123.999 68.6077 123.751 68.6077 123.489V122.63C68.5615 122.676 68.4719 122.72 68.3389 122.76C68.2089 122.798 68.0601 122.831 67.8924 122.86C67.7248 122.886 67.5615 122.911 67.4026 122.934C67.2437 122.954 67.1107 122.971 67.0038 122.986C66.7524 123.017 66.5226 123.071 66.3146 123.146C66.1094 123.221 65.9446 123.33 65.8204 123.471C65.699 123.61 65.6383 123.795 65.6383 124.026C65.6383 124.347 65.7568 124.59 65.9938 124.754C66.2307 124.916 66.5327 124.997 66.8998 124.997ZM71.386 125.89V119.232H72.6388V120.289H72.7082C72.8295 119.931 73.0434 119.649 73.3497 119.444C73.6589 119.236 74.0086 119.132 74.3988 119.132C74.4797 119.132 74.575 119.135 74.6849 119.141C74.7976 119.146 74.8857 119.154 74.9493 119.162V120.402C74.8973 120.388 74.8048 120.372 74.6718 120.354C74.5389 120.334 74.406 120.324 74.273 120.324C73.9667 120.324 73.6936 120.389 73.4538 120.519C73.2168 120.646 73.0289 120.824 72.8902 121.052C72.7515 121.278 72.6822 121.535 72.6822 121.824V125.89H71.386ZM79.3283 119.232V120.272H75.6913V119.232H79.3283ZM76.6667 117.636H77.9628V123.935C77.9628 124.186 78.0004 124.376 78.0755 124.503C78.1506 124.627 78.2474 124.712 78.3659 124.759C78.4873 124.802 78.6188 124.824 78.7604 124.824C78.8644 124.824 78.9555 124.816 79.0335 124.802C79.1115 124.788 79.1722 124.776 79.2156 124.767L79.4496 125.838C79.3745 125.867 79.2676 125.896 79.1289 125.925C78.9901 125.956 78.8167 125.974 78.6087 125.977C78.2677 125.982 77.9498 125.922 77.655 125.795C77.3602 125.667 77.1218 125.471 76.9398 125.205C76.7577 124.939 76.6667 124.605 76.6667 124.204V117.636ZM81.814 121.937V125.89H80.5179V119.232H81.762V120.315H81.8443C81.9975 119.963 82.2374 119.68 82.5639 119.466C82.8934 119.252 83.3081 119.145 83.808 119.145C84.2617 119.145 84.6591 119.24 85.0001 119.431C85.3411 119.619 85.6055 119.899 85.7934 120.272C85.9812 120.645 86.0752 121.106 86.0752 121.655V125.89H84.779V121.811C84.779 121.328 84.6533 120.951 84.4019 120.68C84.1505 120.405 83.8051 120.268 83.3659 120.268C83.0653 120.268 82.798 120.333 82.5639 120.463C82.3327 120.593 82.1492 120.784 82.0134 121.035C81.8805 121.284 81.814 121.584 81.814 121.937ZM90.439 126.024C89.783 126.024 89.218 125.884 88.744 125.604C88.273 125.321 87.9089 124.923 87.6517 124.412C87.3973 123.897 87.2702 123.295 87.2702 122.604C87.2702 121.922 87.3973 121.321 87.6517 120.801C87.9089 120.281 88.2672 119.875 88.7267 119.583C89.1891 119.291 89.7295 119.145 90.3479 119.145C90.7236 119.145 91.0877 119.207 91.4403 119.331C91.7929 119.456 92.1093 119.651 92.3896 119.917C92.67 120.182 92.891 120.528 93.0529 120.953C93.2147 121.375 93.2956 121.888 93.2956 122.491V122.951H88.0028V121.98H92.0255C92.0255 121.639 91.9562 121.337 91.8174 121.074C91.6787 120.808 91.4837 120.599 91.2322 120.445C90.9837 120.292 90.6918 120.216 90.3566 120.216C89.9925 120.216 89.6746 120.305 89.4029 120.484C89.1342 120.661 88.9261 120.892 88.7787 121.178C88.6342 121.461 88.562 121.769 88.562 122.101V122.86C88.562 123.305 88.64 123.684 88.7961 123.996C88.955 124.308 89.1761 124.546 89.4593 124.711C89.7425 124.873 90.0734 124.954 90.452 124.954C90.6976 124.954 90.9216 124.919 91.1239 124.85C91.3262 124.777 91.501 124.67 91.6484 124.529C91.7958 124.387 91.9085 124.212 91.9865 124.004L93.2133 124.225C93.115 124.587 92.9387 124.903 92.6844 125.175C92.433 125.444 92.1166 125.653 91.7351 125.803C91.3565 125.951 90.9245 126.024 90.439 126.024ZM94.4896 125.89V119.232H95.7424V120.289H95.8117C95.9331 119.931 96.1469 119.649 96.4533 119.444C96.7625 119.236 97.1122 119.132 97.5023 119.132C97.5832 119.132 97.6786 119.135 97.7884 119.141C97.9011 119.146 97.9893 119.154 98.0528 119.162V120.402C98.0008 120.388 97.9083 120.372 97.7754 120.354C97.6425 120.334 97.5095 120.324 97.3766 120.324C97.0703 120.324 96.7972 120.389 96.5573 120.519C96.3203 120.646 96.1325 120.824 95.9938 121.052C95.8551 121.278 95.7857 121.535 95.7857 121.824V125.89H94.4896ZM103.92 120.857L102.745 121.065C102.696 120.915 102.618 120.772 102.511 120.636C102.407 120.5 102.265 120.389 102.086 120.302C101.907 120.216 101.683 120.172 101.414 120.172C101.047 120.172 100.741 120.255 100.495 120.419C100.25 120.581 100.127 120.791 100.127 121.048C100.127 121.271 100.209 121.45 100.374 121.586C100.539 121.721 100.804 121.833 101.171 121.919L102.229 122.162C102.842 122.304 103.298 122.522 103.599 122.817C103.9 123.111 104.05 123.494 104.05 123.965C104.05 124.364 103.934 124.72 103.703 125.032C103.475 125.341 103.155 125.584 102.745 125.76C102.338 125.936 101.865 126.024 101.328 126.024C100.582 126.024 99.9736 125.865 99.5025 125.548C99.0315 125.227 98.7425 124.772 98.6356 124.182L99.8883 123.991C99.9664 124.318 100.127 124.565 100.37 124.733C100.612 124.897 100.929 124.98 101.319 124.98C101.744 124.98 102.083 124.892 102.338 124.715C102.592 124.536 102.719 124.318 102.719 124.061C102.719 123.853 102.641 123.678 102.485 123.536C102.332 123.395 102.096 123.288 101.778 123.215L100.651 122.968C100.03 122.827 99.5704 122.601 99.2728 122.292C98.978 121.983 98.8306 121.591 98.8306 121.117C98.8306 120.724 98.9404 120.38 99.1601 120.086C99.3797 119.791 99.6832 119.561 100.07 119.396C100.458 119.229 100.901 119.145 101.401 119.145C102.121 119.145 102.687 119.301 103.1 119.613C103.514 119.922 103.787 120.337 103.92 120.857ZM106.527 121.937V125.89H105.231V117.012H106.51V120.315H106.592C106.748 119.957 106.986 119.672 107.307 119.461C107.628 119.25 108.047 119.145 108.564 119.145C109.021 119.145 109.42 119.239 109.761 119.427C110.105 119.615 110.37 119.895 110.558 120.268C110.749 120.638 110.844 121.1 110.844 121.655V125.89H109.548V121.811C109.548 121.323 109.423 120.944 109.171 120.675C108.92 120.404 108.57 120.268 108.122 120.268C107.816 120.268 107.541 120.333 107.298 120.463C107.059 120.593 106.869 120.784 106.731 121.035C106.595 121.284 106.527 121.584 106.527 121.937ZM112.33 125.89V119.232H113.626V125.89H112.33ZM112.984 118.204C112.759 118.204 112.565 118.129 112.404 117.979C112.245 117.826 112.165 117.644 112.165 117.433C112.165 117.219 112.245 117.037 112.404 116.887C112.565 116.733 112.759 116.657 112.984 116.657C113.21 116.657 113.402 116.733 113.561 116.887C113.723 117.037 113.804 117.219 113.804 117.433C113.804 117.644 113.723 117.826 113.561 117.979C113.402 118.129 113.21 118.204 112.984 118.204ZM115.126 128.387V119.232H116.391V120.311H116.5C116.575 120.172 116.683 120.012 116.825 119.83C116.966 119.648 117.163 119.489 117.414 119.353C117.666 119.214 117.998 119.145 118.411 119.145C118.949 119.145 119.429 119.281 119.851 119.552C120.272 119.824 120.603 120.216 120.843 120.727C121.086 121.239 121.207 121.854 121.207 122.574C121.207 123.293 121.087 123.91 120.848 124.425C120.608 124.936 120.278 125.331 119.859 125.608C119.44 125.883 118.962 126.02 118.424 126.02C118.02 126.02 117.689 125.952 117.432 125.816C117.177 125.68 116.978 125.522 116.833 125.339C116.689 125.157 116.578 124.996 116.5 124.854H116.422V128.387H115.126ZM116.396 122.561C116.396 123.029 116.464 123.439 116.599 123.792C116.735 124.145 116.932 124.42 117.189 124.62C117.446 124.816 117.761 124.915 118.134 124.915C118.521 124.915 118.845 124.812 119.105 124.607C119.365 124.399 119.562 124.117 119.694 123.762C119.83 123.406 119.898 123.006 119.898 122.561C119.898 122.122 119.832 121.727 119.699 121.377C119.569 121.028 119.372 120.752 119.109 120.549C118.849 120.347 118.524 120.246 118.134 120.246C117.758 120.246 117.44 120.343 117.18 120.536C116.923 120.73 116.728 121 116.595 121.347C116.462 121.694 116.396 122.098 116.396 122.561ZM126.845 125.89L124.886 119.232H126.225L127.53 124.121H127.595L128.904 119.232H130.244L131.544 124.1H131.609L132.905 119.232H134.245L132.29 125.89H130.968L129.615 121.083H129.516L128.163 125.89H126.845ZM135.231 125.89V119.232H136.527V125.89H135.231ZM135.885 118.204C135.66 118.204 135.466 118.129 135.304 117.979C135.145 117.826 135.066 117.644 135.066 117.433C135.066 117.219 135.145 117.037 135.304 116.887C135.466 116.733 135.66 116.657 135.885 116.657C136.111 116.657 136.303 116.733 136.462 116.887C136.624 117.037 136.705 117.219 136.705 117.433C136.705 117.644 136.624 117.826 136.462 117.979C136.303 118.129 136.111 118.204 135.885 118.204ZM141.135 119.232V120.272H137.498V119.232H141.135ZM138.473 117.636H139.769V123.935C139.769 124.186 139.807 124.376 139.882 124.503C139.957 124.627 140.054 124.712 140.172 124.759C140.294 124.802 140.425 124.824 140.567 124.824C140.671 124.824 140.762 124.816 140.84 124.802C140.918 124.788 140.978 124.776 141.022 124.767L141.256 125.838C141.181 125.867 141.074 125.896 140.935 125.925C140.796 125.956 140.623 125.974 140.415 125.977C140.074 125.982 139.756 125.922 139.461 125.795C139.166 125.667 138.928 125.471 138.746 125.205C138.564 124.939 138.473 124.605 138.473 124.204V117.636ZM143.763 121.937V125.89H142.467V117.012H143.746V120.315H143.828C143.984 119.957 144.223 119.672 144.544 119.461C144.864 119.25 145.283 119.145 145.801 119.145C146.257 119.145 146.656 119.239 146.997 119.427C147.341 119.615 147.607 119.895 147.795 120.268C147.985 120.638 148.081 121.1 148.081 121.655V125.89H146.785V121.811C146.785 121.323 146.659 120.944 146.408 120.675C146.156 120.404 145.806 120.268 145.359 120.268C145.052 120.268 144.778 120.333 144.535 120.463C144.295 120.593 144.106 120.784 143.967 121.035C143.831 121.284 143.763 121.584 143.763 121.937ZM157.499 119.344C157.453 118.934 157.262 118.616 156.927 118.391C156.591 118.162 156.169 118.048 155.661 118.048C155.297 118.048 154.982 118.106 154.716 118.222C154.45 118.334 154.243 118.49 154.096 118.69C153.951 118.886 153.879 119.11 153.879 119.362C153.879 119.573 153.928 119.755 154.027 119.908C154.128 120.061 154.259 120.19 154.421 120.294C154.586 120.395 154.762 120.48 154.95 120.549C155.138 120.616 155.318 120.671 155.492 120.714L156.359 120.94C156.642 121.009 156.932 121.103 157.23 121.221C157.528 121.34 157.804 121.496 158.058 121.69C158.312 121.883 158.517 122.123 158.673 122.409C158.832 122.695 158.912 123.038 158.912 123.436C158.912 123.939 158.782 124.386 158.522 124.776C158.265 125.166 157.89 125.474 157.399 125.699C156.911 125.925 156.32 126.037 155.626 126.037C154.961 126.037 154.386 125.932 153.901 125.721C153.415 125.51 153.035 125.211 152.761 124.824C152.486 124.434 152.334 123.971 152.306 123.436H153.649C153.675 123.757 153.779 124.025 153.962 124.238C154.146 124.449 154.382 124.607 154.668 124.711C154.957 124.812 155.274 124.863 155.617 124.863C155.996 124.863 156.333 124.803 156.627 124.685C156.925 124.564 157.159 124.396 157.33 124.182C157.5 123.965 157.585 123.712 157.585 123.423C157.585 123.161 157.51 122.945 157.36 122.778C157.213 122.61 157.012 122.471 156.757 122.361C156.506 122.252 156.221 122.155 155.904 122.071L154.854 121.785C154.144 121.591 153.58 121.307 153.164 120.931C152.751 120.555 152.544 120.058 152.544 119.44C152.544 118.928 152.683 118.482 152.96 118.1C153.238 117.719 153.613 117.423 154.087 117.212C154.561 116.998 155.096 116.891 155.691 116.891C156.292 116.891 156.823 116.996 157.282 117.207C157.744 117.418 158.109 117.709 158.374 118.079C158.64 118.446 158.779 118.868 158.791 119.344H157.499ZM163.272 119.232V120.272H159.636V119.232H163.272ZM160.611 117.636H161.907V123.935C161.907 124.186 161.945 124.376 162.02 124.503C162.095 124.627 162.192 124.712 162.31 124.759C162.432 124.802 162.563 124.824 162.705 124.824C162.809 124.824 162.9 124.816 162.978 124.802C163.056 124.788 163.116 124.776 163.16 124.767L163.394 125.838C163.319 125.867 163.212 125.896 163.073 125.925C162.934 125.956 162.761 125.974 162.553 125.977C162.212 125.982 161.894 125.922 161.599 125.795C161.304 125.667 161.066 125.471 160.884 125.205C160.702 124.939 160.611 124.605 160.611 124.204V117.636ZM167.26 126.024C166.604 126.024 166.039 125.884 165.565 125.604C165.094 125.321 164.73 124.923 164.473 124.412C164.219 123.897 164.091 123.295 164.091 122.604C164.091 121.922 164.219 121.321 164.473 120.801C164.73 120.281 165.088 119.875 165.548 119.583C166.01 119.291 166.551 119.145 167.169 119.145C167.545 119.145 167.909 119.207 168.262 119.331C168.614 119.456 168.931 119.651 169.211 119.917C169.491 120.182 169.712 120.528 169.874 120.953C170.036 121.375 170.117 121.888 170.117 122.491V122.951H164.824V121.98H168.847C168.847 121.639 168.777 121.337 168.639 121.074C168.5 120.808 168.305 120.599 168.054 120.445C167.805 120.292 167.513 120.216 167.178 120.216C166.814 120.216 166.496 120.305 166.224 120.484C165.955 120.661 165.747 120.892 165.6 121.178C165.455 121.461 165.383 121.769 165.383 122.101V122.86C165.383 123.305 165.461 123.684 165.617 123.996C165.776 124.308 165.997 124.546 166.281 124.711C166.564 124.873 166.895 124.954 167.273 124.954C167.519 124.954 167.743 124.919 167.945 124.85C168.147 124.777 168.322 124.67 168.47 124.529C168.617 124.387 168.73 124.212 168.808 124.004L170.035 124.225C169.936 124.587 169.76 124.903 169.506 125.175C169.254 125.444 168.938 125.653 168.556 125.803C168.178 125.951 167.746 126.024 167.26 126.024ZM172.607 117.012V125.89H171.311V117.012H172.607ZM175.403 117.012V125.89H174.107V117.012H175.403ZM178.84 126.037C178.418 126.037 178.036 125.959 177.695 125.803C177.354 125.644 177.084 125.415 176.885 125.114C176.688 124.814 176.59 124.445 176.59 124.009C176.59 123.633 176.662 123.324 176.807 123.081C176.951 122.838 177.146 122.646 177.392 122.504C177.638 122.363 177.912 122.256 178.216 122.184C178.519 122.111 178.828 122.057 179.143 122.019C179.542 121.973 179.866 121.935 180.114 121.906C180.363 121.874 180.543 121.824 180.656 121.755C180.769 121.685 180.825 121.573 180.825 121.416V121.386C180.825 121.008 180.718 120.714 180.504 120.506C180.293 120.298 179.978 120.194 179.559 120.194C179.123 120.194 178.779 120.291 178.528 120.484C178.279 120.675 178.107 120.888 178.012 121.122L176.794 120.844C176.938 120.44 177.149 120.113 177.427 119.865C177.707 119.613 178.029 119.431 178.393 119.318C178.758 119.203 179.14 119.145 179.542 119.145C179.808 119.145 180.09 119.177 180.387 119.24C180.688 119.301 180.968 119.414 181.228 119.578C181.491 119.743 181.707 119.979 181.874 120.285C182.042 120.588 182.126 120.983 182.126 121.468V125.89H180.86V124.98H180.808C180.724 125.147 180.598 125.312 180.431 125.474C180.263 125.636 180.048 125.77 179.785 125.877C179.522 125.984 179.207 126.037 178.84 126.037ZM179.122 124.997C179.48 124.997 179.786 124.926 180.041 124.785C180.298 124.643 180.493 124.458 180.626 124.23C180.762 123.999 180.83 123.751 180.83 123.489V122.63C180.783 122.676 180.694 122.72 180.561 122.76C180.431 122.798 180.282 122.831 180.114 122.86C179.947 122.886 179.783 122.911 179.624 122.934C179.466 122.954 179.333 122.971 179.226 122.986C178.974 123.017 178.745 123.071 178.536 123.146C178.331 123.221 178.167 123.33 178.042 123.471C177.921 123.61 177.86 123.795 177.86 124.026C177.86 124.347 177.979 124.59 178.216 124.754C178.453 124.916 178.755 124.997 179.122 124.997ZM183.608 125.89V119.232H184.861V120.289H184.93C185.051 119.931 185.265 119.649 185.572 119.444C185.881 119.236 186.23 119.132 186.621 119.132C186.702 119.132 186.797 119.135 186.907 119.141C187.019 119.146 187.108 119.154 187.171 119.162V120.402C187.119 120.388 187.027 120.372 186.894 120.354C186.761 120.334 186.628 120.324 186.495 120.324C186.189 120.324 185.915 120.389 185.676 120.519C185.439 120.646 185.251 120.824 185.112 121.052C184.973 121.278 184.904 121.535 184.904 121.824V125.89H183.608ZM188.049 125.89V119.232H189.345V125.89H188.049ZM188.703 118.204C188.478 118.204 188.284 118.129 188.122 117.979C187.963 117.826 187.884 117.644 187.884 117.433C187.884 117.219 187.963 117.037 188.122 116.887C188.284 116.733 188.478 116.657 188.703 116.657C188.929 116.657 189.121 116.733 189.28 116.887C189.442 117.037 189.523 117.219 189.523 117.433C189.523 117.644 189.442 117.826 189.28 117.979C189.121 118.129 188.929 118.204 188.703 118.204ZM195.834 120.857L194.659 121.065C194.61 120.915 194.532 120.772 194.425 120.636C194.321 120.5 194.179 120.389 194 120.302C193.821 120.216 193.597 120.172 193.328 120.172C192.961 120.172 192.655 120.255 192.409 120.419C192.164 120.581 192.041 120.791 192.041 121.048C192.041 121.271 192.123 121.45 192.288 121.586C192.453 121.721 192.718 121.833 193.085 121.919L194.143 122.162C194.756 122.304 195.212 122.522 195.513 122.817C195.814 123.111 195.964 123.494 195.964 123.965C195.964 124.364 195.848 124.72 195.617 125.032C195.389 125.341 195.069 125.584 194.659 125.76C194.252 125.936 193.779 126.024 193.242 126.024C192.496 126.024 191.888 125.865 191.417 125.548C190.945 125.227 190.656 124.772 190.55 124.182L191.802 123.991C191.88 124.318 192.041 124.565 192.284 124.733C192.526 124.897 192.843 124.98 193.233 124.98C193.658 124.98 193.997 124.892 194.252 124.715C194.506 124.536 194.633 124.318 194.633 124.061C194.633 123.853 194.555 123.678 194.399 123.536C194.246 123.395 194.01 123.288 193.692 123.215L192.565 122.968C191.944 122.827 191.484 122.601 191.187 122.292C190.892 121.983 190.745 121.591 190.745 121.117C190.745 120.724 190.854 120.38 191.074 120.086C191.294 119.791 191.597 119.561 191.984 119.396C192.372 119.229 192.815 119.145 193.315 119.145C194.035 119.145 194.601 119.301 195.014 119.613C195.428 119.922 195.701 120.337 195.834 120.857ZM200.235 125.89V117.012H201.575V120.87H206.001V117.012H207.344V125.89H206.001V122.019H201.575V125.89H200.235ZM211.817 126.024C211.161 126.024 210.596 125.884 210.122 125.604C209.651 125.321 209.286 124.923 209.029 124.412C208.775 123.897 208.648 123.295 208.648 122.604C208.648 121.922 208.775 121.321 209.029 120.801C209.286 120.281 209.645 119.875 210.104 119.583C210.567 119.291 211.107 119.145 211.725 119.145C212.101 119.145 212.465 119.207 212.818 119.331C213.17 119.456 213.487 119.651 213.767 119.917C214.048 120.182 214.269 120.528 214.43 120.953C214.592 121.375 214.673 121.888 214.673 122.491V122.951H209.38V121.98H213.403C213.403 121.639 213.334 121.337 213.195 121.074C213.056 120.808 212.861 120.599 212.61 120.445C212.361 120.292 212.069 120.216 211.734 120.216C211.37 120.216 211.052 120.305 210.78 120.484C210.512 120.661 210.304 120.892 210.156 121.178C210.012 121.461 209.94 121.769 209.94 122.101V122.86C209.94 123.305 210.018 123.684 210.174 123.996C210.333 124.308 210.554 124.546 210.837 124.711C211.12 124.873 211.451 124.954 211.83 124.954C212.075 124.954 212.299 124.919 212.501 124.85C212.704 124.777 212.879 124.67 213.026 124.529C213.173 124.387 213.286 124.212 213.364 124.004L214.591 124.225C214.493 124.587 214.316 124.903 214.062 125.175C213.811 125.444 213.494 125.653 213.113 125.803C212.734 125.951 212.302 126.024 211.817 126.024ZM217.805 126.037C217.383 126.037 217.001 125.959 216.66 125.803C216.319 125.644 216.049 125.415 215.85 125.114C215.653 124.814 215.555 124.445 215.555 124.009C215.555 123.633 215.627 123.324 215.772 123.081C215.916 122.838 216.111 122.646 216.357 122.504C216.603 122.363 216.877 122.256 217.181 122.184C217.484 122.111 217.793 122.057 218.108 122.019C218.507 121.973 218.831 121.935 219.079 121.906C219.328 121.874 219.508 121.824 219.621 121.755C219.734 121.685 219.79 121.573 219.79 121.416V121.386C219.79 121.008 219.683 120.714 219.469 120.506C219.258 120.298 218.943 120.194 218.524 120.194C218.088 120.194 217.744 120.291 217.493 120.484C217.244 120.675 217.072 120.888 216.977 121.122L215.759 120.844C215.903 120.44 216.114 120.113 216.392 119.865C216.672 119.613 216.994 119.431 217.358 119.318C217.722 119.203 218.105 119.145 218.507 119.145C218.773 119.145 219.055 119.177 219.352 119.24C219.653 119.301 219.933 119.414 220.193 119.578C220.456 119.743 220.672 119.979 220.839 120.285C221.007 120.588 221.091 120.983 221.091 121.468V125.89H219.825V124.98H219.773C219.689 125.147 219.563 125.312 219.396 125.474C219.228 125.636 219.013 125.77 218.75 125.877C218.487 125.984 218.172 126.037 217.805 126.037ZM218.087 124.997C218.445 124.997 218.751 124.926 219.006 124.785C219.263 124.643 219.458 124.458 219.591 124.23C219.727 123.999 219.795 123.751 219.795 123.489V122.63C219.748 122.676 219.659 122.72 219.526 122.76C219.396 122.798 219.247 122.831 219.079 122.86C218.912 122.886 218.748 122.911 218.589 122.934C218.43 122.954 218.298 122.971 218.191 122.986C217.939 123.017 217.709 123.071 217.501 123.146C217.296 123.221 217.131 123.33 217.007 123.471C216.886 123.61 216.825 123.795 216.825 124.026C216.825 124.347 216.944 124.59 217.181 124.754C217.418 124.916 217.72 124.997 218.087 124.997ZM223.869 117.012V125.89H222.573V117.012H223.869ZM228.477 119.232V120.272H224.84V119.232H228.477ZM225.815 117.636H227.111V123.935C227.111 124.186 227.149 124.376 227.224 124.503C227.299 124.627 227.396 124.712 227.514 124.759C227.636 124.802 227.767 124.824 227.909 124.824C228.013 124.824 228.104 124.816 228.182 124.802C228.26 124.788 228.321 124.776 228.364 124.767L228.598 125.838C228.523 125.867 228.416 125.896 228.277 125.925C228.139 125.956 227.965 125.974 227.757 125.977C227.416 125.982 227.098 125.922 226.803 125.795C226.509 125.667 226.27 125.471 226.088 125.205C225.906 124.939 225.815 124.605 225.815 124.204V117.636ZM231.105 121.937V125.89H229.809V117.012H231.088V120.315H231.17C231.326 119.957 231.565 119.672 231.886 119.461C232.206 119.25 232.626 119.145 233.143 119.145C233.599 119.145 233.998 119.239 234.339 119.427C234.683 119.615 234.949 119.895 235.137 120.268C235.328 120.638 235.423 121.1 235.423 121.655V125.89H234.127V121.811C234.127 121.323 234.001 120.944 233.75 120.675C233.498 120.404 233.149 120.268 232.701 120.268C232.394 120.268 232.12 120.333 231.877 120.463C231.637 120.593 231.448 120.784 231.309 121.035C231.173 121.284 231.105 121.584 231.105 121.937ZM237.762 125.972C237.525 125.972 237.322 125.889 237.151 125.721C236.981 125.55 236.895 125.345 236.895 125.105C236.895 124.868 236.981 124.666 237.151 124.499C237.322 124.328 237.525 124.243 237.762 124.243C237.999 124.243 238.203 124.328 238.374 124.499C238.544 124.666 238.629 124.868 238.629 125.105C238.629 125.264 238.589 125.41 238.508 125.543C238.43 125.673 238.326 125.777 238.196 125.855C238.066 125.933 237.921 125.972 237.762 125.972ZM240.975 125.972C240.738 125.972 240.535 125.889 240.364 125.721C240.194 125.55 240.108 125.345 240.108 125.105C240.108 124.868 240.194 124.666 240.364 124.499C240.535 124.328 240.738 124.243 240.975 124.243C241.212 124.243 241.416 124.328 241.586 124.499C241.757 124.666 241.842 124.868 241.842 125.105C241.842 125.264 241.802 125.41 241.721 125.543C241.643 125.673 241.539 125.777 241.409 125.855C241.279 125.933 241.134 125.972 240.975 125.972ZM244.188 125.972C243.951 125.972 243.747 125.889 243.577 125.721C243.406 125.55 243.321 125.345 243.321 125.105C243.321 124.868 243.406 124.666 243.577 124.499C243.747 124.328 243.951 124.243 244.188 124.243C244.425 124.243 244.629 124.328 244.799 124.499C244.97 124.666 245.055 124.868 245.055 125.105C245.055 125.264 245.015 125.41 244.934 125.543C244.856 125.673 244.752 125.777 244.622 125.855C244.492 125.933 244.347 125.972 244.188 125.972Z"
                                                            fill="#5E5E5E"
                                                        />
                                                        <rect
                                                            width="181.793"
                                                            height="25.069"
                                                            transform="translate(34.9653 139.028)"
                                                            fill="white"
                                                        />
                                                        <rect
                                                            x="40.0513"
                                                            y="144.442"
                                                            width="14.2414"
                                                            height="14.2414"
                                                            rx="4.06898"
                                                            fill="#0F6BE9"
                                                        />
                                                        <rect
                                                            x="42.5947"
                                                            y="147.493"
                                                            width="6.65833"
                                                            height="1.66458"
                                                            rx="0.832292"
                                                            fill="white"
                                                        />
                                                        <rect
                                                            x="42.5947"
                                                            y="150.728"
                                                            width="9.15521"
                                                            height="1.66458"
                                                            rx="0.832292"
                                                            fill="white"
                                                        />
                                                        <rect
                                                            x="42.5947"
                                                            y="153.963"
                                                            width="5.82604"
                                                            height="1.66458"
                                                            rx="0.832292"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M60.9609 155.062H59.6575L62.5861 146.925H64.0047L66.9332 155.062H65.6299L63.3292 148.403H63.2656L60.9609 155.062ZM61.1794 151.876H65.4074V152.909H61.1794V151.876ZM68.9774 151.439V155.062H67.7893V148.959H68.9297V149.952H69.0052C69.1456 149.629 69.3655 149.37 69.6648 149.174C69.9668 148.978 70.347 148.88 70.8052 148.88C71.2212 148.88 71.5854 148.967 71.898 149.142C72.2106 149.314 72.453 149.571 72.6252 149.913C72.7974 150.254 72.8834 150.677 72.8834 151.18V155.062H71.6953V151.323C71.6953 150.881 71.5801 150.535 71.3496 150.286C71.1192 150.035 70.8026 149.909 70.3999 149.909C70.1244 149.909 69.8794 149.968 69.6648 150.088C69.4529 150.207 69.2847 150.382 69.1602 150.612C69.0383 150.84 68.9774 151.115 68.9774 151.439ZM75.4412 151.439V155.062H74.2531V148.959H75.3935V149.952H75.469C75.6094 149.629 75.8293 149.37 76.1286 149.174C76.4306 148.978 76.8108 148.88 77.269 148.88C77.6849 148.88 78.0492 148.967 78.3618 149.142C78.6744 149.314 78.9168 149.571 79.089 149.913C79.2612 150.254 79.3472 150.677 79.3472 151.18V155.062H78.1591V151.323C78.1591 150.881 78.0439 150.535 77.8134 150.286C77.583 150.035 77.2664 149.909 76.8637 149.909C76.5882 149.909 76.3432 149.968 76.1286 150.088C75.9167 150.207 75.7485 150.382 75.624 150.612C75.5021 150.84 75.4412 151.115 75.4412 151.439ZM84.5832 152.531V148.959H85.7753V155.062H84.607V154.006H84.5435C84.4031 154.331 84.1779 154.603 83.8679 154.82C83.5607 155.035 83.1779 155.142 82.7196 155.142C82.3275 155.142 81.9805 155.056 81.6785 154.884C81.3791 154.709 81.1434 154.451 80.9712 154.109C80.8016 153.767 80.7169 153.345 80.7169 152.841V148.959H81.905V152.698C81.905 153.114 82.0202 153.445 82.2507 153.692C82.4812 153.938 82.7805 154.061 83.1487 154.061C83.3712 154.061 83.5924 154.006 83.8123 153.894C84.0348 153.783 84.219 153.615 84.3646 153.39C84.513 153.164 84.5858 152.878 84.5832 152.531ZM88.9241 155.198C88.5373 155.198 88.1877 155.126 87.8751 154.983C87.5625 154.837 87.3148 154.627 87.132 154.351C86.9519 154.076 86.8618 153.738 86.8618 153.338C86.8618 152.994 86.928 152.71 87.0605 152.488C87.1929 152.265 87.3717 152.089 87.5969 151.959C87.8221 151.829 88.0737 151.731 88.3519 151.665C88.63 151.599 88.9135 151.548 89.2022 151.514C89.5678 151.472 89.8645 151.437 90.0923 151.411C90.3202 151.382 90.4857 151.335 90.589 151.272C90.6924 151.208 90.744 151.105 90.744 150.962V150.934C90.744 150.587 90.646 150.318 90.45 150.127C90.2566 149.937 89.9678 149.841 89.5837 149.841C89.1837 149.841 88.8685 149.93 88.638 150.107C88.4102 150.282 88.2526 150.477 88.1651 150.692L87.0485 150.437C87.181 150.066 87.3744 149.767 87.6287 149.539C87.8857 149.309 88.181 149.142 88.5148 149.038C88.8486 148.933 89.1996 148.88 89.5678 148.88C89.8115 148.88 90.0698 148.909 90.3427 148.967C90.6182 149.023 90.8751 149.126 91.1136 149.277C91.3546 149.428 91.552 149.644 91.7056 149.925C91.8593 150.203 91.9361 150.564 91.9361 151.009V155.062H90.7758V154.228H90.7281C90.6513 154.382 90.5361 154.533 90.3824 154.681C90.2288 154.829 90.0314 154.953 89.7903 155.051C89.5493 155.149 89.2605 155.198 88.9241 155.198ZM89.1824 154.244C89.5109 154.244 89.7917 154.179 90.0248 154.049C90.2606 153.919 90.4394 153.75 90.5612 153.541C90.6857 153.329 90.748 153.102 90.748 152.861V152.074C90.7056 152.117 90.6235 152.156 90.5016 152.194C90.3824 152.228 90.246 152.258 90.0923 152.285C89.9387 152.309 89.789 152.331 89.6433 152.352C89.4976 152.371 89.3758 152.387 89.2777 152.4C89.0473 152.429 88.8367 152.478 88.6459 152.547C88.4579 152.616 88.3069 152.715 88.1929 152.845C88.0817 152.972 88.0261 153.142 88.0261 153.354C88.0261 153.648 88.1347 153.87 88.3519 154.021C88.5691 154.17 88.8459 154.244 89.1824 154.244ZM94.4829 146.925V155.062H93.2948V146.925H94.4829ZM98.6904 155.062V146.925H101.591C102.222 146.925 102.745 147.033 103.161 147.25C103.579 147.468 103.892 147.768 104.098 148.152C104.305 148.534 104.408 148.975 104.408 149.476C104.408 149.974 104.304 150.412 104.095 150.791C103.888 151.167 103.575 151.46 103.157 151.669C102.741 151.878 102.218 151.983 101.587 151.983H99.3898V150.926H101.476C101.873 150.926 102.196 150.869 102.445 150.755C102.697 150.641 102.881 150.476 102.998 150.258C103.114 150.041 103.173 149.78 103.173 149.476C103.173 149.168 103.113 148.902 102.994 148.677C102.877 148.452 102.693 148.28 102.441 148.16C102.192 148.038 101.865 147.978 101.46 147.978H99.9183V155.062H98.6904ZM102.708 151.391L104.718 155.062H103.32L101.349 151.391H102.708ZM108.137 155.186C107.536 155.186 107.018 155.057 106.584 154.8C106.152 154.541 105.818 154.176 105.582 153.707C105.349 153.236 105.233 152.684 105.233 152.05C105.233 151.425 105.349 150.874 105.582 150.397C105.818 149.921 106.147 149.548 106.568 149.281C106.992 149.013 107.487 148.88 108.054 148.88C108.398 148.88 108.732 148.937 109.055 149.05C109.378 149.164 109.669 149.343 109.926 149.587C110.182 149.831 110.385 150.147 110.533 150.537C110.682 150.923 110.756 151.394 110.756 151.947V152.368H105.904V151.478H109.592C109.592 151.166 109.528 150.889 109.401 150.648C109.274 150.404 109.095 150.212 108.865 150.072C108.637 149.931 108.369 149.861 108.062 149.861C107.728 149.861 107.437 149.943 107.188 150.107C106.941 150.269 106.751 150.481 106.616 150.743C106.483 151.003 106.417 151.285 106.417 151.59V152.285C106.417 152.693 106.488 153.04 106.631 153.326C106.777 153.612 106.98 153.831 107.239 153.982C107.499 154.13 107.802 154.204 108.149 154.204C108.374 154.204 108.58 154.172 108.765 154.109C108.951 154.043 109.111 153.945 109.246 153.815C109.381 153.685 109.484 153.525 109.556 153.334L110.681 153.537C110.59 153.868 110.429 154.158 110.196 154.407C109.965 154.653 109.675 154.845 109.326 154.983C108.978 155.118 108.582 155.186 108.137 155.186ZM111.85 157.351V148.959H113.011V149.948H113.11C113.179 149.821 113.278 149.674 113.408 149.507C113.538 149.34 113.718 149.195 113.949 149.07C114.179 148.943 114.484 148.88 114.862 148.88C115.355 148.88 115.795 149.004 116.182 149.253C116.568 149.502 116.872 149.861 117.092 150.33C117.314 150.799 117.425 151.363 117.425 152.023C117.425 152.682 117.316 153.248 117.096 153.719C116.876 154.188 116.574 154.55 116.19 154.804C115.806 155.056 115.367 155.182 114.874 155.182C114.504 155.182 114.2 155.119 113.964 154.995C113.731 154.87 113.549 154.725 113.416 154.558C113.284 154.391 113.182 154.243 113.11 154.113H113.039V157.351H111.85ZM113.015 152.011C113.015 152.44 113.077 152.816 113.201 153.139C113.326 153.462 113.506 153.715 113.742 153.898C113.978 154.078 114.266 154.168 114.608 154.168C114.963 154.168 115.26 154.074 115.498 153.886C115.737 153.696 115.917 153.437 116.039 153.111C116.163 152.786 116.225 152.419 116.225 152.011C116.225 151.608 116.164 151.247 116.043 150.926C115.923 150.605 115.743 150.352 115.502 150.167C115.264 149.982 114.966 149.889 114.608 149.889C114.264 149.889 113.972 149.978 113.734 150.155C113.498 150.333 113.319 150.58 113.198 150.898C113.076 151.216 113.015 151.587 113.015 152.011ZM121.104 155.186C120.532 155.186 120.032 155.055 119.606 154.792C119.179 154.53 118.848 154.163 118.612 153.692C118.377 153.22 118.259 152.669 118.259 152.039C118.259 151.405 118.377 150.852 118.612 150.378C118.848 149.903 119.179 149.535 119.606 149.273C120.032 149.011 120.532 148.88 121.104 148.88C121.676 148.88 122.175 149.011 122.602 149.273C123.028 149.535 123.359 149.903 123.595 150.378C123.831 150.852 123.949 151.405 123.949 152.039C123.949 152.669 123.831 153.22 123.595 153.692C123.359 154.163 123.028 154.53 122.602 154.792C122.175 155.055 121.676 155.186 121.104 155.186ZM121.108 154.188C121.479 154.188 121.786 154.09 122.03 153.894C122.273 153.698 122.453 153.437 122.57 153.111C122.689 152.786 122.749 152.427 122.749 152.035C122.749 151.645 122.689 151.288 122.57 150.962C122.453 150.633 122.273 150.37 122.03 150.171C121.786 149.972 121.479 149.873 121.108 149.873C120.734 149.873 120.424 149.972 120.178 150.171C119.934 150.37 119.753 150.633 119.633 150.962C119.517 151.288 119.459 151.645 119.459 152.035C119.459 152.427 119.517 152.786 119.633 153.111C119.753 153.437 119.934 153.698 120.178 153.894C120.424 154.09 120.734 154.188 121.108 154.188ZM125.051 155.062V148.959H126.2V149.929H126.263C126.374 149.6 126.57 149.342 126.851 149.154C127.135 148.963 127.455 148.868 127.813 148.868C127.887 148.868 127.975 148.87 128.075 148.876C128.178 148.881 128.259 148.888 128.318 148.895V150.032C128.27 150.019 128.185 150.004 128.063 149.988C127.941 149.97 127.82 149.96 127.698 149.96C127.417 149.96 127.167 150.02 126.947 150.139C126.729 150.256 126.557 150.419 126.43 150.628C126.303 150.835 126.239 151.07 126.239 151.335V155.062H125.051ZM132.332 148.959V149.913H128.998V148.959H132.332ZM129.892 147.497H131.08V153.27C131.08 153.501 131.114 153.674 131.183 153.791C131.252 153.905 131.341 153.983 131.449 154.025C131.561 154.065 131.681 154.085 131.811 154.085C131.906 154.085 131.99 154.078 132.061 154.065C132.133 154.052 132.189 154.041 132.228 154.033L132.443 155.015C132.374 155.041 132.276 155.068 132.149 155.094C132.022 155.123 131.863 155.139 131.672 155.142C131.359 155.147 131.068 155.092 130.798 154.975C130.528 154.859 130.309 154.678 130.142 154.435C129.975 154.191 129.892 153.885 129.892 153.517V147.497ZM134.205 155.138C133.988 155.138 133.801 155.061 133.645 154.908C133.488 154.751 133.41 154.563 133.41 154.343C133.41 154.126 133.488 153.941 133.645 153.787C133.801 153.631 133.988 153.553 134.205 153.553C134.422 153.553 134.609 153.631 134.765 153.787C134.921 153.941 135 154.126 135 154.343C135 154.489 134.963 154.623 134.888 154.745C134.817 154.864 134.721 154.959 134.602 155.031C134.483 155.102 134.351 155.138 134.205 155.138ZM138.652 155.182C138.159 155.182 137.72 155.056 137.333 154.804C136.949 154.55 136.647 154.188 136.427 153.719C136.21 153.248 136.101 152.682 136.101 152.023C136.101 151.363 136.211 150.799 136.431 150.33C136.653 149.861 136.958 149.502 137.345 149.253C137.732 149.004 138.17 148.88 138.66 148.88C139.039 148.88 139.344 148.943 139.574 149.07C139.807 149.195 139.987 149.34 140.114 149.507C140.244 149.674 140.345 149.821 140.416 149.948H140.488V146.925H141.676V155.062H140.516V154.113H140.416C140.345 154.243 140.242 154.391 140.106 154.558C139.974 154.725 139.791 154.87 139.558 154.995C139.325 155.119 139.023 155.182 138.652 155.182ZM138.914 154.168C139.256 154.168 139.545 154.078 139.781 153.898C140.019 153.715 140.199 153.462 140.321 153.139C140.446 152.816 140.508 152.44 140.508 152.011C140.508 151.587 140.447 151.216 140.325 150.898C140.203 150.58 140.024 150.333 139.789 150.155C139.553 149.978 139.261 149.889 138.914 149.889C138.557 149.889 138.259 149.982 138.02 150.167C137.782 150.352 137.602 150.605 137.48 150.926C137.361 151.247 137.301 151.608 137.301 152.011C137.301 152.419 137.362 152.786 137.484 153.111C137.606 153.437 137.786 153.696 138.024 153.886C138.265 154.074 138.562 154.168 138.914 154.168ZM145.719 155.186C145.147 155.186 144.647 155.055 144.221 154.792C143.794 154.53 143.463 154.163 143.227 153.692C142.992 153.22 142.874 152.669 142.874 152.039C142.874 151.405 142.992 150.852 143.227 150.378C143.463 149.903 143.794 149.535 144.221 149.273C144.647 149.011 145.147 148.88 145.719 148.88C146.291 148.88 146.79 149.011 147.217 149.273C147.643 149.535 147.975 149.903 148.21 150.378C148.446 150.852 148.564 151.405 148.564 152.039C148.564 152.669 148.446 153.22 148.21 153.692C147.975 154.163 147.643 154.53 147.217 154.792C146.79 155.055 146.291 155.186 145.719 155.186ZM145.723 154.188C146.094 154.188 146.401 154.09 146.645 153.894C146.888 153.698 147.069 153.437 147.185 153.111C147.304 152.786 147.364 152.427 147.364 152.035C147.364 151.645 147.304 151.288 147.185 150.962C147.069 150.633 146.888 150.37 146.645 150.171C146.401 149.972 146.094 149.873 145.723 149.873C145.349 149.873 145.039 149.972 144.793 150.171C144.549 150.37 144.368 150.633 144.249 150.962C144.132 151.288 144.074 151.645 144.074 152.035C144.074 152.427 144.132 152.786 144.249 153.111C144.368 153.437 144.549 153.698 144.793 153.894C145.039 154.09 145.349 154.188 145.723 154.188ZM152.237 155.186C151.647 155.186 151.138 155.052 150.711 154.784C150.288 154.514 149.962 154.142 149.734 153.668C149.506 153.194 149.392 152.651 149.392 152.039C149.392 151.419 149.509 150.872 149.742 150.397C149.975 149.921 150.303 149.548 150.727 149.281C151.151 149.013 151.651 148.88 152.225 148.88C152.689 148.88 153.102 148.966 153.465 149.138C153.828 149.307 154.121 149.546 154.343 149.853C154.569 150.16 154.702 150.519 154.745 150.93H153.588C153.525 150.644 153.379 150.397 153.151 150.191C152.926 149.984 152.624 149.881 152.245 149.881C151.914 149.881 151.624 149.968 151.375 150.143C151.129 150.315 150.937 150.562 150.799 150.882C150.661 151.2 150.592 151.576 150.592 152.011C150.592 152.456 150.66 152.84 150.795 153.163C150.93 153.486 151.121 153.737 151.367 153.914C151.616 154.092 151.909 154.18 152.245 154.18C152.47 154.18 152.674 154.139 152.857 154.057C153.043 153.972 153.198 153.852 153.322 153.696C153.449 153.539 153.538 153.351 153.588 153.131H154.745C154.702 153.526 154.574 153.878 154.359 154.188C154.145 154.498 153.857 154.742 153.497 154.919C153.139 155.097 152.719 155.186 152.237 155.186ZM164.084 155.174C163.538 155.174 163.051 155.08 162.622 154.892C162.195 154.704 161.857 154.443 161.608 154.109C161.362 153.772 161.229 153.383 161.211 152.941H162.459C162.475 153.182 162.555 153.391 162.701 153.568C162.849 153.743 163.043 153.878 163.281 153.974C163.52 154.069 163.784 154.117 164.076 154.117C164.396 154.117 164.68 154.061 164.926 153.95C165.175 153.839 165.37 153.684 165.51 153.485C165.651 153.284 165.721 153.052 165.721 152.79C165.721 152.517 165.651 152.277 165.51 152.07C165.373 151.861 165.17 151.697 164.902 151.578C164.637 151.458 164.317 151.399 163.941 151.399H163.253V150.397H163.941C164.243 150.397 164.508 150.343 164.735 150.235C164.966 150.126 165.146 149.975 165.276 149.782C165.406 149.586 165.471 149.356 165.471 149.094C165.471 148.842 165.414 148.624 165.3 148.438C165.188 148.25 165.03 148.103 164.823 147.997C164.619 147.891 164.378 147.838 164.1 147.838C163.835 147.838 163.587 147.887 163.357 147.985C163.129 148.081 162.943 148.219 162.8 148.399C162.657 148.576 162.58 148.789 162.57 149.038H161.382C161.395 148.599 161.525 148.212 161.771 147.878C162.02 147.544 162.349 147.283 162.757 147.095C163.165 146.907 163.618 146.813 164.116 146.813C164.637 146.813 165.088 146.915 165.467 147.119C165.848 147.321 166.142 147.589 166.349 147.926C166.558 148.262 166.661 148.631 166.659 149.031C166.661 149.486 166.534 149.873 166.277 150.191C166.023 150.509 165.684 150.722 165.26 150.831V150.894C165.8 150.976 166.219 151.191 166.516 151.538C166.815 151.885 166.963 152.315 166.961 152.829C166.963 153.277 166.839 153.678 166.587 154.033C166.338 154.388 165.998 154.668 165.566 154.872C165.134 155.073 164.64 155.174 164.084 155.174ZM168.797 155.138C168.58 155.138 168.393 155.061 168.237 154.908C168.081 154.751 168.003 154.563 168.003 154.343C168.003 154.126 168.081 153.941 168.237 153.787C168.393 153.631 168.58 153.553 168.797 153.553C169.014 153.553 169.201 153.631 169.358 153.787C169.514 153.941 169.592 154.126 169.592 154.343C169.592 154.489 169.555 154.623 169.481 154.745C169.409 154.864 169.314 154.959 169.195 155.031C169.075 155.102 168.943 155.138 168.797 155.138ZM170.944 155.062V154.172L173.697 151.319C173.991 151.009 174.234 150.738 174.425 150.505C174.618 150.269 174.762 150.045 174.858 149.833C174.953 149.621 175.001 149.396 175.001 149.158C175.001 148.888 174.937 148.654 174.81 148.458C174.683 148.26 174.509 148.107 174.289 148.001C174.07 147.893 173.822 147.838 173.546 147.838C173.255 147.838 173.001 147.898 172.783 148.017C172.566 148.136 172.399 148.305 172.283 148.522C172.166 148.739 172.108 148.993 172.108 149.285H170.936C170.936 148.789 171.05 148.356 171.277 147.985C171.505 147.615 171.818 147.327 172.215 147.123C172.613 146.917 173.064 146.813 173.57 146.813C174.082 146.813 174.532 146.915 174.921 147.119C175.313 147.321 175.619 147.596 175.839 147.946C176.059 148.293 176.169 148.685 176.169 149.122C176.169 149.424 176.112 149.719 175.998 150.008C175.887 150.297 175.692 150.619 175.414 150.974C175.136 151.326 174.749 151.754 174.254 152.257L172.636 153.95V154.009H176.3V155.062H170.944ZM177.694 146.925H179.184L181.775 153.251H181.87L184.461 146.925H185.951V155.062H184.783V149.174H184.707L182.307 155.051H181.337L178.937 149.17H178.862V155.062H177.694V146.925ZM187.512 155.062V146.925H190.492C191.07 146.925 191.548 147.02 191.927 147.211C192.306 147.399 192.589 147.654 192.777 147.978C192.965 148.298 193.059 148.66 193.059 149.062C193.059 149.401 192.997 149.688 192.873 149.921C192.748 150.151 192.581 150.337 192.372 150.477C192.165 150.615 191.937 150.715 191.688 150.779V150.858C191.959 150.872 192.222 150.959 192.479 151.121C192.739 151.28 192.953 151.506 193.123 151.8C193.292 152.094 193.377 152.452 193.377 152.873C193.377 153.289 193.279 153.662 193.083 153.994C192.89 154.322 192.59 154.583 192.185 154.776C191.78 154.967 191.262 155.062 190.631 155.062H187.512ZM188.74 154.009H190.512C191.1 154.009 191.522 153.896 191.776 153.668C192.03 153.44 192.157 153.155 192.157 152.813C192.157 152.556 192.092 152.321 191.963 152.106C191.833 151.892 191.647 151.721 191.406 151.594C191.168 151.466 190.884 151.403 190.556 151.403H188.74V154.009ZM188.74 150.445H190.385C190.661 150.445 190.908 150.392 191.128 150.286C191.351 150.18 191.527 150.032 191.657 149.841C191.789 149.648 191.855 149.42 191.855 149.158C191.855 148.821 191.737 148.539 191.502 148.311C191.266 148.084 190.904 147.97 190.417 147.97H188.74V150.445Z"
                                                            fill="#5E5E5E"
                                                        />
                                                        <path
                                                            d="M207.748 148.367L201.356 154.758"
                                                            stroke="#5E5E5E"
                                                            strokeWidth="1.01725"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M207.748 154.758L201.356 148.367"
                                                            stroke="#5E5E5E"
                                                            strokeWidth="1.01725"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <rect
                                                            x="35.474"
                                                            y="139.537"
                                                            width="180.776"
                                                            height="24.0517"
                                                            rx="9.66383"
                                                            stroke="#E7E7E7"
                                                            strokeWidth="1.01725"
                                                        />
                                                        <rect
                                                            width="25.1725"
                                                            height="25.069"
                                                            transform="translate(224.896 139.028)"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M232.156 153.696V148.323H233.225V153.696H232.156ZM230.006 151.542V150.477H235.379V151.542H230.006ZM239.818 155.174C239.455 155.168 239.097 155.102 238.745 154.975C238.395 154.848 238.078 154.636 237.791 154.339C237.505 154.043 237.276 153.644 237.104 153.143C236.934 152.643 236.85 152.017 236.85 151.268C236.85 150.558 236.92 149.927 237.06 149.376C237.203 148.825 237.409 148.36 237.676 147.982C237.944 147.6 238.267 147.31 238.646 147.111C239.025 146.913 239.45 146.813 239.921 146.813C240.406 146.813 240.837 146.909 241.213 147.099C241.589 147.29 241.894 147.554 242.127 147.89C242.362 148.227 242.512 148.609 242.576 149.038H241.364C241.282 148.699 241.119 148.423 240.875 148.208C240.631 147.993 240.313 147.886 239.921 147.886C239.325 147.886 238.86 148.146 238.527 148.665C238.195 149.184 238.029 149.906 238.026 150.831H238.085C238.226 150.6 238.398 150.404 238.602 150.243C238.809 150.078 239.039 149.952 239.293 149.865C239.55 149.775 239.821 149.73 240.104 149.73C240.576 149.73 241.002 149.845 241.384 150.076C241.768 150.303 242.074 150.619 242.301 151.021C242.529 151.424 242.643 151.885 242.643 152.404C242.643 152.923 242.525 153.394 242.29 153.815C242.056 154.236 241.728 154.57 241.304 154.816C240.88 155.06 240.385 155.179 239.818 155.174ZM239.814 154.141C240.127 154.141 240.406 154.064 240.652 153.91C240.899 153.757 241.094 153.55 241.237 153.29C241.38 153.031 241.451 152.741 241.451 152.42C241.451 152.107 241.381 151.823 241.241 151.566C241.103 151.309 240.912 151.105 240.668 150.954C240.427 150.803 240.152 150.727 239.842 150.727C239.606 150.727 239.388 150.772 239.186 150.862C238.988 150.952 238.813 151.077 238.662 151.236C238.511 151.395 238.391 151.578 238.304 151.784C238.219 151.988 238.177 152.204 238.177 152.432C238.177 152.737 238.247 153.019 238.387 153.278C238.531 153.538 238.725 153.747 238.972 153.906C239.221 154.062 239.501 154.141 239.814 154.141Z"
                                                            fill="#5E5E5E"
                                                        />
                                                        <rect
                                                            x="225.405"
                                                            y="139.537"
                                                            width="24.1552"
                                                            height="24.0517"
                                                            rx="9.66383"
                                                            stroke="#E7E7E7"
                                                            strokeWidth="1.01725"
                                                        />
                                                    </g>
                                                    <rect
                                                        x="18.9445"
                                                        y="6.73111"
                                                        width="253.801"
                                                        height="173.387"
                                                        rx="11.9865"
                                                        stroke="#E7E7E7"
                                                        strokeWidth="0.510065"
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_ddddd_342_339844"
                                                        x="0.327101"
                                                        y="0.35529"
                                                        width="291.036"
                                                        height="220.823"
                                                        filterUnits="userSpaceOnUse"
                                                        colorInterpolationFilters="sRGB"
                                                    >
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dy="22.4429" />
                                                        <feGaussianBlur stdDeviation="9.18118" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_342_339844"
                                                        />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dy="12.2416" />
                                                        <feGaussianBlur stdDeviation="9.18118" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="effect1_dropShadow_342_339844"
                                                            result="effect2_dropShadow_342_339844"
                                                        />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dy="6.12078" />
                                                        <feGaussianBlur stdDeviation="3.06039" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="effect2_dropShadow_342_339844"
                                                            result="effect3_dropShadow_342_339844"
                                                        />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dy="2.04026" />
                                                        <feGaussianBlur stdDeviation="1.02013" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="effect3_dropShadow_342_339844"
                                                            result="effect4_dropShadow_342_339844"
                                                        />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset />
                                                        <feGaussianBlur stdDeviation="0.510065" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0.254902 0 0 0 0 0.407843 0 0 0 0 0.909804 0 0 0 0.2 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="effect4_dropShadow_342_339844"
                                                            result="effect5_dropShadow_342_339844"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="effect5_dropShadow_342_339844"
                                                            result="shape"
                                                        />
                                                    </filter>
                                                    <clipPath id="clip0_342_339844">
                                                        <rect
                                                            x="18.6895"
                                                            y="6.47607"
                                                            width="254.311"
                                                            height="173.897"
                                                            rx="12.2416"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                    <clipPath id="clip1_342_339844">
                                                        <rect
                                                            width="16.2759"
                                                            height="16.2759"
                                                            fill="white"
                                                            transform="translate(34.9653 46.114)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <svg
                                                width={526}
                                                height={366}
                                                viewBox="0 0 526 366"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute z-[1]"
                                            >
                                                <g clipPath="url(#clip0_834_140161)">
                                                    <g clipPath="url(#clip1_834_140161)">
                                                        <g
                                                            clipPath="url(#clip2_834_140161)"
                                                            style={{
                                                                opacity: 1,
                                                                transform: "translateY(0px)",
                                                                transition: "all 400ms ease 100ms"
                                                            }}
                                                        >
                                                            <rect
                                                                x={25}
                                                                y={23}
                                                                width={28}
                                                                height={28}
                                                                rx={14}
                                                                fill="#E7E7E7"
                                                            />
                                                            <path
                                                                d="M39.0078 42.0938H36.9222C36.7954 42.0938 36.7319 42.0938 36.6783 42.0947C33.5713 42.1525 31.0665 44.6573 31.0088 47.7642C31.0078 47.8179 31.0078 47.8813 31.0078 48.0082C31.0078 48.0427 31.0078 48.0599 31.008 48.0758C31.0203 48.9749 31.548 49.7868 32.3645 50.1632C32.3789 50.1698 32.3947 50.1768 32.4261 50.1908L32.4263 50.1908L39.0078 53.116L45.5894 50.1908C45.6209 50.1768 45.6367 50.1698 45.6511 50.1632C46.4677 49.7868 46.9953 48.9749 47.0076 48.0758C47.0078 48.0599 47.0078 48.0427 47.0078 48.0082C47.0078 47.8813 47.0078 47.8179 47.0068 47.7642C46.9491 44.6573 44.4443 42.1525 41.3374 42.0947C41.2837 42.0938 41.2203 42.0938 41.0934 42.0938H39.0078Z"
                                                                fill="#969696"
                                                                stroke="#969696"
                                                                strokeWidth="1.77778"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <circle
                                                                cx="39.1875"
                                                                cy={34}
                                                                r={4}
                                                                fill="#969696"
                                                                stroke="#969696"
                                                                strokeWidth="1.77778"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <rect
                                                                x="25.8556"
                                                                y="23.8556"
                                                                width="26.2889"
                                                                height="26.2889"
                                                                rx="13.1444"
                                                                stroke="black"
                                                                strokeOpacity="0.04"
                                                                strokeWidth="1.71111"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M72.4716 34.5625C72.4186 34.0663 72.1951 33.6799 71.8011 33.4034C71.411 33.1269 70.9034 32.9886 70.2784 32.9886C69.839 32.9886 69.4621 33.0549 69.1477 33.1875C68.8333 33.3201 68.5928 33.5 68.4261 33.7273C68.2595 33.9545 68.1742 34.214 68.1705 34.5057C68.1705 34.7481 68.2254 34.9583 68.3352 35.1364C68.4489 35.3144 68.6023 35.4659 68.7955 35.5909C68.9886 35.7121 69.2027 35.8144 69.4375 35.8977C69.6723 35.9811 69.9091 36.0511 70.1477 36.108L71.2386 36.3807C71.678 36.483 72.1004 36.6212 72.5057 36.7955C72.9148 36.9697 73.2803 37.1894 73.6023 37.4545C73.928 37.7197 74.1856 38.0398 74.375 38.4148C74.5644 38.7898 74.6591 39.2292 74.6591 39.733C74.6591 40.4148 74.4848 41.0152 74.1364 41.5341C73.7879 42.0492 73.2841 42.4527 72.625 42.7443C71.9697 43.0322 71.1761 43.1761 70.2443 43.1761C69.339 43.1761 68.553 43.036 67.8864 42.7557C67.2235 42.4754 66.7045 42.0663 66.3295 41.5284C65.9583 40.9905 65.7576 40.3352 65.7273 39.5625H67.8011C67.8314 39.9678 67.9564 40.3049 68.1761 40.5739C68.3958 40.8428 68.6818 41.0436 69.0341 41.1761C69.3902 41.3087 69.7879 41.375 70.2273 41.375C70.6856 41.375 71.0871 41.3068 71.4318 41.1705C71.7803 41.0303 72.053 40.8371 72.25 40.5909C72.447 40.3409 72.5473 40.0492 72.5511 39.7159C72.5473 39.4129 72.4583 39.1629 72.2841 38.9659C72.1098 38.7652 71.8655 38.5985 71.5511 38.4659C71.2405 38.3295 70.8769 38.2083 70.4602 38.1023L69.1364 37.7614C68.178 37.5152 67.4205 37.142 66.8636 36.642C66.3106 36.1383 66.0341 35.4697 66.0341 34.6364C66.0341 33.9508 66.2197 33.3504 66.5909 32.8352C66.9659 32.3201 67.4754 31.9205 68.1193 31.6364C68.7633 31.3485 69.4924 31.2045 70.3068 31.2045C71.1326 31.2045 71.8561 31.3485 72.4773 31.6364C73.1023 31.9205 73.5928 32.3163 73.9489 32.8239C74.3049 33.3277 74.4886 33.9072 74.5 34.5625H72.4716ZM81.6899 39.3295V34.2727H83.7468V43H81.7524V41.4489H81.6615C81.4646 41.9375 81.1407 42.3371 80.6899 42.6477C80.243 42.9583 79.6918 43.1136 79.0365 43.1136C78.4646 43.1136 77.9589 42.9867 77.5195 42.733C77.0839 42.4754 76.743 42.1023 76.4968 41.6136C76.2505 41.1212 76.1274 40.5265 76.1274 39.8295V34.2727H78.1843V39.5114C78.1843 40.0644 78.3358 40.5038 78.6388 40.8295C78.9418 41.1553 79.3396 41.3182 79.832 41.3182C80.135 41.3182 80.4286 41.2443 80.7127 41.0966C80.9968 40.9489 81.2297 40.7292 81.4115 40.4375C81.5971 40.142 81.6899 39.7727 81.6899 39.3295ZM85.4282 43V41.6932L89.9282 36.0511V35.9773H85.5759V34.2727H92.4452V35.6761L88.1611 41.2216V41.2955H92.593V43H85.4282ZM96.7176 43.1761C96.1645 43.1761 95.6664 43.0777 95.2232 42.8807C94.7838 42.6799 94.4354 42.3845 94.1778 41.9943C93.924 41.6042 93.7971 41.1231 93.7971 40.5511C93.7971 40.0587 93.888 39.6515 94.0698 39.3295C94.2516 39.0076 94.4998 38.75 94.8141 38.5568C95.1285 38.3636 95.4827 38.2178 95.8766 38.1193C96.2744 38.017 96.6854 37.9432 97.1096 37.8977C97.621 37.8447 98.0357 37.7973 98.3539 37.7557C98.6721 37.7102 98.9032 37.642 99.0471 37.5511C99.1948 37.4564 99.2687 37.3106 99.2687 37.1136V37.0795C99.2687 36.6515 99.1418 36.3201 98.888 36.0852C98.6342 35.8504 98.2687 35.733 97.7914 35.733C97.2876 35.733 96.888 35.8428 96.5926 36.0625C96.3009 36.2822 96.1039 36.5417 96.0016 36.8409L94.0812 36.5682C94.2327 36.0379 94.4827 35.5947 94.8312 35.2386C95.1797 34.8788 95.6058 34.6098 96.1096 34.4318C96.6134 34.25 97.1702 34.1591 97.7801 34.1591C98.2005 34.1591 98.6191 34.2083 99.0357 34.3068C99.4524 34.4053 99.8331 34.5682 100.178 34.7955C100.522 35.0189 100.799 35.3239 101.007 35.7102C101.219 36.0966 101.326 36.5795 101.326 37.1591V43H99.3482V41.8011H99.2801C99.1551 42.0436 98.9789 42.2708 98.7516 42.483C98.5282 42.6913 98.246 42.8598 97.9051 42.9886C97.5679 43.1136 97.1721 43.1761 96.7176 43.1761ZM97.2516 41.6648C97.6645 41.6648 98.0225 41.5833 98.3255 41.4205C98.6285 41.2538 98.8615 41.0341 99.0244 40.7614C99.191 40.4886 99.2744 40.1913 99.2744 39.8693V38.8409C99.21 38.8939 99.1001 38.9432 98.9448 38.9886C98.7933 39.0341 98.6229 39.0739 98.4335 39.108C98.2441 39.142 98.0566 39.1723 97.871 39.1989C97.6854 39.2254 97.5244 39.2481 97.388 39.267C97.0812 39.3087 96.8066 39.3769 96.5641 39.4716C96.3217 39.5663 96.1304 39.6989 95.9903 39.8693C95.8501 40.036 95.7801 40.2519 95.7801 40.517C95.7801 40.8958 95.9183 41.1818 96.1948 41.375C96.4713 41.5682 96.8236 41.6648 97.2516 41.6648ZM105.131 37.8864V43H103.074V34.2727H105.04V35.7557H105.142C105.343 35.267 105.663 34.8788 106.102 34.5909C106.545 34.303 107.093 34.1591 107.744 34.1591C108.346 34.1591 108.871 34.2879 109.318 34.5455C109.769 34.803 110.117 35.1761 110.363 35.6648C110.613 36.1534 110.737 36.7462 110.733 37.4432V43H108.676V37.7614C108.676 37.178 108.524 36.7216 108.221 36.392C107.922 36.0625 107.507 35.8977 106.977 35.8977C106.617 35.8977 106.297 35.9773 106.017 36.1364C105.74 36.2917 105.523 36.517 105.363 36.8125C105.208 37.108 105.131 37.4659 105.131 37.8864ZM114.561 37.8864V43H112.504V34.2727H114.47V35.7557H114.572C114.773 35.267 115.093 34.8788 115.532 34.5909C115.975 34.303 116.523 34.1591 117.174 34.1591C117.776 34.1591 118.301 34.2879 118.748 34.5455C119.199 34.803 119.547 35.1761 119.793 35.6648C120.043 36.1534 120.167 36.7462 120.163 37.4432V43H118.106V37.7614C118.106 37.178 117.954 36.7216 117.651 36.392C117.352 36.0625 116.937 35.8977 116.407 35.8977C116.047 35.8977 115.727 35.9773 115.447 36.1364C115.17 36.2917 114.953 36.517 114.793 36.8125C114.638 37.108 114.561 37.4659 114.561 37.8864ZM125.797 43.1705C124.922 43.1705 124.167 42.9886 123.53 42.625C122.898 42.2576 122.411 41.7386 122.07 41.0682C121.729 40.3939 121.559 39.6004 121.559 38.6875C121.559 37.7898 121.729 37.0019 122.07 36.3239C122.415 35.642 122.896 35.1117 123.513 34.733C124.131 34.3504 124.856 34.1591 125.689 34.1591C126.227 34.1591 126.735 34.2462 127.212 34.4205C127.693 34.5909 128.117 34.8561 128.485 35.2159C128.856 35.5758 129.148 36.0341 129.36 36.5909C129.572 37.1439 129.678 37.803 129.678 38.5682V39.1989H122.525V37.8125H127.706C127.703 37.4186 127.617 37.0682 127.451 36.7614C127.284 36.4508 127.051 36.2064 126.752 36.0284C126.456 35.8504 126.112 35.7614 125.718 35.7614C125.297 35.7614 124.928 35.8636 124.61 36.0682C124.292 36.2689 124.044 36.5341 123.866 36.8636C123.691 37.1894 123.602 37.5473 123.598 37.9375V39.1477C123.598 39.6553 123.691 40.0909 123.877 40.4545C124.062 40.8144 124.322 41.0909 124.655 41.2841C124.989 41.4735 125.379 41.5682 125.826 41.5682C126.125 41.5682 126.396 41.5265 126.638 41.4432C126.881 41.3561 127.091 41.2292 127.269 41.0625C127.447 40.8958 127.581 40.6894 127.672 40.4432L129.593 40.6591C129.472 41.1667 129.241 41.6098 128.9 41.9886C128.562 42.3636 128.131 42.6553 127.604 42.8636C127.078 43.0682 126.475 43.1705 125.797 43.1705ZM144.798 35.2898H142.673C142.612 34.9413 142.501 34.6326 142.338 34.3636C142.175 34.0909 141.972 33.8598 141.73 33.6705C141.487 33.4811 141.211 33.339 140.9 33.2443C140.593 33.1458 140.262 33.0966 139.906 33.0966C139.273 33.0966 138.713 33.2557 138.224 33.5739C137.735 33.8883 137.353 34.3504 137.076 34.9602C136.8 35.5663 136.662 36.3068 136.662 37.1818C136.662 38.072 136.8 38.822 137.076 39.4318C137.357 40.0379 137.739 40.4962 138.224 40.8068C138.713 41.1136 139.271 41.267 139.9 41.267C140.249 41.267 140.574 41.2216 140.878 41.1307C141.184 41.036 141.459 40.8977 141.701 40.7159C141.948 40.5341 142.154 40.3106 142.321 40.0455C142.491 39.7803 142.609 39.4773 142.673 39.1364L144.798 39.1477C144.718 39.7008 144.546 40.2197 144.281 40.7045C144.02 41.1894 143.677 41.6174 143.253 41.9886C142.828 42.3561 142.332 42.6439 141.764 42.8523C141.196 43.0568 140.565 43.1591 139.872 43.1591C138.849 43.1591 137.936 42.9223 137.133 42.4489C136.33 41.9754 135.698 41.2917 135.235 40.3977C134.773 39.5038 134.542 38.4318 134.542 37.1818C134.542 35.928 134.775 34.8561 135.241 33.9659C135.707 33.072 136.342 32.3883 137.145 31.9148C137.948 31.4413 138.857 31.2045 139.872 31.2045C140.52 31.2045 141.122 31.2955 141.679 31.4773C142.235 31.6591 142.732 31.9261 143.167 32.2784C143.603 32.6269 143.961 33.0549 144.241 33.5625C144.525 34.0663 144.711 34.642 144.798 35.2898ZM148.374 31.3636V43H146.317V31.3636H148.374ZM152.681 43.1761C152.128 43.1761 151.63 43.0777 151.186 42.8807C150.747 42.6799 150.398 42.3845 150.141 41.9943C149.887 41.6042 149.76 41.1231 149.76 40.5511C149.76 40.0587 149.851 39.6515 150.033 39.3295C150.215 39.0076 150.463 38.75 150.777 38.5568C151.092 38.3636 151.446 38.2178 151.84 38.1193C152.238 38.017 152.648 37.9432 153.073 37.8977C153.584 37.8447 153.999 37.7973 154.317 37.7557C154.635 37.7102 154.866 37.642 155.01 37.5511C155.158 37.4564 155.232 37.3106 155.232 37.1136V37.0795C155.232 36.6515 155.105 36.3201 154.851 36.0852C154.597 35.8504 154.232 35.733 153.755 35.733C153.251 35.733 152.851 35.8428 152.556 36.0625C152.264 36.2822 152.067 36.5417 151.965 36.8409L150.044 36.5682C150.196 36.0379 150.446 35.5947 150.794 35.2386C151.143 34.8788 151.569 34.6098 152.073 34.4318C152.577 34.25 153.133 34.1591 153.743 34.1591C154.164 34.1591 154.582 34.2083 154.999 34.3068C155.416 34.4053 155.796 34.5682 156.141 34.7955C156.486 35.0189 156.762 35.3239 156.97 35.7102C157.183 36.0966 157.289 36.5795 157.289 37.1591V43H155.311V41.8011H155.243C155.118 42.0436 154.942 42.2708 154.715 42.483C154.491 42.6913 154.209 42.8598 153.868 42.9886C153.531 43.1136 153.135 43.1761 152.681 43.1761ZM153.215 41.6648C153.628 41.6648 153.986 41.5833 154.289 41.4205C154.592 41.2538 154.825 41.0341 154.988 40.7614C155.154 40.4886 155.238 40.1913 155.238 39.8693V38.8409C155.173 38.8939 155.063 38.9432 154.908 38.9886C154.756 39.0341 154.586 39.0739 154.397 39.108C154.207 39.142 154.02 39.1723 153.834 39.1989C153.648 39.2254 153.488 39.2481 153.351 39.267C153.044 39.3087 152.77 39.3769 152.527 39.4716C152.285 39.5663 152.094 39.6989 151.953 39.8693C151.813 40.036 151.743 40.2519 151.743 40.517C151.743 40.8958 151.881 41.1818 152.158 41.375C152.434 41.5682 152.787 41.6648 153.215 41.6648ZM160.003 46.2727C159.722 46.2727 159.463 46.25 159.224 46.2045C158.989 46.1629 158.802 46.1136 158.662 46.0568L159.139 44.4545C159.438 44.5417 159.705 44.5833 159.94 44.5795C160.175 44.5758 160.382 44.5019 160.56 44.358C160.741 44.2178 160.895 43.983 161.02 43.6534L161.196 43.1818L158.031 34.2727H160.213L162.224 40.8636H162.315L164.332 34.2727H166.52L163.025 44.0568C162.863 44.5189 162.647 44.9148 162.378 45.2443C162.109 45.5777 161.779 45.8314 161.389 46.0057C161.003 46.1837 160.541 46.2727 160.003 46.2727ZM171.981 34.2727V35.8636H166.964V34.2727H171.981ZM168.203 32.1818H170.259V40.375C170.259 40.6515 170.301 40.8636 170.384 41.0114C170.472 41.1553 170.585 41.2538 170.725 41.3068C170.865 41.3598 171.021 41.3864 171.191 41.3864C171.32 41.3864 171.437 41.3769 171.544 41.358C171.653 41.339 171.737 41.322 171.794 41.3068L172.14 42.9148C172.03 42.9527 171.873 42.9943 171.669 43.0398C171.468 43.0852 171.222 43.1117 170.93 43.1193C170.415 43.1345 169.951 43.0568 169.538 42.8864C169.125 42.7121 168.797 42.4432 168.555 42.0795C168.316 41.7159 168.199 41.2614 168.203 40.7159V32.1818ZM177.094 43.1705C176.242 43.1705 175.503 42.983 174.878 42.608C174.253 42.233 173.769 41.7083 173.424 41.0341C173.083 40.3598 172.912 39.572 172.912 38.6705C172.912 37.7689 173.083 36.9792 173.424 36.3011C173.769 35.6231 174.253 35.0966 174.878 34.7216C175.503 34.3466 176.242 34.1591 177.094 34.1591C177.947 34.1591 178.685 34.3466 179.31 34.7216C179.935 35.0966 180.418 35.6231 180.759 36.3011C181.104 36.9792 181.276 37.7689 181.276 38.6705C181.276 39.572 181.104 40.3598 180.759 41.0341C180.418 41.7083 179.935 42.233 179.31 42.608C178.685 42.983 177.947 43.1705 177.094 43.1705ZM177.106 41.5227C177.568 41.5227 177.954 41.3958 178.265 41.142C178.575 40.8845 178.806 40.5398 178.958 40.108C179.113 39.6761 179.191 39.1951 179.191 38.6648C179.191 38.1307 179.113 37.6477 178.958 37.2159C178.806 36.7803 178.575 36.4337 178.265 36.1761C177.954 35.9186 177.568 35.7898 177.106 35.7898C176.632 35.7898 176.238 35.9186 175.924 36.1761C175.613 36.4337 175.38 36.7803 175.225 37.2159C175.073 37.6477 174.998 38.1307 174.998 38.6648C174.998 39.1951 175.073 39.6761 175.225 40.108C175.38 40.5398 175.613 40.8845 175.924 41.142C176.238 41.3958 176.632 41.5227 177.106 41.5227ZM184.759 37.8864V43H182.702V34.2727H184.668V35.7557H184.77C184.971 35.267 185.291 34.8788 185.73 34.5909C186.173 34.303 186.721 34.1591 187.372 34.1591C187.975 34.1591 188.499 34.2879 188.946 34.5455C189.397 34.803 189.745 35.1761 189.992 35.6648C190.242 36.1534 190.365 36.7462 190.361 37.4432V43H188.304V37.7614C188.304 37.178 188.153 36.7216 187.85 36.392C187.55 36.0625 187.136 35.8977 186.605 35.8977C186.245 35.8977 185.925 35.9773 185.645 36.1364C185.368 36.2917 185.151 36.517 184.992 36.8125C184.836 37.108 184.759 37.4659 184.759 37.8864Z"
                                                            fill="#111111"
                                                            style={{
                                                                opacity: 1,
                                                                transform: "translateY(0px)",
                                                                transition: "all 400ms ease 150ms"
                                                            }}
                                                        />
                                                        <g
                                                            style={{
                                                                opacity: 1,
                                                                transform: "translateY(0px)",
                                                                transition: "all 400ms ease 200ms"
                                                            }}
                                                        >
                                                            <rect
                                                                x={206}
                                                                y={27}
                                                                width={151}
                                                                height={20}
                                                                rx={8}
                                                                fill="#E7E7E7"
                                                                fillOpacity="0.76"
                                                            />
                                                            <path
                                                                d="M214.5 37.5L218.743 32.5L218.743 36.5H221.5L216.954 41.5V37.5H214.5Z"
                                                                fill="#0FC27B"
                                                                stroke="#0FC27B"
                                                                strokeWidth="1.22637"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M231.722 32.2727L234.151 39.3807H234.249L236.678 32.2727H238.101L234.96 41H233.439L230.298 32.2727H231.722ZM241.424 41.1321C240.779 41.1321 240.223 40.9943 239.757 40.7188C239.294 40.4403 238.936 40.0497 238.684 39.5469C238.434 39.0412 238.309 38.4489 238.309 37.7699C238.309 37.0994 238.434 36.5085 238.684 35.9972C238.936 35.4858 239.289 35.0866 239.74 34.7997C240.195 34.5128 240.726 34.3693 241.334 34.3693C241.703 34.3693 242.061 34.4304 242.408 34.5526C242.755 34.6747 243.066 34.8665 243.341 35.1278C243.617 35.3892 243.834 35.7287 243.993 36.1463C244.152 36.5611 244.232 37.0653 244.232 37.6591V38.1108H239.029V37.1562H242.983C242.983 36.821 242.915 36.5241 242.779 36.2656C242.642 36.0043 242.451 35.7983 242.203 35.6477C241.959 35.4972 241.672 35.4219 241.343 35.4219C240.985 35.4219 240.672 35.5099 240.405 35.6861C240.141 35.8594 239.936 36.0866 239.792 36.3679C239.65 36.6463 239.578 36.9489 239.578 37.2756V38.0213C239.578 38.4588 239.655 38.831 239.809 39.1378C239.965 39.4446 240.182 39.679 240.461 39.8409C240.739 40 241.064 40.0795 241.436 40.0795C241.678 40.0795 241.898 40.0455 242.097 39.9773C242.296 39.9062 242.468 39.8011 242.613 39.6619C242.757 39.5227 242.868 39.3509 242.945 39.1463L244.151 39.3636C244.054 39.7187 243.881 40.0298 243.631 40.2969C243.384 40.5611 243.073 40.767 242.698 40.9148C242.326 41.0597 241.901 41.1321 241.424 41.1321ZM245.646 41V34.4545H246.877V35.4943H246.945C247.065 35.142 247.275 34.8651 247.576 34.6634C247.88 34.4588 248.224 34.3565 248.607 34.3565C248.687 34.3565 248.781 34.3594 248.888 34.3651C248.999 34.3707 249.086 34.3778 249.148 34.3864V35.6051C249.097 35.5909 249.006 35.5753 248.876 35.5582C248.745 35.5384 248.614 35.5284 248.484 35.5284C248.183 35.5284 247.914 35.5923 247.678 35.7202C247.445 35.8452 247.261 36.0199 247.124 36.2443C246.988 36.4659 246.92 36.7187 246.92 37.0028V41H245.646ZM251.256 43.4545C251.065 43.4545 250.892 43.4389 250.736 43.4077C250.58 43.3793 250.463 43.348 250.386 43.3139L250.693 42.2699C250.926 42.3324 251.134 42.3594 251.315 42.3509C251.497 42.3423 251.658 42.2741 251.797 42.1463C251.939 42.0185 252.064 41.8097 252.172 41.5199L252.33 41.0852L249.935 34.4545H251.298L252.956 39.5341H253.024L254.682 34.4545H256.05L253.352 41.8736C253.227 42.2145 253.068 42.5028 252.875 42.7386C252.682 42.9773 252.452 43.1563 252.185 43.2756C251.918 43.3949 251.608 43.4545 251.256 43.4545ZM265.328 36.0526L264.173 36.2571C264.125 36.1094 264.048 35.9687 263.943 35.8352C263.841 35.7017 263.701 35.5923 263.525 35.5071C263.349 35.4219 263.129 35.3793 262.865 35.3793C262.504 35.3793 262.203 35.4602 261.961 35.6222C261.72 35.7812 261.599 35.9872 261.599 36.2401C261.599 36.4588 261.68 36.6349 261.842 36.7685C262.004 36.902 262.265 37.0114 262.626 37.0966L263.666 37.3352C264.268 37.4744 264.717 37.6889 265.012 37.9787C265.308 38.2685 265.456 38.6449 265.456 39.108C265.456 39.5 265.342 39.8494 265.115 40.1562C264.89 40.4602 264.576 40.6989 264.173 40.8722C263.772 41.0455 263.308 41.1321 262.779 41.1321C262.047 41.1321 261.449 40.9759 260.985 40.6634C260.522 40.348 260.238 39.9006 260.133 39.321L261.365 39.1335C261.441 39.4545 261.599 39.6974 261.838 39.8622C262.076 40.0241 262.387 40.1051 262.771 40.1051C263.189 40.1051 263.522 40.0185 263.772 39.8452C264.022 39.669 264.147 39.4545 264.147 39.2017C264.147 38.9972 264.071 38.8253 263.917 38.6861C263.767 38.5469 263.535 38.4418 263.223 38.3707L262.115 38.1278C261.504 37.9886 261.052 37.767 260.76 37.4631C260.47 37.1591 260.325 36.7741 260.325 36.3082C260.325 35.9219 260.433 35.5838 260.649 35.294C260.865 35.0043 261.163 34.7784 261.544 34.6165C261.924 34.4517 262.36 34.3693 262.852 34.3693C263.559 34.3693 264.116 34.5227 264.522 34.8295C264.929 35.1335 265.197 35.5412 265.328 36.0526ZM269.912 34.4545V35.4773H266.337V34.4545H269.912ZM267.295 32.8864H268.57V39.0781C268.57 39.3253 268.607 39.5114 268.68 39.6364C268.754 39.7585 268.849 39.8423 268.966 39.8878C269.085 39.9304 269.214 39.9517 269.354 39.9517C269.456 39.9517 269.545 39.9446 269.622 39.9304C269.699 39.9162 269.759 39.9048 269.801 39.8963L270.031 40.9489C269.957 40.9773 269.852 41.0057 269.716 41.0341C269.58 41.0653 269.409 41.0824 269.205 41.0852C268.869 41.0909 268.557 41.0312 268.267 40.9062C267.977 40.7812 267.743 40.5881 267.564 40.3267C267.385 40.0653 267.295 39.7372 267.295 39.3423V32.8864ZM271.321 41V34.4545H272.553V35.4943H272.621C272.74 35.142 272.951 34.8651 273.252 34.6634C273.556 34.4588 273.9 34.3565 274.283 34.3565C274.363 34.3565 274.456 34.3594 274.564 34.3651C274.675 34.3707 274.762 34.3778 274.824 34.3864V35.6051C274.773 35.5909 274.682 35.5753 274.551 35.5582C274.421 35.5384 274.29 35.5284 274.159 35.5284C273.858 35.5284 273.59 35.5923 273.354 35.7202C273.121 35.8452 272.936 36.0199 272.8 36.2443C272.664 36.4659 272.596 36.7187 272.596 37.0028V41H271.321ZM278.45 41.1321C277.836 41.1321 277.3 40.9915 276.843 40.7102C276.386 40.429 276.031 40.0355 275.778 39.5298C275.525 39.0241 275.398 38.4332 275.398 37.7571C275.398 37.0781 275.525 36.4844 275.778 35.9759C276.031 35.4673 276.386 35.0724 276.843 34.7912C277.3 34.5099 277.836 34.3693 278.45 34.3693C279.063 34.3693 279.599 34.5099 280.056 34.7912C280.513 35.0724 280.869 35.4673 281.121 35.9759C281.374 36.4844 281.501 37.0781 281.501 37.7571C281.501 38.4332 281.374 39.0241 281.121 39.5298C280.869 40.0355 280.513 40.429 280.056 40.7102C279.599 40.9915 279.063 41.1321 278.45 41.1321ZM278.454 40.0625C278.852 40.0625 279.181 39.9574 279.442 39.7472C279.704 39.5369 279.897 39.2571 280.022 38.9077C280.15 38.5582 280.214 38.1733 280.214 37.7528C280.214 37.3352 280.15 36.9517 280.022 36.6023C279.897 36.25 279.704 35.9673 279.442 35.7543C279.181 35.5412 278.852 35.4347 278.454 35.4347C278.053 35.4347 277.721 35.5412 277.457 35.7543C277.195 35.9673 277.001 36.25 276.873 36.6023C276.748 36.9517 276.685 37.3352 276.685 37.7528C276.685 38.1733 276.748 38.5582 276.873 38.9077C277.001 39.2571 277.195 39.5369 277.457 39.7472C277.721 39.9574 278.053 40.0625 278.454 40.0625ZM284.197 37.1136V41H282.923V34.4545H284.146V35.5199H284.227C284.377 35.1733 284.613 34.8949 284.934 34.6847C285.258 34.4744 285.666 34.3693 286.157 34.3693C286.603 34.3693 286.994 34.4631 287.329 34.6506C287.664 34.8352 287.924 35.1108 288.109 35.4773C288.294 35.8437 288.386 36.2969 288.386 36.8366V41H287.112V36.9901C287.112 36.5156 286.988 36.1449 286.741 35.8778C286.494 35.608 286.154 35.473 285.723 35.473C285.427 35.473 285.164 35.5369 284.934 35.6648C284.707 35.7926 284.527 35.9801 284.393 36.2273C284.262 36.4716 284.197 36.767 284.197 37.1136ZM292.839 43.5909C292.319 43.5909 291.872 43.5227 291.497 43.3864C291.125 43.25 290.821 43.0696 290.585 42.8452C290.349 42.6207 290.173 42.375 290.056 42.108L291.152 41.6562C291.228 41.7812 291.331 41.9134 291.458 42.0526C291.589 42.1946 291.765 42.3153 291.987 42.4148C292.211 42.5142 292.5 42.5639 292.852 42.5639C293.335 42.5639 293.734 42.446 294.049 42.2102C294.365 41.9773 294.522 41.6051 294.522 41.0938V39.8068H294.441C294.365 39.946 294.254 40.1009 294.109 40.2713C293.967 40.4418 293.771 40.5895 293.521 40.7145C293.271 40.8395 292.946 40.902 292.545 40.902C292.028 40.902 291.562 40.7812 291.147 40.5398C290.735 40.2955 290.409 39.9361 290.167 39.4616C289.929 38.9844 289.809 38.3977 289.809 37.7017C289.809 37.0057 289.927 36.4091 290.163 35.9119C290.402 35.4148 290.728 35.0341 291.143 34.7699C291.558 34.5028 292.028 34.3693 292.554 34.3693C292.96 34.3693 293.288 34.4375 293.538 34.5739C293.788 34.7074 293.983 34.8636 294.122 35.0426C294.264 35.2216 294.373 35.3793 294.45 35.5156H294.544V34.4545H295.792V41.1449C295.792 41.7074 295.662 42.169 295.4 42.5298C295.139 42.8906 294.785 43.1577 294.339 43.331C293.896 43.5043 293.396 43.5909 292.839 43.5909ZM292.826 39.8452C293.193 39.8452 293.502 39.7599 293.755 39.5895C294.011 39.4162 294.204 39.169 294.335 38.848C294.468 38.5241 294.535 38.1364 294.535 37.6847C294.535 37.2443 294.47 36.8565 294.339 36.5213C294.208 36.1861 294.017 35.9247 293.764 35.7372C293.511 35.5469 293.199 35.4517 292.826 35.4517C292.443 35.4517 292.123 35.5511 291.868 35.75C291.612 35.946 291.419 36.2131 291.288 36.5511C291.16 36.8892 291.096 37.267 291.096 37.6847C291.096 38.1136 291.162 38.4901 291.292 38.8139C291.423 39.1378 291.616 39.3906 291.872 39.5724C292.13 39.7543 292.449 39.8452 292.826 39.8452ZM302.096 41L300.17 34.4545H301.487L302.769 39.2614H302.833L304.12 34.4545H305.437L306.715 39.2401H306.779L308.053 34.4545H309.37L307.448 41H306.148L304.819 36.2741H304.721L303.391 41H302.096ZM310.579 41V34.4545H311.853V41H310.579ZM311.223 33.4446C311.001 33.4446 310.811 33.3707 310.652 33.223C310.495 33.0724 310.417 32.8935 310.417 32.6861C310.417 32.4759 310.495 32.2969 310.652 32.1491C310.811 31.9986 311.001 31.9233 311.223 31.9233C311.444 31.9233 311.633 31.9986 311.789 32.1491C311.949 32.2969 312.028 32.4759 312.028 32.6861C312.028 32.8935 311.949 33.0724 311.789 33.223C311.633 33.3707 311.444 33.4446 311.223 33.4446ZM316.623 34.4545V35.4773H313.048V34.4545H316.623ZM314.006 32.8864H315.281V39.0781C315.281 39.3253 315.317 39.5114 315.391 39.6364C315.465 39.7585 315.56 39.8423 315.677 39.8878C315.796 39.9304 315.925 39.9517 316.065 39.9517C316.167 39.9517 316.256 39.9446 316.333 39.9304C316.41 39.9162 316.469 39.9048 316.512 39.8963L316.742 40.9489C316.668 40.9773 316.563 41.0057 316.427 41.0341C316.29 41.0653 316.12 41.0824 315.915 41.0852C315.58 41.0909 315.268 41.0312 314.978 40.9062C314.688 40.7812 314.454 40.5881 314.275 40.3267C314.096 40.0653 314.006 39.7372 314.006 39.3423V32.8864ZM319.447 37.1136V41H318.173V32.2727H319.43V35.5199H319.511C319.664 35.1676 319.899 34.8878 320.214 34.6804C320.529 34.473 320.941 34.3693 321.45 34.3693C321.899 34.3693 322.291 34.4616 322.626 34.6463C322.964 34.831 323.225 35.1065 323.41 35.473C323.598 35.8366 323.691 36.2912 323.691 36.8366V41H322.417V36.9901C322.417 36.5099 322.294 36.1378 322.047 35.8736C321.799 35.6065 321.456 35.473 321.015 35.473C320.714 35.473 320.444 35.5369 320.206 35.6648C319.97 35.7926 319.784 35.9801 319.647 36.2273C319.514 36.4716 319.447 36.767 319.447 37.1136ZM328.67 41V32.2727H329.987V39.8665H333.941V41H328.67ZM335.341 41V34.4545H336.615V41H335.341ZM335.984 33.4446C335.763 33.4446 335.572 33.3707 335.413 33.223C335.257 33.0724 335.179 32.8935 335.179 32.6861C335.179 32.4759 335.257 32.2969 335.413 32.1491C335.572 31.9986 335.763 31.9233 335.984 31.9233C336.206 31.9233 336.395 31.9986 336.551 32.1491C336.71 32.2969 336.79 32.4759 336.79 32.6861C336.79 32.8935 336.71 33.0724 336.551 33.223C336.395 33.3707 336.206 33.4446 335.984 33.4446ZM343.234 36.0526L342.079 36.2571C342.031 36.1094 341.954 35.9687 341.849 35.8352C341.747 35.7017 341.608 35.5923 341.431 35.5071C341.255 35.4219 341.035 35.3793 340.771 35.3793C340.41 35.3793 340.109 35.4602 339.868 35.6222C339.626 35.7812 339.505 35.9872 339.505 36.2401C339.505 36.4588 339.586 36.6349 339.748 36.7685C339.91 36.902 340.172 37.0114 340.532 37.0966L341.572 37.3352C342.174 37.4744 342.623 37.6889 342.919 37.9787C343.214 38.2685 343.362 38.6449 343.362 39.108C343.362 39.5 343.248 39.8494 343.021 40.1562C342.797 40.4602 342.483 40.6989 342.079 40.8722C341.679 41.0455 341.214 41.1321 340.686 41.1321C339.953 41.1321 339.355 40.9759 338.892 40.6634C338.429 40.348 338.145 39.9006 338.039 39.321L339.271 39.1335C339.348 39.4545 339.505 39.6974 339.744 39.8622C339.983 40.0241 340.294 40.1051 340.677 40.1051C341.095 40.1051 341.429 40.0185 341.679 39.8452C341.929 39.669 342.054 39.4545 342.054 39.2017C342.054 38.9972 341.977 38.8253 341.824 38.6861C341.673 38.5469 341.441 38.4418 341.129 38.3707L340.021 38.1278C339.41 37.9886 338.958 37.767 338.666 37.4631C338.376 37.1591 338.231 36.7741 338.231 36.3082C338.231 35.9219 338.339 35.5838 338.555 35.294C338.771 35.0043 339.069 34.7784 339.45 34.6165C339.831 34.4517 340.267 34.3693 340.758 34.3693C341.466 34.3693 342.022 34.5227 342.429 34.8295C342.835 35.1335 343.103 35.5412 343.234 36.0526ZM346.668 41.1449C346.253 41.1449 345.878 41.0682 345.543 40.9148C345.207 40.7585 344.942 40.5327 344.746 40.2372C344.553 39.9418 344.456 39.5795 344.456 39.1506C344.456 38.7812 344.527 38.4773 344.669 38.2386C344.811 38 345.003 37.8111 345.244 37.6719C345.486 37.5327 345.756 37.4276 346.054 37.3565C346.352 37.2855 346.656 37.2315 346.966 37.1946C347.358 37.1491 347.676 37.1122 347.92 37.0838C348.165 37.0526 348.342 37.0028 348.453 36.9347C348.564 36.8665 348.619 36.7557 348.619 36.6023V36.5724C348.619 36.2003 348.514 35.9119 348.304 35.7074C348.097 35.5028 347.787 35.4006 347.375 35.4006C346.946 35.4006 346.608 35.4957 346.361 35.6861C346.116 35.8736 345.947 36.0824 345.854 36.3125L344.656 36.0398C344.798 35.642 345.006 35.321 345.278 35.0767C345.554 34.8295 345.871 34.6506 346.229 34.5398C346.587 34.4261 346.963 34.3693 347.358 34.3693C347.619 34.3693 347.896 34.4006 348.189 34.4631C348.484 34.5227 348.76 34.6335 349.016 34.7955C349.274 34.9574 349.486 35.1889 349.651 35.4901C349.815 35.7884 349.898 36.1761 349.898 36.6534V41H348.653V40.1051H348.602C348.52 40.2699 348.396 40.4318 348.232 40.5909C348.067 40.75 347.855 40.8821 347.597 40.9872C347.338 41.0923 347.028 41.1449 346.668 41.1449ZM346.945 40.1222C347.297 40.1222 347.598 40.0526 347.848 39.9134C348.101 39.7741 348.293 39.5923 348.423 39.3679C348.557 39.1406 348.624 38.8977 348.624 38.6392V37.7955C348.578 37.8409 348.49 37.8835 348.359 37.9233C348.232 37.9602 348.085 37.9929 347.92 38.0213C347.756 38.0469 347.595 38.071 347.439 38.0938C347.283 38.1136 347.152 38.1307 347.047 38.1449C346.8 38.1761 346.574 38.2287 346.369 38.3026C346.168 38.3764 346.006 38.483 345.884 38.6222C345.764 38.7585 345.705 38.9403 345.705 39.1676C345.705 39.483 345.821 39.7216 346.054 39.8835C346.287 40.0426 346.584 40.1222 346.945 40.1222Z"
                                                                fill="#5E5E5E"
                                                            />
                                                        </g>
                                                        <g
                                                            style={{
                                                                opacity: 1,
                                                                transform: "translateY(0px)",
                                                                transition: "all 400ms ease 250ms"
                                                            }}
                                                        >
                                                            <rect
                                                                x={365}
                                                                y={27}
                                                                width={147}
                                                                height={20}
                                                                rx={8}
                                                                fill="#E7E7E7"
                                                                fillOpacity="0.76"
                                                            />
                                                            <rect
                                                                x="369.75"
                                                                y="32.5"
                                                                width="10.5"
                                                                height={9}
                                                                rx="2.25"
                                                                stroke="#5E5E5E"
                                                            />
                                                            <path
                                                                d="M371.625 34.75L372.118 35.2577C373.44 36.6203 374.102 37.3015 374.934 37.3108C375.767 37.32 376.443 36.6536 377.796 35.3208L378.375 34.75"
                                                                stroke="#5E5E5E"
                                                                strokeLinecap="round"
                                                            />
                                                            <path
                                                                d="M385.959 41V32.2727H387.276V39.8665H391.23V41H385.959ZM392.63 41V34.4545H393.904V41H392.63ZM393.273 33.4446C393.052 33.4446 392.862 33.3707 392.702 33.223C392.546 33.0724 392.468 32.8935 392.468 32.6861C392.468 32.4759 392.546 32.2969 392.702 32.1491C392.862 31.9986 393.052 31.9233 393.273 31.9233C393.495 31.9233 393.684 31.9986 393.84 32.1491C393.999 32.2969 394.079 32.4759 394.079 32.6861C394.079 32.8935 393.999 33.0724 393.84 33.223C393.684 33.3707 393.495 33.4446 393.273 33.4446ZM400.523 36.0526L399.368 36.2571C399.32 36.1094 399.243 35.9687 399.138 35.8352C399.036 35.7017 398.897 35.5923 398.721 35.5071C398.544 35.4219 398.324 35.3793 398.06 35.3793C397.699 35.3793 397.398 35.4602 397.157 35.6222C396.915 35.7812 396.794 35.9872 396.794 36.2401C396.794 36.4588 396.875 36.6349 397.037 36.7685C397.199 36.902 397.461 37.0114 397.821 37.0966L398.861 37.3352C399.463 37.4744 399.912 37.6889 400.208 37.9787C400.503 38.2685 400.651 38.6449 400.651 39.108C400.651 39.5 400.537 39.8494 400.31 40.1562C400.086 40.4602 399.772 40.6989 399.368 40.8722C398.968 41.0455 398.503 41.1321 397.975 41.1321C397.242 41.1321 396.644 40.9759 396.181 40.6634C395.718 40.348 395.434 39.9006 395.328 39.321L396.56 39.1335C396.637 39.4545 396.794 39.6974 397.033 39.8622C397.272 40.0241 397.583 40.1051 397.966 40.1051C398.384 40.1051 398.718 40.0185 398.968 39.8452C399.218 39.669 399.343 39.4545 399.343 39.2017C399.343 38.9972 399.266 38.8253 399.113 38.6861C398.962 38.5469 398.73 38.4418 398.418 38.3707L397.31 38.1278C396.699 37.9886 396.248 37.767 395.955 37.4631C395.665 37.1591 395.52 36.7741 395.52 36.3082C395.52 35.9219 395.628 35.5838 395.844 35.294C396.06 35.0043 396.358 34.7784 396.739 34.6165C397.12 34.4517 397.556 34.3693 398.047 34.3693C398.755 34.3693 399.311 34.5227 399.718 34.8295C400.124 35.1335 400.392 35.5412 400.523 36.0526ZM403.957 41.1449C403.542 41.1449 403.167 41.0682 402.832 40.9148C402.496 40.7585 402.231 40.5327 402.035 40.2372C401.842 39.9418 401.745 39.5795 401.745 39.1506C401.745 38.7812 401.816 38.4773 401.958 38.2386C402.1 38 402.292 37.8111 402.533 37.6719C402.775 37.5327 403.045 37.4276 403.343 37.3565C403.641 37.2855 403.945 37.2315 404.255 37.1946C404.647 37.1491 404.965 37.1122 405.21 37.0838C405.454 37.0526 405.631 37.0028 405.742 36.9347C405.853 36.8665 405.908 36.7557 405.908 36.6023V36.5724C405.908 36.2003 405.803 35.9119 405.593 35.7074C405.386 35.5028 405.076 35.4006 404.664 35.4006C404.235 35.4006 403.897 35.4957 403.65 35.6861C403.406 35.8736 403.237 36.0824 403.143 36.3125L401.945 36.0398C402.087 35.642 402.295 35.321 402.567 35.0767C402.843 34.8295 403.16 34.6506 403.518 34.5398C403.876 34.4261 404.252 34.3693 404.647 34.3693C404.908 34.3693 405.185 34.4006 405.478 34.4631C405.773 34.5227 406.049 34.6335 406.305 34.7955C406.563 34.9574 406.775 35.1889 406.94 35.4901C407.104 35.7884 407.187 36.1761 407.187 36.6534V41H405.942V40.1051H405.891C405.809 40.2699 405.685 40.4318 405.521 40.5909C405.356 40.75 405.144 40.8821 404.886 40.9872C404.627 41.0923 404.317 41.1449 403.957 41.1449ZM404.234 40.1222C404.586 40.1222 404.887 40.0526 405.137 39.9134C405.39 39.7741 405.582 39.5923 405.712 39.3679C405.846 39.1406 405.913 38.8977 405.913 38.6392V37.7955C405.867 37.8409 405.779 37.8835 405.648 37.9233C405.521 37.9602 405.374 37.9929 405.21 38.0213C405.045 38.0469 404.884 38.071 404.728 38.0938C404.572 38.1136 404.441 38.1307 404.336 38.1449C404.089 38.1761 403.863 38.2287 403.658 38.3026C403.457 38.3764 403.295 38.483 403.173 38.6222C403.053 38.7585 402.994 38.9403 402.994 39.1676C402.994 39.483 403.11 39.7216 403.343 39.8835C403.576 40.0426 403.873 40.1222 404.234 40.1222ZM412.162 41V32.2727H415.358C415.977 32.2727 416.49 32.375 416.896 32.5795C417.303 32.7812 417.607 33.0554 417.808 33.402C418.01 33.7457 418.111 34.1335 418.111 34.5653C418.111 34.929 418.044 35.2358 417.911 35.4858C417.777 35.733 417.598 35.9318 417.374 36.0824C417.152 36.2301 416.908 36.3381 416.641 36.4062V36.4915C416.93 36.5057 417.213 36.5994 417.489 36.7727C417.767 36.9432 417.997 37.1861 418.179 37.5014C418.361 37.8168 418.452 38.2003 418.452 38.652C418.452 39.098 418.347 39.4986 418.136 39.8537C417.929 40.206 417.608 40.4858 417.173 40.6932C416.739 40.8977 416.183 41 415.507 41H412.162ZM413.479 39.8707H415.379C416.01 39.8707 416.462 39.7486 416.734 39.5043C417.007 39.2599 417.143 38.9545 417.143 38.5881C417.143 38.3125 417.074 38.0597 416.935 37.8295C416.795 37.5994 416.597 37.4162 416.338 37.2798C416.082 37.1435 415.778 37.0753 415.426 37.0753H413.479V39.8707ZM413.479 36.0483H415.243C415.538 36.0483 415.804 35.9915 416.04 35.8778C416.278 35.7642 416.467 35.6051 416.607 35.4006C416.749 35.1932 416.82 34.9489 416.82 34.6676C416.82 34.3068 416.693 34.0043 416.44 33.7599C416.188 33.5156 415.8 33.3935 415.277 33.3935H413.479V36.0483ZM422.668 41.1321C422.055 41.1321 421.519 40.9915 421.062 40.7102C420.604 40.429 420.249 40.0355 419.996 39.5298C419.744 39.0241 419.617 38.4332 419.617 37.7571C419.617 37.0781 419.744 36.4844 419.996 35.9759C420.249 35.4673 420.604 35.0724 421.062 34.7912C421.519 34.5099 422.055 34.3693 422.668 34.3693C423.282 34.3693 423.817 34.5099 424.275 34.7912C424.732 35.0724 425.087 35.4673 425.34 35.9759C425.593 36.4844 425.719 37.0781 425.719 37.7571C425.719 38.4332 425.593 39.0241 425.34 39.5298C425.087 40.0355 424.732 40.429 424.275 40.7102C423.817 40.9915 423.282 41.1321 422.668 41.1321ZM422.673 40.0625C423.07 40.0625 423.4 39.9574 423.661 39.7472C423.923 39.5369 424.116 39.2571 424.241 38.9077C424.369 38.5582 424.433 38.1733 424.433 37.7528C424.433 37.3352 424.369 36.9517 424.241 36.6023C424.116 36.25 423.923 35.9673 423.661 35.7543C423.4 35.5412 423.07 35.4347 422.673 35.4347C422.272 35.4347 421.94 35.5412 421.675 35.7543C421.414 35.9673 421.219 36.25 421.092 36.6023C420.967 36.9517 420.904 37.3352 420.904 37.7528C420.904 38.1733 420.967 38.5582 421.092 38.9077C421.219 39.2571 421.414 39.5369 421.675 39.7472C421.94 39.9574 422.272 40.0625 422.673 40.0625ZM429.899 41.1321C429.285 41.1321 428.75 40.9915 428.292 40.7102C427.835 40.429 427.48 40.0355 427.227 39.5298C426.974 39.0241 426.848 38.4332 426.848 37.7571C426.848 37.0781 426.974 36.4844 427.227 35.9759C427.48 35.4673 427.835 35.0724 428.292 34.7912C428.75 34.5099 429.285 34.3693 429.899 34.3693C430.512 34.3693 431.048 34.5099 431.505 34.7912C431.963 35.0724 432.318 35.4673 432.571 35.9759C432.824 36.4844 432.95 37.0781 432.95 37.7571C432.95 38.4332 432.824 39.0241 432.571 39.5298C432.318 40.0355 431.963 40.429 431.505 40.7102C431.048 40.9915 430.512 41.1321 429.899 41.1321ZM429.903 40.0625C430.301 40.0625 430.63 39.9574 430.892 39.7472C431.153 39.5369 431.346 39.2571 431.471 38.9077C431.599 38.5582 431.663 38.1733 431.663 37.7528C431.663 37.3352 431.599 36.9517 431.471 36.6023C431.346 36.25 431.153 35.9673 430.892 35.7543C430.63 35.5412 430.301 35.4347 429.903 35.4347C429.502 35.4347 429.17 35.5412 428.906 35.7543C428.645 35.9673 428.45 36.25 428.322 36.6023C428.197 36.9517 428.135 37.3352 428.135 37.7528C428.135 38.1733 428.197 38.5582 428.322 38.9077C428.45 39.2571 428.645 39.5369 428.906 39.7472C429.17 39.9574 429.502 40.0625 429.903 40.0625ZM435.646 37.1136V41H434.372V34.4545H435.595V35.5199H435.676C435.827 35.1733 436.063 34.8949 436.384 34.6847C436.707 34.4744 437.115 34.3693 437.607 34.3693C438.053 34.3693 438.443 34.4631 438.778 34.6506C439.114 34.8352 439.374 35.1108 439.558 35.4773C439.743 35.8437 439.835 36.2969 439.835 36.8366V41H438.561V36.9901C438.561 36.5156 438.438 36.1449 438.19 35.8778C437.943 35.608 437.604 35.473 437.172 35.473C436.876 35.473 436.614 35.5369 436.384 35.6648C436.156 35.7926 435.976 35.9801 435.842 36.2273C435.712 36.4716 435.646 36.767 435.646 37.1136ZM444.365 41.1321C443.72 41.1321 443.165 40.9943 442.699 40.7188C442.236 40.4403 441.878 40.0497 441.625 39.5469C441.375 39.0412 441.25 38.4489 441.25 37.7699C441.25 37.0994 441.375 36.5085 441.625 35.9972C441.878 35.4858 442.23 35.0866 442.682 34.7997C443.136 34.5128 443.668 34.3693 444.276 34.3693C444.645 34.3693 445.003 34.4304 445.349 34.5526C445.696 34.6747 446.007 34.8665 446.283 35.1278C446.558 35.3892 446.776 35.7287 446.935 36.1463C447.094 36.5611 447.173 37.0653 447.173 37.6591V38.1108H441.97V37.1562H445.925C445.925 36.821 445.857 36.5241 445.72 36.2656C445.584 36.0043 445.392 35.7983 445.145 35.6477C444.901 35.4972 444.614 35.4219 444.284 35.4219C443.926 35.4219 443.614 35.5099 443.347 35.6861C443.082 35.8594 442.878 36.0866 442.733 36.3679C442.591 36.6463 442.52 36.9489 442.52 37.2756V38.0213C442.52 38.4588 442.597 38.831 442.75 39.1378C442.906 39.4446 443.124 39.679 443.402 39.8409C443.68 40 444.006 40.0795 444.378 40.0795C444.619 40.0795 444.839 40.0455 445.038 39.9773C445.237 39.9062 445.409 39.8011 445.554 39.6619C445.699 39.5227 445.81 39.3509 445.886 39.1463L447.092 39.3636C446.996 39.7187 446.822 40.0298 446.572 40.2969C446.325 40.5611 446.014 40.767 445.639 40.9148C445.267 41.0597 444.842 41.1321 444.365 41.1321ZM455.057 32.2727V41H453.736V33.5938H453.685L451.597 34.9574V33.696L453.774 32.2727H455.057ZM463.061 41.1278C462.532 41.1278 462.061 40.9929 461.646 40.723C461.234 40.4503 460.91 40.0625 460.674 39.5597C460.441 39.054 460.325 38.4474 460.325 37.7401C460.325 37.0327 460.443 36.4276 460.679 35.9247C460.917 35.4219 461.244 35.0369 461.659 34.7699C462.074 34.5028 462.544 34.3693 463.069 34.3693C463.475 34.3693 463.802 34.4375 464.049 34.5739C464.299 34.7074 464.493 34.8636 464.629 35.0426C464.768 35.2216 464.876 35.3793 464.953 35.5156H465.029V32.2727H466.304V41H465.059V39.9815H464.953C464.876 40.1207 464.765 40.2798 464.62 40.4588C464.478 40.6378 464.282 40.794 464.032 40.9276C463.782 41.0611 463.458 41.1278 463.061 41.1278ZM463.342 40.0412C463.708 40.0412 464.018 39.9446 464.271 39.7514C464.527 39.5554 464.72 39.2841 464.85 38.9375C464.984 38.5909 465.051 38.1875 465.051 37.7273C465.051 37.2727 464.985 36.875 464.855 36.5341C464.724 36.1932 464.532 35.9276 464.279 35.7372C464.027 35.5469 463.714 35.4517 463.342 35.4517C462.958 35.4517 462.639 35.5511 462.383 35.75C462.127 35.9489 461.934 36.2202 461.804 36.5639C461.676 36.9077 461.612 37.2955 461.612 37.7273C461.612 38.1648 461.677 38.5582 461.808 38.9077C461.939 39.2571 462.132 39.5341 462.387 39.7386C462.646 39.9403 462.964 40.0412 463.342 40.0412ZM470.027 41.1449C469.612 41.1449 469.237 41.0682 468.902 40.9148C468.567 40.7585 468.301 40.5327 468.105 40.2372C467.912 39.9418 467.815 39.5795 467.815 39.1506C467.815 38.7812 467.886 38.4773 468.028 38.2386C468.17 38 468.362 37.8111 468.604 37.6719C468.845 37.5327 469.115 37.4276 469.413 37.3565C469.712 37.2855 470.016 37.2315 470.325 37.1946C470.717 37.1491 471.036 37.1122 471.28 37.0838C471.524 37.0526 471.702 37.0028 471.812 36.9347C471.923 36.8665 471.979 36.7557 471.979 36.6023V36.5724C471.979 36.2003 471.874 35.9119 471.663 35.7074C471.456 35.5028 471.146 35.4006 470.734 35.4006C470.305 35.4006 469.967 35.4957 469.72 35.6861C469.476 35.8736 469.307 36.0824 469.213 36.3125L468.016 36.0398C468.158 35.642 468.365 35.321 468.638 35.0767C468.913 34.8295 469.23 34.6506 469.588 34.5398C469.946 34.4261 470.322 34.3693 470.717 34.3693C470.979 34.3693 471.256 34.4006 471.548 34.4631C471.844 34.5227 472.119 34.6335 472.375 34.7955C472.634 34.9574 472.845 35.1889 473.01 35.4901C473.175 35.7884 473.257 36.1761 473.257 36.6534V41H472.013V40.1051H471.962C471.879 40.2699 471.756 40.4318 471.591 40.5909C471.426 40.75 471.214 40.8821 470.956 40.9872C470.697 41.0923 470.388 41.1449 470.027 41.1449ZM470.304 40.1222C470.656 40.1222 470.957 40.0526 471.207 39.9134C471.46 39.7741 471.652 39.5923 471.783 39.3679C471.916 39.1406 471.983 38.8977 471.983 38.6392V37.7955C471.938 37.8409 471.849 37.8835 471.719 37.9233C471.591 37.9602 471.445 37.9929 471.28 38.0213C471.115 38.0469 470.955 38.071 470.798 38.0938C470.642 38.1136 470.511 38.1307 470.406 38.1449C470.159 38.1761 469.933 38.2287 469.729 38.3026C469.527 38.3764 469.365 38.483 469.243 38.6222C469.124 38.7585 469.064 38.9403 469.064 39.1676C469.064 39.483 469.18 39.7216 469.413 39.8835C469.646 40.0426 469.943 40.1222 470.304 40.1222ZM475.525 43.4545C475.335 43.4545 475.162 43.4389 475.005 43.4077C474.849 43.3793 474.733 43.348 474.656 43.3139L474.963 42.2699C475.196 42.3324 475.403 42.3594 475.585 42.3509C475.767 42.3423 475.927 42.2741 476.066 42.1463C476.208 42.0185 476.333 41.8097 476.441 41.5199L476.599 41.0852L474.204 34.4545H475.568L477.225 39.5341H477.294L478.951 34.4545H480.319L477.622 41.8736C477.497 42.2145 477.338 42.5028 477.145 42.7386C476.951 42.9773 476.721 43.1563 476.454 43.2756C476.187 43.3949 475.877 43.4545 475.525 43.4545ZM486.597 41.1449C486.183 41.1449 485.808 41.0682 485.472 40.9148C485.137 40.7585 484.871 40.5327 484.675 40.2372C484.482 39.9418 484.386 39.5795 484.386 39.1506C484.386 38.7812 484.457 38.4773 484.599 38.2386C484.741 38 484.933 37.8111 485.174 37.6719C485.415 37.5327 485.685 37.4276 485.984 37.3565C486.282 37.2855 486.586 37.2315 486.896 37.1946C487.288 37.1491 487.606 37.1122 487.85 37.0838C488.094 37.0526 488.272 37.0028 488.383 36.9347C488.494 36.8665 488.549 36.7557 488.549 36.6023V36.5724C488.549 36.2003 488.444 35.9119 488.234 35.7074C488.026 35.5028 487.717 35.4006 487.305 35.4006C486.876 35.4006 486.538 35.4957 486.29 35.6861C486.046 35.8736 485.877 36.0824 485.783 36.3125L484.586 36.0398C484.728 35.642 484.935 35.321 485.208 35.0767C485.484 34.8295 485.8 34.6506 486.158 34.5398C486.516 34.4261 486.893 34.3693 487.288 34.3693C487.549 34.3693 487.826 34.4006 488.119 34.4631C488.414 34.5227 488.69 34.6335 488.945 34.7955C489.204 34.9574 489.415 35.1889 489.58 35.4901C489.745 35.7884 489.827 36.1761 489.827 36.6534V41H488.583V40.1051H488.532C488.45 40.2699 488.326 40.4318 488.161 40.5909C487.996 40.75 487.785 40.8821 487.526 40.9872C487.268 41.0923 486.958 41.1449 486.597 41.1449ZM486.874 40.1222C487.227 40.1222 487.528 40.0526 487.778 39.9134C488.031 39.7741 488.222 39.5923 488.353 39.3679C488.487 39.1406 488.553 38.8977 488.553 38.6392V37.7955C488.508 37.8409 488.42 37.8835 488.289 37.9233C488.161 37.9602 488.015 37.9929 487.85 38.0213C487.685 38.0469 487.525 38.071 487.369 38.0938C487.212 38.1136 487.082 38.1307 486.977 38.1449C486.729 38.1761 486.504 38.2287 486.299 38.3026C486.097 38.3764 485.935 38.483 485.813 38.6222C485.694 38.7585 485.634 38.9403 485.634 39.1676C485.634 39.483 485.751 39.7216 485.984 39.8835C486.217 40.0426 486.513 40.1222 486.874 40.1222ZM494.269 43.5909C493.749 43.5909 493.301 43.5227 492.926 43.3864C492.554 43.25 492.25 43.0696 492.015 42.8452C491.779 42.6207 491.603 42.375 491.486 42.108L492.581 41.6562C492.658 41.7812 492.76 41.9134 492.888 42.0526C493.019 42.1946 493.195 42.3153 493.417 42.4148C493.641 42.5142 493.929 42.5639 494.282 42.5639C494.765 42.5639 495.164 42.446 495.479 42.2102C495.794 41.9773 495.952 41.6051 495.952 41.0938V39.8068H495.871C495.794 39.946 495.684 40.1009 495.539 40.2713C495.397 40.4418 495.201 40.5895 494.951 40.7145C494.701 40.8395 494.375 40.902 493.975 40.902C493.458 40.902 492.992 40.7812 492.577 40.5398C492.165 40.2955 491.838 39.9361 491.597 39.4616C491.358 38.9844 491.239 38.3977 491.239 37.7017C491.239 37.0057 491.357 36.4091 491.593 35.9119C491.831 35.4148 492.158 35.0341 492.573 34.7699C492.988 34.5028 493.458 34.3693 493.983 34.3693C494.39 34.3693 494.718 34.4375 494.968 34.5739C495.218 34.7074 495.412 34.8636 495.551 35.0426C495.694 35.2216 495.803 35.3793 495.88 35.5156H495.973V34.4545H497.222V41.1449C497.222 41.7074 497.091 42.169 496.83 42.5298C496.569 42.8906 496.215 43.1577 495.769 43.331C495.326 43.5043 494.826 43.5909 494.269 43.5909ZM494.256 39.8452C494.623 39.8452 494.932 39.7599 495.185 39.5895C495.441 39.4162 495.634 39.169 495.765 38.848C495.898 38.5241 495.965 38.1364 495.965 37.6847C495.965 37.2443 495.9 36.8565 495.769 36.5213C495.638 36.1861 495.446 35.9247 495.194 35.7372C494.941 35.5469 494.628 35.4517 494.256 35.4517C493.873 35.4517 493.553 35.5511 493.297 35.75C493.042 35.946 492.848 36.2131 492.718 36.5511C492.59 36.8892 492.526 37.267 492.526 37.6847C492.526 38.1136 492.591 38.4901 492.722 38.8139C492.853 39.1378 493.046 39.3906 493.301 39.5724C493.56 39.7543 493.878 39.8452 494.256 39.8452ZM501.688 41.1321C501.074 41.1321 500.539 40.9915 500.081 40.7102C499.624 40.429 499.269 40.0355 499.016 39.5298C498.763 39.0241 498.637 38.4332 498.637 37.7571C498.637 37.0781 498.763 36.4844 499.016 35.9759C499.269 35.4673 499.624 35.0724 500.081 34.7912C500.539 34.5099 501.074 34.3693 501.688 34.3693C502.301 34.3693 502.837 34.5099 503.294 34.7912C503.752 35.0724 504.107 35.4673 504.36 35.9759C504.613 36.4844 504.739 37.0781 504.739 37.7571C504.739 38.4332 504.613 39.0241 504.36 39.5298C504.107 40.0355 503.752 40.429 503.294 40.7102C502.837 40.9915 502.301 41.1321 501.688 41.1321ZM501.692 40.0625C502.09 40.0625 502.419 39.9574 502.681 39.7472C502.942 39.5369 503.135 39.2571 503.26 38.9077C503.388 38.5582 503.452 38.1733 503.452 37.7528C503.452 37.3352 503.388 36.9517 503.26 36.6023C503.135 36.25 502.942 35.9673 502.681 35.7543C502.419 35.5412 502.09 35.4347 501.692 35.4347C501.292 35.4347 500.959 35.5412 500.695 35.7543C500.434 35.9673 500.239 36.25 500.111 36.6023C499.986 36.9517 499.924 37.3352 499.924 37.7528C499.924 38.1733 499.986 38.5582 500.111 38.9077C500.239 39.2571 500.434 39.5369 500.695 39.7472C500.959 39.9574 501.292 40.0625 501.692 40.0625Z"
                                                                fill="#5E5E5E"
                                                            />
                                                        </g>
                                                        <rect
                                                            x={5}
                                                            y={98}
                                                            height={1}
                                                            fill="#E7E7E7"
                                                            style={{
                                                                display: "block",
                                                                width: 521,
                                                                transition: "all 1000ms ease 100ms"
                                                            }}
                                                        />
                                                        <g
                                                            style={{
                                                                opacity: 1,
                                                                transform: "translateY(0px)",
                                                                transition: "all 400ms ease 100ms"
                                                            }}
                                                        >
                                                            <path
                                                                d="M46.5 76.7759H49.2608C49.484 76.7759 49.6802 76.6279 49.7415 76.4132L50.9096 72.325C51.0507 71.831 51.7558 71.8456 51.8764 72.3451L54.107 81.5863C54.2287 82.0904 54.9426 82.0989 55.0762 81.5978L56.2631 77.147C56.3215 76.9282 56.5197 76.7759 56.7462 76.7759H59.5"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                style={{
                                                                    stroke: "rgb(15, 107, 233)",
                                                                    transition: "all 400ms ease 600ms"
                                                                }}
                                                            />
                                                            <path
                                                                d="M66.9787 82H65.348L69.0121 71.8182H70.7869L74.451 82H72.8203L69.9418 73.6676H69.8622L66.9787 82ZM67.2521 78.0128H72.5419V79.3054H67.2521V78.0128ZM78.6156 82.1541C77.8765 82.1541 77.2401 81.9867 76.7065 81.652C76.1762 81.3139 75.7685 80.8482 75.4835 80.255C75.1985 79.6617 75.0559 78.9822 75.0559 78.2166C75.0559 77.4411 75.2018 76.7566 75.4934 76.1634C75.7851 75.5668 76.1961 75.1011 76.7264 74.7663C77.2567 74.4316 77.8815 74.2642 78.6007 74.2642C79.1807 74.2642 79.6977 74.3719 80.1518 74.5874C80.6059 74.7995 80.9721 75.0978 81.2505 75.4822C81.5323 75.8667 81.6996 76.3158 81.7527 76.8295H80.3059C80.2264 76.4716 80.0441 76.1634 79.7591 75.9048C79.4773 75.6463 79.0995 75.517 78.6255 75.517C78.2112 75.517 77.8483 75.6264 77.5368 75.8452C77.2285 76.0606 76.9882 76.3688 76.8159 76.7699C76.6435 77.1676 76.5574 77.6383 76.5574 78.1818C76.5574 78.7386 76.6419 79.2192 76.8109 79.6236C76.9799 80.0279 77.2186 80.3411 77.5268 80.5632C77.8384 80.7853 78.2046 80.8963 78.6255 80.8963C78.9073 80.8963 79.1625 80.8449 79.3912 80.7422C79.6232 80.6361 79.8171 80.4853 79.9728 80.2898C80.1319 80.0942 80.243 79.8589 80.3059 79.5838H81.7527C81.6996 80.0777 81.5389 80.5185 81.2704 80.9062C81.002 81.294 80.6423 81.599 80.1916 81.821C79.7441 82.0431 79.2188 82.1541 78.6156 82.1541ZM86.627 74.3636V75.5568H82.4558V74.3636H86.627ZM83.5744 72.5341H85.0609V79.7578C85.0609 80.0462 85.104 80.2633 85.1902 80.4091C85.2764 80.5516 85.3874 80.6494 85.5233 80.7024C85.6625 80.7521 85.8133 80.777 85.9757 80.777C86.095 80.777 86.1994 80.7687 86.2889 80.7521C86.3784 80.7356 86.448 80.7223 86.4977 80.7124L86.7662 81.9403C86.68 81.9735 86.5574 82.0066 86.3983 82.0398C86.2392 82.0762 86.0403 82.0961 85.8017 82.0994C85.4106 82.1061 85.046 82.0365 84.7079 81.8906C84.3699 81.7448 84.0964 81.5194 83.8876 81.2145C83.6788 80.9096 83.5744 80.5268 83.5744 80.0661V72.5341ZM87.9913 82V74.3636H89.4778V82H87.9913ZM88.742 73.1854C88.4835 73.1854 88.2614 73.0992 88.0758 72.9268C87.8935 72.7512 87.8024 72.5424 87.8024 72.3004C87.8024 72.0552 87.8935 71.8464 88.0758 71.674C88.2614 71.4983 88.4835 71.4105 88.742 71.4105C89.0006 71.4105 89.221 71.4983 89.4033 71.674C89.5889 71.8464 89.6817 72.0552 89.6817 72.3004C89.6817 72.5424 89.5889 72.7512 89.4033 72.9268C89.221 73.0992 89.0006 73.1854 88.742 73.1854ZM97.7303 74.3636L94.9611 82H93.3702L90.5961 74.3636H92.192L94.1259 80.2401H94.2055L96.1344 74.3636H97.7303ZM98.8473 82V74.3636H100.334V82H98.8473ZM99.598 73.1854C99.3395 73.1854 99.1175 73.0992 98.9319 72.9268C98.7496 72.7512 98.6584 72.5424 98.6584 72.3004C98.6584 72.0552 98.7496 71.8464 98.9319 71.674C99.1175 71.4983 99.3395 71.4105 99.598 71.4105C99.8566 71.4105 100.077 71.4983 100.259 71.674C100.445 71.8464 100.538 72.0552 100.538 72.3004C100.538 72.5424 100.445 72.7512 100.259 72.9268C100.077 73.0992 99.8566 73.1854 99.598 73.1854ZM105.618 74.3636V75.5568H101.447V74.3636H105.618ZM102.566 72.5341H104.052V79.7578C104.052 80.0462 104.095 80.2633 104.182 80.4091C104.268 80.5516 104.379 80.6494 104.515 80.7024C104.654 80.7521 104.805 80.777 104.967 80.777C105.086 80.777 105.191 80.7687 105.28 80.7521C105.37 80.7356 105.439 80.7223 105.489 80.7124L105.757 81.9403C105.671 81.9735 105.549 82.0066 105.39 82.0398C105.231 82.0762 105.032 82.0961 104.793 82.0994C104.402 82.1061 104.037 82.0365 103.699 81.8906C103.361 81.7448 103.088 81.5194 102.879 81.2145C102.67 80.9096 102.566 80.5268 102.566 80.0661V72.5341ZM107.922 84.8636C107.7 84.8636 107.498 84.8454 107.316 84.8089C107.133 84.7758 106.998 84.7393 106.908 84.6996L107.266 83.4815C107.538 83.5545 107.78 83.5859 107.992 83.576C108.204 83.5661 108.391 83.4865 108.554 83.3374C108.719 83.1882 108.865 82.9446 108.991 82.6065L109.175 82.0994L106.381 74.3636H107.972L109.906 80.2898H109.985L111.919 74.3636H113.515L110.368 83.0192C110.222 83.4169 110.037 83.7533 109.811 84.0284C109.586 84.3068 109.318 84.5156 109.006 84.6548C108.695 84.794 108.333 84.8636 107.922 84.8636Z"
                                                                style={{
                                                                    fill: "rgb(15, 107, 233)",
                                                                    transition: "all 400ms ease 600ms"
                                                                }}
                                                            />
                                                        </g>
                                                        <rect
                                                            x={25}
                                                            y={97}
                                                            width={109}
                                                            height={2}
                                                            data-is-in-view="true"
                                                            style={{
                                                                display: "block",
                                                                fill: "rgb(15, 107, 233)",
                                                                width: 109,
                                                                transition: "all 400ms ease 600ms"
                                                            }}
                                                        />
                                                        <g
                                                            style={{
                                                                opacity: 1,
                                                                transform: "translateY(0px)",
                                                                transition: "all 400ms ease 150ms"
                                                            }}
                                                        >
                                                            <rect
                                                                x={143}
                                                                y="71.5"
                                                                width={14}
                                                                height={12}
                                                                rx={3}
                                                                stroke="#5E5E5E"
                                                                strokeWidth="1.2"
                                                            />
                                                            <path
                                                                d="M145.5 74.5L146.171 75.1857C147.929 76.9838 148.808 77.8828 149.912 77.895C151.017 77.9073 151.916 77.028 153.713 75.2695L154.5 74.5"
                                                                stroke="#5E5E5E"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                            />
                                                            <path
                                                                d="M163.119 82.5V72.3182H169.502V73.6406H164.655V76.7429H169.169V78.0604H164.655V81.1776H169.562V82.5H163.119ZM171.155 82.5V74.8636H172.582V76.1065H172.676C172.835 75.6856 173.095 75.3575 173.457 75.1222C173.818 74.8835 174.25 74.7642 174.754 74.7642C175.265 74.7642 175.692 74.8835 176.037 75.1222C176.385 75.3608 176.642 75.6889 176.808 76.1065H176.887C177.069 75.6989 177.359 75.3741 177.757 75.1321C178.155 74.8868 178.629 74.7642 179.179 74.7642C179.872 74.7642 180.437 74.9813 180.874 75.4155C181.315 75.8497 181.536 76.5043 181.536 77.3793V82.5H180.049V77.5185C180.049 77.0014 179.908 76.6269 179.626 76.3949C179.345 76.1629 179.008 76.0469 178.617 76.0469C178.133 76.0469 177.757 76.196 177.489 76.4943C177.22 76.7893 177.086 77.1688 177.086 77.6328V82.5H175.604V77.424C175.604 77.0097 175.475 76.6766 175.217 76.4247C174.958 76.1728 174.622 76.0469 174.207 76.0469C173.926 76.0469 173.665 76.1214 173.427 76.2706C173.192 76.4164 173.001 76.6203 172.855 76.8821C172.713 77.1439 172.641 77.4472 172.641 77.7919V82.5H171.155ZM185.47 82.669C184.986 82.669 184.549 82.5795 184.158 82.4006C183.767 82.2183 183.457 81.9548 183.228 81.6101C183.003 81.2654 182.89 80.8428 182.89 80.3423C182.89 79.9115 182.973 79.5568 183.139 79.2784C183.304 79 183.528 78.7796 183.81 78.6172C184.091 78.4548 184.406 78.3321 184.754 78.2493C185.102 78.1664 185.457 78.1035 185.818 78.0604C186.276 78.0073 186.647 77.9643 186.932 77.9311C187.217 77.8946 187.424 77.8366 187.553 77.7571C187.683 77.6776 187.747 77.5483 187.747 77.3693V77.3345C187.747 76.9003 187.625 76.5639 187.379 76.3253C187.137 76.0866 186.776 75.9673 186.295 75.9673C185.795 75.9673 185.401 76.0784 185.112 76.3004C184.827 76.5192 184.63 76.7628 184.521 77.0312L183.124 76.7131C183.289 76.2491 183.531 75.8745 183.849 75.5895C184.171 75.3011 184.54 75.0923 184.958 74.9631C185.376 74.8305 185.815 74.7642 186.276 74.7642C186.581 74.7642 186.904 74.8007 187.245 74.8736C187.59 74.9432 187.911 75.0724 188.21 75.2614C188.511 75.4503 188.758 75.7204 188.95 76.0717C189.143 76.4197 189.239 76.8722 189.239 77.429V82.5H187.787V81.456H187.727C187.631 81.6482 187.487 81.8371 187.295 82.0227C187.103 82.2083 186.856 82.3625 186.554 82.4851C186.252 82.6077 185.891 82.669 185.47 82.669ZM185.793 81.4759C186.204 81.4759 186.556 81.3946 186.847 81.2322C187.142 81.0698 187.366 80.8577 187.518 80.5959C187.674 80.3307 187.752 80.0473 187.752 79.7457V78.7614C187.699 78.8144 187.596 78.8641 187.444 78.9105C187.295 78.9536 187.124 78.9917 186.932 79.0249C186.74 79.0547 186.552 79.0829 186.37 79.1094C186.188 79.1326 186.035 79.1525 185.913 79.169C185.624 79.2055 185.361 79.2668 185.122 79.353C184.887 79.4392 184.698 79.5634 184.555 79.7259C184.416 79.8849 184.347 80.0971 184.347 80.3622C184.347 80.7301 184.482 81.0085 184.754 81.1974C185.026 81.383 185.372 81.4759 185.793 81.4759ZM190.939 82.5V74.8636H192.425V82.5H190.939ZM191.689 73.6854C191.431 73.6854 191.209 73.5992 191.023 73.4268C190.841 73.2512 190.75 73.0424 190.75 72.8004C190.75 72.5552 190.841 72.3464 191.023 72.174C191.209 71.9983 191.431 71.9105 191.689 71.9105C191.948 71.9105 192.168 71.9983 192.351 72.174C192.536 72.3464 192.629 72.5552 192.629 72.8004C192.629 73.0424 192.536 73.2512 192.351 73.4268C192.168 73.5992 191.948 73.6854 191.689 73.6854ZM195.631 72.3182V82.5H194.145V72.3182H195.631ZM203.074 76.728L201.726 76.9666C201.67 76.7943 201.58 76.6302 201.458 76.4744C201.338 76.3187 201.176 76.1911 200.971 76.0916C200.765 75.9922 200.508 75.9425 200.2 75.9425C199.779 75.9425 199.428 76.0369 199.146 76.2259C198.864 76.4115 198.723 76.6518 198.723 76.9467C198.723 77.2019 198.818 77.4074 199.007 77.5632C199.196 77.719 199.501 77.8466 199.922 77.946L201.135 78.2244C201.837 78.3868 202.361 78.6371 202.706 78.9751C203.05 79.3132 203.223 79.7524 203.223 80.2926C203.223 80.75 203.09 81.1577 202.825 81.5156C202.563 81.8703 202.197 82.1487 201.726 82.3509C201.259 82.553 200.717 82.6541 200.101 82.6541C199.245 82.6541 198.548 82.4718 198.007 82.1072C197.467 81.7393 197.136 81.2173 197.013 80.5412L198.45 80.3224C198.539 80.697 198.723 80.9804 199.002 81.1726C199.28 81.3615 199.643 81.456 200.091 81.456C200.578 81.456 200.967 81.3549 201.259 81.1527C201.551 80.9472 201.696 80.697 201.696 80.402C201.696 80.1634 201.607 79.9628 201.428 79.8004C201.252 79.638 200.982 79.5154 200.618 79.4325L199.325 79.1491C198.612 78.9867 198.085 78.7282 197.744 78.3736C197.406 78.0189 197.237 77.5698 197.237 77.0263C197.237 76.5755 197.363 76.1811 197.615 75.843C197.867 75.505 198.215 75.2415 198.659 75.0526C199.103 74.8603 199.612 74.7642 200.185 74.7642C201.01 74.7642 201.66 74.9432 202.134 75.3011C202.608 75.6558 202.921 76.1314 203.074 76.728Z"
                                                                fill="#5E5E5E"
                                                            />
                                                            <path
                                                                d="M208 77.5C208 75.6401 208 74.7101 208.204 73.9471C208.759 71.8765 210.377 70.2592 212.447 69.7044C213.21 69.5 214.14 69.5 216 69.5H223C224.86 69.5 225.79 69.5 226.553 69.7044C228.623 70.2592 230.241 71.8765 230.796 73.9471C231 74.7101 231 75.6401 231 77.5V77.5C231 79.3599 231 80.2899 230.796 81.0529C230.241 83.1235 228.623 84.7408 226.553 85.2956C225.79 85.5 224.86 85.5 223 85.5H216C214.14 85.5 213.21 85.5 212.447 85.2956C210.377 84.7408 208.759 83.1235 208.204 81.0529C208 80.2899 208 79.3599 208 77.5V77.5Z"
                                                                fill="#969696"
                                                                fillOpacity="0.2"
                                                            />
                                                            <path
                                                                d="M215.951 81.6193C215.366 81.6193 214.843 81.5185 214.383 81.3168C213.925 81.1151 213.563 80.8352 213.296 80.4773C213.032 80.1165 212.89 79.6989 212.87 79.2244H214.208C214.225 79.483 214.312 79.7074 214.468 79.8977C214.627 80.0852 214.834 80.2301 215.09 80.3324C215.346 80.4347 215.63 80.4858 215.942 80.4858C216.286 80.4858 216.59 80.4261 216.854 80.3068C217.121 80.1875 217.33 80.0213 217.481 79.8082C217.631 79.5923 217.707 79.3438 217.707 79.0625C217.707 78.7699 217.631 78.5128 217.481 78.2912C217.333 78.0668 217.116 77.8906 216.829 77.7628C216.545 77.6349 216.201 77.571 215.798 77.571H215.06V76.4972H215.798C216.121 76.4972 216.406 76.4389 216.65 76.3224C216.897 76.206 217.09 76.044 217.229 75.8366C217.369 75.6264 217.438 75.3807 217.438 75.0994C217.438 74.8295 217.377 74.5952 217.255 74.3963C217.136 74.1946 216.965 74.0369 216.744 73.9233C216.525 73.8097 216.266 73.7528 215.968 73.7528C215.684 73.7528 215.418 73.8054 215.171 73.9105C214.927 74.0128 214.728 74.1605 214.575 74.3537C214.421 74.544 214.339 74.7727 214.327 75.0398H213.053C213.067 74.5682 213.207 74.1534 213.471 73.7955C213.738 73.4375 214.09 73.1577 214.528 72.956C214.965 72.7543 215.451 72.6534 215.985 72.6534C216.545 72.6534 217.028 72.7628 217.434 72.9815C217.843 73.1974 218.158 73.4858 218.38 73.8466C218.604 74.2074 218.715 74.6023 218.712 75.0312C218.715 75.5199 218.579 75.9347 218.303 76.2756C218.031 76.6165 217.667 76.8452 217.212 76.9616V77.0298C217.792 77.1179 218.241 77.348 218.559 77.7202C218.88 78.0923 219.039 78.554 219.036 79.1051C219.039 79.5852 218.906 80.0156 218.636 80.3963C218.369 80.777 218.004 81.0767 217.54 81.2955C217.077 81.5114 216.548 81.6193 215.951 81.6193ZM220.407 81.5V80.5455L223.36 77.4858C223.675 77.1534 223.935 76.8622 224.14 76.6122C224.347 76.3594 224.502 76.1193 224.604 75.892C224.707 75.6648 224.758 75.4233 224.758 75.1676C224.758 74.8778 224.69 74.6278 224.553 74.4176C224.417 74.2045 224.231 74.0412 223.995 73.9276C223.759 73.8111 223.494 73.7528 223.198 73.7528C222.886 73.7528 222.613 73.8168 222.38 73.9446C222.147 74.0724 221.968 74.2528 221.843 74.4858C221.718 74.7187 221.656 74.9915 221.656 75.304H220.398C220.398 74.7727 220.521 74.3082 220.765 73.9105C221.009 73.5128 221.344 73.2045 221.771 72.9858C222.197 72.7642 222.681 72.6534 223.224 72.6534C223.772 72.6534 224.255 72.7628 224.673 72.9815C225.093 73.1974 225.421 73.4929 225.657 73.8679C225.893 74.2401 226.011 74.6605 226.011 75.1293C226.011 75.4531 225.95 75.7699 225.827 76.0795C225.708 76.3892 225.499 76.7344 225.201 77.1151C224.903 77.4929 224.488 77.9517 223.957 78.4915L222.222 80.3068V80.3707H226.151V81.5H220.407Z"
                                                                fill="#5E5E5E"
                                                            />
                                                        </g>
                                                        <g
                                                            style={{
                                                                opacity: 1,
                                                                transform: "translateY(0px)",
                                                                transition: "all 400ms ease 200ms"
                                                            }}
                                                        >
                                                            <path
                                                                d="M262 74.4231V79.0279V79.0279C262 80.3995 262 81.0853 261.78 81.6277C261.475 82.3791 260.879 82.9751 260.128 83.28C259.585 83.5 258.9 83.5 257.528 83.5H252.8C251.12 83.5 250.28 83.5 249.638 83.173C249.074 82.8854 248.615 82.4265 248.327 81.862C248 81.2202 248 80.3802 248 78.7V74.4028C248 74.0287 248 73.8416 248.02 73.6845C248.164 72.554 249.054 71.6638 250.184 71.52C250.342 71.5 250.529 71.5 250.903 71.5H251.613C251.978 71.5 252.317 71.6893 252.508 72V72M262 74.4231H255.788C255.135 74.4231 254.809 74.4231 254.515 74.3304C254.255 74.2483 254.015 74.114 253.809 73.9356C253.576 73.7341 253.405 73.4564 253.063 72.901L252.508 72M262 74.4231V74.4231C262 73.0848 260.915 72 259.577 72H252.508"
                                                                stroke="#5E5E5E"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M268.119 82.5V72.3182H274.433V73.6406H269.655V76.7429H273.98V78.0604H269.655V82.5H268.119ZM275.922 82.5V74.8636H277.409V82.5H275.922ZM276.673 73.6854C276.415 73.6854 276.193 73.5992 276.007 73.4268C275.825 73.2512 275.733 73.0424 275.733 72.8004C275.733 72.5552 275.825 72.3464 276.007 72.174C276.193 71.9983 276.415 71.9105 276.673 71.9105C276.932 71.9105 277.152 71.9983 277.334 72.174C277.52 72.3464 277.613 72.5552 277.613 72.8004C277.613 73.0424 277.52 73.2512 277.334 73.4268C277.152 73.5992 276.932 73.6854 276.673 73.6854ZM280.615 72.3182V82.5H279.129V72.3182H280.615ZM285.626 82.6541C284.874 82.6541 284.226 82.4934 283.682 82.1719C283.142 81.8471 282.725 81.3913 282.43 80.8047C282.138 80.2147 281.992 79.5237 281.992 78.7315C281.992 77.9493 282.138 77.2599 282.43 76.6634C282.725 76.0668 283.135 75.6011 283.662 75.2663C284.193 74.9316 284.813 74.7642 285.522 74.7642C285.953 74.7642 286.37 74.8355 286.775 74.978C287.179 75.1205 287.542 75.3442 287.863 75.6491C288.185 75.9541 288.439 76.3501 288.624 76.8374C288.81 77.3213 288.903 77.9096 288.903 78.6023V79.1293H282.832V78.0156H287.446C287.446 77.6245 287.366 77.2782 287.207 76.9766C287.048 76.6716 286.824 76.4313 286.536 76.2557C286.251 76.08 285.916 75.9922 285.532 75.9922C285.114 75.9922 284.75 76.0949 284.438 76.3004C284.13 76.5026 283.891 76.7678 283.722 77.0959C283.556 77.4207 283.474 77.7737 283.474 78.1548V79.0249C283.474 79.5353 283.563 79.9695 283.742 80.3274C283.924 80.6854 284.178 80.9588 284.503 81.1477C284.827 81.3333 285.207 81.4261 285.641 81.4261C285.923 81.4261 286.18 81.3864 286.412 81.3068C286.644 81.224 286.844 81.1013 287.013 80.9389C287.182 80.7765 287.312 80.576 287.401 80.3374L288.808 80.5909C288.695 81.0052 288.493 81.3681 288.202 81.6797C287.913 81.9879 287.55 82.2282 287.113 82.4006C286.679 82.5696 286.183 82.6541 285.626 82.6541ZM295.994 76.728L294.647 76.9666C294.591 76.7943 294.501 76.6302 294.378 76.4744C294.259 76.3187 294.097 76.1911 293.891 76.0916C293.686 75.9922 293.429 75.9425 293.121 75.9425C292.7 75.9425 292.348 76.0369 292.067 76.2259C291.785 76.4115 291.644 76.6518 291.644 76.9467C291.644 77.2019 291.738 77.4074 291.927 77.5632C292.116 77.719 292.421 77.8466 292.842 77.946L294.055 78.2244C294.758 78.3868 295.282 78.6371 295.626 78.9751C295.971 79.3132 296.143 79.7524 296.143 80.2926C296.143 80.75 296.011 81.1577 295.746 81.5156C295.484 81.8703 295.118 82.1487 294.647 82.3509C294.18 82.553 293.638 82.6541 293.021 82.6541C292.166 82.6541 291.468 82.4718 290.928 82.1072C290.388 81.7393 290.056 81.2173 289.934 80.5412L291.371 80.3224C291.46 80.697 291.644 80.9804 291.922 81.1726C292.201 81.3615 292.564 81.456 293.011 81.456C293.498 81.456 293.888 81.3549 294.18 81.1527C294.471 80.9472 294.617 80.697 294.617 80.402C294.617 80.1634 294.528 79.9628 294.349 79.8004C294.173 79.638 293.903 79.5154 293.538 79.4325L292.246 79.1491C291.533 78.9867 291.006 78.7282 290.665 78.3736C290.327 78.0189 290.158 77.5698 290.158 77.0263C290.158 76.5755 290.283 76.1811 290.535 75.843C290.787 75.505 291.135 75.2415 291.579 75.0526C292.024 74.8603 292.532 74.7642 293.106 74.7642C293.931 74.7642 294.581 74.9432 295.055 75.3011C295.528 75.6558 295.842 76.1314 295.994 76.728Z"
                                                                fill="#5E5E5E"
                                                            />
                                                            <path
                                                                d="M301 77.5C301 75.6401 301 74.7101 301.204 73.9471C301.759 71.8765 303.377 70.2592 305.447 69.7044C306.21 69.5 307.14 69.5 309 69.5V69.5C310.86 69.5 311.79 69.5 312.553 69.7044C314.623 70.2592 316.241 71.8765 316.796 73.9471C317 74.7101 317 75.6401 317 77.5V77.5C317 79.3599 317 80.2899 316.796 81.0529C316.241 83.1235 314.623 84.7408 312.553 85.2956C311.79 85.5 310.86 85.5 309 85.5V85.5C307.14 85.5 306.21 85.5 305.447 85.2956C303.377 84.7408 301.759 83.1235 301.204 81.0529C301 80.2899 301 79.3599 301 77.5V77.5Z"
                                                                fill="#969696"
                                                                fillOpacity="0.2"
                                                            />
                                                            <path
                                                                d="M309.005 81.6449C308.331 81.642 307.756 81.4645 307.279 81.1122C306.802 80.7599 306.437 80.2472 306.184 79.5739C305.931 78.9006 305.805 78.0895 305.805 77.1406C305.805 76.1946 305.931 75.3864 306.184 74.7159C306.439 74.0455 306.806 73.5341 307.283 73.1818C307.763 72.8295 308.337 72.6534 309.005 72.6534C309.672 72.6534 310.245 72.831 310.722 73.1861C311.199 73.5384 311.564 74.0497 311.817 74.7202C312.073 75.3878 312.201 76.1946 312.201 77.1406C312.201 78.0923 312.074 78.9048 311.822 79.5781C311.569 80.2486 311.204 80.7614 310.726 81.1165C310.249 81.4688 309.675 81.6449 309.005 81.6449ZM309.005 80.5071C309.596 80.5071 310.057 80.2188 310.39 79.642C310.725 79.0653 310.893 78.2315 310.893 77.1406C310.893 76.4162 310.816 75.804 310.662 75.304C310.512 74.8011 310.295 74.4205 310.01 74.1619C309.729 73.9006 309.394 73.7699 309.005 73.7699C308.417 73.7699 307.955 74.0597 307.62 74.6392C307.285 75.2187 307.116 76.0526 307.113 77.1406C307.113 77.8679 307.188 78.483 307.339 78.9858C307.492 79.4858 307.709 79.8651 307.991 80.1236C308.272 80.3793 308.61 80.5071 309.005 80.5071Z"
                                                                fill="#5E5E5E"
                                                            />
                                                        </g>
                                                        <g
                                                            style={{
                                                                opacity: 1,
                                                                transform: "translateY(0px)",
                                                                transition: "all 400ms ease 300ms"
                                                            }}
                                                        >
                                                            <path
                                                                d="M343 70.5H339.8C338.12 70.5 337.28 70.5 336.638 70.827C336.074 71.1146 335.615 71.5736 335.327 72.138C335 72.7798 335 73.6202 335 75.301C335 76.8834 335 78.1166 335 79.699C335 81.3798 335 82.2202 335.327 82.862C335.615 83.4265 336.074 83.8854 336.638 84.173C337.28 84.5 338.12 84.5 339.8 84.5H342.2C343.88 84.5 344.72 84.5 345.362 84.173C345.926 83.8854 346.385 83.4265 346.673 82.862C347 82.2202 347 81.3802 347 79.7V74.5M343 70.5V72.9C343 73.4601 343 73.7401 343.109 73.954C343.205 74.1422 343.358 74.2951 343.546 74.391C343.76 74.5 344.04 74.5 344.6 74.5H347M343 70.5L345 72.5L347 74.5"
                                                                stroke="#5E5E5E"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M362.337 72.3182V82.5H360.925L355.749 75.0327H355.655V82.5H354.119V72.3182H355.54L360.721 79.7955H360.815V72.3182H362.337ZM367.395 82.6541C366.679 82.6541 366.054 82.4901 365.521 82.1619C364.987 81.8338 364.573 81.3748 364.278 80.7848C363.983 80.1948 363.835 79.5054 363.835 78.7166C363.835 77.9245 363.983 77.2318 364.278 76.6385C364.573 76.0452 364.987 75.5845 365.521 75.2564C366.054 74.9283 366.679 74.7642 367.395 74.7642C368.111 74.7642 368.736 74.9283 369.269 75.2564C369.803 75.5845 370.217 76.0452 370.512 76.6385C370.807 77.2318 370.955 77.9245 370.955 78.7166C370.955 79.5054 370.807 80.1948 370.512 80.7848C370.217 81.3748 369.803 81.8338 369.269 82.1619C368.736 82.4901 368.111 82.6541 367.395 82.6541ZM367.4 81.4062C367.864 81.4062 368.248 81.2836 368.553 81.0384C368.858 80.7931 369.084 80.4666 369.229 80.0589C369.379 79.6513 369.453 79.2022 369.453 78.7116C369.453 78.2244 369.379 77.777 369.229 77.3693C369.084 76.9583 368.858 76.6286 368.553 76.38C368.248 76.1314 367.864 76.0071 367.4 76.0071C366.933 76.0071 366.545 76.1314 366.237 76.38C365.932 76.6286 365.705 76.9583 365.555 77.3693C365.41 77.777 365.337 78.2244 365.337 78.7116C365.337 79.2022 365.41 79.6513 365.555 80.0589C365.705 80.4666 365.932 80.7931 366.237 81.0384C366.545 81.2836 366.933 81.4062 367.4 81.4062ZM375.898 74.8636V76.0568H371.727V74.8636H375.898ZM372.846 73.0341H374.332V80.2578C374.332 80.5462 374.375 80.7633 374.462 80.9091C374.548 81.0516 374.659 81.1494 374.795 81.2024C374.934 81.2521 375.085 81.277 375.247 81.277C375.366 81.277 375.471 81.2687 375.56 81.2521C375.65 81.2356 375.719 81.2223 375.769 81.2124L376.038 82.4403C375.951 82.4735 375.829 82.5066 375.67 82.5398C375.511 82.5762 375.312 82.5961 375.073 82.5994C374.682 82.6061 374.317 82.5365 373.979 82.3906C373.641 82.2448 373.368 82.0194 373.159 81.7145C372.95 81.4096 372.846 81.0268 372.846 80.5661V73.0341ZM380.472 82.6541C379.72 82.6541 379.072 82.4934 378.528 82.1719C377.988 81.8471 377.57 81.3913 377.275 80.8047C376.984 80.2147 376.838 79.5237 376.838 78.7315C376.838 77.9493 376.984 77.2599 377.275 76.6634C377.57 76.0668 377.981 75.6011 378.508 75.2663C379.038 74.9316 379.658 74.7642 380.368 74.7642C380.798 74.7642 381.216 74.8355 381.62 74.978C382.025 75.1205 382.388 75.3442 382.709 75.6491C383.031 75.9541 383.284 76.3501 383.47 76.8374C383.655 77.3213 383.748 77.9096 383.748 78.6023V79.1293H377.678V78.0156H382.292C382.292 77.6245 382.212 77.2782 382.053 76.9766C381.894 76.6716 381.67 76.4313 381.382 76.2557C381.097 76.08 380.762 75.9922 380.378 75.9922C379.96 75.9922 379.595 76.0949 379.284 76.3004C378.976 76.5026 378.737 76.7678 378.568 77.0959C378.402 77.4207 378.319 77.7737 378.319 78.1548V79.0249C378.319 79.5353 378.409 79.9695 378.588 80.3274C378.77 80.6854 379.024 80.9588 379.348 81.1477C379.673 81.3333 380.053 81.4261 380.487 81.4261C380.769 81.4261 381.025 81.3864 381.257 81.3068C381.489 81.224 381.69 81.1013 381.859 80.9389C382.028 80.7765 382.157 80.576 382.247 80.3374L383.654 80.5909C383.541 81.0052 383.339 81.3681 383.047 81.6797C382.759 81.9879 382.396 82.2282 381.958 82.4006C381.524 82.5696 381.029 82.6541 380.472 82.6541ZM390.84 76.728L389.493 76.9666C389.436 76.7943 389.347 76.6302 389.224 76.4744C389.105 76.3187 388.942 76.1911 388.737 76.0916C388.531 75.9922 388.275 75.9425 387.966 75.9425C387.545 75.9425 387.194 76.0369 386.912 76.2259C386.631 76.4115 386.49 76.6518 386.49 76.9467C386.49 77.2019 386.584 77.4074 386.773 77.5632C386.962 77.719 387.267 77.8466 387.688 77.946L388.901 78.2244C389.604 78.3868 390.127 78.6371 390.472 78.9751C390.817 79.3132 390.989 79.7524 390.989 80.2926C390.989 80.75 390.856 81.1577 390.591 81.5156C390.329 81.8703 389.963 82.1487 389.493 82.3509C389.025 82.553 388.483 82.6541 387.867 82.6541C387.012 82.6541 386.314 82.4718 385.774 82.1072C385.234 81.7393 384.902 81.2173 384.78 80.5412L386.216 80.3224C386.306 80.697 386.49 80.9804 386.768 81.1726C387.047 81.3615 387.409 81.456 387.857 81.456C388.344 81.456 388.734 81.3549 389.025 81.1527C389.317 80.9472 389.463 80.697 389.463 80.402C389.463 80.1634 389.373 79.9628 389.194 79.8004C389.019 79.638 388.748 79.5154 388.384 79.4325L387.091 79.1491C386.379 78.9867 385.852 78.7282 385.51 78.3736C385.172 78.0189 385.003 77.5698 385.003 77.0263C385.003 76.5755 385.129 76.1811 385.381 75.843C385.633 75.505 385.981 75.2415 386.425 75.0526C386.869 74.8603 387.378 74.7642 387.951 74.7642C388.777 74.7642 389.426 74.9432 389.9 75.3011C390.374 75.6558 390.687 76.1314 390.84 76.728Z"
                                                                fill="#5E5E5E"
                                                            />
                                                            <path
                                                                d="M396 77.5C396 75.6401 396 74.7101 396.204 73.9471C396.759 71.8765 398.377 70.2592 400.447 69.7044C401.21 69.5 402.14 69.5 404 69.5V69.5C405.86 69.5 406.79 69.5 407.553 69.7044C409.623 70.2592 411.241 71.8765 411.796 73.9471C412 74.7101 412 75.6401 412 77.5V77.5C412 79.3599 412 80.2899 411.796 81.0529C411.241 83.1235 409.623 84.7408 407.553 85.2956C406.79 85.5 405.86 85.5 404 85.5V85.5C402.14 85.5 401.21 85.5 400.447 85.2956C398.377 84.7408 396.759 83.1235 396.204 81.0529C396 80.2899 396 79.3599 396 77.5V77.5Z"
                                                                fill="#969696"
                                                                fillOpacity="0.2"
                                                            />
                                                            <path
                                                                d="M403.999 81.6193C403.465 81.6193 402.985 81.517 402.559 81.3125C402.136 81.1051 401.798 80.821 401.545 80.4602C401.292 80.0994 401.157 79.6875 401.14 79.2244H402.419C402.45 79.5994 402.616 79.9077 402.917 80.1491C403.218 80.3906 403.579 80.5114 403.999 80.5114C404.335 80.5114 404.632 80.4347 404.89 80.2812C405.151 80.125 405.356 79.9105 405.504 79.6378C405.654 79.3651 405.73 79.054 405.73 78.7045C405.73 78.3494 405.653 78.0327 405.499 77.7543C405.346 77.4759 405.134 77.2571 404.865 77.098C404.597 76.9389 404.291 76.858 403.944 76.8551C403.68 76.8551 403.414 76.9006 403.147 76.9915C402.88 77.0824 402.664 77.2017 402.499 77.3494L401.294 77.1705L401.784 72.7727H406.582V73.902H402.879L402.602 76.3438H402.653C402.823 76.179 403.049 76.0412 403.33 75.9304C403.615 75.8196 403.919 75.7642 404.242 75.7642C404.774 75.7642 405.247 75.8906 405.661 76.1435C406.079 76.3963 406.407 76.7415 406.646 77.179C406.887 77.6136 407.007 78.1136 407.004 78.679C407.007 79.2443 406.879 79.7486 406.62 80.1918C406.365 80.6349 406.009 80.9844 405.555 81.2401C405.103 81.4929 404.585 81.6193 403.999 81.6193Z"
                                                                fill="#5E5E5E"
                                                            />
                                                        </g>
                                                        <g
                                                            style={{
                                                                opacity: 1,
                                                                transform: "translateY(0px)",
                                                                transition: "all 400ms ease 350ms"
                                                            }}
                                                        >
                                                            <path
                                                                d="M428.5 75.8009L428.5 79.1991C428.5 80.8799 428.5 81.7203 428.827 82.362C429.115 82.9265 429.574 83.3854 430.138 83.673C430.78 84 431.62 84 433.3 84H434.2C435.88 84 436.72 84 437.362 83.673C437.926 83.3854 438.385 82.9265 438.673 82.362C439 81.7202 439 80.8802 439 79.2V79.2L439 75.8C439 74.1199 439 73.2798 438.673 72.6381C438.385 72.0736 437.926 71.6146 437.362 71.327C436.72 71 435.88 71 434.2 71L433.3 71C431.62 71 430.78 71 430.138 71.327C429.574 71.6146 429.115 72.0736 428.827 72.638C428.5 73.2798 428.5 74.1201 428.5 75.8008L428.5 75.8009Z"
                                                                stroke="#5E5E5E"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M440.996 74C442.415 74.2304 443.496 75.4245 443.496 76.863L443.496 79.2499C443.496 80.6025 443.496 81.2789 443.268 81.8124C442.963 82.5237 442.379 83.0889 441.644 83.3835C441.354 83.4998 441.023 83.5549 440.57 83.581"
                                                                stroke="#5E5E5E"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M430.75 74H434.75"
                                                                stroke="#5E5E5E"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M432.75 77L436.75 77"
                                                                stroke="#5E5E5E"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M435.25 83.5V81.5C435.25 81.0341 435.25 80.8011 435.174 80.6173C435.072 80.3723 434.878 80.1776 434.633 80.0761C434.449 80 434.216 80 433.75 80V80C433.284 80 433.051 80 432.867 80.0761C432.622 80.1776 432.428 80.3723 432.326 80.6173C432.25 80.8011 432.25 81.0341 432.25 81.5V83.5"
                                                                stroke="#5E5E5E"
                                                                strokeWidth="1.2"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M457.575 75.6293H456.024C455.964 75.2978 455.853 75.0062 455.691 74.7543C455.529 74.5024 455.33 74.2886 455.094 74.1129C454.859 73.9373 454.596 73.8047 454.304 73.7152C454.016 73.6257 453.709 73.581 453.384 73.581C452.798 73.581 452.272 73.7285 451.808 74.0234C451.348 74.3184 450.983 74.7509 450.714 75.321C450.449 75.8911 450.317 76.5871 450.317 77.4091C450.317 78.2377 450.449 78.937 450.714 79.5071C450.983 80.0772 451.349 80.508 451.813 80.7997C452.277 81.0914 452.799 81.2372 453.379 81.2372C453.701 81.2372 454.006 81.1941 454.294 81.108C454.586 81.0185 454.849 80.8875 455.085 80.7152C455.32 80.5429 455.519 80.3324 455.681 80.0838C455.847 79.8319 455.961 79.5436 456.024 79.2188L457.575 79.2237C457.492 79.7242 457.332 80.1849 457.093 80.6058C456.858 81.0234 456.554 81.3847 456.183 81.6896C455.815 81.9912 455.394 82.2249 454.92 82.3906C454.446 82.5563 453.929 82.6392 453.369 82.6392C452.488 82.6392 451.702 82.4304 451.013 82.0128C450.323 81.5919 449.78 80.9903 449.382 80.2081C448.988 79.4259 448.79 78.4929 448.79 77.4091C448.79 76.322 448.989 75.389 449.387 74.6101C449.785 73.8279 450.328 73.228 451.018 72.8104C451.707 72.3894 452.491 72.179 453.369 72.179C453.91 72.179 454.413 72.2569 454.881 72.4126C455.351 72.5651 455.774 72.7905 456.148 73.0888C456.523 73.3838 456.833 73.745 457.078 74.1726C457.323 74.5968 457.489 75.0824 457.575 75.6293ZM462.231 82.6541C461.515 82.6541 460.89 82.4901 460.357 82.1619C459.823 81.8338 459.409 81.3748 459.114 80.7848C458.819 80.1948 458.671 79.5054 458.671 78.7166C458.671 77.9245 458.819 77.2318 459.114 76.6385C459.409 76.0452 459.823 75.5845 460.357 75.2564C460.89 74.9283 461.515 74.7642 462.231 74.7642C462.947 74.7642 463.572 74.9283 464.105 75.2564C464.639 75.5845 465.053 76.0452 465.348 76.6385C465.643 77.2318 465.79 77.9245 465.79 78.7166C465.79 79.5054 465.643 80.1948 465.348 80.7848C465.053 81.3748 464.639 81.8338 464.105 82.1619C463.572 82.4901 462.947 82.6541 462.231 82.6541ZM462.236 81.4062C462.7 81.4062 463.084 81.2836 463.389 81.0384C463.694 80.7931 463.92 80.4666 464.065 80.0589C464.214 79.6513 464.289 79.2022 464.289 78.7116C464.289 78.2244 464.214 77.777 464.065 77.3693C463.92 76.9583 463.694 76.6286 463.389 76.38C463.084 76.1314 462.7 76.0071 462.236 76.0071C461.768 76.0071 461.381 76.1314 461.072 76.38C460.768 76.6286 460.54 76.9583 460.391 77.3693C460.246 77.777 460.173 78.2244 460.173 78.7116C460.173 79.2022 460.246 79.6513 460.391 80.0589C460.54 80.4666 460.768 80.7931 461.072 81.0384C461.381 81.2836 461.768 81.4062 462.236 81.4062ZM467.17 82.5V74.8636H468.597V76.1065H468.691C468.85 75.6856 469.11 75.3575 469.472 75.1222C469.833 74.8835 470.265 74.7642 470.769 74.7642C471.28 74.7642 471.707 74.8835 472.052 75.1222C472.4 75.3608 472.657 75.6889 472.822 76.1065H472.902C473.084 75.6989 473.374 75.3741 473.772 75.1321C474.17 74.8868 474.644 74.7642 475.194 74.7642C475.887 74.7642 476.452 74.9813 476.889 75.4155C477.33 75.8497 477.55 76.5043 477.55 77.3793V82.5H476.064V77.5185C476.064 77.0014 475.923 76.6269 475.641 76.3949C475.36 76.1629 475.023 76.0469 474.632 76.0469C474.148 76.0469 473.772 76.196 473.504 76.4943C473.235 76.7893 473.101 77.1688 473.101 77.6328V82.5H471.619V77.424C471.619 77.0097 471.49 76.6766 471.232 76.4247C470.973 76.1728 470.637 76.0469 470.222 76.0469C469.941 76.0469 469.68 76.1214 469.442 76.2706C469.206 76.4164 469.016 76.6203 468.87 76.8821C468.728 77.1439 468.656 77.4472 468.656 77.7919V82.5H467.17ZM479.263 85.3636V74.8636H480.715V76.1016H480.839C480.925 75.9425 481.049 75.7585 481.212 75.5497C481.374 75.3409 481.599 75.1586 481.888 75.0028C482.176 74.8438 482.557 74.7642 483.031 74.7642C483.648 74.7642 484.198 74.92 484.682 75.2315C485.166 75.5431 485.545 75.9922 485.82 76.5788C486.099 77.1655 486.238 77.8714 486.238 78.6967C486.238 79.522 486.1 80.2296 485.825 80.8196C485.55 81.4062 485.172 81.8587 484.692 82.1768C484.211 82.4917 483.663 82.6491 483.046 82.6491C482.582 82.6491 482.203 82.5713 481.908 82.4155C481.616 82.2597 481.387 82.0774 481.222 81.8686C481.056 81.6598 480.928 81.4742 480.839 81.3118H480.749V85.3636H479.263ZM480.719 78.6818C480.719 79.2187 480.797 79.6894 480.953 80.0938C481.109 80.4981 481.334 80.8146 481.629 81.0433C481.924 81.2687 482.286 81.3814 482.713 81.3814C483.157 81.3814 483.528 81.2637 483.827 81.0284C484.125 80.7898 484.35 80.4666 484.503 80.0589C484.659 79.6513 484.737 79.1922 484.737 78.6818C484.737 78.178 484.66 77.7256 484.508 77.3246C484.359 76.9235 484.133 76.607 483.832 76.375C483.533 76.143 483.161 76.027 482.713 76.027C482.282 76.027 481.918 76.138 481.619 76.3601C481.324 76.5821 481.101 76.892 480.948 77.2898C480.796 77.6875 480.719 78.1515 480.719 78.6818ZM489.846 82.669C489.362 82.669 488.924 82.5795 488.533 82.4006C488.142 82.2183 487.832 81.9548 487.604 81.6101C487.378 81.2654 487.265 80.8428 487.265 80.3423C487.265 79.9115 487.348 79.5568 487.514 79.2784C487.68 79 487.903 78.7796 488.185 78.6172C488.467 78.4548 488.782 78.3321 489.13 78.2493C489.478 78.1664 489.832 78.1035 490.194 78.0604C490.651 78.0073 491.022 77.9643 491.307 77.9311C491.592 77.8946 491.8 77.8366 491.929 77.7571C492.058 77.6776 492.123 77.5483 492.123 77.3693V77.3345C492.123 76.9003 492 76.5639 491.755 76.3253C491.513 76.0866 491.152 75.9673 490.671 75.9673C490.171 75.9673 489.776 76.0784 489.488 76.3004C489.203 76.5192 489.006 76.7628 488.896 77.0312L487.499 76.7131C487.665 76.2491 487.907 75.8745 488.225 75.5895C488.546 75.3011 488.916 75.0923 489.334 74.9631C489.751 74.8305 490.19 74.7642 490.651 74.7642C490.956 74.7642 491.279 74.8007 491.621 74.8736C491.965 74.9432 492.287 75.0724 492.585 75.2614C492.887 75.4503 493.134 75.7204 493.326 76.0717C493.518 76.4197 493.614 76.8722 493.614 77.429V82.5H492.162V81.456H492.103C492.007 81.6482 491.863 81.8371 491.67 82.0227C491.478 82.2083 491.231 82.3625 490.93 82.4851C490.628 82.6077 490.267 82.669 489.846 82.669ZM490.169 81.4759C490.58 81.4759 490.931 81.3946 491.223 81.2322C491.518 81.0698 491.742 80.8577 491.894 80.5959C492.05 80.3307 492.128 80.0473 492.128 79.7457V78.7614C492.075 78.8144 491.972 78.8641 491.819 78.9105C491.67 78.9536 491.5 78.9917 491.307 79.0249C491.115 79.0547 490.928 79.0829 490.746 79.1094C490.563 79.1326 490.411 79.1525 490.288 79.169C490 79.2055 489.736 79.2668 489.498 79.353C489.262 79.4392 489.073 79.5634 488.931 79.7259C488.792 79.8849 488.722 80.0971 488.722 80.3622C488.722 80.7301 488.858 81.0085 489.13 81.1974C489.402 81.383 489.748 81.4759 490.169 81.4759ZM496.801 77.9659V82.5H495.314V74.8636H496.741V76.1065H496.835C497.011 75.7022 497.286 75.3774 497.661 75.1321C498.039 74.8868 498.514 74.7642 499.088 74.7642C499.608 74.7642 500.064 74.8736 500.455 75.0923C500.846 75.3078 501.149 75.6293 501.365 76.0568C501.58 76.4844 501.688 77.013 501.688 77.6428V82.5H500.201V77.8217C500.201 77.2682 500.057 76.8357 499.769 76.5241C499.48 76.2093 499.084 76.0518 498.58 76.0518C498.236 76.0518 497.929 76.1264 497.661 76.2756C497.396 76.4247 497.185 76.6435 497.029 76.9318C496.877 77.2169 496.801 77.5616 496.801 77.9659ZM503.401 82.5V74.8636H504.888V82.5H503.401ZM504.152 73.6854C503.894 73.6854 503.671 73.5992 503.486 73.4268C503.304 73.2512 503.212 73.0424 503.212 72.8004C503.212 72.5552 503.304 72.3464 503.486 72.174C503.671 71.9983 503.894 71.9105 504.152 71.9105C504.411 71.9105 504.631 71.9983 504.813 72.174C504.999 72.3464 505.092 72.5552 505.092 72.8004C505.092 73.0424 504.999 73.2512 504.813 73.4268C504.631 73.5992 504.411 73.6854 504.152 73.6854ZM509.899 82.6541C509.146 82.6541 508.499 82.4934 507.955 82.1719C507.415 81.8471 506.997 81.3913 506.702 80.8047C506.41 80.2147 506.265 79.5237 506.265 78.7315C506.265 77.9493 506.41 77.2599 506.702 76.6634C506.997 76.0668 507.408 75.6011 507.935 75.2663C508.465 74.9316 509.085 74.7642 509.794 74.7642C510.225 74.7642 510.643 74.8355 511.047 74.978C511.452 75.1205 511.815 75.3442 512.136 75.6491C512.458 75.9541 512.711 76.3501 512.897 76.8374C513.082 77.3213 513.175 77.9096 513.175 78.6023V79.1293H507.105V78.0156H511.718C511.718 77.6245 511.639 77.2782 511.48 76.9766C511.321 76.6716 511.097 76.4313 510.809 76.2557C510.524 76.08 510.189 75.9922 509.804 75.9922C509.387 75.9922 509.022 76.0949 508.711 76.3004C508.402 76.5026 508.164 76.7678 507.995 77.0959C507.829 77.4207 507.746 77.7737 507.746 78.1548V79.0249C507.746 79.5353 507.836 79.9695 508.015 80.3274C508.197 80.6854 508.45 80.9588 508.775 81.1477C509.1 81.3333 509.48 81.4261 509.914 81.4261C510.195 81.4261 510.452 81.3864 510.684 81.3068C510.916 81.224 511.117 81.1013 511.286 80.9389C511.455 80.7765 511.584 80.576 511.674 80.3374L513.081 80.5909C512.968 81.0052 512.766 81.3681 512.474 81.6797C512.186 81.9879 511.823 82.2282 511.385 82.4006C510.951 82.5696 510.456 82.6541 509.899 82.6541ZM520.267 76.728L518.919 76.9666C518.863 76.7943 518.774 76.6302 518.651 76.4744C518.532 76.3187 518.369 76.1911 518.164 76.0916C517.958 75.9922 517.701 75.9425 517.393 75.9425C516.972 75.9425 516.621 76.0369 516.339 76.2259C516.057 76.4115 515.917 76.6518 515.917 76.9467C515.917 77.2019 516.011 77.4074 516.2 77.5632C516.389 77.719 516.694 77.8466 517.115 77.946L518.328 78.2244C519.03 78.3868 519.554 78.6371 519.899 78.9751C520.244 79.3132 520.416 79.7524 520.416 80.2926C520.416 80.75 520.283 81.1577 520.018 81.5156C519.756 81.8703 519.39 82.1487 518.919 82.3509C518.452 82.553 517.91 82.6541 517.294 82.6541C516.439 82.6541 515.741 82.4718 515.201 82.1072C514.66 81.7393 514.329 81.2173 514.206 80.5412L515.643 80.3224C515.733 80.697 515.917 80.9804 516.195 81.1726C516.473 81.3615 516.836 81.456 517.284 81.456C517.771 81.456 518.16 81.3549 518.452 81.1527C518.744 80.9472 518.89 80.697 518.89 80.402C518.89 80.1634 518.8 79.9628 518.621 79.8004C518.445 79.638 518.175 79.5154 517.811 79.4325L516.518 79.1491C515.806 78.9867 515.279 78.7282 514.937 78.3736C514.599 78.0189 514.43 77.5698 514.43 77.0263C514.43 76.5755 514.556 76.1811 514.808 75.843C515.06 75.505 515.408 75.2415 515.852 75.0526C516.296 74.8603 516.805 74.7642 517.378 74.7642C518.204 74.7642 518.853 74.9432 519.327 75.3011C519.801 75.6558 520.114 76.1314 520.267 76.728Z"
                                                                fill="#5E5E5E"
                                                            />
                                                        </g>
                                                    </g>
                                                    <path
                                                        d="M25.6364 123.131V121.364H34.9205V123.131H31.3239V133H29.233V123.131H25.6364ZM38.8405 133.17C37.9882 133.17 37.2496 132.983 36.6246 132.608C35.9996 132.233 35.5148 131.708 35.1701 131.034C34.8291 130.36 34.6587 129.572 34.6587 128.67C34.6587 127.769 34.8291 126.979 35.1701 126.301C35.5148 125.623 35.9996 125.097 36.6246 124.722C37.2496 124.347 37.9882 124.159 38.8405 124.159C39.6928 124.159 40.4314 124.347 41.0564 124.722C41.6814 125.097 42.1644 125.623 42.5053 126.301C42.85 126.979 43.0223 127.769 43.0223 128.67C43.0223 129.572 42.85 130.36 42.5053 131.034C42.1644 131.708 41.6814 132.233 41.0564 132.608C40.4314 132.983 39.6928 133.17 38.8405 133.17ZM38.8519 131.523C39.314 131.523 39.7004 131.396 40.011 131.142C40.3216 130.884 40.5526 130.54 40.7041 130.108C40.8595 129.676 40.9371 129.195 40.9371 128.665C40.9371 128.131 40.8595 127.648 40.7041 127.216C40.5526 126.78 40.3216 126.434 40.011 126.176C39.7004 125.919 39.314 125.79 38.8519 125.79C38.3784 125.79 37.9845 125.919 37.6701 126.176C37.3595 126.434 37.1265 126.78 36.9712 127.216C36.8197 127.648 36.7439 128.131 36.7439 128.665C36.7439 129.195 36.8197 129.676 36.9712 130.108C37.1265 130.54 37.3595 130.884 37.6701 131.142C37.9845 131.396 38.3784 131.523 38.8519 131.523ZM47.6867 133.153C47.0011 133.153 46.3875 132.977 45.8458 132.625C45.3041 132.273 44.8761 131.761 44.5617 131.091C44.2473 130.42 44.0901 129.606 44.0901 128.648C44.0901 127.678 44.2492 126.86 44.5674 126.193C44.8894 125.523 45.3231 125.017 45.8685 124.676C46.414 124.331 47.0219 124.159 47.6924 124.159C48.2038 124.159 48.6242 124.246 48.9538 124.42C49.2833 124.591 49.5447 124.797 49.7378 125.04C49.931 125.278 50.0806 125.504 50.1867 125.716H50.2719V121.364H52.3344V133H50.3117V131.625H50.1867C50.0806 131.837 49.9272 132.062 49.7265 132.301C49.5257 132.536 49.2606 132.737 48.931 132.903C48.6015 133.07 48.1867 133.153 47.6867 133.153ZM48.2606 131.466C48.6962 131.466 49.0674 131.348 49.3742 131.114C49.681 130.875 49.914 130.544 50.0731 130.119C50.2322 129.695 50.3117 129.201 50.3117 128.636C50.3117 128.072 50.2322 127.581 50.0731 127.165C49.9178 126.748 49.6867 126.424 49.3799 126.193C49.0769 125.962 48.7038 125.847 48.2606 125.847C47.8022 125.847 47.4197 125.966 47.1128 126.205C46.806 126.443 46.575 126.773 46.4197 127.193C46.2644 127.614 46.1867 128.095 46.1867 128.636C46.1867 129.182 46.2644 129.669 46.4197 130.097C46.5788 130.521 46.8117 130.856 47.1185 131.102C47.4291 131.345 47.8098 131.466 48.2606 131.466ZM56.7176 133.176C56.1645 133.176 55.6664 133.078 55.2232 132.881C54.7838 132.68 54.4354 132.384 54.1778 131.994C53.924 131.604 53.7971 131.123 53.7971 130.551C53.7971 130.059 53.888 129.652 54.0698 129.33C54.2516 129.008 54.4998 128.75 54.8141 128.557C55.1285 128.364 55.4827 128.218 55.8766 128.119C56.2744 128.017 56.6854 127.943 57.1096 127.898C57.621 127.845 58.0357 127.797 58.3539 127.756C58.6721 127.71 58.9032 127.642 59.0471 127.551C59.1948 127.456 59.2687 127.311 59.2687 127.114V127.08C59.2687 126.652 59.1418 126.32 58.888 126.085C58.6342 125.85 58.2687 125.733 57.7914 125.733C57.2876 125.733 56.888 125.843 56.5926 126.062C56.3009 126.282 56.1039 126.542 56.0016 126.841L54.0812 126.568C54.2327 126.038 54.4827 125.595 54.8312 125.239C55.1797 124.879 55.6058 124.61 56.1096 124.432C56.6134 124.25 57.1702 124.159 57.7801 124.159C58.2005 124.159 58.6191 124.208 59.0357 124.307C59.4524 124.405 59.8331 124.568 60.1778 124.795C60.5225 125.019 60.799 125.324 61.0073 125.71C61.2195 126.097 61.3255 126.58 61.3255 127.159V133H59.3482V131.801H59.2801C59.1551 132.044 58.9789 132.271 58.7516 132.483C58.5282 132.691 58.246 132.86 57.9051 132.989C57.5679 133.114 57.1721 133.176 56.7176 133.176ZM57.2516 131.665C57.6645 131.665 58.0225 131.583 58.3255 131.42C58.6285 131.254 58.8615 131.034 59.0244 130.761C59.191 130.489 59.2744 130.191 59.2744 129.869V128.841C59.21 128.894 59.1001 128.943 58.9448 128.989C58.7933 129.034 58.6229 129.074 58.4335 129.108C58.2441 129.142 58.0566 129.172 57.871 129.199C57.6854 129.225 57.5244 129.248 57.388 129.267C57.0812 129.309 56.8066 129.377 56.5641 129.472C56.3217 129.566 56.1304 129.699 55.9903 129.869C55.8501 130.036 55.7801 130.252 55.7801 130.517C55.7801 130.896 55.9183 131.182 56.1948 131.375C56.4713 131.568 56.8236 131.665 57.2516 131.665ZM64.0396 136.273C63.7593 136.273 63.4998 136.25 63.2612 136.205C63.0263 136.163 62.8388 136.114 62.6987 136.057L63.176 134.455C63.4752 134.542 63.7423 134.583 63.9771 134.58C64.212 134.576 64.4184 134.502 64.5964 134.358C64.7782 134.218 64.9316 133.983 65.0566 133.653L65.2328 133.182L62.068 124.273H64.2498L66.2612 130.864H66.3521L68.3691 124.273H70.5566L67.0623 134.057C66.8995 134.519 66.6835 134.915 66.4146 135.244C66.1457 135.578 65.8161 135.831 65.426 136.006C65.0396 136.184 64.5775 136.273 64.0396 136.273Z"
                                                        fill="#111111"
                                                        style={{
                                                            opacity: 1,
                                                            transform: "translateY(0px)",
                                                            transition: "all 400ms ease 600ms"
                                                        }}
                                                    />
                                                    <g
                                                        style={{
                                                            opacity: 1,
                                                            transform: "translateY(0px)",
                                                            transition: "all 400ms ease 700ms"
                                                        }}
                                                    >
                                                        <rect
                                                            x={27}
                                                            y={153}
                                                            width={16}
                                                            height={16}
                                                            rx={8}
                                                            fill="#0F6BE9"
                                                        />
                                                        <path
                                                            d="M38.0599 162.896V157.938H33.1016"
                                                            stroke="white"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M37.9167 158.082L31.9375 164.061"
                                                            stroke="white"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M35 173V334"
                                                        stroke="#E7E7E7"
                                                        strokeOpacity="0.68"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        style={{
                                                            strokeDasharray: 1000,
                                                            strokeDashoffset: 0,
                                                            transition: "all 1300ms ease 700ms"
                                                        }}
                                                    />
                                                    <g
                                                        filter="url(#filter0_d_834_140161)"
                                                        style={{
                                                            opacity: 1,
                                                            transform: "translateY(0px)",
                                                            transition: "all 400ms ease 1000ms"
                                                        }}
                                                    >
                                                        <rect
                                                            x={25}
                                                            y={336}
                                                            width={20}
                                                            height={20}
                                                            rx={10}
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M37.1693 344.165L35.0026 341.832L32.8359 344.165"
                                                            stroke="#0F6BE9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M37.1693 347.835L35.0026 350.168L32.8359 347.835"
                                                            stroke="#0F6BE9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M62.7188 343.565C62.6733 343.162 62.4858 342.849 62.1562 342.628C61.8267 342.403 61.4119 342.291 60.9119 342.291C60.554 342.291 60.2443 342.348 59.983 342.462C59.7216 342.572 59.5185 342.726 59.3736 342.922C59.2315 343.115 59.1605 343.335 59.1605 343.582C59.1605 343.79 59.2088 343.969 59.3054 344.119C59.4048 344.27 59.5341 344.396 59.6932 344.499C59.8551 344.598 60.0284 344.682 60.2131 344.75C60.3977 344.815 60.5753 344.869 60.7457 344.912L61.598 345.134C61.8764 345.202 62.1619 345.294 62.4545 345.411C62.7472 345.527 63.0185 345.68 63.2685 345.871C63.5185 346.061 63.7202 346.297 63.8736 346.578C64.0298 346.859 64.108 347.196 64.108 347.588C64.108 348.082 63.9801 348.521 63.7244 348.905C63.4716 349.288 63.1037 349.591 62.6207 349.812C62.1406 350.034 61.5597 350.145 60.8778 350.145C60.2244 350.145 59.6591 350.041 59.1818 349.834C58.7045 349.626 58.331 349.332 58.0611 348.952C57.7912 348.568 57.642 348.114 57.6136 347.588H58.9347C58.9602 347.903 59.0625 348.166 59.2415 348.376C59.4233 348.584 59.6548 348.739 59.9361 348.841C60.2202 348.94 60.5312 348.99 60.8693 348.99C61.2415 348.99 61.5724 348.932 61.8622 348.815C62.1548 348.696 62.3849 348.531 62.5526 348.321C62.7202 348.108 62.804 347.859 62.804 347.575C62.804 347.317 62.7301 347.105 62.5824 346.94C62.4375 346.776 62.2401 346.639 61.9901 346.531C61.7429 346.423 61.4631 346.328 61.1506 346.246L60.1193 345.964C59.4205 345.774 58.8665 345.494 58.4574 345.125C58.0511 344.756 57.848 344.267 57.848 343.659C57.848 343.156 57.9844 342.717 58.2571 342.342C58.5298 341.967 58.8991 341.676 59.3651 341.469C59.831 341.259 60.3565 341.153 60.9418 341.153C61.5327 341.153 62.054 341.257 62.5057 341.464C62.9602 341.672 63.3182 341.957 63.5795 342.321C63.8409 342.682 63.9773 343.097 63.9886 343.565H62.7188ZM66.6133 346.114V350H65.3392V341.273H66.5963V344.52H66.6773C66.8307 344.168 67.065 343.888 67.3804 343.68C67.6957 343.473 68.1077 343.369 68.6162 343.369C69.065 343.369 69.4571 343.462 69.7923 343.646C70.1304 343.831 70.3917 344.107 70.5764 344.473C70.7639 344.837 70.8577 345.291 70.8577 345.837V350H69.5835V345.99C69.5835 345.51 69.4599 345.138 69.2128 344.874C68.9656 344.607 68.6219 344.473 68.1815 344.473C67.8804 344.473 67.6105 344.537 67.3719 344.665C67.1361 344.793 66.95 344.98 66.8136 345.227C66.6801 345.472 66.6133 345.767 66.6133 346.114ZM75.075 350.132C74.4614 350.132 73.9259 349.991 73.4685 349.71C73.0111 349.429 72.656 349.036 72.4032 348.53C72.1503 348.024 72.0239 347.433 72.0239 346.757C72.0239 346.078 72.1503 345.484 72.4032 344.976C72.656 344.467 73.0111 344.072 73.4685 343.791C73.9259 343.51 74.4614 343.369 75.075 343.369C75.6887 343.369 76.2242 343.51 76.6816 343.791C77.139 344.072 77.4941 344.467 77.7469 344.976C77.9998 345.484 78.1262 346.078 78.1262 346.757C78.1262 347.433 77.9998 348.024 77.7469 348.53C77.4941 349.036 77.139 349.429 76.6816 349.71C76.2242 349.991 75.6887 350.132 75.075 350.132ZM75.0793 349.062C75.477 349.062 75.8066 348.957 76.0679 348.747C76.3293 348.537 76.5225 348.257 76.6475 347.908C76.7753 347.558 76.8392 347.173 76.8392 346.753C76.8392 346.335 76.7753 345.952 76.6475 345.602C76.5225 345.25 76.3293 344.967 76.0679 344.754C75.8066 344.541 75.477 344.435 75.0793 344.435C74.6787 344.435 74.3464 344.541 74.0821 344.754C73.8208 344.967 73.6262 345.25 73.4983 345.602C73.3733 345.952 73.3108 346.335 73.3108 346.753C73.3108 347.173 73.3733 347.558 73.4983 347.908C73.6262 348.257 73.8208 348.537 74.0821 348.747C74.3464 348.957 74.6787 349.062 75.0793 349.062ZM80.5282 350L78.6021 343.455H79.9189L81.2015 348.261H81.2654L82.5524 343.455H83.8691L85.1475 348.24H85.2115L86.4856 343.455H87.8024L85.8805 350H84.5808L83.2512 345.274H83.1532L81.8237 350H80.5282ZM94.7286 350.119C94.1434 350.119 93.6207 350.018 93.1604 349.817C92.7031 349.615 92.3408 349.335 92.0738 348.977C91.8096 348.616 91.6675 348.199 91.6477 347.724H92.9857C93.0028 347.983 93.0894 348.207 93.2457 348.398C93.4048 348.585 93.6121 348.73 93.8678 348.832C94.1235 348.935 94.4076 348.986 94.7201 348.986C95.0638 348.986 95.3678 348.926 95.632 348.807C95.8991 348.687 96.1079 348.521 96.2585 348.308C96.409 348.092 96.4843 347.844 96.4843 347.562C96.4843 347.27 96.409 347.013 96.2585 346.791C96.1107 346.567 95.8934 346.391 95.6065 346.263C95.3224 346.135 94.9786 346.071 94.5752 346.071H93.838V344.997H94.5752C94.8991 344.997 95.1832 344.939 95.4275 344.822C95.6746 344.706 95.8678 344.544 96.007 344.337C96.1462 344.126 96.2158 343.881 96.2158 343.599C96.2158 343.33 96.1548 343.095 96.0326 342.896C95.9133 342.695 95.7428 342.537 95.5212 342.423C95.3025 342.31 95.044 342.253 94.7457 342.253C94.4616 342.253 94.196 342.305 93.9488 342.411C93.7045 342.513 93.5056 342.661 93.3522 342.854C93.1988 343.044 93.1164 343.273 93.105 343.54H91.8309C91.8451 343.068 91.9843 342.653 92.2485 342.295C92.5156 341.937 92.8678 341.658 93.3053 341.456C93.7428 341.254 94.2286 341.153 94.7627 341.153C95.3224 341.153 95.8053 341.263 96.2116 341.482C96.6207 341.697 96.936 341.986 97.1576 342.347C97.382 342.707 97.4928 343.102 97.49 343.531C97.4928 344.02 97.3565 344.435 97.0809 344.776C96.8082 345.116 96.4445 345.345 95.99 345.462V345.53C96.5695 345.618 97.0184 345.848 97.3366 346.22C97.6576 346.592 97.8167 347.054 97.8138 347.605C97.8167 348.085 97.6832 348.516 97.4133 348.896C97.1462 349.277 96.7812 349.577 96.3181 349.795C95.855 350.011 95.3252 350.119 94.7286 350.119ZM102.496 341.273V350H101.175V342.594H101.124L99.0355 343.957V342.696L101.213 341.273H102.496ZM107.569 350V343.455H108.792V344.52H108.873C109.01 344.159 109.233 343.878 109.542 343.676C109.852 343.472 110.223 343.369 110.655 343.369C111.092 343.369 111.459 343.472 111.754 343.676C112.052 343.881 112.272 344.162 112.415 344.52H112.483C112.639 344.17 112.888 343.892 113.228 343.685C113.569 343.474 113.976 343.369 114.447 343.369C115.041 343.369 115.525 343.555 115.9 343.928C116.278 344.3 116.467 344.861 116.467 345.611V350H115.193V345.73C115.193 345.287 115.072 344.966 114.831 344.767C114.589 344.568 114.301 344.469 113.966 344.469C113.551 344.469 113.228 344.597 112.998 344.852C112.768 345.105 112.653 345.43 112.653 345.828V350H111.383V345.649C111.383 345.294 111.272 345.009 111.051 344.793C110.829 344.577 110.541 344.469 110.186 344.469C109.944 344.469 109.721 344.533 109.517 344.661C109.315 344.786 109.152 344.96 109.027 345.185C108.905 345.409 108.843 345.669 108.843 345.964V350H107.569ZM120.692 350.132C120.078 350.132 119.543 349.991 119.085 349.71C118.628 349.429 118.273 349.036 118.02 348.53C117.767 348.024 117.641 347.433 117.641 346.757C117.641 346.078 117.767 345.484 118.02 344.976C118.273 344.467 118.628 344.072 119.085 343.791C119.543 343.51 120.078 343.369 120.692 343.369C121.306 343.369 121.841 343.51 122.298 343.791C122.756 344.072 123.111 344.467 123.364 344.976C123.617 345.484 123.743 346.078 123.743 346.757C123.743 347.433 123.617 348.024 123.364 348.53C123.111 349.036 122.756 349.429 122.298 349.71C121.841 349.991 121.306 350.132 120.692 350.132ZM120.696 349.062C121.094 349.062 121.423 348.957 121.685 348.747C121.946 348.537 122.139 348.257 122.264 347.908C122.392 347.558 122.456 347.173 122.456 346.753C122.456 346.335 122.392 345.952 122.264 345.602C122.139 345.25 121.946 344.967 121.685 344.754C121.423 344.541 121.094 344.435 120.696 344.435C120.296 344.435 119.963 344.541 119.699 344.754C119.438 344.967 119.243 345.25 119.115 345.602C118.99 345.952 118.928 346.335 118.928 346.753C118.928 347.173 118.99 347.558 119.115 347.908C119.243 348.257 119.438 348.537 119.699 348.747C119.963 348.957 120.296 349.062 120.696 349.062ZM124.925 350V343.455H126.157V344.494H126.225C126.344 344.142 126.555 343.865 126.856 343.663C127.16 343.459 127.503 343.357 127.887 343.357C127.966 343.357 128.06 343.359 128.168 343.365C128.279 343.371 128.366 343.378 128.428 343.386V344.605C128.377 344.591 128.286 344.575 128.155 344.558C128.025 344.538 127.894 344.528 127.763 344.528C127.462 344.528 127.194 344.592 126.958 344.72C126.725 344.845 126.54 345.02 126.404 345.244C126.268 345.466 126.199 345.719 126.199 346.003V350H124.925ZM131.877 350.132C131.233 350.132 130.677 349.994 130.211 349.719C129.748 349.44 129.39 349.05 129.137 348.547C128.887 348.041 128.762 347.449 128.762 346.77C128.762 346.099 128.887 345.509 129.137 344.997C129.39 344.486 129.742 344.087 130.194 343.8C130.649 343.513 131.18 343.369 131.788 343.369C132.157 343.369 132.515 343.43 132.862 343.553C133.208 343.675 133.519 343.866 133.795 344.128C134.071 344.389 134.288 344.729 134.447 345.146C134.606 345.561 134.686 346.065 134.686 346.659V347.111H129.483V346.156H133.437C133.437 345.821 133.369 345.524 133.233 345.266C133.096 345.004 132.904 344.798 132.657 344.648C132.413 344.497 132.126 344.422 131.796 344.422C131.438 344.422 131.126 344.51 130.859 344.686C130.595 344.859 130.39 345.087 130.245 345.368C130.103 345.646 130.032 345.949 130.032 346.276V347.021C130.032 347.459 130.109 347.831 130.262 348.138C130.419 348.445 130.636 348.679 130.914 348.841C131.193 349 131.518 349.08 131.89 349.08C132.132 349.08 132.352 349.045 132.551 348.977C132.75 348.906 132.921 348.801 133.066 348.662C133.211 348.523 133.322 348.351 133.399 348.146L134.605 348.364C134.508 348.719 134.335 349.03 134.085 349.297C133.838 349.561 133.527 349.767 133.152 349.915C132.779 350.06 132.355 350.132 131.877 350.132ZM141.616 350.132C140.971 350.132 140.416 349.994 139.95 349.719C139.487 349.44 139.129 349.05 138.876 348.547C138.626 348.041 138.501 347.449 138.501 346.77C138.501 346.099 138.626 345.509 138.876 344.997C139.129 344.486 139.481 344.087 139.933 343.8C140.387 343.513 140.919 343.369 141.527 343.369C141.896 343.369 142.254 343.43 142.601 343.553C142.947 343.675 143.258 343.866 143.534 344.128C143.809 344.389 144.027 344.729 144.186 345.146C144.345 345.561 144.424 346.065 144.424 346.659V347.111H139.221V346.156H143.176C143.176 345.821 143.108 345.524 142.971 345.266C142.835 345.004 142.643 344.798 142.396 344.648C142.152 344.497 141.865 344.422 141.535 344.422C141.177 344.422 140.865 344.51 140.598 344.686C140.333 344.859 140.129 345.087 139.984 345.368C139.842 345.646 139.771 345.949 139.771 346.276V347.021C139.771 347.459 139.848 347.831 140.001 348.138C140.157 348.445 140.375 348.679 140.653 348.841C140.931 349 141.257 349.08 141.629 349.08C141.87 349.08 142.091 349.045 142.289 348.977C142.488 348.906 142.66 348.801 142.805 348.662C142.95 348.523 143.061 348.351 143.137 348.146L144.343 348.364C144.247 348.719 144.074 349.03 143.824 349.297C143.576 349.561 143.265 349.767 142.89 349.915C142.518 350.06 142.093 350.132 141.616 350.132ZM145.598 350V343.455H146.821V344.52H146.902C147.038 344.159 147.261 343.878 147.571 343.676C147.881 343.472 148.252 343.369 148.683 343.369C149.121 343.369 149.487 343.472 149.783 343.676C150.081 343.881 150.301 344.162 150.443 344.52H150.511C150.668 344.17 150.916 343.892 151.257 343.685C151.598 343.474 152.004 343.369 152.476 343.369C153.07 343.369 153.554 343.555 153.929 343.928C154.307 344.3 154.496 344.861 154.496 345.611V350H153.222V345.73C153.222 345.287 153.101 344.966 152.859 344.767C152.618 344.568 152.33 344.469 151.994 344.469C151.58 344.469 151.257 344.597 151.027 344.852C150.797 345.105 150.682 345.43 150.682 345.828V350H149.412V345.649C149.412 345.294 149.301 345.009 149.08 344.793C148.858 344.577 148.57 344.469 148.215 344.469C147.973 344.469 147.75 344.533 147.546 344.661C147.344 344.786 147.18 344.96 147.055 345.185C146.933 345.409 146.872 345.669 146.872 345.964V350H145.598ZM157.868 350.145C157.454 350.145 157.079 350.068 156.743 349.915C156.408 349.759 156.143 349.533 155.947 349.237C155.753 348.942 155.657 348.58 155.657 348.151C155.657 347.781 155.728 347.477 155.87 347.239C156.012 347 156.204 346.811 156.445 346.672C156.687 346.533 156.956 346.428 157.255 346.357C157.553 346.286 157.857 346.232 158.167 346.195C158.559 346.149 158.877 346.112 159.121 346.084C159.366 346.053 159.543 346.003 159.654 345.935C159.765 345.866 159.82 345.756 159.82 345.602V345.572C159.82 345.2 159.715 344.912 159.505 344.707C159.297 344.503 158.988 344.401 158.576 344.401C158.147 344.401 157.809 344.496 157.562 344.686C157.317 344.874 157.148 345.082 157.054 345.312L155.857 345.04C155.999 344.642 156.206 344.321 156.479 344.077C156.755 343.83 157.072 343.651 157.429 343.54C157.787 343.426 158.164 343.369 158.559 343.369C158.82 343.369 159.097 343.401 159.39 343.463C159.685 343.523 159.961 343.634 160.216 343.795C160.475 343.957 160.687 344.189 160.851 344.49C161.016 344.788 161.099 345.176 161.099 345.653V350H159.854V349.105H159.803C159.721 349.27 159.597 349.432 159.432 349.591C159.268 349.75 159.056 349.882 158.797 349.987C158.539 350.092 158.229 350.145 157.868 350.145ZM158.145 349.122C158.498 349.122 158.799 349.053 159.049 348.913C159.302 348.774 159.493 348.592 159.624 348.368C159.758 348.141 159.824 347.898 159.824 347.639V346.795C159.779 346.841 159.691 346.884 159.56 346.923C159.432 346.96 159.286 346.993 159.121 347.021C158.956 347.047 158.796 347.071 158.64 347.094C158.483 347.114 158.353 347.131 158.248 347.145C158 347.176 157.775 347.229 157.57 347.303C157.368 347.376 157.206 347.483 157.084 347.622C156.965 347.759 156.905 347.94 156.905 348.168C156.905 348.483 157.022 348.722 157.255 348.884C157.488 349.043 157.785 349.122 158.145 349.122ZM162.556 350V343.455H163.83V350H162.556ZM163.199 342.445C162.977 342.445 162.787 342.371 162.628 342.223C162.472 342.072 162.394 341.893 162.394 341.686C162.394 341.476 162.472 341.297 162.628 341.149C162.787 340.999 162.977 340.923 163.199 340.923C163.421 340.923 163.61 340.999 163.766 341.149C163.925 341.297 164.004 341.476 164.004 341.686C164.004 341.893 163.925 342.072 163.766 342.223C163.61 342.371 163.421 342.445 163.199 342.445ZM166.578 341.273V350H165.304V341.273H166.578ZM172.957 345.053L171.802 345.257C171.754 345.109 171.677 344.969 171.572 344.835C171.47 344.702 171.331 344.592 171.154 344.507C170.978 344.422 170.758 344.379 170.494 344.379C170.133 344.379 169.832 344.46 169.591 344.622C169.349 344.781 169.228 344.987 169.228 345.24C169.228 345.459 169.309 345.635 169.471 345.768C169.633 345.902 169.894 346.011 170.255 346.097L171.295 346.335C171.897 346.474 172.346 346.689 172.642 346.979C172.937 347.268 173.085 347.645 173.085 348.108C173.085 348.5 172.971 348.849 172.744 349.156C172.519 349.46 172.206 349.699 171.802 349.872C171.402 350.045 170.937 350.132 170.409 350.132C169.676 350.132 169.078 349.976 168.615 349.663C168.152 349.348 167.868 348.901 167.762 348.321L168.994 348.134C169.071 348.455 169.228 348.697 169.467 348.862C169.706 349.024 170.017 349.105 170.4 349.105C170.818 349.105 171.152 349.018 171.402 348.845C171.652 348.669 171.777 348.455 171.777 348.202C171.777 347.997 171.7 347.825 171.546 347.686C171.396 347.547 171.164 347.442 170.852 347.371L169.744 347.128C169.133 346.989 168.681 346.767 168.389 346.463C168.099 346.159 167.954 345.774 167.954 345.308C167.954 344.922 168.062 344.584 168.278 344.294C168.494 344.004 168.792 343.778 169.173 343.616C169.554 343.452 169.99 343.369 170.481 343.369C171.189 343.369 171.745 343.523 172.152 343.83C172.558 344.134 172.826 344.541 172.957 345.053ZM180.297 343.455V344.477H176.598V343.455H180.297ZM177.612 350V342.696C177.612 342.287 177.701 341.947 177.88 341.678C178.059 341.405 178.297 341.202 178.592 341.068C178.887 340.932 179.209 340.864 179.555 340.864C179.811 340.864 180.03 340.885 180.211 340.928C180.393 340.967 180.528 341.004 180.616 341.038L180.318 342.07C180.258 342.053 180.182 342.033 180.088 342.01C179.994 341.984 179.88 341.972 179.747 341.972C179.437 341.972 179.216 342.048 179.082 342.202C178.951 342.355 178.886 342.577 178.886 342.866V350H177.612ZM181.371 350V343.455H182.603V344.494H182.671C182.79 344.142 183 343.865 183.302 343.663C183.606 343.459 183.949 343.357 184.333 343.357C184.412 343.357 184.506 343.359 184.614 343.365C184.725 343.371 184.812 343.378 184.874 343.386V344.605C184.823 344.591 184.732 344.575 184.601 344.558C184.471 344.538 184.34 344.528 184.209 344.528C183.908 344.528 183.64 344.592 183.404 344.72C183.171 344.845 182.986 345.02 182.85 345.244C182.714 345.466 182.645 345.719 182.645 346.003V350H181.371ZM188.259 350.132C187.646 350.132 187.11 349.991 186.653 349.71C186.195 349.429 185.84 349.036 185.588 348.53C185.335 348.024 185.208 347.433 185.208 346.757C185.208 346.078 185.335 345.484 185.588 344.976C185.84 344.467 186.195 344.072 186.653 343.791C187.11 343.51 187.646 343.369 188.259 343.369C188.873 343.369 189.409 343.51 189.866 343.791C190.323 344.072 190.678 344.467 190.931 344.976C191.184 345.484 191.311 346.078 191.311 346.757C191.311 347.433 191.184 348.024 190.931 348.53C190.678 349.036 190.323 349.429 189.866 349.71C189.409 349.991 188.873 350.132 188.259 350.132ZM188.264 349.062C188.661 349.062 188.991 348.957 189.252 348.747C189.514 348.537 189.707 348.257 189.832 347.908C189.96 347.558 190.024 347.173 190.024 346.753C190.024 346.335 189.96 345.952 189.832 345.602C189.707 345.25 189.514 344.967 189.252 344.754C188.991 344.541 188.661 344.435 188.264 344.435C187.863 344.435 187.531 344.541 187.267 344.754C187.005 344.967 186.811 345.25 186.683 345.602C186.558 345.952 186.495 346.335 186.495 346.753C186.495 347.173 186.558 347.558 186.683 347.908C186.811 348.257 187.005 348.537 187.267 348.747C187.531 348.957 187.863 349.062 188.264 349.062ZM192.493 350V343.455H193.716V344.52H193.797C193.933 344.159 194.156 343.878 194.466 343.676C194.775 343.472 195.146 343.369 195.578 343.369C196.016 343.369 196.382 343.472 196.677 343.676C196.976 343.881 197.196 344.162 197.338 344.52H197.406C197.562 344.17 197.811 343.892 198.152 343.685C198.493 343.474 198.899 343.369 199.371 343.369C199.964 343.369 200.449 343.555 200.824 343.928C201.202 344.3 201.391 344.861 201.391 345.611V350H200.116V345.73C200.116 345.287 199.996 344.966 199.754 344.767C199.513 344.568 199.224 344.469 198.889 344.469C198.474 344.469 198.152 344.597 197.922 344.852C197.692 345.105 197.577 345.43 197.577 345.828V350H196.307V345.649C196.307 345.294 196.196 345.009 195.974 344.793C195.753 344.577 195.464 344.469 195.109 344.469C194.868 344.469 194.645 344.533 194.44 344.661C194.239 344.786 194.075 344.96 193.95 345.185C193.828 345.409 193.767 345.669 193.767 345.964V350H192.493ZM208.849 343.455V344.477H205.274V343.455H208.849ZM206.233 341.886H207.507V348.078C207.507 348.325 207.544 348.511 207.618 348.636C207.692 348.759 207.787 348.842 207.903 348.888C208.023 348.93 208.152 348.952 208.291 348.952C208.393 348.952 208.483 348.945 208.56 348.93C208.636 348.916 208.696 348.905 208.739 348.896L208.969 349.949C208.895 349.977 208.79 350.006 208.653 350.034C208.517 350.065 208.347 350.082 208.142 350.085C207.807 350.091 207.494 350.031 207.205 349.906C206.915 349.781 206.68 349.588 206.501 349.327C206.322 349.065 206.233 348.737 206.233 348.342V341.886ZM211.434 346.114V350H210.159V341.273H211.417V344.52H211.498C211.651 344.168 211.885 343.888 212.201 343.68C212.516 343.473 212.928 343.369 213.436 343.369C213.885 343.369 214.277 343.462 214.613 343.646C214.951 343.831 215.212 344.107 215.397 344.473C215.584 344.837 215.678 345.291 215.678 345.837V350H214.404V345.99C214.404 345.51 214.28 345.138 214.033 344.874C213.786 344.607 213.442 344.473 213.002 344.473C212.701 344.473 212.431 344.537 212.192 344.665C211.956 344.793 211.77 344.98 211.634 345.227C211.5 345.472 211.434 345.767 211.434 346.114ZM217.138 350V343.455H218.412V350H217.138ZM217.782 342.445C217.56 342.445 217.37 342.371 217.211 342.223C217.054 342.072 216.976 341.893 216.976 341.686C216.976 341.476 217.054 341.297 217.211 341.149C217.37 340.999 217.56 340.923 217.782 340.923C218.003 340.923 218.192 340.999 218.348 341.149C218.508 341.297 218.587 341.476 218.587 341.686C218.587 341.893 218.508 342.072 218.348 342.223C218.192 342.371 218.003 342.445 217.782 342.445ZM224.791 345.053L223.637 345.257C223.588 345.109 223.512 344.969 223.406 344.835C223.304 344.702 223.165 344.592 222.989 344.507C222.813 344.422 222.592 344.379 222.328 344.379C221.967 344.379 221.666 344.46 221.425 344.622C221.183 344.781 221.063 344.987 221.063 345.24C221.063 345.459 221.144 345.635 221.306 345.768C221.467 345.902 221.729 346.011 222.09 346.097L223.129 346.335C223.732 346.474 224.181 346.689 224.476 346.979C224.771 347.268 224.919 347.645 224.919 348.108C224.919 348.5 224.806 348.849 224.578 349.156C224.354 349.46 224.04 349.699 223.637 349.872C223.236 350.045 222.771 350.132 222.243 350.132C221.51 350.132 220.912 349.976 220.449 349.663C219.986 349.348 219.702 348.901 219.597 348.321L220.828 348.134C220.905 348.455 221.063 348.697 221.301 348.862C221.54 349.024 221.851 349.105 222.235 349.105C222.652 349.105 222.986 349.018 223.236 348.845C223.486 348.669 223.611 348.455 223.611 348.202C223.611 347.997 223.534 347.825 223.381 347.686C223.23 347.547 222.999 347.442 222.686 347.371L221.578 347.128C220.967 346.989 220.516 346.767 220.223 346.463C219.933 346.159 219.789 345.774 219.789 345.308C219.789 344.922 219.896 344.584 220.112 344.294C220.328 344.004 220.627 343.778 221.007 343.616C221.388 343.452 221.824 343.369 222.316 343.369C223.023 343.369 223.58 343.523 223.986 343.83C224.392 344.134 224.661 344.541 224.791 345.053ZM229.016 350V343.455H230.239V344.52H230.32C230.456 344.159 230.679 343.878 230.989 343.676C231.299 343.472 231.669 343.369 232.101 343.369C232.539 343.369 232.905 343.472 233.201 343.676C233.499 343.881 233.719 344.162 233.861 344.52H233.929C234.086 344.17 234.334 343.892 234.675 343.685C235.016 343.474 235.422 343.369 235.894 343.369C236.488 343.369 236.972 343.555 237.347 343.928C237.725 344.3 237.914 344.861 237.914 345.611V350H236.639V345.73C236.639 345.287 236.519 344.966 236.277 344.767C236.036 344.568 235.747 344.469 235.412 344.469C234.997 344.469 234.675 344.597 234.445 344.852C234.215 345.105 234.1 345.43 234.1 345.828V350H232.83V345.649C232.83 345.294 232.719 345.009 232.497 344.793C232.276 344.577 231.988 344.469 231.632 344.469C231.391 344.469 231.168 344.533 230.963 344.661C230.762 344.786 230.598 344.96 230.473 345.185C230.351 345.409 230.29 345.669 230.29 345.964V350H229.016ZM242.138 350.132C241.525 350.132 240.989 349.991 240.532 349.71C240.075 349.429 239.719 349.036 239.467 348.53C239.214 348.024 239.087 347.433 239.087 346.757C239.087 346.078 239.214 345.484 239.467 344.976C239.719 344.467 240.075 344.072 240.532 343.791C240.989 343.51 241.525 343.369 242.138 343.369C242.752 343.369 243.288 343.51 243.745 343.791C244.202 344.072 244.558 344.467 244.81 344.976C245.063 345.484 245.19 346.078 245.19 346.757C245.19 347.433 245.063 348.024 244.81 348.53C244.558 349.036 244.202 349.429 243.745 349.71C243.288 349.991 242.752 350.132 242.138 350.132ZM242.143 349.062C242.54 349.062 242.87 348.957 243.131 348.747C243.393 348.537 243.586 348.257 243.711 347.908C243.839 347.558 243.903 347.173 243.903 346.753C243.903 346.335 243.839 345.952 243.711 345.602C243.586 345.25 243.393 344.967 243.131 344.754C242.87 344.541 242.54 344.435 242.143 344.435C241.742 344.435 241.41 344.541 241.146 344.754C240.884 344.967 240.69 345.25 240.562 345.602C240.437 345.952 240.374 346.335 240.374 346.753C240.374 347.173 240.437 347.558 240.562 347.908C240.69 348.257 240.884 348.537 241.146 348.747C241.41 348.957 241.742 349.062 242.143 349.062ZM247.646 346.114V350H246.372V343.455H247.595V344.52H247.676C247.826 344.173 248.062 343.895 248.383 343.685C248.707 343.474 249.115 343.369 249.606 343.369C250.052 343.369 250.443 343.463 250.778 343.651C251.113 343.835 251.373 344.111 251.558 344.477C251.743 344.844 251.835 345.297 251.835 345.837V350H250.561V345.99C250.561 345.516 250.437 345.145 250.19 344.878C249.943 344.608 249.603 344.473 249.172 344.473C248.876 344.473 248.613 344.537 248.383 344.665C248.156 344.793 247.976 344.98 247.842 345.227C247.711 345.472 247.646 345.767 247.646 346.114ZM256.359 343.455V344.477H252.784V343.455H256.359ZM253.743 341.886H255.017V348.078C255.017 348.325 255.054 348.511 255.128 348.636C255.201 348.759 255.297 348.842 255.413 348.888C255.532 348.93 255.662 348.952 255.801 348.952C255.903 348.952 255.993 348.945 256.069 348.93C256.146 348.916 256.206 348.905 256.248 348.896L256.478 349.949C256.405 349.977 256.299 350.006 256.163 350.034C256.027 350.065 255.856 350.082 255.652 350.085C255.317 350.091 255.004 350.031 254.714 349.906C254.424 349.781 254.19 349.588 254.011 349.327C253.832 349.065 253.743 348.737 253.743 348.342V341.886ZM258.943 346.114V350H257.669V341.273H258.926V344.52H259.007C259.161 344.168 259.395 343.888 259.71 343.68C260.026 343.473 260.438 343.369 260.946 343.369C261.395 343.369 261.787 343.462 262.122 343.646C262.46 343.831 262.722 344.107 262.906 344.473C263.094 344.837 263.188 345.291 263.188 345.837V350H261.914V345.99C261.914 345.51 261.79 345.138 261.543 344.874C261.296 344.607 260.952 344.473 260.512 344.473C260.21 344.473 259.94 344.537 259.702 344.665C259.466 344.793 259.28 344.98 259.144 345.227C259.01 345.472 258.943 345.767 258.943 346.114Z"
                                                        fill="#0F6BE9"
                                                        style={{
                                                            opacity: 1,
                                                            transform: "translateY(0px)",
                                                            transition: "all 400ms ease 1150ms"
                                                        }}
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_d_834_140161"
                                                        x={21}
                                                        y={334}
                                                        width={28}
                                                        height={28}
                                                        filterUnits="userSpaceOnUse"
                                                        colorInterpolationFilters="sRGB"
                                                    >
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dy={2} />
                                                        <feGaussianBlur stdDeviation={2} />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_834_140161"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="effect1_dropShadow_834_140161"
                                                            result="shape"
                                                        />
                                                    </filter>
                                                    <clipPath id="clip0_834_140161">
                                                        <rect width={526} height={366} fill="white" />
                                                    </clipPath>
                                                    <clipPath id="clip1_834_140161">
                                                        <rect
                                                            width={521}
                                                            height={76}
                                                            fill="white"
                                                            transform="translate(5 23)"
                                                        />
                                                    </clipPath>
                                                    <clipPath id="clip2_834_140161">
                                                        <rect
                                                            x={25}
                                                            y={23}
                                                            width={28}
                                                            height={28}
                                                            rx={14}
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <img
                                                src="https://attio.com/build/_assets/relationships-frame-F4L2BXNE.webp"
                                                className="relative min-h-[366px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-[100%] max-h-[360px] tablet:max-w-[566px] flex-1 pt-24px tablet:pt-[40px] h-full phablet:max-h-[540px] flex flex-col justify-between card-light-shadow bg-background-light-primary">
                                        <span className="inline-block max-w-[335px] phablet:pb-[48px] px-[24px] tablet:px-[40px]">
                                            <span
                                                role="heading"
                                                aria-level={3}
                                                className="typography-p5-strong phablet:typography-p4-strong text-typography-light-secondary"
                                            >
                                                Dream tech stack.
                                            </span>{" "}
                                            <span className="typography-p5-medium phablet:typography-p4-medium text-typography-light-tertiary">
                                                Pull in data from best-in-class SaaS tools through Attio&apos;s
                                                world-class API and Zapier integration.
                                            </span>
                                        </span>
                                        <div className="centered-container ml-auto mr-auto w-[100%] h-[auto]">
                                            <svg
                                                width={486}
                                                height={367}
                                                viewBox="0 0 486 367"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-full h-auto max-w-[486px]"
                                            >
                                                <g clipPath="url(#clip0_896_166665)">
                                                    <rect width={486} height={367} fill="white" />
                                                    <g opacity="0.8">
                                                        <path
                                                            d="M163 41L323 41"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M162.6 163C162.6 163.221 162.779 163.4 163 163.4C163.221 163.4 163.4 163.221 163.4 163H162.6ZM83.925 41.4C84.1459 41.4 84.325 41.2209 84.325 41C84.325 40.7791 84.1459 40.6 83.925 40.6V41.4ZM87.775 40.6C87.5541 40.6 87.375 40.7791 87.375 41C87.375 41.2209 87.5541 41.4 87.775 41.4V40.6ZM91.625 41.4C91.8459 41.4 92.025 41.2209 92.025 41C92.025 40.7791 91.8459 40.6 91.625 40.6V41.4ZM95.475 40.6C95.2541 40.6 95.075 40.7791 95.075 41C95.075 41.2209 95.2541 41.4 95.475 41.4V40.6ZM99.325 41.4C99.5459 41.4 99.725 41.2209 99.725 41C99.725 40.7791 99.5459 40.6 99.325 40.6V41.4ZM103.175 40.6C102.954 40.6 102.775 40.7791 102.775 41C102.775 41.2209 102.954 41.4 103.175 41.4V40.6ZM107.025 41.4C107.246 41.4 107.425 41.2209 107.425 41C107.425 40.7791 107.246 40.6 107.025 40.6V41.4ZM110.875 40.6C110.654 40.6 110.475 40.7791 110.475 41C110.475 41.2209 110.654 41.4 110.875 41.4V40.6ZM114.725 41.4C114.946 41.4 115.125 41.2209 115.125 41C115.125 40.7791 114.946 40.6 114.725 40.6V41.4ZM118.575 40.6C118.354 40.6 118.175 40.7791 118.175 41C118.175 41.2209 118.354 41.4 118.575 41.4V40.6ZM122.425 41.4C122.646 41.4 122.825 41.2209 122.825 41C122.825 40.7791 122.646 40.6 122.425 40.6V41.4ZM126.275 40.6C126.054 40.6 125.875 40.7791 125.875 41C125.875 41.2209 126.054 41.4 126.275 41.4V40.6ZM130.125 41.4C130.346 41.4 130.525 41.2209 130.525 41C130.525 40.7791 130.346 40.6 130.125 40.6V41.4ZM133.975 40.6C133.754 40.6 133.575 40.7791 133.575 41C133.575 41.2209 133.754 41.4 133.975 41.4V40.6ZM137.825 41.4C138.046 41.4 138.225 41.2209 138.225 41C138.225 40.7791 138.046 40.6 137.825 40.6V41.4ZM141.675 40.6C141.454 40.6 141.275 40.7791 141.275 41C141.275 41.2209 141.454 41.4 141.675 41.4V40.6ZM145.525 41.4C145.746 41.4 145.925 41.2209 145.925 41C145.925 40.7791 145.746 40.6 145.525 40.6V41.4ZM149.375 40.6C149.154 40.6 148.975 40.7791 148.975 41C148.975 41.2209 149.154 41.4 149.375 41.4V40.6ZM153.225 41.4C153.446 41.4 153.625 41.2209 153.625 41C153.625 40.7791 153.446 40.6 153.225 40.6V41.4ZM157.075 40.6C156.854 40.6 156.675 40.7791 156.675 41C156.675 41.2209 156.854 41.4 157.075 41.4V40.6ZM160.378 41.673C160.582 41.7576 160.816 41.6608 160.901 41.4567C160.985 41.2527 160.888 41.0187 160.684 40.934L160.378 41.673ZM163.066 43.3156C162.981 43.1116 162.747 43.0147 162.543 43.0994C162.339 43.184 162.242 43.418 162.327 43.6221L163.066 43.3156ZM162.6 46.9667C162.6 47.1876 162.779 47.3667 163 47.3667C163.221 47.3667 163.4 47.1876 163.4 46.9667H162.6ZM163.4 50.9C163.4 50.6791 163.221 50.5 163 50.5C162.779 50.5 162.6 50.6791 162.6 50.9H163.4ZM162.6 54.8333C162.6 55.0542 162.779 55.2333 163 55.2333C163.221 55.2333 163.4 55.0542 163.4 54.8333H162.6ZM163.4 58.7667C163.4 58.5458 163.221 58.3667 163 58.3667C162.779 58.3667 162.6 58.5458 162.6 58.7667H163.4ZM162.6 62.7C162.6 62.9209 162.779 63.1 163 63.1C163.221 63.1 163.4 62.9209 163.4 62.7H162.6ZM163.4 66.6333C163.4 66.4124 163.221 66.2333 163 66.2333C162.779 66.2333 162.6 66.4124 162.6 66.6333H163.4ZM162.6 70.5667C162.6 70.7876 162.779 70.9667 163 70.9667C163.221 70.9667 163.4 70.7876 163.4 70.5667H162.6ZM163.4 74.5C163.4 74.2791 163.221 74.1 163 74.1C162.779 74.1 162.6 74.2791 162.6 74.5H163.4ZM162.6 78.4333C162.6 78.6543 162.779 78.8333 163 78.8333C163.221 78.8333 163.4 78.6543 163.4 78.4333H162.6ZM163.4 82.3667C163.4 82.1458 163.221 81.9667 163 81.9667C162.779 81.9667 162.6 82.1458 162.6 82.3667H163.4ZM162.6 86.3C162.6 86.5209 162.779 86.7 163 86.7C163.221 86.7 163.4 86.5209 163.4 86.3H162.6ZM163.4 90.2333C163.4 90.0124 163.221 89.8333 163 89.8333C162.779 89.8333 162.6 90.0124 162.6 90.2333H163.4ZM162.6 94.1667C162.6 94.3876 162.779 94.5667 163 94.5667C163.221 94.5667 163.4 94.3876 163.4 94.1667H162.6ZM163.4 98.1C163.4 97.8791 163.221 97.7 163 97.7C162.779 97.7 162.6 97.8791 162.6 98.1H163.4ZM162.6 102.033C162.6 102.254 162.779 102.433 163 102.433C163.221 102.433 163.4 102.254 163.4 102.033H162.6ZM163.4 105.967C163.4 105.746 163.221 105.567 163 105.567C162.779 105.567 162.6 105.746 162.6 105.967H163.4ZM162.6 109.9C162.6 110.121 162.779 110.3 163 110.3C163.221 110.3 163.4 110.121 163.4 109.9H162.6ZM163.4 113.833C163.4 113.612 163.221 113.433 163 113.433C162.779 113.433 162.6 113.612 162.6 113.833H163.4ZM162.6 117.767C162.6 117.988 162.779 118.167 163 118.167C163.221 118.167 163.4 117.988 163.4 117.767H162.6ZM163.4 121.7C163.4 121.479 163.221 121.3 163 121.3C162.779 121.3 162.6 121.479 162.6 121.7H163.4ZM162.6 125.633C162.6 125.854 162.779 126.033 163 126.033C163.221 126.033 163.4 125.854 163.4 125.633H162.6ZM163.4 129.567C163.4 129.346 163.221 129.167 163 129.167C162.779 129.167 162.6 129.346 162.6 129.567H163.4ZM162.6 133.5C162.6 133.721 162.779 133.9 163 133.9C163.221 133.9 163.4 133.721 163.4 133.5H162.6ZM163.4 137.433C163.4 137.212 163.221 137.033 163 137.033C162.779 137.033 162.6 137.212 162.6 137.433H163.4ZM162.6 141.367C162.6 141.588 162.779 141.767 163 141.767C163.221 141.767 163.4 141.588 163.4 141.367H162.6ZM163.4 145.3C163.4 145.079 163.221 144.9 163 144.9C162.779 144.9 162.6 145.079 162.6 145.3H163.4ZM162.6 149.233C162.6 149.454 162.779 149.633 163 149.633C163.221 149.633 163.4 149.454 163.4 149.233H162.6ZM163.4 153.167C163.4 152.946 163.221 152.767 163 152.767C162.779 152.767 162.6 152.946 162.6 153.167H163.4ZM162.6 157.1C162.6 157.321 162.779 157.5 163 157.5C163.221 157.5 163.4 157.321 163.4 157.1H162.6ZM163.4 161.033C163.4 160.812 163.221 160.633 163 160.633C162.779 160.633 162.6 160.812 162.6 161.033H163.4ZM82 41.4H83.925V40.6H82V41.4ZM87.775 41.4H91.625V40.6H87.775V41.4ZM95.475 41.4H99.325V40.6H95.475V41.4ZM103.175 41.4H107.025V40.6H103.175V41.4ZM110.875 41.4H114.725V40.6H110.875V41.4ZM118.575 41.4H122.425V40.6H118.575V41.4ZM126.275 41.4H130.125V40.6H126.275V41.4ZM133.975 41.4H137.825V40.6H133.975V41.4ZM141.675 41.4H145.525V40.6H141.675V41.4ZM149.375 41.4H153.225V40.6H149.375V41.4ZM157.075 41.4H159V40.6H157.075V41.4ZM159 41.4C159.489 41.4 159.954 41.4972 160.378 41.673L160.684 40.934C160.165 40.7187 159.596 40.6 159 40.6V41.4ZM162.327 43.6221C162.503 44.046 162.6 44.5111 162.6 45H163.4C163.4 44.4041 163.281 43.835 163.066 43.3156L162.327 43.6221ZM162.6 45V46.9667H163.4V45H162.6ZM162.6 50.9V54.8333H163.4V50.9H162.6ZM162.6 58.7667V62.7H163.4V58.7667H162.6ZM162.6 66.6333V70.5667H163.4V66.6333H162.6ZM162.6 74.5V78.4333H163.4V74.5H162.6ZM162.6 82.3667V86.3H163.4V82.3667H162.6ZM162.6 90.2333V94.1667H163.4V90.2333H162.6ZM162.6 98.1V102.033H163.4V98.1H162.6ZM162.6 105.967V109.9H163.4V105.967H162.6ZM162.6 113.833V117.767H163.4V113.833H162.6ZM162.6 121.7V125.633H163.4V121.7H162.6ZM162.6 129.567V133.5H163.4V129.567H162.6ZM162.6 137.433V141.367H163.4V137.433H162.6ZM162.6 145.3V149.233H163.4V145.3H162.6ZM162.6 153.167V157.1H163.4V153.167H162.6ZM162.6 161.033V163H163.4V161.033H162.6Z"
                                                        fill="#CDD3DB"
                                                    />
                                                    <path
                                                        d="M162.6 163C162.6 162.779 162.779 162.6 163 162.6C163.221 162.6 163.4 162.779 163.4 163H162.6ZM82.95 285.6C83.1709 285.6 83.35 285.779 83.35 286C83.35 286.221 83.1709 286.4 82.95 286.4V285.6ZM86.85 286.4C86.6291 286.4 86.45 286.221 86.45 286C86.45 285.779 86.6291 285.6 86.85 285.6V286.4ZM90.75 285.6C90.9709 285.6 91.15 285.779 91.15 286C91.15 286.221 90.9709 286.4 90.75 286.4V285.6ZM94.65 286.4C94.4291 286.4 94.25 286.221 94.25 286C94.25 285.779 94.4291 285.6 94.65 285.6V286.4ZM98.55 285.6C98.7709 285.6 98.95 285.779 98.95 286C98.95 286.221 98.7709 286.4 98.55 286.4V285.6ZM102.45 286.4C102.229 286.4 102.05 286.221 102.05 286C102.05 285.779 102.229 285.6 102.45 285.6V286.4ZM106.35 285.6C106.571 285.6 106.75 285.779 106.75 286C106.75 286.221 106.571 286.4 106.35 286.4V285.6ZM110.25 286.4C110.029 286.4 109.85 286.221 109.85 286C109.85 285.779 110.029 285.6 110.25 285.6V286.4ZM114.15 285.6C114.371 285.6 114.55 285.779 114.55 286C114.55 286.221 114.371 286.4 114.15 286.4V285.6ZM118.05 286.4C117.829 286.4 117.65 286.221 117.65 286C117.65 285.779 117.829 285.6 118.05 285.6V286.4ZM121.95 285.6C122.171 285.6 122.35 285.779 122.35 286C122.35 286.221 122.171 286.4 121.95 286.4V285.6ZM125.85 286.4C125.629 286.4 125.45 286.221 125.45 286C125.45 285.779 125.629 285.6 125.85 285.6V286.4ZM129.75 285.6C129.971 285.6 130.15 285.779 130.15 286C130.15 286.221 129.971 286.4 129.75 286.4V285.6ZM133.65 286.4C133.429 286.4 133.25 286.221 133.25 286C133.25 285.779 133.429 285.6 133.65 285.6V286.4ZM137.55 285.6C137.771 285.6 137.95 285.779 137.95 286C137.95 286.221 137.771 286.4 137.55 286.4V285.6ZM141.45 286.4C141.229 286.4 141.05 286.221 141.05 286C141.05 285.779 141.229 285.6 141.45 285.6V286.4ZM145.35 285.6C145.571 285.6 145.75 285.779 145.75 286C145.75 286.221 145.571 286.4 145.35 286.4V285.6ZM149.25 286.4C149.029 286.4 148.85 286.221 148.85 286C148.85 285.779 149.029 285.6 149.25 285.6V286.4ZM153.15 285.6C153.371 285.6 153.55 285.779 153.55 286C153.55 286.221 153.371 286.4 153.15 286.4V285.6ZM157.05 286.4C156.829 286.4 156.65 286.221 156.65 286C156.65 285.779 156.829 285.6 157.05 285.6V286.4ZM160.378 285.327C160.582 285.242 160.816 285.339 160.901 285.543C160.985 285.747 160.888 285.981 160.684 286.066L160.378 285.327ZM163.066 283.684C162.981 283.888 162.747 283.985 162.543 283.901C162.339 283.816 162.242 283.582 162.327 283.378L163.066 283.684ZM162.6 280.017C162.6 279.796 162.779 279.617 163 279.617C163.221 279.617 163.4 279.796 163.4 280.017H162.6ZM163.4 276.05C163.4 276.271 163.221 276.45 163 276.45C162.779 276.45 162.6 276.271 162.6 276.05H163.4ZM162.6 272.083C162.6 271.862 162.779 271.683 163 271.683C163.221 271.683 163.4 271.862 163.4 272.083H162.6ZM163.4 268.117C163.4 268.338 163.221 268.517 163 268.517C162.779 268.517 162.6 268.338 162.6 268.117H163.4ZM162.6 264.15C162.6 263.929 162.779 263.75 163 263.75C163.221 263.75 163.4 263.929 163.4 264.15H162.6ZM163.4 260.183C163.4 260.404 163.221 260.583 163 260.583C162.779 260.583 162.6 260.404 162.6 260.183H163.4ZM162.6 256.217C162.6 255.996 162.779 255.817 163 255.817C163.221 255.817 163.4 255.996 163.4 256.217H162.6ZM163.4 252.25C163.4 252.471 163.221 252.65 163 252.65C162.779 252.65 162.6 252.471 162.6 252.25H163.4ZM162.6 248.283C162.6 248.062 162.779 247.883 163 247.883C163.221 247.883 163.4 248.062 163.4 248.283H162.6ZM163.4 244.317C163.4 244.538 163.221 244.717 163 244.717C162.779 244.717 162.6 244.538 162.6 244.317H163.4ZM162.6 240.35C162.6 240.129 162.779 239.95 163 239.95C163.221 239.95 163.4 240.129 163.4 240.35H162.6ZM163.4 236.383C163.4 236.604 163.221 236.783 163 236.783C162.779 236.783 162.6 236.604 162.6 236.383H163.4ZM162.6 232.417C162.6 232.196 162.779 232.017 163 232.017C163.221 232.017 163.4 232.196 163.4 232.417H162.6ZM163.4 228.45C163.4 228.671 163.221 228.85 163 228.85C162.779 228.85 162.6 228.671 162.6 228.45H163.4ZM162.6 224.483C162.6 224.262 162.779 224.083 163 224.083C163.221 224.083 163.4 224.262 163.4 224.483H162.6ZM163.4 220.517C163.4 220.738 163.221 220.917 163 220.917C162.779 220.917 162.6 220.738 162.6 220.517H163.4ZM162.6 216.55C162.6 216.329 162.779 216.15 163 216.15C163.221 216.15 163.4 216.329 163.4 216.55H162.6ZM163.4 212.583C163.4 212.804 163.221 212.983 163 212.983C162.779 212.983 162.6 212.804 162.6 212.583H163.4ZM162.6 208.617C162.6 208.396 162.779 208.217 163 208.217C163.221 208.217 163.4 208.396 163.4 208.617H162.6ZM163.4 204.65C163.4 204.871 163.221 205.05 163 205.05C162.779 205.05 162.6 204.871 162.6 204.65H163.4ZM162.6 200.683C162.6 200.462 162.779 200.283 163 200.283C163.221 200.283 163.4 200.462 163.4 200.683H162.6ZM163.4 196.717C163.4 196.938 163.221 197.117 163 197.117C162.779 197.117 162.6 196.938 162.6 196.717H163.4ZM162.6 192.75C162.6 192.529 162.779 192.35 163 192.35C163.221 192.35 163.4 192.529 163.4 192.75H162.6ZM163.4 188.783C163.4 189.004 163.221 189.183 163 189.183C162.779 189.183 162.6 189.004 162.6 188.783H163.4ZM162.6 184.817C162.6 184.596 162.779 184.417 163 184.417C163.221 184.417 163.4 184.596 163.4 184.817H162.6ZM163.4 180.85C163.4 181.071 163.221 181.25 163 181.25C162.779 181.25 162.6 181.071 162.6 180.85H163.4ZM162.6 176.883C162.6 176.662 162.779 176.483 163 176.483C163.221 176.483 163.4 176.662 163.4 176.883H162.6ZM163.4 172.917C163.4 173.138 163.221 173.317 163 173.317C162.779 173.317 162.6 173.138 162.6 172.917H163.4ZM162.6 168.95C162.6 168.729 162.779 168.55 163 168.55C163.221 168.55 163.4 168.729 163.4 168.95H162.6ZM163.4 164.983C163.4 165.204 163.221 165.383 163 165.383C162.779 165.383 162.6 165.204 162.6 164.983H163.4ZM81 285.6H82.95V286.4H81V285.6ZM86.85 285.6H90.75V286.4H86.85V285.6ZM94.65 285.6H98.55V286.4H94.65V285.6ZM102.45 285.6H106.35V286.4H102.45V285.6ZM110.25 285.6H114.15V286.4H110.25V285.6ZM118.05 285.6H121.95V286.4H118.05V285.6ZM125.85 285.6H129.75V286.4H125.85V285.6ZM133.65 285.6H137.55V286.4H133.65V285.6ZM141.45 285.6H145.35V286.4H141.45V285.6ZM149.25 285.6H153.15V286.4H149.25V285.6ZM157.05 285.6H159V286.4H157.05V285.6ZM159 285.6C159.489 285.6 159.954 285.503 160.378 285.327L160.684 286.066C160.165 286.281 159.596 286.4 159 286.4V285.6ZM162.327 283.378C162.503 282.954 162.6 282.489 162.6 282H163.4C163.4 282.596 163.281 283.165 163.066 283.684L162.327 283.378ZM162.6 282V280.017H163.4V282H162.6ZM162.6 276.05V272.083H163.4V276.05H162.6ZM162.6 268.117V264.15H163.4V268.117H162.6ZM162.6 260.183V256.217H163.4V260.183H162.6ZM162.6 252.25V248.283H163.4V252.25H162.6ZM162.6 244.317V240.35H163.4V244.317H162.6ZM162.6 236.383V232.417H163.4V236.383H162.6ZM162.6 228.45V224.483H163.4V228.45H162.6ZM162.6 220.517V216.55H163.4V220.517H162.6ZM162.6 212.583V208.617H163.4V212.583H162.6ZM162.6 204.65V200.683H163.4V204.65H162.6ZM162.6 196.717V192.75H163.4V196.717H162.6ZM162.6 188.783V184.817H163.4V188.783H162.6ZM162.6 180.85V176.883H163.4V180.85H162.6ZM162.6 172.917V168.95H163.4V172.917H162.6ZM162.6 164.983V163H163.4V164.983H162.6Z"
                                                        fill="#CDD3DB"
                                                    />
                                                    <path
                                                        d="M324.403 163C324.403 163.221 324.224 163.4 324.003 163.4C323.783 163.4 323.603 163.221 323.603 163H324.403ZM402.115 41.4C401.894 41.4 401.715 41.2209 401.715 41C401.715 40.7791 401.894 40.6 402.115 40.6V41.4ZM398.315 40.6C398.536 40.6 398.715 40.7791 398.715 41C398.715 41.2209 398.536 41.4 398.315 41.4V40.6ZM394.514 41.4C394.293 41.4 394.114 41.2209 394.114 41C394.114 40.7791 394.293 40.6 394.514 40.6V41.4ZM390.713 40.6C390.934 40.6 391.113 40.7791 391.113 41C391.113 41.2209 390.934 41.4 390.713 41.4V40.6ZM386.913 41.4C386.692 41.4 386.513 41.2209 386.513 41C386.513 40.7791 386.692 40.6 386.913 40.6V41.4ZM383.112 40.6C383.333 40.6 383.512 40.7791 383.512 41C383.512 41.2209 383.333 41.4 383.112 41.4V40.6ZM379.312 41.4C379.091 41.4 378.912 41.2209 378.912 41C378.912 40.7791 379.091 40.6 379.312 40.6V41.4ZM375.511 40.6C375.732 40.6 375.911 40.7791 375.911 41C375.911 41.2209 375.732 41.4 375.511 41.4V40.6ZM371.71 41.4C371.49 41.4 371.31 41.2209 371.31 41C371.31 40.7791 371.49 40.6 371.71 40.6V41.4ZM367.91 40.6C368.131 40.6 368.31 40.7791 368.31 41C368.31 41.2209 368.131 41.4 367.91 41.4V40.6ZM364.109 41.4C363.888 41.4 363.709 41.2209 363.709 41C363.709 40.7791 363.888 40.6 364.109 40.6V41.4ZM360.309 40.6C360.53 40.6 360.709 40.7791 360.709 41C360.709 41.2209 360.53 41.4 360.309 41.4V40.6ZM356.508 41.4C356.287 41.4 356.108 41.2209 356.108 41C356.108 40.7791 356.287 40.6 356.508 40.6V41.4ZM352.707 40.6C352.928 40.6 353.107 40.7791 353.107 41C353.107 41.2209 352.928 41.4 352.707 41.4V40.6ZM348.907 41.4C348.686 41.4 348.507 41.2209 348.507 41C348.507 40.7791 348.686 40.6 348.907 40.6V41.4ZM345.106 40.6C345.327 40.6 345.506 40.7791 345.506 41C345.506 41.2209 345.327 41.4 345.106 41.4V40.6ZM341.306 41.4C341.085 41.4 340.906 41.2209 340.906 41C340.906 40.7791 341.085 40.6 341.306 40.6V41.4ZM337.505 40.6C337.726 40.6 337.905 40.7791 337.905 41C337.905 41.2209 337.726 41.4 337.505 41.4V40.6ZM333.704 41.4C333.483 41.4 333.304 41.2209 333.304 41C333.304 40.7791 333.483 40.6 333.704 40.6V41.4ZM329.904 40.6C330.125 40.6 330.304 40.7791 330.304 41C330.304 41.2209 330.125 41.4 329.904 41.4V40.6ZM326.626 41.673C326.421 41.7576 326.187 41.6608 326.103 41.4567C326.018 41.2527 326.115 41.0187 326.319 40.934L326.626 41.673ZM323.937 43.3156C324.022 43.1116 324.256 43.0147 324.46 43.0994C324.664 43.184 324.761 43.418 324.676 43.6221L323.937 43.3156ZM324.403 46.9667C324.403 47.1876 324.224 47.3667 324.003 47.3667C323.783 47.3667 323.603 47.1876 323.603 46.9667H324.403ZM323.603 50.9C323.603 50.6791 323.783 50.5 324.003 50.5C324.224 50.5 324.403 50.6791 324.403 50.9H323.603ZM324.403 54.8333C324.403 55.0542 324.224 55.2333 324.003 55.2333C323.783 55.2333 323.603 55.0542 323.603 54.8333H324.403ZM323.603 58.7667C323.603 58.5458 323.783 58.3667 324.003 58.3667C324.224 58.3667 324.403 58.5458 324.403 58.7667H323.603ZM324.403 62.7C324.403 62.9209 324.224 63.1 324.003 63.1C323.783 63.1 323.603 62.9209 323.603 62.7H324.403ZM323.603 66.6333C323.603 66.4124 323.783 66.2333 324.003 66.2333C324.224 66.2333 324.403 66.4124 324.403 66.6333H323.603ZM324.403 70.5667C324.403 70.7876 324.224 70.9667 324.003 70.9667C323.783 70.9667 323.603 70.7876 323.603 70.5667H324.403ZM323.603 74.5C323.603 74.2791 323.783 74.1 324.003 74.1C324.224 74.1 324.403 74.2791 324.403 74.5H323.603ZM324.403 78.4333C324.403 78.6543 324.224 78.8333 324.003 78.8333C323.783 78.8333 323.603 78.6543 323.603 78.4333H324.403ZM323.603 82.3667C323.603 82.1458 323.783 81.9667 324.003 81.9667C324.224 81.9667 324.403 82.1458 324.403 82.3667H323.603ZM324.403 86.3C324.403 86.5209 324.224 86.7 324.003 86.7C323.783 86.7 323.603 86.5209 323.603 86.3H324.403ZM323.603 90.2333C323.603 90.0124 323.783 89.8333 324.003 89.8333C324.224 89.8333 324.403 90.0124 324.403 90.2333H323.603ZM324.403 94.1667C324.403 94.3876 324.224 94.5667 324.003 94.5667C323.783 94.5667 323.603 94.3876 323.603 94.1667H324.403ZM323.603 98.1C323.603 97.8791 323.783 97.7 324.003 97.7C324.224 97.7 324.403 97.8791 324.403 98.1H323.603ZM324.403 102.033C324.403 102.254 324.224 102.433 324.003 102.433C323.783 102.433 323.603 102.254 323.603 102.033H324.403ZM323.603 105.967C323.603 105.746 323.783 105.567 324.003 105.567C324.224 105.567 324.403 105.746 324.403 105.967H323.603ZM324.403 109.9C324.403 110.121 324.224 110.3 324.003 110.3C323.783 110.3 323.603 110.121 323.603 109.9H324.403ZM323.603 113.833C323.603 113.612 323.783 113.433 324.003 113.433C324.224 113.433 324.403 113.612 324.403 113.833H323.603ZM324.403 117.767C324.403 117.988 324.224 118.167 324.003 118.167C323.783 118.167 323.603 117.988 323.603 117.767H324.403ZM323.603 121.7C323.603 121.479 323.783 121.3 324.003 121.3C324.224 121.3 324.403 121.479 324.403 121.7H323.603ZM324.403 125.633C324.403 125.854 324.224 126.033 324.003 126.033C323.783 126.033 323.603 125.854 323.603 125.633H324.403ZM323.603 129.567C323.603 129.346 323.783 129.167 324.003 129.167C324.224 129.167 324.403 129.346 324.403 129.567H323.603ZM324.403 133.5C324.403 133.721 324.224 133.9 324.003 133.9C323.783 133.9 323.603 133.721 323.603 133.5H324.403ZM323.603 137.433C323.603 137.212 323.783 137.033 324.003 137.033C324.224 137.033 324.403 137.212 324.403 137.433H323.603ZM324.403 141.367C324.403 141.588 324.224 141.767 324.003 141.767C323.783 141.767 323.603 141.588 323.603 141.367H324.403ZM323.603 145.3C323.603 145.079 323.783 144.9 324.003 144.9C324.224 144.9 324.403 145.079 324.403 145.3H323.603ZM324.403 149.233C324.403 149.454 324.224 149.633 324.003 149.633C323.783 149.633 323.603 149.454 323.603 149.233H324.403ZM323.603 153.167C323.603 152.946 323.783 152.767 324.003 152.767C324.224 152.767 324.403 152.946 324.403 153.167H323.603ZM324.403 157.1C324.403 157.321 324.224 157.5 324.003 157.5C323.783 157.5 323.603 157.321 323.603 157.1H324.403ZM323.603 161.033C323.603 160.812 323.783 160.633 324.003 160.633C324.224 160.633 324.403 160.812 324.403 161.033H323.603ZM404.016 41.4H402.115V40.6H404.016V41.4ZM398.315 41.4H394.514V40.6H398.315V41.4ZM390.713 41.4H386.913V40.6H390.713V41.4ZM383.112 41.4H379.312V40.6H383.112V41.4ZM375.511 41.4H371.71V40.6H375.511V41.4ZM367.91 41.4H364.109V40.6H367.91V41.4ZM360.309 41.4H356.508V40.6H360.309V41.4ZM352.707 41.4H348.907V40.6H352.707V41.4ZM345.106 41.4H341.306V40.6H345.106V41.4ZM337.505 41.4H333.704V40.6H337.505V41.4ZM329.904 41.4H328.003V40.6H329.904V41.4ZM328.003 41.4C327.515 41.4 327.049 41.4972 326.626 41.673L326.319 40.934C326.838 40.7187 327.408 40.6 328.003 40.6V41.4ZM324.676 43.6221C324.501 44.046 324.403 44.5111 324.403 45H323.603C323.603 44.4041 323.722 43.835 323.937 43.3156L324.676 43.6221ZM324.403 45V46.9667H323.603V45H324.403ZM324.403 50.9V54.8333H323.603V50.9H324.403ZM324.403 58.7667V62.7H323.603V58.7667H324.403ZM324.403 66.6333V70.5667H323.603V66.6333H324.403ZM324.403 74.5V78.4333H323.603V74.5H324.403ZM324.403 82.3667V86.3H323.603V82.3667H324.403ZM324.403 90.2333V94.1667H323.603V90.2333H324.403ZM324.403 98.1V102.033H323.603V98.1H324.403ZM324.403 105.967V109.9H323.603V105.967H324.403ZM324.403 113.833V117.767H323.603V113.833H324.403ZM324.403 121.7V125.633H323.603V121.7H324.403ZM324.403 129.567V133.5H323.603V129.567H324.403ZM324.403 137.433V141.367H323.603V137.433H324.403ZM324.403 145.3V149.233H323.603V145.3H324.403ZM324.403 153.167V157.1H323.603V153.167H324.403ZM324.403 161.033V163H323.603V161.033H324.403Z"
                                                        fill="#CDD3DB"
                                                    />
                                                    <path
                                                        d="M324.4 163C324.4 162.779 324.221 162.6 324 162.6C323.779 162.6 323.6 162.779 323.6 163H324.4ZM403.075 285.6C402.854 285.6 402.675 285.779 402.675 286C402.675 286.221 402.854 286.4 403.075 286.4V285.6ZM399.225 286.4C399.446 286.4 399.625 286.221 399.625 286C399.625 285.779 399.446 285.6 399.225 285.6V286.4ZM395.375 285.6C395.154 285.6 394.975 285.779 394.975 286C394.975 286.221 395.154 286.4 395.375 286.4V285.6ZM391.525 286.4C391.746 286.4 391.925 286.221 391.925 286C391.925 285.779 391.746 285.6 391.525 285.6V286.4ZM387.675 285.6C387.454 285.6 387.275 285.779 387.275 286C387.275 286.221 387.454 286.4 387.675 286.4V285.6ZM383.825 286.4C384.046 286.4 384.225 286.221 384.225 286C384.225 285.779 384.046 285.6 383.825 285.6V286.4ZM379.975 285.6C379.754 285.6 379.575 285.779 379.575 286C379.575 286.221 379.754 286.4 379.975 286.4V285.6ZM376.125 286.4C376.346 286.4 376.525 286.221 376.525 286C376.525 285.779 376.346 285.6 376.125 285.6V286.4ZM372.275 285.6C372.054 285.6 371.875 285.779 371.875 286C371.875 286.221 372.054 286.4 372.275 286.4V285.6ZM368.425 286.4C368.646 286.4 368.825 286.221 368.825 286C368.825 285.779 368.646 285.6 368.425 285.6V286.4ZM364.575 285.6C364.354 285.6 364.175 285.779 364.175 286C364.175 286.221 364.354 286.4 364.575 286.4V285.6ZM360.725 286.4C360.946 286.4 361.125 286.221 361.125 286C361.125 285.779 360.946 285.6 360.725 285.6V286.4ZM356.875 285.6C356.654 285.6 356.475 285.779 356.475 286C356.475 286.221 356.654 286.4 356.875 286.4V285.6ZM353.025 286.4C353.246 286.4 353.425 286.221 353.425 286C353.425 285.779 353.246 285.6 353.025 285.6V286.4ZM349.175 285.6C348.954 285.6 348.775 285.779 348.775 286C348.775 286.221 348.954 286.4 349.175 286.4V285.6ZM345.325 286.4C345.546 286.4 345.725 286.221 345.725 286C345.725 285.779 345.546 285.6 345.325 285.6V286.4ZM341.475 285.6C341.254 285.6 341.075 285.779 341.075 286C341.075 286.221 341.254 286.4 341.475 286.4V285.6ZM337.625 286.4C337.846 286.4 338.025 286.221 338.025 286C338.025 285.779 337.846 285.6 337.625 285.6V286.4ZM333.775 285.6C333.554 285.6 333.375 285.779 333.375 286C333.375 286.221 333.554 286.4 333.775 286.4V285.6ZM329.925 286.4C330.146 286.4 330.325 286.221 330.325 286C330.325 285.779 330.146 285.6 329.925 285.6V286.4ZM326.622 285.327C326.418 285.242 326.184 285.339 326.099 285.543C326.015 285.747 326.112 285.981 326.316 286.066L326.622 285.327ZM323.934 283.684C324.019 283.888 324.253 283.985 324.457 283.901C324.661 283.816 324.758 283.582 324.673 283.378L323.934 283.684ZM324.4 280.017C324.4 279.796 324.221 279.617 324 279.617C323.779 279.617 323.6 279.796 323.6 280.017H324.4ZM323.6 276.05C323.6 276.271 323.779 276.45 324 276.45C324.221 276.45 324.4 276.271 324.4 276.05H323.6ZM324.4 272.083C324.4 271.862 324.221 271.683 324 271.683C323.779 271.683 323.6 271.862 323.6 272.083H324.4ZM323.6 268.117C323.6 268.338 323.779 268.517 324 268.517C324.221 268.517 324.4 268.338 324.4 268.117H323.6ZM324.4 264.15C324.4 263.929 324.221 263.75 324 263.75C323.779 263.75 323.6 263.929 323.6 264.15H324.4ZM323.6 260.183C323.6 260.404 323.779 260.583 324 260.583C324.221 260.583 324.4 260.404 324.4 260.183H323.6ZM324.4 256.217C324.4 255.996 324.221 255.817 324 255.817C323.779 255.817 323.6 255.996 323.6 256.217H324.4ZM323.6 252.25C323.6 252.471 323.779 252.65 324 252.65C324.221 252.65 324.4 252.471 324.4 252.25H323.6ZM324.4 248.283C324.4 248.062 324.221 247.883 324 247.883C323.779 247.883 323.6 248.062 323.6 248.283H324.4ZM323.6 244.317C323.6 244.538 323.779 244.717 324 244.717C324.221 244.717 324.4 244.538 324.4 244.317H323.6ZM324.4 240.35C324.4 240.129 324.221 239.95 324 239.95C323.779 239.95 323.6 240.129 323.6 240.35H324.4ZM323.6 236.383C323.6 236.604 323.779 236.783 324 236.783C324.221 236.783 324.4 236.604 324.4 236.383H323.6ZM324.4 232.417C324.4 232.196 324.221 232.017 324 232.017C323.779 232.017 323.6 232.196 323.6 232.417H324.4ZM323.6 228.45C323.6 228.671 323.779 228.85 324 228.85C324.221 228.85 324.4 228.671 324.4 228.45H323.6ZM324.4 224.483C324.4 224.262 324.221 224.083 324 224.083C323.779 224.083 323.6 224.262 323.6 224.483H324.4ZM323.6 220.517C323.6 220.738 323.779 220.917 324 220.917C324.221 220.917 324.4 220.738 324.4 220.517H323.6ZM324.4 216.55C324.4 216.329 324.221 216.15 324 216.15C323.779 216.15 323.6 216.329 323.6 216.55H324.4ZM323.6 212.583C323.6 212.804 323.779 212.983 324 212.983C324.221 212.983 324.4 212.804 324.4 212.583H323.6ZM324.4 208.617C324.4 208.396 324.221 208.217 324 208.217C323.779 208.217 323.6 208.396 323.6 208.617H324.4ZM323.6 204.65C323.6 204.871 323.779 205.05 324 205.05C324.221 205.05 324.4 204.871 324.4 204.65H323.6ZM324.4 200.683C324.4 200.462 324.221 200.283 324 200.283C323.779 200.283 323.6 200.462 323.6 200.683H324.4ZM323.6 196.717C323.6 196.938 323.779 197.117 324 197.117C324.221 197.117 324.4 196.938 324.4 196.717H323.6ZM324.4 192.75C324.4 192.529 324.221 192.35 324 192.35C323.779 192.35 323.6 192.529 323.6 192.75H324.4ZM323.6 188.783C323.6 189.004 323.779 189.183 324 189.183C324.221 189.183 324.4 189.004 324.4 188.783H323.6ZM324.4 184.817C324.4 184.596 324.221 184.417 324 184.417C323.779 184.417 323.6 184.596 323.6 184.817H324.4ZM323.6 180.85C323.6 181.071 323.779 181.25 324 181.25C324.221 181.25 324.4 181.071 324.4 180.85H323.6ZM324.4 176.883C324.4 176.662 324.221 176.483 324 176.483C323.779 176.483 323.6 176.662 323.6 176.883H324.4ZM323.6 172.917C323.6 173.138 323.779 173.317 324 173.317C324.221 173.317 324.4 173.138 324.4 172.917H323.6ZM324.4 168.95C324.4 168.729 324.221 168.55 324 168.55C323.779 168.55 323.6 168.729 323.6 168.95H324.4ZM323.6 164.983C323.6 165.204 323.779 165.383 324 165.383C324.221 165.383 324.4 165.204 324.4 164.983H323.6ZM405 285.6H403.075V286.4H405V285.6ZM399.225 285.6H395.375V286.4H399.225V285.6ZM391.525 285.6H387.675V286.4H391.525V285.6ZM383.825 285.6H379.975V286.4H383.825V285.6ZM376.125 285.6H372.275V286.4H376.125V285.6ZM368.425 285.6H364.575V286.4H368.425V285.6ZM360.725 285.6H356.875V286.4H360.725V285.6ZM353.025 285.6H349.175V286.4H353.025V285.6ZM345.325 285.6H341.475V286.4H345.325V285.6ZM337.625 285.6H333.775V286.4H337.625V285.6ZM329.925 285.6H328V286.4H329.925V285.6ZM328 285.6C327.511 285.6 327.046 285.503 326.622 285.327L326.316 286.066C326.835 286.281 327.404 286.4 328 286.4V285.6ZM324.673 283.378C324.497 282.954 324.4 282.489 324.4 282H323.6C323.6 282.596 323.719 283.165 323.934 283.684L324.673 283.378ZM324.4 282V280.017H323.6V282H324.4ZM324.4 276.05V272.083H323.6V276.05H324.4ZM324.4 268.117V264.15H323.6V268.117H324.4ZM324.4 260.183V256.217H323.6V260.183H324.4ZM324.4 252.25V248.283H323.6V252.25H324.4ZM324.4 244.317V240.35H323.6V244.317H324.4ZM324.4 236.383V232.417H323.6V236.383H324.4ZM324.4 228.45V224.483H323.6V228.45H324.4ZM324.4 220.517V216.55H323.6V220.517H324.4ZM324.4 212.583V208.617H323.6V212.583H324.4ZM324.4 204.65V200.683H323.6V204.65H324.4ZM324.4 196.717V192.75H323.6V196.717H324.4ZM324.4 188.783V184.817H323.6V188.783H324.4ZM324.4 180.85V176.883H323.6V180.85H324.4ZM324.4 172.917V168.95H323.6V172.917H324.4ZM324.4 164.983V163H323.6V164.983H324.4Z"
                                                        fill="#CDD3DB"
                                                    />
                                                    <g opacity="0.8">
                                                        <path
                                                            d="M0 122.504H486"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M0 81.668H486"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path d="M0 163H82" stroke="#E4E7EB" strokeWidth="0.5" />
                                                        <path
                                                            d="M404 163H486"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M0 245.012H486"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M163 286L324 286"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M0 204.176H486"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M404 0L404 327"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M324 286L324 327"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M163 286L163 327"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M324 0L324 41"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M163 0L163 41"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M82 0L82 327"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                        <path
                                                            d="M243.508 0L243.508 327"
                                                            stroke="#E4E7EB"
                                                            strokeWidth="0.5"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M369 163H291"
                                                        stroke="#CDD3DB"
                                                        strokeWidth="0.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeDasharray="4 4"
                                                    />
                                                    <path
                                                        d="M377 163H291.001"
                                                        className="stroke-stroke-dark-secondary dash-2 animation-delay-[1000ms]"
                                                    />
                                                    <path
                                                        d="M405 286H328C325.791 286 324 284.209 324 282V167C324 164.791 322.209 163 320 163H290.5"
                                                        className="stroke-stroke-dark-secondary dash-1 animation-delay-[8200ms]"
                                                    />
                                                    <path
                                                        d="M214 163H117"
                                                        stroke="#CDD3DB"
                                                        strokeWidth="0.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeDasharray="4 4"
                                                    />
                                                    <path
                                                        d="M214 163H108"
                                                        className="stroke-stroke-dark-secondary dash-2 animation-delay-[9500ms]"
                                                    />
                                                    <path
                                                        d="M82 41H159C161.209 41 163 42.7909 163 45V159C163 161.209 164.791 163 167 163H214"
                                                        className="stroke-stroke-dark-secondary dash-1 animation-delay-[3500ms]"
                                                    />
                                                    <path
                                                        d="M81 286H159C161.209 286 163 284.209 163 282V167C163 164.791 164.791 163 167 163H214"
                                                        className="stroke-stroke-dark-secondary dash-1 animation-delay-[5500ms]"
                                                    />
                                                    <path
                                                        d="M404.016 41H328.003C325.794 41 324.003 42.7909 324.003 45V159C324.003 161.209 322.213 163 320.003 163H290.5"
                                                        className="stroke-stroke-dark-secondary dash-1 animation-delay-[12000ms]"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_896_166665">
                                                        <rect width={486} height={367} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <img
                                                src="https://attio.com/build/_assets/integrations-5F4CEIN7.webp"
                                                alt=""
                                                loading="lazy"
                                                className="w-full h-auto max-w-[486px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-40px pb-60px px-24px tablet:pt-[96px] tablet:pb-[120px] tablet:px-0">
                                    <div className="tablet:grid grid-cols-10 gap-x-24px gap-y-[50px]">
                                        <img
                                            className="h-[34px] tablet:h-44px col-start-2 col-end-5"
                                            src="https://attio.com/build/_assets/dopt-2CWLJDVM.webp"
                                            alt="DOPT"
                                        />
                                        <div className="mt-24px tablet:mt-0 col-start-5 col-end-11">
                                            <p className="max-w-[530px] typography-p2-strong tablet:typography-h5 tablet:!leading-120 text-typography-light-tertiary">
                                                “Attio has played a crucial role in scaling, building out and
                                                evolving our go-to-market model. It allows my team to easily
                                                stay on top of everything.”
                                            </p>
                                        </div>
                                        <div className="mt-24px tablet:mt-0 order-2 col-start-5 col-end-11 flex items-center gap-[18px]">
                                            <img
                                                className="w-60px h-60px rounded-12px"
                                                src="https://attio.com/build/_assets/dopt-avatar-XBJTO3WW.webp"
                                                alt=""
                                            />
                                            <div>
                                                <p className="typography-p5-strong text-typography-light-secondary">
                                                    Alon Bartur
                                                </p>
                                                <p className="typography-p5-medium text-typography-light-tertiary">
                                                    Co-founder &amp; CEO, Dopt
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-[30px] tablet:mt-0 col-start-2 col-end-5 self-end tablet:mb-[6px]">
                                            <a
                                                className="typography-p5-strong text-attio-blue-main tablet:text-typography-light-tertiary group w-fit flex items-center gap-4px rounded-8px focus:shadow-[0px_0px_0px_2px_#FAFAFA,_0px_0px_0px_5px_rgba(38,_109,_240,_0.5)] focus:bg-[#FAFAFA]"
                                                href="/customers/dopt"
                                            >
                                                Read the full story
                                                <svg
                                                    className="mt-[2px] opacity-0 -translate-x-[3px] group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-x-0 group-focus:translate-x-0 transition-all"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7.125 5.25L10.875 9L7.125 12.75"
                                                        stroke="currentColor"
                                                        strokeWidth="1.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background-light-primary flex items-center justify-center pl-48px px-24px tablet:px-[142px]">
                    <div className="relative w-[100%] phablet:max-w-[720px] tablet:max-w-[1155px] flex items-stretch">
                        <div className="absolute top-0 bottom-0 right-[calc(100%+7px)] tablet:right-full">
                            <div className="h-full flex flex-col items-center">
                                <svg
                                    className="shrink-0 w-[34px] h-[34px] tablet:w-[49px] tablet:h-[49px]"
                                    width={34}
                                    height={34}
                                    viewBox="0 0 34 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={17} cy="17.5999" r={17} fill="white" />
                                    <g clipPath="url(#clip0_102_199656)">
                                        <path
                                            d="M26.1938 9.94623L18.2162 6.13349C17.37 5.7248 16.3723 5.7801 15.5762 6.28039L7.34426 11.4642C6.54817 11.9645 6.06616 12.8415 6.07025 13.7812L6.10058 22.5968C6.10475 23.6388 6.70236 24.5884 7.64071 25.043L15.6183 28.8558C16.4645 29.2645 17.4622 29.2092 18.2583 28.7089L26.4902 23.525C27.2863 23.0247 27.7683 22.1478 27.7642 21.2081L27.7488 16.4685L27.7356 12.3925C27.7315 11.3504 27.1338 10.4009 26.1972 9.94793L26.1938 9.94623Z"
                                            fill="#FAFAFA"
                                            stroke="#383E47"
                                            strokeMiterlimit={10}
                                        />
                                        <g opacity="0.8">
                                            <path
                                                d="M14.9378 25.7565L9.24959 23.037C8.66805 22.7552 8.28935 22.154 8.28733 21.5061L8.26562 15.1409"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M14.9378 25.7565L9.24959 23.037C8.66805 22.7552 8.28935 22.154 8.28733 21.5061L8.26562 15.1409"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M10.4512 14.7192L15.3438 17.0859C15.9223 17.3723 16.2979 17.972 16.2999 18.6184L16.3195 24.224"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M10.4512 14.7192L15.3438 17.0859C15.9223 17.3723 16.2979 17.972 16.2999 18.6184L16.3195 24.224"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M8.27807 17.7716L8.26801 14.6092C8.2678 14.3255 8.46457 14.1703 8.54979 14.116C8.63501 14.0632 8.86126 13.9515 9.11714 14.0753L10.7377 14.8585"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M8.27807 17.7716L8.26801 14.6092C8.2678 14.3255 8.46457 14.1703 8.54979 14.116C8.63501 14.0632 8.86126 13.9515 9.11714 14.0753L10.7377 14.8585"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M16.3106 22.0647L16.3224 25.5294C16.3226 25.8115 16.1383 25.9589 16.0593 26.0086C15.9802 26.0583 15.7679 26.1623 15.5136 26.0385L11.9313 24.3296"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M16.3106 22.0647L16.3224 25.5294C16.3226 25.8115 16.1383 25.9589 16.0593 26.0086C15.9802 26.0583 15.7679 26.1623 15.5136 26.0385L11.9313 24.3296"
                                                stroke="#383E47"
                                                strokeWidth="0.8"
                                                strokeMiterlimit={10}
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_102_199656">
                                            <rect
                                                width="26.0667"
                                                height="26.0667"
                                                fill="white"
                                                transform="translate(3.9668 4.56665)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="flex-1 w-[1px] line-gradient" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 max-w-[100%]">
                            <div className="pl-24px tablet:pl-40px">
                                <div className="typography-h4-strong tablet:typography-h2-strong text-typography-light-primary phone:whitespace-pre-line">
                                    Designed for multiplayer.
                                </div>
                                <div className="mt-16px max-w-[480px] typography-p4-medium tablet:typography-p2-medium text-typography-light-secondary phone:whitespace-pre-line">
                                    The first truly multiplayer CRM. After all, the best work doesn’t
                                    come from silos.
                                </div>
                            </div>
                            <div className="mt-60px tablet:mt-80px flex flex-col gap-24px relative min-h-[380px]">
                                <div className="flex flex-col tablet:flex-row gap-24px">
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:max-w-[684px] pt-[24px] pl-[24px] tablet:pt-[40px] tablet:pl-[40px] flex-1 flex flex-col relative min-h-[560px] card-light-shadow bg-background-light-primary">
                                        <span className="inline-block max-w-[524px] pb-[48px] tablet:pb-[60px] pr-[24px]">
                                            <span
                                                role="heading"
                                                aria-level={3}
                                                className="typography-p5-strong phablet:typography-p4-strong text-typography-light-secondary"
                                            >
                                                Real-time multiplayer collaboration.
                                            </span>{" "}
                                            <span className="typography-p5-medium phablet:typography-p4-medium text-typography-light-tertiary">
                                                Collaborate with your whole team and nail every task the first
                                                time. See each other click, change, and type in real-time.
                                            </span>
                                        </span>
                                        <div className="ml-auto mt-auto max-w-[644px] absolute bottom-0">
                                            <div className="relative">
                                                <img
                                                    loading="lazy"
                                                    alt=""
                                                    src="https://attio.com/build/_assets/multiplayer-frame-OLJABT4E.webp"
                                                    className="min-w-[644px]"
                                                />
                                                <div
                                                    className="absolute top-[109px] left-[185px]"
                                                    style={{
                                                        transform:
                                                            "translateX(160px) translateY(36px) translateZ(0px)"
                                                    }}
                                                >
                                                    <div className="relative">
                                                        <div
                                                            className="flex flex-row items-center py-0 px-4px w-[38px] h-[16px] bg-[#0FC27B] justify-center absolute right-0 top-[-16px]"
                                                            style={{ borderRadius: "6px 6px 0px 0px" }}
                                                        >
                                                            <span className="font-inter text-[11px] leading-[16px] text-white">
                                                                Alex
                                                            </span>
                                                        </div>
                                                        <div
                                                            style={{
                                                                width: 148,
                                                                height: 37,
                                                                border: "1px solid rgb(15, 194, 123)",
                                                                borderRadius: "4px 0px 4px 4px"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="absolute top-[253px] left-[25px]"
                                                    style={{
                                                        transform:
                                                            "translateX(467px) translateY(72px) translateZ(0px)"
                                                    }}
                                                >
                                                    <div className="relative">
                                                        <div
                                                            className="flex flex-row items-center py-0 px-4px w-[38px] h-[16px] bg-[#7A50ED] justify-center absolute right-0 top-[-16px]"
                                                            style={{ borderRadius: "6px 6px 0px 0px" }}
                                                        >
                                                            <span className="font-inter text-[11px] leading-[16px] text-white">
                                                                Anna
                                                            </span>
                                                        </div>
                                                        <div
                                                            style={{
                                                                width: 147,
                                                                height: 37,
                                                                border: "1px solid rgb(122, 80, 237)",
                                                                borderRadius: "4px 0px 4px 4px"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="absolute top-[289px] left-[493px] opacity-0"
                                                    style={{
                                                        opacity: 1,
                                                        transform:
                                                            "translateX(-308px) translateY(0px) translateZ(0px)"
                                                    }}
                                                >
                                                    <div className="relative">
                                                        <div
                                                            className="flex flex-row items-center py-0 px-4px w-[38px] h-[16px] bg-[#06A0C6] justify-center absolute right-0 top-[-16px]"
                                                            style={{ borderRadius: "6px 6px 0px 0px" }}
                                                        >
                                                            <span className="font-inter text-[11px] leading-[16px] text-white">
                                                                Ethan
                                                            </span>
                                                        </div>
                                                        <div
                                                            style={{
                                                                width: 161,
                                                                height: 37,
                                                                border: "1px solid rgb(6, 160, 198)",
                                                                borderRadius: "4px 0px 4px 4px"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden pt-[24px] tablet:pt-[40px] px-[24px] tablet:px-[40px] w-full tablet:max-w-[448px] card-light-shadow bg-background-light-primary">
                                        <span className="inline-block max-w-[420px] pb-[48px] tablet:pb-[60px]">
                                            <span
                                                role="heading"
                                                aria-level={3}
                                                className="typography-p5-strong phablet:typography-p4-strong text-typography-light-secondary"
                                            >
                                                Build from anywhere.
                                            </span>{" "}
                                            <span className="typography-p5-medium phablet:typography-p4-medium text-typography-light-tertiary">
                                                Our world-class apps let you collaborate from anywhere without
                                                compromising your workflow.
                                            </span>
                                        </span>
                                        <div className="relative ml-auto mr-auto overflow-hidden max-w-[258px]">
                                            <div className="absolute">
                                                <div
                                                    className="relative"
                                                    data-projection-id={1}
                                                    style={{
                                                        transform: "translateX(-198.871px) translateZ(0px)"
                                                    }}
                                                >
                                                    <div className="absolute">
                                                        <div className="relative">
                                                            <div
                                                                className="z-[1] w-[140px] bg-white border absolute rounded-8px border-neutral-dark-900 flex flex-col"
                                                                data-projection-id={2}
                                                                style={{
                                                                    top: 136,
                                                                    left: 24,
                                                                    zIndex: 4,
                                                                    borderColor: "rgb(238, 239, 241)",
                                                                    backgroundColor: "rgb(255, 255, 255)",
                                                                    transform:
                                                                        "translateX(152px) scale(1) translateZ(0px)"
                                                                }}
                                                            >
                                                                <div className="px-8px py-[6px] gap-[4px] flex flex-row items-center">
                                                                    <div
                                                                        className="rounded-full w-[10px] h-[10px] flex justify-center items-center"
                                                                        style={{ backgroundColor: "rgb(6, 160, 198)" }}
                                                                    >
                                                                        <span className="text-white font-inter font-medium text-[6px]">
                                                                            C
                                                                        </span>
                                                                    </div>
                                                                    <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px] underline underline-offset-4 decoration-neutral-dark-900">
                                                                        Charles Sanchez
                                                                    </span>
                                                                </div>
                                                                <div className="w-[100%] bg-neutral-dark-900 h-[1px] my-[2px]" />
                                                                <div className="flex flex-col">
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141538)">
                                                                                <path
                                                                                    d="M3.05451 8.94191H7.26799C7.69505 8.94191 8.04125 8.59571 8.04125 8.16865C8.04125 7.11116 7.18399 6.25391 6.12651 6.25391H5.16125H4.19599C3.13851 6.25391 2.28125 7.11116 2.28125 8.16865C2.28125 8.59571 2.62745 8.94191 3.05451 8.94191Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <circle
                                                                                    cx="5.22906"
                                                                                    cy="3.34234"
                                                                                    r="1.44"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141538">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.941406)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(208, 253, 218)",
                                                                                color: "rgb(20, 101, 64)"
                                                                            }}
                                                                        >
                                                                            Manager
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141552)">
                                                                                <path
                                                                                    d="M1.72462 8.17962H6.19194C6.59214 8.17962 6.91656 7.8552 6.91656 7.455C6.91656 6.42275 6.07975 5.58594 5.0475 5.58594H3.95828L2.86906 5.58594C1.83681 5.58594 1 6.42275 1 7.455C1 7.8552 1.32442 8.17962 1.72462 8.17962Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <ellipse
                                                                                    cx="4.02602"
                                                                                    cy="2.61512"
                                                                                    rx="1.47914"
                                                                                    ry="1.4784"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M7.54688 5.60156C8.54511 5.74023 9.32164 6.59506 9.32164 7.63187C9.32164 8.08289 8.85954 8.04584 8.52852 8.04584H8.12062"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.21875 4.10093C7.03566 4.10093 7.69789 3.43737 7.69789 2.61882C7.69789 1.80028 7.03566 1.13672 6.21875 1.13672"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141552">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.179688)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(255, 237, 203)",
                                                                                color: "rgb(126, 83, 8)"
                                                                            }}
                                                                        >
                                                                            Marketing
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141566)">
                                                                                <path
                                                                                    d="M5.16031 7.82187L3.88031 7.82187C2.98423 7.82187 2.53619 7.82187 2.19393 7.64748C1.89287 7.49409 1.6481 7.24932 1.4947 6.94826C1.32031 6.606 1.32031 6.15796 1.32031 5.26187L1.32031 3.98187C1.32031 3.08579 1.32031 2.63775 1.4947 2.29549C1.6481 1.99443 1.89287 1.74966 2.19393 1.59626C2.53619 1.42187 2.98423 1.42187 3.88031 1.42187L6.76031 1.42187C7.35592 1.42187 7.65373 1.42187 7.89474 1.50018C8.38184 1.65845 8.76373 2.04035 8.922 2.52745C8.98484 2.72084 8.99726 4.23081 8.99971 4.62187"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                />
                                                                                <path
                                                                                    d="M5.99219 6.63562L8.68019 6.63562M8.68019 6.63562L7.60499 5.51562M8.68019 6.63562L7.60499 7.75562"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M2.92188 3.5L7.40187 3.5"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M3.36719 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.95312 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141566">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.140625)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            In 9 days
                                                                        </span>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141584)">
                                                                                <path
                                                                                    d="M8.36094 4.75237C8.36094 7.11874 6.39491 9.14094 5.16094 9.14094C3.92696 9.14094 1.96094 7.11874 1.96094 4.75237C1.96094 2.93456 3.39363 1.46094 5.16094 1.46094C6.92825 1.46094 8.36094 2.93456 8.36094 4.75237Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                                <circle
                                                                                    cx="5.15906"
                                                                                    cy="4.65906"
                                                                                    r="1.12"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141584">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.820312)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            London
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-[4px] px-8px py-4px flex flex-row gap-8px">
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M5.48063 0.542969L3.68862 0.542969C2.97175 0.542969 2.61332 0.542969 2.33951 0.682481C2.09867 0.805199 1.90285 1.00102 1.78013 1.24186C1.64062 1.51567 1.64062 1.87444 1.64063 2.59197C1.64063 3.56708 1.64064 4.23887 1.64064 5.21397C1.64065 5.93152 1.64065 6.29029 1.78016 6.56409C1.90288 6.80494 2.09869 7.00075 2.33954 7.12347C2.61335 7.26298 2.97178 7.26298 3.68865 7.26298H5.35262C6.06949 7.26298 6.42792 7.26298 6.70173 7.12347C6.94258 7.00075 7.13839 6.80494 7.26111 6.56409C7.40062 6.29028 7.40062 5.93185 7.40062 5.21498L7.40062 2.46297M5.48063 0.542969V1.69497C5.48063 1.9638 5.48063 2.09821 5.53295 2.20089C5.57897 2.29121 5.6524 2.36464 5.74272 2.41066C5.8454 2.46297 5.97981 2.46297 6.24863 2.46297H7.40062M5.48063 0.542969L6.44063 1.50297L7.40062 2.46297"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="w-[4px]" />
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={8}
                                                                            height={8}
                                                                            viewBox="0 0 8 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M2.75781 4.10895L2.82648 4.23297C3.05688 4.64914 3.17208 4.85722 3.3249 4.92739C3.45815 4.98858 3.61123 4.98971 3.74536 4.93049C3.89919 4.86257 4.01744 4.6562 4.25395 4.24347L4.99781 2.94531"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <rect
                                                                                x="0.835938"
                                                                                y="0.863281"
                                                                                width="6.08"
                                                                                height="6.08"
                                                                                rx="1.28"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            1
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M7.59106 3.00815C7.89745 3.24213 8.10667 3.59634 8.14952 4.00156C8.1575 4.07705 8.1575 4.16674 8.1575 4.3461V6.28977C8.1575 6.49495 8.1575 6.59754 8.13953 6.66135C8.0619 6.93703 7.76168 7.08381 7.49644 6.97578C7.43504 6.95077 7.35408 6.88777 7.19215 6.76176C7.09736 6.688 7.04997 6.65112 7.00096 6.61902C6.79971 6.48718 6.56863 6.40786 6.32883 6.38832C6.27044 6.38356 6.21039 6.38356 6.09028 6.38356H4.38809C4.32255 6.38356 4.28978 6.38356 4.26207 6.38249C3.82472 6.36564 3.43779 6.15459 3.18494 5.83297M1.4375 4.80804V3.09697C1.4375 2.29049 1.4375 1.88726 1.59445 1.57922C1.73251 1.30827 1.9528 1.08798 2.22375 0.949919C2.53179 0.792969 2.93502 0.792969 3.7415 0.792969H4.69868C5.23737 0.792969 5.50671 0.792969 5.72459 0.864134C6.16128 1.00677 6.5037 1.34919 6.64633 1.78588C6.7175 2.00376 6.7175 2.2731 6.7175 2.81179C6.7175 3.35048 6.7175 3.61983 6.64633 3.83771C6.5037 4.27439 6.16128 4.61682 5.72459 4.75945C5.50671 4.83062 5.23737 4.83062 4.69868 4.83062H3.53443C3.42259 4.83062 3.36668 4.83062 3.31249 4.83471C3.04411 4.855 2.78679 4.95009 2.56972 5.1092C2.52589 5.14132 2.48341 5.17768 2.39845 5.25041C2.25625 5.37213 2.18514 5.433 2.1328 5.45926C1.85771 5.59733 1.52559 5.44444 1.45158 5.14567C1.4375 5.08883 1.4375 4.99523 1.4375 4.80804Z"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            12
                                                                        </span>
                                                                    </div>
                                                                    <div className="ml-auto flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <circle
                                                                                cx="4.24312"
                                                                                cy="3.90328"
                                                                                r="3.04"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M4.36401 2.26562L4.36401 3.43486C4.36401 3.69316 4.15462 3.90255 3.89632 3.90255L2.96094 3.90255"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            9
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="z-[1] w-[140px] bg-white border absolute rounded-8px border-neutral-dark-900 flex flex-col"
                                                                data-projection-id={3}
                                                                style={{
                                                                    top: 286,
                                                                    left: 24,
                                                                    transform: "translateY(-150px) translateZ(0px)"
                                                                }}
                                                            >
                                                                <div className="px-8px py-[6px] gap-[4px] flex flex-row items-center">
                                                                    <div
                                                                        className="rounded-full w-[10px] h-[10px] flex justify-center items-center"
                                                                        style={{ backgroundColor: "rgb(15, 107, 233)" }}
                                                                    >
                                                                        <span className="text-white font-inter font-medium text-[6px]">
                                                                            T
                                                                        </span>
                                                                    </div>
                                                                    <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px] underline underline-offset-4 decoration-neutral-dark-900">
                                                                        Terry Stein
                                                                    </span>
                                                                </div>
                                                                <div className="w-[100%] bg-neutral-dark-900 h-[1px] my-[2px]" />
                                                                <div className="flex flex-col">
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141538)">
                                                                                <path
                                                                                    d="M3.05451 8.94191H7.26799C7.69505 8.94191 8.04125 8.59571 8.04125 8.16865C8.04125 7.11116 7.18399 6.25391 6.12651 6.25391H5.16125H4.19599C3.13851 6.25391 2.28125 7.11116 2.28125 8.16865C2.28125 8.59571 2.62745 8.94191 3.05451 8.94191Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <circle
                                                                                    cx="5.22906"
                                                                                    cy="3.34234"
                                                                                    r="1.44"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141538">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.941406)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(255, 237, 203)",
                                                                                color: "rgb(126, 83, 8)"
                                                                            }}
                                                                        >
                                                                            Product Designer
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141552)">
                                                                                <path
                                                                                    d="M1.72462 8.17962H6.19194C6.59214 8.17962 6.91656 7.8552 6.91656 7.455C6.91656 6.42275 6.07975 5.58594 5.0475 5.58594H3.95828L2.86906 5.58594C1.83681 5.58594 1 6.42275 1 7.455C1 7.8552 1.32442 8.17962 1.72462 8.17962Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <ellipse
                                                                                    cx="4.02602"
                                                                                    cy="2.61512"
                                                                                    rx="1.47914"
                                                                                    ry="1.4784"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M7.54688 5.60156C8.54511 5.74023 9.32164 6.59506 9.32164 7.63187C9.32164 8.08289 8.85954 8.04584 8.52852 8.04584H8.12062"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.21875 4.10093C7.03566 4.10093 7.69789 3.43737 7.69789 2.61882C7.69789 1.80028 7.03566 1.13672 6.21875 1.13672"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141552">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.179688)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(231, 231, 231)",
                                                                                color: "rgb(94, 94, 94)"
                                                                            }}
                                                                        >
                                                                            Design
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141566)">
                                                                                <path
                                                                                    d="M5.16031 7.82187L3.88031 7.82187C2.98423 7.82187 2.53619 7.82187 2.19393 7.64748C1.89287 7.49409 1.6481 7.24932 1.4947 6.94826C1.32031 6.606 1.32031 6.15796 1.32031 5.26187L1.32031 3.98187C1.32031 3.08579 1.32031 2.63775 1.4947 2.29549C1.6481 1.99443 1.89287 1.74966 2.19393 1.59626C2.53619 1.42187 2.98423 1.42187 3.88031 1.42187L6.76031 1.42187C7.35592 1.42187 7.65373 1.42187 7.89474 1.50018C8.38184 1.65845 8.76373 2.04035 8.922 2.52745C8.98484 2.72084 8.99726 4.23081 8.99971 4.62187"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                />
                                                                                <path
                                                                                    d="M5.99219 6.63562L8.68019 6.63562M8.68019 6.63562L7.60499 5.51562M8.68019 6.63562L7.60499 7.75562"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M2.92188 3.5L7.40187 3.5"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M3.36719 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.95312 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141566">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.140625)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            In 3 days
                                                                        </span>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141584)">
                                                                                <path
                                                                                    d="M8.36094 4.75237C8.36094 7.11874 6.39491 9.14094 5.16094 9.14094C3.92696 9.14094 1.96094 7.11874 1.96094 4.75237C1.96094 2.93456 3.39363 1.46094 5.16094 1.46094C6.92825 1.46094 8.36094 2.93456 8.36094 4.75237Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                                <circle
                                                                                    cx="5.15906"
                                                                                    cy="4.65906"
                                                                                    r="1.12"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141584">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.820312)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            New York
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-[4px] px-8px py-4px flex flex-row gap-8px">
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M5.48063 0.542969L3.68862 0.542969C2.97175 0.542969 2.61332 0.542969 2.33951 0.682481C2.09867 0.805199 1.90285 1.00102 1.78013 1.24186C1.64062 1.51567 1.64062 1.87444 1.64063 2.59197C1.64063 3.56708 1.64064 4.23887 1.64064 5.21397C1.64065 5.93152 1.64065 6.29029 1.78016 6.56409C1.90288 6.80494 2.09869 7.00075 2.33954 7.12347C2.61335 7.26298 2.97178 7.26298 3.68865 7.26298H5.35262C6.06949 7.26298 6.42792 7.26298 6.70173 7.12347C6.94258 7.00075 7.13839 6.80494 7.26111 6.56409C7.40062 6.29028 7.40062 5.93185 7.40062 5.21498L7.40062 2.46297M5.48063 0.542969V1.69497C5.48063 1.9638 5.48063 2.09821 5.53295 2.20089C5.57897 2.29121 5.6524 2.36464 5.74272 2.41066C5.8454 2.46297 5.97981 2.46297 6.24863 2.46297H7.40062M5.48063 0.542969L6.44063 1.50297L7.40062 2.46297"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="w-[4px]" />
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={8}
                                                                            height={8}
                                                                            viewBox="0 0 8 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M2.75781 4.10895L2.82648 4.23297C3.05688 4.64914 3.17208 4.85722 3.3249 4.92739C3.45815 4.98858 3.61123 4.98971 3.74536 4.93049C3.89919 4.86257 4.01744 4.6562 4.25395 4.24347L4.99781 2.94531"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <rect
                                                                                x="0.835938"
                                                                                y="0.863281"
                                                                                width="6.08"
                                                                                height="6.08"
                                                                                rx="1.28"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            2
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M7.59106 3.00815C7.89745 3.24213 8.10667 3.59634 8.14952 4.00156C8.1575 4.07705 8.1575 4.16674 8.1575 4.3461V6.28977C8.1575 6.49495 8.1575 6.59754 8.13953 6.66135C8.0619 6.93703 7.76168 7.08381 7.49644 6.97578C7.43504 6.95077 7.35408 6.88777 7.19215 6.76176C7.09736 6.688 7.04997 6.65112 7.00096 6.61902C6.79971 6.48718 6.56863 6.40786 6.32883 6.38832C6.27044 6.38356 6.21039 6.38356 6.09028 6.38356H4.38809C4.32255 6.38356 4.28978 6.38356 4.26207 6.38249C3.82472 6.36564 3.43779 6.15459 3.18494 5.83297M1.4375 4.80804V3.09697C1.4375 2.29049 1.4375 1.88726 1.59445 1.57922C1.73251 1.30827 1.9528 1.08798 2.22375 0.949919C2.53179 0.792969 2.93502 0.792969 3.7415 0.792969H4.69868C5.23737 0.792969 5.50671 0.792969 5.72459 0.864134C6.16128 1.00677 6.5037 1.34919 6.64633 1.78588C6.7175 2.00376 6.7175 2.2731 6.7175 2.81179C6.7175 3.35048 6.7175 3.61983 6.64633 3.83771C6.5037 4.27439 6.16128 4.61682 5.72459 4.75945C5.50671 4.83062 5.23737 4.83062 4.69868 4.83062H3.53443C3.42259 4.83062 3.36668 4.83062 3.31249 4.83471C3.04411 4.855 2.78679 4.95009 2.56972 5.1092C2.52589 5.14132 2.48341 5.17768 2.39845 5.25041C2.25625 5.37213 2.18514 5.433 2.1328 5.45926C1.85771 5.59733 1.52559 5.44444 1.45158 5.14567C1.4375 5.08883 1.4375 4.99523 1.4375 4.80804Z"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            4
                                                                        </span>
                                                                    </div>
                                                                    <div className="ml-auto flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <circle
                                                                                cx="4.24312"
                                                                                cy="3.90328"
                                                                                r="3.04"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M4.36401 2.26562L4.36401 3.43486C4.36401 3.69316 4.15462 3.90255 3.89632 3.90255L2.96094 3.90255"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            3
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="z-[1] w-[140px] bg-white border absolute rounded-8px border-neutral-dark-900 flex flex-col"
                                                                data-projection-id={4}
                                                                style={{
                                                                    top: 136,
                                                                    left: 176,
                                                                    transform:
                                                                        "translateX(147.448px) translateY(150px) scale(1.05) translateZ(0px)",
                                                                    zIndex: 4,
                                                                    borderColor: "rgb(15, 107, 233)",
                                                                    backgroundColor: "rgb(238, 241, 254)"
                                                                }}
                                                            >
                                                                <div className="px-8px py-[6px] gap-[4px] flex flex-row items-center">
                                                                    <div
                                                                        className="rounded-full w-[10px] h-[10px] flex justify-center items-center"
                                                                        style={{ backgroundColor: "rgb(25, 170, 108)" }}
                                                                    >
                                                                        <span className="text-white font-inter font-medium text-[6px]">
                                                                            C
                                                                        </span>
                                                                    </div>
                                                                    <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px] underline underline-offset-4 decoration-neutral-dark-900">
                                                                        Chelsea Wright
                                                                    </span>
                                                                </div>
                                                                <div className="w-[100%] bg-neutral-dark-900 h-[1px] my-[2px]" />
                                                                <div className="flex flex-col">
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141538)">
                                                                                <path
                                                                                    d="M3.05451 8.94191H7.26799C7.69505 8.94191 8.04125 8.59571 8.04125 8.16865C8.04125 7.11116 7.18399 6.25391 6.12651 6.25391H5.16125H4.19599C3.13851 6.25391 2.28125 7.11116 2.28125 8.16865C2.28125 8.59571 2.62745 8.94191 3.05451 8.94191Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <circle
                                                                                    cx="5.22906"
                                                                                    cy="3.34234"
                                                                                    r="1.44"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141538">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.941406)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(255, 237, 203)",
                                                                                color: "rgb(126, 83, 8)"
                                                                            }}
                                                                        >
                                                                            Sales Engineer
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141552)">
                                                                                <path
                                                                                    d="M1.72462 8.17962H6.19194C6.59214 8.17962 6.91656 7.8552 6.91656 7.455C6.91656 6.42275 6.07975 5.58594 5.0475 5.58594H3.95828L2.86906 5.58594C1.83681 5.58594 1 6.42275 1 7.455C1 7.8552 1.32442 8.17962 1.72462 8.17962Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <ellipse
                                                                                    cx="4.02602"
                                                                                    cy="2.61512"
                                                                                    rx="1.47914"
                                                                                    ry="1.4784"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M7.54688 5.60156C8.54511 5.74023 9.32164 6.59506 9.32164 7.63187C9.32164 8.08289 8.85954 8.04584 8.52852 8.04584H8.12062"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.21875 4.10093C7.03566 4.10093 7.69789 3.43737 7.69789 2.61882C7.69789 1.80028 7.03566 1.13672 6.21875 1.13672"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141552">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.179688)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(254, 236, 240)",
                                                                                color: "rgb(172, 9, 79)"
                                                                            }}
                                                                        >
                                                                            Sales
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141566)">
                                                                                <path
                                                                                    d="M5.16031 7.82187L3.88031 7.82187C2.98423 7.82187 2.53619 7.82187 2.19393 7.64748C1.89287 7.49409 1.6481 7.24932 1.4947 6.94826C1.32031 6.606 1.32031 6.15796 1.32031 5.26187L1.32031 3.98187C1.32031 3.08579 1.32031 2.63775 1.4947 2.29549C1.6481 1.99443 1.89287 1.74966 2.19393 1.59626C2.53619 1.42187 2.98423 1.42187 3.88031 1.42187L6.76031 1.42187C7.35592 1.42187 7.65373 1.42187 7.89474 1.50018C8.38184 1.65845 8.76373 2.04035 8.922 2.52745C8.98484 2.72084 8.99726 4.23081 8.99971 4.62187"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                />
                                                                                <path
                                                                                    d="M5.99219 6.63562L8.68019 6.63562M8.68019 6.63562L7.60499 5.51562M8.68019 6.63562L7.60499 7.75562"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M2.92188 3.5L7.40187 3.5"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M3.36719 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.95312 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141566">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.140625)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            In 7 days
                                                                        </span>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141584)">
                                                                                <path
                                                                                    d="M8.36094 4.75237C8.36094 7.11874 6.39491 9.14094 5.16094 9.14094C3.92696 9.14094 1.96094 7.11874 1.96094 4.75237C1.96094 2.93456 3.39363 1.46094 5.16094 1.46094C6.92825 1.46094 8.36094 2.93456 8.36094 4.75237Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                                <circle
                                                                                    cx="5.15906"
                                                                                    cy="4.65906"
                                                                                    r="1.12"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141584">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.820312)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            New York
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-[4px] px-8px py-4px flex flex-row gap-8px">
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M5.48063 0.542969L3.68862 0.542969C2.97175 0.542969 2.61332 0.542969 2.33951 0.682481C2.09867 0.805199 1.90285 1.00102 1.78013 1.24186C1.64062 1.51567 1.64062 1.87444 1.64063 2.59197C1.64063 3.56708 1.64064 4.23887 1.64064 5.21397C1.64065 5.93152 1.64065 6.29029 1.78016 6.56409C1.90288 6.80494 2.09869 7.00075 2.33954 7.12347C2.61335 7.26298 2.97178 7.26298 3.68865 7.26298H5.35262C6.06949 7.26298 6.42792 7.26298 6.70173 7.12347C6.94258 7.00075 7.13839 6.80494 7.26111 6.56409C7.40062 6.29028 7.40062 5.93185 7.40062 5.21498L7.40062 2.46297M5.48063 0.542969V1.69497C5.48063 1.9638 5.48063 2.09821 5.53295 2.20089C5.57897 2.29121 5.6524 2.36464 5.74272 2.41066C5.8454 2.46297 5.97981 2.46297 6.24863 2.46297H7.40062M5.48063 0.542969L6.44063 1.50297L7.40062 2.46297"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="w-[4px]" />
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={8}
                                                                            height={8}
                                                                            viewBox="0 0 8 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M2.75781 4.10895L2.82648 4.23297C3.05688 4.64914 3.17208 4.85722 3.3249 4.92739C3.45815 4.98858 3.61123 4.98971 3.74536 4.93049C3.89919 4.86257 4.01744 4.6562 4.25395 4.24347L4.99781 2.94531"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <rect
                                                                                x="0.835938"
                                                                                y="0.863281"
                                                                                width="6.08"
                                                                                height="6.08"
                                                                                rx="1.28"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            4
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M7.59106 3.00815C7.89745 3.24213 8.10667 3.59634 8.14952 4.00156C8.1575 4.07705 8.1575 4.16674 8.1575 4.3461V6.28977C8.1575 6.49495 8.1575 6.59754 8.13953 6.66135C8.0619 6.93703 7.76168 7.08381 7.49644 6.97578C7.43504 6.95077 7.35408 6.88777 7.19215 6.76176C7.09736 6.688 7.04997 6.65112 7.00096 6.61902C6.79971 6.48718 6.56863 6.40786 6.32883 6.38832C6.27044 6.38356 6.21039 6.38356 6.09028 6.38356H4.38809C4.32255 6.38356 4.28978 6.38356 4.26207 6.38249C3.82472 6.36564 3.43779 6.15459 3.18494 5.83297M1.4375 4.80804V3.09697C1.4375 2.29049 1.4375 1.88726 1.59445 1.57922C1.73251 1.30827 1.9528 1.08798 2.22375 0.949919C2.53179 0.792969 2.93502 0.792969 3.7415 0.792969H4.69868C5.23737 0.792969 5.50671 0.792969 5.72459 0.864134C6.16128 1.00677 6.5037 1.34919 6.64633 1.78588C6.7175 2.00376 6.7175 2.2731 6.7175 2.81179C6.7175 3.35048 6.7175 3.61983 6.64633 3.83771C6.5037 4.27439 6.16128 4.61682 5.72459 4.75945C5.50671 4.83062 5.23737 4.83062 4.69868 4.83062H3.53443C3.42259 4.83062 3.36668 4.83062 3.31249 4.83471C3.04411 4.855 2.78679 4.95009 2.56972 5.1092C2.52589 5.14132 2.48341 5.17768 2.39845 5.25041C2.25625 5.37213 2.18514 5.433 2.1328 5.45926C1.85771 5.59733 1.52559 5.44444 1.45158 5.14567C1.4375 5.08883 1.4375 4.99523 1.4375 4.80804Z"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            2
                                                                        </span>
                                                                    </div>
                                                                    <div className="ml-auto flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <circle
                                                                                cx="4.24312"
                                                                                cy="3.90328"
                                                                                r="3.04"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M4.36401 2.26562L4.36401 3.43486C4.36401 3.69316 4.15462 3.90255 3.89632 3.90255L2.96094 3.90255"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            3
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="z-[1] w-[140px] bg-white border absolute rounded-8px border-neutral-dark-900 flex flex-col"
                                                                data-projection-id={5}
                                                                style={{ top: 416, left: 176 }}
                                                            >
                                                                <div className="px-8px py-[6px] gap-[4px] flex flex-row items-center">
                                                                    <div
                                                                        className="rounded-full w-[10px] h-[10px] flex justify-center items-center"
                                                                        style={{ backgroundColor: "rgb(6, 160, 198)" }}
                                                                    >
                                                                        <span className="text-white font-inter font-medium text-[6px]">
                                                                            L
                                                                        </span>
                                                                    </div>
                                                                    <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px] underline underline-offset-4 decoration-neutral-dark-900">
                                                                        Lori Simpson
                                                                    </span>
                                                                </div>
                                                                <div className="w-[100%] bg-neutral-dark-900 h-[1px] my-[2px]" />
                                                                <div className="flex flex-col">
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141538)">
                                                                                <path
                                                                                    d="M3.05451 8.94191H7.26799C7.69505 8.94191 8.04125 8.59571 8.04125 8.16865C8.04125 7.11116 7.18399 6.25391 6.12651 6.25391H5.16125H4.19599C3.13851 6.25391 2.28125 7.11116 2.28125 8.16865C2.28125 8.59571 2.62745 8.94191 3.05451 8.94191Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <circle
                                                                                    cx="5.22906"
                                                                                    cy="3.34234"
                                                                                    r="1.44"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141538">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.941406)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(255, 237, 203)",
                                                                                color: "rgb(126, 83, 8)"
                                                                            }}
                                                                        >
                                                                            Director
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141552)">
                                                                                <path
                                                                                    d="M1.72462 8.17962H6.19194C6.59214 8.17962 6.91656 7.8552 6.91656 7.455C6.91656 6.42275 6.07975 5.58594 5.0475 5.58594H3.95828L2.86906 5.58594C1.83681 5.58594 1 6.42275 1 7.455C1 7.8552 1.32442 8.17962 1.72462 8.17962Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <ellipse
                                                                                    cx="4.02602"
                                                                                    cy="2.61512"
                                                                                    rx="1.47914"
                                                                                    ry="1.4784"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M7.54688 5.60156C8.54511 5.74023 9.32164 6.59506 9.32164 7.63187C9.32164 8.08289 8.85954 8.04584 8.52852 8.04584H8.12062"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.21875 4.10093C7.03566 4.10093 7.69789 3.43737 7.69789 2.61882C7.69789 1.80028 7.03566 1.13672 6.21875 1.13672"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141552">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.179688)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(254, 236, 240)",
                                                                                color: "rgb(172, 9, 79)"
                                                                            }}
                                                                        >
                                                                            Finance
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141566)">
                                                                                <path
                                                                                    d="M5.16031 7.82187L3.88031 7.82187C2.98423 7.82187 2.53619 7.82187 2.19393 7.64748C1.89287 7.49409 1.6481 7.24932 1.4947 6.94826C1.32031 6.606 1.32031 6.15796 1.32031 5.26187L1.32031 3.98187C1.32031 3.08579 1.32031 2.63775 1.4947 2.29549C1.6481 1.99443 1.89287 1.74966 2.19393 1.59626C2.53619 1.42187 2.98423 1.42187 3.88031 1.42187L6.76031 1.42187C7.35592 1.42187 7.65373 1.42187 7.89474 1.50018C8.38184 1.65845 8.76373 2.04035 8.922 2.52745C8.98484 2.72084 8.99726 4.23081 8.99971 4.62187"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                />
                                                                                <path
                                                                                    d="M5.99219 6.63562L8.68019 6.63562M8.68019 6.63562L7.60499 5.51562M8.68019 6.63562L7.60499 7.75562"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M2.92188 3.5L7.40187 3.5"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M3.36719 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.95312 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141566">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.140625)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            In 6 days
                                                                        </span>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141584)">
                                                                                <path
                                                                                    d="M8.36094 4.75237C8.36094 7.11874 6.39491 9.14094 5.16094 9.14094C3.92696 9.14094 1.96094 7.11874 1.96094 4.75237C1.96094 2.93456 3.39363 1.46094 5.16094 1.46094C6.92825 1.46094 8.36094 2.93456 8.36094 4.75237Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                                <circle
                                                                                    cx="5.15906"
                                                                                    cy="4.65906"
                                                                                    r="1.12"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141584">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.820312)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            Barcelona
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-[4px] px-8px py-4px flex flex-row gap-8px">
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M5.48063 0.542969L3.68862 0.542969C2.97175 0.542969 2.61332 0.542969 2.33951 0.682481C2.09867 0.805199 1.90285 1.00102 1.78013 1.24186C1.64062 1.51567 1.64062 1.87444 1.64063 2.59197C1.64063 3.56708 1.64064 4.23887 1.64064 5.21397C1.64065 5.93152 1.64065 6.29029 1.78016 6.56409C1.90288 6.80494 2.09869 7.00075 2.33954 7.12347C2.61335 7.26298 2.97178 7.26298 3.68865 7.26298H5.35262C6.06949 7.26298 6.42792 7.26298 6.70173 7.12347C6.94258 7.00075 7.13839 6.80494 7.26111 6.56409C7.40062 6.29028 7.40062 5.93185 7.40062 5.21498L7.40062 2.46297M5.48063 0.542969V1.69497C5.48063 1.9638 5.48063 2.09821 5.53295 2.20089C5.57897 2.29121 5.6524 2.36464 5.74272 2.41066C5.8454 2.46297 5.97981 2.46297 6.24863 2.46297H7.40062M5.48063 0.542969L6.44063 1.50297L7.40062 2.46297"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="w-[4px]" />
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={8}
                                                                            height={8}
                                                                            viewBox="0 0 8 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M2.75781 4.10895L2.82648 4.23297C3.05688 4.64914 3.17208 4.85722 3.3249 4.92739C3.45815 4.98858 3.61123 4.98971 3.74536 4.93049C3.89919 4.86257 4.01744 4.6562 4.25395 4.24347L4.99781 2.94531"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <rect
                                                                                x="0.835938"
                                                                                y="0.863281"
                                                                                width="6.08"
                                                                                height="6.08"
                                                                                rx="1.28"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            3
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M7.59106 3.00815C7.89745 3.24213 8.10667 3.59634 8.14952 4.00156C8.1575 4.07705 8.1575 4.16674 8.1575 4.3461V6.28977C8.1575 6.49495 8.1575 6.59754 8.13953 6.66135C8.0619 6.93703 7.76168 7.08381 7.49644 6.97578C7.43504 6.95077 7.35408 6.88777 7.19215 6.76176C7.09736 6.688 7.04997 6.65112 7.00096 6.61902C6.79971 6.48718 6.56863 6.40786 6.32883 6.38832C6.27044 6.38356 6.21039 6.38356 6.09028 6.38356H4.38809C4.32255 6.38356 4.28978 6.38356 4.26207 6.38249C3.82472 6.36564 3.43779 6.15459 3.18494 5.83297M1.4375 4.80804V3.09697C1.4375 2.29049 1.4375 1.88726 1.59445 1.57922C1.73251 1.30827 1.9528 1.08798 2.22375 0.949919C2.53179 0.792969 2.93502 0.792969 3.7415 0.792969H4.69868C5.23737 0.792969 5.50671 0.792969 5.72459 0.864134C6.16128 1.00677 6.5037 1.34919 6.64633 1.78588C6.7175 2.00376 6.7175 2.2731 6.7175 2.81179C6.7175 3.35048 6.7175 3.61983 6.64633 3.83771C6.5037 4.27439 6.16128 4.61682 5.72459 4.75945C5.50671 4.83062 5.23737 4.83062 4.69868 4.83062H3.53443C3.42259 4.83062 3.36668 4.83062 3.31249 4.83471C3.04411 4.855 2.78679 4.95009 2.56972 5.1092C2.52589 5.14132 2.48341 5.17768 2.39845 5.25041C2.25625 5.37213 2.18514 5.433 2.1328 5.45926C1.85771 5.59733 1.52559 5.44444 1.45158 5.14567C1.4375 5.08883 1.4375 4.99523 1.4375 4.80804Z"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            11
                                                                        </span>
                                                                    </div>
                                                                    <div className="ml-auto flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <circle
                                                                                cx="4.24312"
                                                                                cy="3.90328"
                                                                                r="3.04"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M4.36401 2.26562L4.36401 3.43486C4.36401 3.69316 4.15462 3.90255 3.89632 3.90255L2.96094 3.90255"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            6
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="z-[1] w-[140px] bg-white border absolute rounded-8px border-neutral-dark-900 flex flex-col"
                                                                data-projection-id={6}
                                                                style={{ top: 136, left: 326 }}
                                                            >
                                                                <div className="px-8px py-[6px] gap-[4px] flex flex-row items-center">
                                                                    <div
                                                                        className="rounded-full w-[10px] h-[10px] flex justify-center items-center"
                                                                        style={{ backgroundColor: "rgb(15, 107, 233)" }}
                                                                    >
                                                                        <span className="text-white font-inter font-medium text-[6px]">
                                                                            S
                                                                        </span>
                                                                    </div>
                                                                    <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px] underline underline-offset-4 decoration-neutral-dark-900">
                                                                        Sandra Wise
                                                                    </span>
                                                                </div>
                                                                <div className="w-[100%] bg-neutral-dark-900 h-[1px] my-[2px]" />
                                                                <div className="flex flex-col">
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141538)">
                                                                                <path
                                                                                    d="M3.05451 8.94191H7.26799C7.69505 8.94191 8.04125 8.59571 8.04125 8.16865C8.04125 7.11116 7.18399 6.25391 6.12651 6.25391H5.16125H4.19599C3.13851 6.25391 2.28125 7.11116 2.28125 8.16865C2.28125 8.59571 2.62745 8.94191 3.05451 8.94191Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <circle
                                                                                    cx="5.22906"
                                                                                    cy="3.34234"
                                                                                    r="1.44"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141538">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.941406)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(208, 253, 218)",
                                                                                color: "rgb(20, 101, 64)"
                                                                            }}
                                                                        >
                                                                            Manager
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141552)">
                                                                                <path
                                                                                    d="M1.72462 8.17962H6.19194C6.59214 8.17962 6.91656 7.8552 6.91656 7.455C6.91656 6.42275 6.07975 5.58594 5.0475 5.58594H3.95828L2.86906 5.58594C1.83681 5.58594 1 6.42275 1 7.455C1 7.8552 1.32442 8.17962 1.72462 8.17962Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <ellipse
                                                                                    cx="4.02602"
                                                                                    cy="2.61512"
                                                                                    rx="1.47914"
                                                                                    ry="1.4784"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M7.54688 5.60156C8.54511 5.74023 9.32164 6.59506 9.32164 7.63187C9.32164 8.08289 8.85954 8.04584 8.52852 8.04584H8.12062"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.21875 4.10093C7.03566 4.10093 7.69789 3.43737 7.69789 2.61882C7.69789 1.80028 7.03566 1.13672 6.21875 1.13672"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141552">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.179688)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <div
                                                                            className="px-[4px] py-[2px] rounded-6px text-[8px] font-medium"
                                                                            style={{
                                                                                backgroundColor: "rgb(255, 237, 203)",
                                                                                color: "rgb(126, 83, 8)"
                                                                            }}
                                                                        >
                                                                            Marketing
                                                                        </div>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141566)">
                                                                                <path
                                                                                    d="M5.16031 7.82187L3.88031 7.82187C2.98423 7.82187 2.53619 7.82187 2.19393 7.64748C1.89287 7.49409 1.6481 7.24932 1.4947 6.94826C1.32031 6.606 1.32031 6.15796 1.32031 5.26187L1.32031 3.98187C1.32031 3.08579 1.32031 2.63775 1.4947 2.29549C1.6481 1.99443 1.89287 1.74966 2.19393 1.59626C2.53619 1.42187 2.98423 1.42187 3.88031 1.42187L6.76031 1.42187C7.35592 1.42187 7.65373 1.42187 7.89474 1.50018C8.38184 1.65845 8.76373 2.04035 8.922 2.52745C8.98484 2.72084 8.99726 4.23081 8.99971 4.62187"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                />
                                                                                <path
                                                                                    d="M5.99219 6.63562L8.68019 6.63562M8.68019 6.63562L7.60499 5.51562M8.68019 6.63562L7.60499 7.75562"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M2.92188 3.5L7.40187 3.5"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M3.36719 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M6.95312 0.78125V1.90125"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141566">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.140625)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            In 3 days
                                                                        </span>
                                                                    </div>
                                                                    <div className="px-8px py-4px flex flex-row items-center gap-[4px]">
                                                                        <svg
                                                                            width={10}
                                                                            height={10}
                                                                            viewBox="0 0 10 10"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_844_141584)">
                                                                                <path
                                                                                    d="M8.36094 4.75237C8.36094 7.11874 6.39491 9.14094 5.16094 9.14094C3.92696 9.14094 1.96094 7.11874 1.96094 4.75237C1.96094 2.93456 3.39363 1.46094 5.16094 1.46094C6.92825 1.46094 8.36094 2.93456 8.36094 4.75237Z"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                                <circle
                                                                                    cx="5.15906"
                                                                                    cy="4.65906"
                                                                                    r="1.12"
                                                                                    stroke="#5E5E5E"
                                                                                    strokeWidth="0.704"
                                                                                />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_844_141584">
                                                                                    <rect
                                                                                        width="8.96"
                                                                                        height="8.96"
                                                                                        fill="white"
                                                                                        transform="translate(0.679688 0.820312)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span className="font-inter text-[9px] font-medium text-[#313337] leading-[13px]">
                                                                            Atlanta
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-[4px] px-8px py-4px flex flex-row gap-8px">
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M5.48063 0.542969L3.68862 0.542969C2.97175 0.542969 2.61332 0.542969 2.33951 0.682481C2.09867 0.805199 1.90285 1.00102 1.78013 1.24186C1.64062 1.51567 1.64062 1.87444 1.64063 2.59197C1.64063 3.56708 1.64064 4.23887 1.64064 5.21397C1.64065 5.93152 1.64065 6.29029 1.78016 6.56409C1.90288 6.80494 2.09869 7.00075 2.33954 7.12347C2.61335 7.26298 2.97178 7.26298 3.68865 7.26298H5.35262C6.06949 7.26298 6.42792 7.26298 6.70173 7.12347C6.94258 7.00075 7.13839 6.80494 7.26111 6.56409C7.40062 6.29028 7.40062 5.93185 7.40062 5.21498L7.40062 2.46297M5.48063 0.542969V1.69497C5.48063 1.9638 5.48063 2.09821 5.53295 2.20089C5.57897 2.29121 5.6524 2.36464 5.74272 2.41066C5.8454 2.46297 5.97981 2.46297 6.24863 2.46297H7.40062M5.48063 0.542969L6.44063 1.50297L7.40062 2.46297"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="w-[4px]" />
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={8}
                                                                            height={8}
                                                                            viewBox="0 0 8 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M2.75781 4.10895L2.82648 4.23297C3.05688 4.64914 3.17208 4.85722 3.3249 4.92739C3.45815 4.98858 3.61123 4.98971 3.74536 4.93049C3.89919 4.86257 4.01744 4.6562 4.25395 4.24347L4.99781 2.94531"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <rect
                                                                                x="0.835938"
                                                                                y="0.863281"
                                                                                width="6.08"
                                                                                height="6.08"
                                                                                rx="1.28"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            4
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M7.59106 3.00815C7.89745 3.24213 8.10667 3.59634 8.14952 4.00156C8.1575 4.07705 8.1575 4.16674 8.1575 4.3461V6.28977C8.1575 6.49495 8.1575 6.59754 8.13953 6.66135C8.0619 6.93703 7.76168 7.08381 7.49644 6.97578C7.43504 6.95077 7.35408 6.88777 7.19215 6.76176C7.09736 6.688 7.04997 6.65112 7.00096 6.61902C6.79971 6.48718 6.56863 6.40786 6.32883 6.38832C6.27044 6.38356 6.21039 6.38356 6.09028 6.38356H4.38809C4.32255 6.38356 4.28978 6.38356 4.26207 6.38249C3.82472 6.36564 3.43779 6.15459 3.18494 5.83297M1.4375 4.80804V3.09697C1.4375 2.29049 1.4375 1.88726 1.59445 1.57922C1.73251 1.30827 1.9528 1.08798 2.22375 0.949919C2.53179 0.792969 2.93502 0.792969 3.7415 0.792969H4.69868C5.23737 0.792969 5.50671 0.792969 5.72459 0.864134C6.16128 1.00677 6.5037 1.34919 6.64633 1.78588C6.7175 2.00376 6.7175 2.2731 6.7175 2.81179C6.7175 3.35048 6.7175 3.61983 6.64633 3.83771C6.5037 4.27439 6.16128 4.61682 5.72459 4.75945C5.50671 4.83062 5.23737 4.83062 4.69868 4.83062H3.53443C3.42259 4.83062 3.36668 4.83062 3.31249 4.83471C3.04411 4.855 2.78679 4.95009 2.56972 5.1092C2.52589 5.14132 2.48341 5.17768 2.39845 5.25041C2.25625 5.37213 2.18514 5.433 2.1328 5.45926C1.85771 5.59733 1.52559 5.44444 1.45158 5.14567C1.4375 5.08883 1.4375 4.99523 1.4375 4.80804Z"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            2
                                                                        </span>
                                                                    </div>
                                                                    <div className="ml-auto flex flex-row items-center gap-[2px]">
                                                                        <svg
                                                                            width={9}
                                                                            height={8}
                                                                            viewBox="0 0 9 8"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <circle
                                                                                cx="4.24312"
                                                                                cy="3.90328"
                                                                                r="3.04"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M4.36401 2.26562L4.36401 3.43486C4.36401 3.69316 4.15462 3.90255 3.89632 3.90255L2.96094 3.90255"
                                                                                stroke="#9FA1A7"
                                                                                strokeWidth="0.64"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <span className="font-inter text-[8px] font-medium text-[#313337] leading-[10px]">
                                                                            7
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <picture className="relative">
                                                        <source
                                                            media="(min-width: 992px)"
                                                            srcSet="https://attio.com/build/_assets/scroll-frame-ITYBYWBA.webp"
                                                            type="image/png"
                                                            width={765}
                                                            height={366}
                                                        />
                                                        <img
                                                            src="https://attio.com/build/_assets/scroll-frame-ITYBYWBA.webp"
                                                            className="min-w-[765px] min-h-[366px]"
                                                        />
                                                    </picture>
                                                </div>
                                            </div>
                                            <picture className="relative z-[3]">
                                                <source
                                                    media="(min-width: 992px)"
                                                    srcSet="https://attio.com/build/_assets/mobile-frame-7HZRGLSZ.webp"
                                                    type="image/png"
                                                    width={258}
                                                    height={366}
                                                />
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    src="https://attio.com/build/_assets/mobile-frame-7HZRGLSZ.webp"
                                                    className="min-w-[258px] min-h-[366px]"
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col tablet:flex-row gap-24px">
                                    <div className="rounded-[20px] overflow-hidden pt-[24px] tablet:pt-[40px] w-full tablet:max-w-[448px] max-h-[540px] flex-1 card-light-shadow bg-background-light-primary">
                                        <span className="inline-block max-w-[420px] pb-[48px] tablet:pb-[60px] px-[24px] tablet:px-[40px]">
                                            <span
                                                role="heading"
                                                aria-level={3}
                                                className="typography-p5-strong phablet:typography-p4-strong text-typography-light-secondary"
                                            >
                                                Permission control.
                                            </span>{" "}
                                            <span className="typography-p5-medium phablet:typography-p4-medium text-typography-light-tertiary">
                                                Control how your team interacts with your business’s
                                                collections, views, and emails.
                                            </span>
                                        </span>
                                        <div className="relative mr-auto mt-auto">
                                            <img
                                                alt=""
                                                loading="lazy"
                                                src="https://attio.com/build/_assets/list-access-frame-OUSZPSQC.webp"
                                                className="phablet:h-[366px]"
                                            />
                                            <div
                                                className="absolute top-[5px] left-[30px] rounded-12px border border-neutral-dark-900 bg-white w-[408px] opacity-0 flex flex-col"
                                                style={{
                                                    opacity: 1,
                                                    transform: "translateY(41px) translateZ(0px)"
                                                }}
                                            >
                                                <div className="py-[8px] px-[12px] flex flex-row items-center">
                                                    <span className="font-inter font-medium text-[10px] text-[#5E5E5E] leading-[16px]">
                                                        List access
                                                    </span>
                                                </div>
                                                <div className="mt-[10px] px-[12px] flex flex-row items-center">
                                                    <picture className="mr-[12px]">
                                                        <source
                                                            media="(min-width: 992px)"
                                                            srcSet="https://attio.com/build/_assets/workspace-logo-GHEJ7UHU.webp"
                                                            type="image/png"
                                                            width={34}
                                                            height={34}
                                                        />
                                                        <img
                                                            src="https://attio.com/build/_assets/workspace-logo-GHEJ7UHU.webp"
                                                            loading="lazy"
                                                            alt=""
                                                            className="min-w-[34px] min-h-[34px] rounded-[12px] h-[34px] w-[34px]"
                                                        />
                                                    </picture>
                                                    <span className="font-inter font-medium text-[14px] text-[#313337] leading-[12px]">
                                                        Workspace Access
                                                    </span>
                                                    <div className="ml-auto mock-button-secondary">
                                                        <span className="font-inter text-[14px] font-medium leading-[20px] text-[#111111] -tracking-0.2px">
                                                            Full Access
                                                        </span>
                                                        <svg
                                                            width={20}
                                                            height={21}
                                                            viewBox="0 0 20 21"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M13.3332 9.14355L9.99984 12.4769L6.6665 9.14355"
                                                                stroke="#767676"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="mt-[10px] px-[12px] font-inter font-medium text-[11px] leading-[16px] text-[#5E5E5E]">
                                                    This list is public to your workspace and can be edited by
                                                    all members.
                                                </span>
                                                <span className="my-[11px] w-[100%] h-[1px] bg-neutral-dark-900" />
                                                <div className="flex items-start gap-[8px] px-[12px]">
                                                    <div
                                                        className="rounded-8px border border-neutral-dark-900 w-[100%] px-[8px] py-[4px]"
                                                        style={{ borderColor: "rgb(11, 114, 225)" }}
                                                    >
                                                        <div
                                                            className="flex items-center rounded-8px px-4px py-4x max-w-[118px]"
                                                            style={{ backgroundColor: "rgb(231, 231, 231)" }}
                                                        >
                                                            <div
                                                                className="w-[0px] overflow-hidden text-[12px] font-inter font-medium leading-[20px] text-[#353535]"
                                                                style={{ width: 30 }}
                                                            >
                                                                andr
                                                            </div>
                                                            <div
                                                                className="ml-[-4px] w-[0px] overflow-hidden text-[12px] font-inter font-medium leading-[20px] text-[#353535]"
                                                                style={{ width: 80 }}
                                                            >
                                                                ea@attio.com
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="relative ml-auto opacity-0"
                                                            style={{ opacity: 1 }}
                                                        >
                                                            <div
                                                                className="absolute flex items-center whitespace-nowrap top-[-20px] right-[-2px] rounded-8px pl-8px"
                                                                style={{
                                                                    backgroundColor: "rgba(206, 206, 206, 0.56)",
                                                                    opacity: 0
                                                                }}
                                                            >
                                                                <span className="text-[12px] font-inter font-medium text-[#5E5E5E] leading-[20px]">
                                                                    Full access
                                                                </span>
                                                                <svg
                                                                    width={20}
                                                                    height={21}
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="shrink-0"
                                                                >
                                                                    <path
                                                                        d="M13.3332 9.14355L9.99984 12.4769L6.6665 9.14355"
                                                                        stroke="#767676"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="opacity-0 absolute flex items-center whitespace-nowrap top-[-20px] right-[-2px] rounded-8px"
                                                                style={{ opacity: 1 }}
                                                            >
                                                                <span className="text-[12px] font-inter font-medium text-[#5E5E5E] leading-[20px]">
                                                                    Read only
                                                                </span>
                                                                <svg
                                                                    width={20}
                                                                    height={21}
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="shrink-0"
                                                                >
                                                                    <path
                                                                        d="M13.3332 9.14355L9.99984 12.4769L6.6665 9.14355"
                                                                        stroke="#767676"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="mock-button-primary"
                                                        style={{ backgroundColor: "rgb(15, 107, 233)" }}
                                                    >
                                                        <span className="font-inter text-[14px] font-medium leading-[20px] text-[#FFFFFF] -tracking-0.2px">
                                                            Invite
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-[8px] px-[12px] py-[8px]">
                                                    <div
                                                        className="font-inter font-medium rounded-full flex justify-center items-center text-white text-[14px] leading-[14px] w-[24px] h-[24px]"
                                                        style={{ backgroundColor: "#0F6BE9" }}
                                                    >
                                                        L
                                                    </div>
                                                    <div className="font-inter font-medium text-[14px] leading-[20px]">
                                                        <span className="text-[#383A3F]">Lauren Scott</span>
                                                        <span className="text-[#A0A0A0]"> (you)</span>
                                                    </div>
                                                    <span className="font-inter font-medium text-[14px] leading-[20px] text-[#5E5E5E] ml-auto">
                                                        Full access
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-[8px] px-[12px] h-0px opacity-0">
                                                    <div
                                                        className="font-inter font-medium rounded-full flex justify-center items-center text-white text-[14px] leading-[14px] w-[24px] h-[24px]"
                                                        style={{ backgroundColor: "#19AA6C" }}
                                                    >
                                                        A
                                                    </div>
                                                    <div className="font-inter font-medium text-[14px] leading-[20px]">
                                                        <span className="text-[#383A3F]">andrea@attio.com</span>
                                                    </div>
                                                    <span className="font-inter font-medium text-[14px] leading-[20px] text-[#5E5E5E] ml-auto">
                                                        Read only
                                                    </span>
                                                </div>
                                                <span className="mt-[3px] mb-[4px] w-[100%] h-[1px] bg-neutral-dark-900" />
                                                <div className="px-[12px] pb-[8px] flex items-center gap-[4px]">
                                                    <svg
                                                        width={20}
                                                        height={21}
                                                        viewBox="0 0 20 21"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx={10}
                                                            cy="10.8101"
                                                            r="5.5"
                                                            stroke="#969696"
                                                            strokeWidth="1.1"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M10.0161 12.6841V11.0545"
                                                            stroke="#969696"
                                                            strokeWidth="1.1"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <ellipse
                                                            cx="9.9998"
                                                            cy="9.21853"
                                                            rx="0.7"
                                                            ry="0.699973"
                                                            fill="#969696"
                                                        />
                                                    </svg>
                                                    <span className="text-[12px] font-inter font-medium leading-[16px] text-[#969696]">
                                                        Learn about list access
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className="absolute top-[200px] left-[42px] rounded-12px border border-neutral-dark-900 bg-white w-[384px] flex flex-col opacity-0"
                                                style={{
                                                    opacity: 0,
                                                    transform: "translateY(11px) translateZ(0px)"
                                                }}
                                            >
                                                <div className="py-[8px] px-[12px] flex flex-row items-center">
                                                    <span className="font-inter font-medium text-[10px] text-[#5E5E5E] leading-[16px]">
                                                        Users
                                                    </span>
                                                </div>
                                                <div
                                                    className="flex items-center gap-[8px] px-[12px] py-[8px]"
                                                    style={{ backgroundColor: "rgba(15, 107, 233, 0.1)" }}
                                                >
                                                    <div className="font-inter font-medium rounded-full flex justify-center items-center bg-[#19AA6C] text-white text-[14px] leading-[14px] w-[24px] h-[24px]">
                                                        A
                                                    </div>
                                                    <div className="font-inter font-medium text-[14px] leading-[20px]">
                                                        <span className="text-[#383A3F]">andrea@attio.com</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-[8px] px-[12px] py-[8px]">
                                                    <div className="font-inter font-medium rounded-full flex justify-center items-center bg-[#0F6BE9] text-white text-[14px] leading-[14px] w-[24px] h-[24px]">
                                                        A
                                                    </div>
                                                    <div className="font-inter font-medium text-[14px] leading-[20px]">
                                                        <span className="text-[#383A3F]">
                                                            andrew@progression.io
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="absolute top-[190px] right-[52px] rounded-12px border border-neutral-dark-900 bg-white w-[260px] flex flex-col opacity-0"
                                                style={{
                                                    opacity: 0,
                                                    transform: "translateY(11px) translateZ(0px)"
                                                }}
                                            >
                                                <div className="py-[4px] px-[12px] flex flex-row items-center">
                                                    <span className="font-inter font-medium text-[10px] text-[#5E5E5E] leading-[16px]">
                                                        Permissions
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-start px-[12px] py-[4px]">
                                                    <span className="text-[#383A3F]  font-inter font-medium text-[14px] leading-[20px]">
                                                        Full access
                                                    </span>
                                                    <span className="font-inter font-medium text-[10px] leading-[12px] text-[#5e5e5e]">
                                                        Can configure list and share with others
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-start px-[12px] py-[4px]">
                                                    <span className="text-[#383A3F]  font-inter font-medium text-[14px] leading-[20px]">
                                                        Read and write
                                                    </span>
                                                    <span className="font-inter font-medium text-[10px] leading-[12px] text-[#5e5e5e]">
                                                        Can edit list data, but not share with others
                                                    </span>
                                                </div>
                                                <div
                                                    className="flex flex-col items-start px-[12px] py-[4px] font-inter font-medium text-[14px] leading-[20px]"
                                                    style={{ backgroundColor: "rgba(15, 107, 233, 0.1)" }}
                                                >
                                                    <span className="text-[#383A3F]  font-inter font-medium text-[14px] leading-[20px]">
                                                        Read only
                                                    </span>
                                                    <span className="font-inter font-medium text-[10px] leading-[12px] text-[#5e5e5e]">
                                                        Can only view list data
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden py-[24px] tablet:py-[40px] px-[24px] tablet:px-[40px] w-full tablet:max-w-[100%] min-h-[440px] phablet:min-h-[480px] max-h-[540px] flex-1 relative card-light-shadow bg-background-light-primary">
                                        <span className="inline-block max-w-[420px] pb-[40px] phablet:pb-[60px]">
                                            <span
                                                role="heading"
                                                aria-level={3}
                                                className="typography-p5-strong phablet:typography-p4-strong text-typography-light-secondary"
                                            >
                                                Hold that thought.
                                            </span>{" "}
                                            <span className="typography-p5-medium phablet:typography-p4-medium text-typography-light-tertiary">
                                                Never lose another idea with Attio’s real-time collaborative
                                                note-taking features.
                                            </span>
                                        </span>
                                        <div className="absolute desktop:right-[18px] overflow-hidden desktop:bottom-[18px] rounded-12px max-w-[604px] note-shadow ml-auto phablet:mr-auto">
                                            <img
                                                src="https://attio.com/build/_assets/note-frame-ODFLUPRI.webp"
                                                alt=""
                                                loading="lazy"
                                                className="min-w-[604px] max-w-[604px]"
                                            />
                                            <div className="absolute top-[194px] left-[60px]">
                                                <li
                                                    className="text-[#5E5E5E] font-inter font-medium  text-[14px] leading-[24px] ml-[-10px] -tracking-0.3px whitespace-nowrap"
                                                    data-projection-id={9}
                                                    style={{ opacity: 1 }}
                                                >
                                                    <span
                                                        data-projection-id={10}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        H
                                                    </span>
                                                    <span
                                                        data-projection-id={11}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        a
                                                    </span>
                                                    <span
                                                        data-projection-id={12}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        d
                                                    </span>
                                                    <span
                                                        data-projection-id={13}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={14}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={15}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        h
                                                    </span>
                                                    <span
                                                        data-projection-id={16}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={17}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        i
                                                    </span>
                                                    <span
                                                        data-projection-id={18}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={19}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={20}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        c
                                                    </span>
                                                    <span
                                                        data-projection-id={21}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        u
                                                    </span>
                                                    <span
                                                        data-projection-id={22}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={23}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={24}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={25}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={26}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={27}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={28}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        s
                                                    </span>
                                                    <span
                                                        data-projection-id={29}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={30}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={31}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        u
                                                    </span>
                                                    <span
                                                        data-projection-id={32}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        p
                                                    </span>
                                                    <span
                                                        data-projection-id={33}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={34}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        f
                                                    </span>
                                                    <span
                                                        data-projection-id={35}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        o
                                                    </span>
                                                    <span
                                                        data-projection-id={36}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={37}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={38}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        1
                                                    </span>
                                                    <span
                                                        data-projection-id={39}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        0
                                                    </span>
                                                    <span
                                                        data-projection-id={40}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        +
                                                    </span>
                                                    <span
                                                        data-projection-id={41}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={42}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        y
                                                    </span>
                                                    <span
                                                        data-projection-id={43}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={44}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        a
                                                    </span>
                                                    <span
                                                        data-projection-id={45}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={46}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        s
                                                    </span>
                                                    <span
                                                        data-projection-id={47}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={48}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        -
                                                    </span>
                                                    <span
                                                        data-projection-id={49}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={50}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        b
                                                    </span>
                                                    <span
                                                        data-projection-id={51}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        u
                                                    </span>
                                                    <span
                                                        data-projection-id={52}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={53}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={54}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        c
                                                    </span>
                                                    <span
                                                        data-projection-id={55}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        u
                                                    </span>
                                                    <span
                                                        data-projection-id={56}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={57}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={58}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={59}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={60}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={61}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={62}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        s
                                                    </span>
                                                    <span
                                                        data-projection-id={63}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        o
                                                    </span>
                                                    <span
                                                        data-projection-id={64}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        l
                                                    </span>
                                                    <span
                                                        data-projection-id={65}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        u
                                                    </span>
                                                    <span
                                                        data-projection-id={66}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={67}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        i
                                                    </span>
                                                    <span
                                                        data-projection-id={68}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        o
                                                    </span>
                                                    <span
                                                        data-projection-id={69}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={70}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={71}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        c
                                                    </span>
                                                    <span
                                                        data-projection-id={72}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        a
                                                    </span>
                                                    <span
                                                        data-projection-id={73}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={74}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        ’
                                                    </span>
                                                    <span
                                                        data-projection-id={75}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={76}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={77}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        k
                                                    </span>
                                                    <span
                                                        data-projection-id={78}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={79}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={80}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        p
                                                    </span>
                                                    <span
                                                        data-projection-id={81}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={82}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        u
                                                    </span>
                                                    <span
                                                        data-projection-id={83}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        p
                                                    </span>
                                                </li>
                                                <li
                                                    className="text-[#5E5E5E] font-inter font-medium  text-[14px] leading-[24px] ml-[-10px] -tracking-0.3px whitespace-nowrap"
                                                    data-projection-id={84}
                                                    style={{ opacity: 1 }}
                                                >
                                                    <span
                                                        data-projection-id={85}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        I
                                                    </span>
                                                    <span
                                                        data-projection-id={86}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={87}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={88}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={89}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={90}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={91}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        s
                                                    </span>
                                                    <span
                                                        data-projection-id={92}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={93}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={94}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        d
                                                    </span>
                                                    <span
                                                        data-projection-id={95}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={96}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        i
                                                    </span>
                                                    <span
                                                        data-projection-id={97}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={98}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={99}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        a
                                                    </span>
                                                    <span
                                                        data-projection-id={100}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={101}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        p
                                                    </span>
                                                    <span
                                                        data-projection-id={102}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={103}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        o
                                                    </span>
                                                    <span
                                                        data-projection-id={104}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        o
                                                    </span>
                                                    <span
                                                        data-projection-id={105}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        f
                                                    </span>
                                                    <span
                                                        data-projection-id={106}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={107}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        o
                                                    </span>
                                                    <span
                                                        data-projection-id={108}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        f
                                                    </span>
                                                    <span
                                                        data-projection-id={109}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={110}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        c
                                                    </span>
                                                    <span
                                                        data-projection-id={111}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        o
                                                    </span>
                                                    <span
                                                        data-projection-id={112}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={113}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        c
                                                    </span>
                                                    <span
                                                        data-projection-id={114}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={115}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        p
                                                    </span>
                                                    <span
                                                        data-projection-id={116}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={117}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        ,
                                                    </span>
                                                    <span
                                                        data-projection-id={118}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={119}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        w
                                                    </span>
                                                    <span
                                                        data-projection-id={120}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        o
                                                    </span>
                                                    <span
                                                        data-projection-id={121}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        r
                                                    </span>
                                                    <span
                                                        data-projection-id={122}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        k
                                                    </span>
                                                    <span
                                                        data-projection-id={123}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        i
                                                    </span>
                                                    <span
                                                        data-projection-id={124}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={125}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        g
                                                    </span>
                                                    <span
                                                        data-projection-id={126}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={127}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={128}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        o
                                                    </span>
                                                    <span
                                                        data-projection-id={129}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={130}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        s
                                                    </span>
                                                    <span
                                                        data-projection-id={131}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        c
                                                    </span>
                                                    <span
                                                        data-projection-id={132}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        h
                                                    </span>
                                                    <span
                                                        data-projection-id={133}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={134}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        d
                                                    </span>
                                                    <span
                                                        data-projection-id={135}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        u
                                                    </span>
                                                    <span
                                                        data-projection-id={136}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        l
                                                    </span>
                                                    <span
                                                        data-projection-id={137}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={138}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={139}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        a
                                                    </span>
                                                    <span
                                                        data-projection-id={140}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={141}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        p
                                                    </span>
                                                    <span
                                                        data-projection-id={142}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        l
                                                    </span>
                                                    <span
                                                        data-projection-id={143}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        a
                                                    </span>
                                                    <span
                                                        data-projection-id={144}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={145}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={146}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        i
                                                    </span>
                                                    <span
                                                        data-projection-id={147}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={148}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        g
                                                    </span>
                                                    <span
                                                        data-projection-id={149}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        {" "}
                                                    </span>
                                                    <span
                                                        data-projection-id={150}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        m
                                                    </span>
                                                    <span
                                                        data-projection-id={151}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={152}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        e
                                                    </span>
                                                    <span
                                                        data-projection-id={153}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        t
                                                    </span>
                                                    <span
                                                        data-projection-id={154}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        i
                                                    </span>
                                                    <span
                                                        data-projection-id={155}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        n
                                                    </span>
                                                    <span
                                                        data-projection-id={156}
                                                        style={{ opacity: 1, transform: "none" }}
                                                    >
                                                        g
                                                    </span>
                                                </li>
                                                <div
                                                    className="highlight absolute top-[26px] left-[103px]"
                                                    data-projection-id={157}
                                                    style={{ width: 0, borderRight: "0px solid rgb(0, 0, 0)" }}
                                                />
                                                <picture
                                                    className="absolute top-[-5px] left-[-55px] opacity-0"
                                                    data-projection-id={158}
                                                    style={{ transform: "translateY(20px)" }}
                                                >
                                                    <source
                                                        media="(min-width: 992px)"
                                                        srcSet="https://attio.com/build/_assets/toolbar-YFOCK6B7.webp"
                                                        type="image/png"
                                                        width={459}
                                                        height={84}
                                                    />
                                                    <img
                                                        src="https://attio.com/build/_assets/toolbar-YFOCK6B7.webp"
                                                        className="min-w-[459px] min-h-[84px]"
                                                    />
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-40px pb-60px px-24px tablet:pt-[96px] tablet:pb-[120px] tablet:px-0">
                                    <div className="tablet:grid grid-cols-10 gap-x-24px gap-y-[50px]">
                                        <img
                                            className="h-[34px] tablet:h-44px col-start-2 col-end-5"
                                            src="https://attio.com/build/_assets/causal-ZTQSTRFQ.webp"
                                            alt="CAUSAL"
                                        />
                                        <div className="mt-24px tablet:mt-0 col-start-5 col-end-11">
                                            <p className="max-w-[530px] typography-p2-strong tablet:typography-h5 tablet:!leading-120 text-typography-light-tertiary">
                                                “Attio is the most flexible CRM we’ve ever come across. We’ve
                                                been able to build a world-class go-to-market engine with it.”
                                            </p>
                                        </div>
                                        <div className="mt-24px tablet:mt-0 order-2 col-start-5 col-end-11 flex items-center gap-[18px]">
                                            <img
                                                className="w-60px h-60px rounded-12px"
                                                src="https://attio.com/build/_assets/causal-avatar-A45PMOGF.webp"
                                                alt=""
                                            />
                                            <div>
                                                <p className="typography-p5-strong text-typography-light-secondary">
                                                    Taimur Abdaal
                                                </p>
                                                <p className="typography-p5-medium text-typography-light-tertiary">
                                                    Co-founder &amp; CEO, Causal
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-[30px] tablet:mt-0 col-start-2 col-end-5 self-end tablet:mb-[6px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}