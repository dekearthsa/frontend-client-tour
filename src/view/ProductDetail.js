import { useLocation } from 'react-router-dom';
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar';
import ComponentBottonBar from '../component/ComponentHome/ComponentBottonBar';
import ComponentStarToprate from '../component/ComponentHome/ComponentStarToprate';

const ProductDetail = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('title');
    const images = JSON.parse(searchParams.get("img"));
    const rate = searchParams.get("rate");
    const intro = searchParams.get("intro");
    const setPricePrice = searchParams.get("price");
    const setPriceJSON = JSON.parse(setPricePrice);
    const content = searchParams.get("content");
    const setContentJSON = JSON.parse(content);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
            {/* Navbar */}
            <div className="sticky top-0 z-50 bg-white shadow-md">
                <ComponentHomeNavbar />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((el, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                className="w-full h-full object-cover"
                                src={`${el}`}
                                alt={`Slide ${idx + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Details Section */}
                <div className="mt-12 bg-white rounded-lg shadow-lg p-8 md:p-12">
                    {/* Title and Rating */}
                    <div className="flex items-center mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                        </svg>
                        <h1 className="text-4xl font-extrabold text-gray-800 ml-4">{title}</h1>
                    </div>
                    <ComponentStarToprate star={rate} />

                    {/* Introduction */}
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold text-gray-800 flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#0a9396" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <span className="ml-4">Introduction</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{intro}</p>
                    </div>

                    {/* Pricing */}
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold text-gray-800 flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                                <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                            </svg>
                            <span className="ml-4">Prices</span>
                        </h2>
                        <div className="space-y-6">
                            {setPriceJSON.map((el, idx) => (
                                <div key={idx} className="bg-gray-50 border border-gray-300 rounded-lg p-4 flex justify-between items-center shadow-sm">
                                    <span className="text-gray-700 font-medium">Persons: {el.person}</span>
                                    <span className="text-gray-900 font-semibold">฿{el.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activities */}
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold text-gray-800 flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                                <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                            </svg>
                            <span className="ml-4">Activities</span>
                        </h2>
                        <div className="space-y-6">
                            {setContentJSON.map((el, idx) => (
                                <div key={idx} className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-800">DAY {el.day}</h3>
                                    <p className="text-gray-600 mt-2">{el.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <ComponentBottonBar />
        </div>
    );
}

export default ProductDetail
