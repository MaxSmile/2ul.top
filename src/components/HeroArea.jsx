import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import about from '../data/about.json'
import UrlForm from './shortening/UrlForm'

// Constants

const BASE_URL = process.env.BASE_URL || 'https://2ul.top'
const CLIENT_URL = process.env.CLIENT_URL || 'https://client.2ul.top'

const HeroAreaSection = () => {
    const [resultingUrl, setResultingUrl] = useState('')
    const [isError, setIsError] = useState(false)

    const handleResult = (result) => {
        if (result.success) {
            setResultingUrl(result.mappingID)
            setIsError(false)
        } else {
            setResultingUrl(`Error: ${result.error}`)
            setIsError(true)
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(`${BASE_URL}/${resultingUrl}`)
            .then(() => {
                alert('Copied to clipboard!')
            })
            .catch((err) => {
                console.error('Error copying to clipboard', err)
            })
    }

    return (
        <section className="py-8 lg:py-24" id="clarification">
            <div className="container mx-auto">
                <h1 className="text-xl lg:text-3xl font-light mt-16">
                    Shorten Your URLs
                </h1>
                <h2 className="tracking-4 py-4 lg:py-8 font-light  text-sm lg:text-2xl">
                    Transform long, unwieldy URLs into concise, shareable links
                    with {about.name}
                </h2>
                <h3 className="tracking-4 font-normal text-xl">
                    Free URL Shortener with Premium Features
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <UrlForm onResult={handleResult} />

                    <div className="px-2 md:px-0">
                        <div className="mb-8" id="result">
                            {resultingUrl && (
                                <div className="text-lg text-left ">
                                    {isError ? (
                                        <div className="alert-error">
                                            {resultingUrl}
                                        </div>
                                    ) : (
                                        <>
                                            <div className="items-center bg-swirly-arrow pb-16">
                                                <div className="ml-24 border-2 border-dark py-2 px-4 rounded bg-white w-3/4 overflow-auto">
                                                    <span className="text-dark">
                                                        {BASE_URL}/
                                                    </span>
                                                    <span className="text-blue-600">
                                                        {resultingUrl}
                                                    </span>
                                                </div>
                                                <div className="text-center ml-24">
                                                    <button
                                                        onClick={
                                                            copyToClipboard
                                                        }
                                                        className="button-teal mt-4"
                                                    >
                                                        Copy Result
                                                    </button>
                                                </div>
                                            </div>
                                            <a
                                                href={`${CLIENT_URL}?reason=custom-name`}
                                                className="text-blue-600 pl-8 hover:underline"
                                            >
                                                Would you like to use a custom
                                                short code name?
                                            </a>
                                        </>
                                    )}
                                </div>
                            )}
                            <div className="mt-4">
                                {!isError && resultingUrl && (
                                    <div className="flex flex-col items-center bg-white p-8 rounded border border-light border-dashed">
                                        <QRCode
                                            value={`${BASE_URL}/${resultingUrl}`}
                                            fgColor="#1C546A"
                                            renderAs="svg"
                                            size={256}
                                        />
                                        <p className="mt-6 pt-6 text-lg text-center text-dark">
                                            QR code contains the shortened URL
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl sm:text-[45px] md:text-[55px] font-light mt-16">
                        Simplify Your Life
                    </h2>
                    <p className="mt-8 text-gray-600 text-lg">
                        {about.name} is a free tool to shorten URLs and generate
                        short links. This URL shortener allows you to easily
                        convert long URLs into short, manageable links that are
                        easy to share.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeroAreaSection
