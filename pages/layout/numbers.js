const BlueCodeinNumbers = () => {
    return(
        <div className="p-10 md:p-20">
            <div className="py-10 space-y-8">
                <h2 className=" text-4xl text-white ">
                    Bluecode in numbers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div className="blue-shadow border-2 rounded-lg  border-gray-300 text-white text-center flex flex-col space-y-4 p-10">
                        <span className="md:text-4xl text-2xl tracking-widest">10+</span>
                        <span className="text-sm md:text-md tracking-widest">In-house employees</span>
                    </div>
                    <div className="blue-shadow border-2 rounded-lg  border-gray-300 text-white text-center flex flex-col space-y-4 p-10">
                        <span className="text-4xl tracking-widest">30+</span>
                        <span className="text-md tracking-widest">Completed & ongoing projects</span>
                    </div>
                    <div className="blue-shadow border-2 rounded-lg  border-gray-300 text-white text-center flex flex-col space-y-4 p-10">
                        <span className="text-4xl tracking-widest">10k</span>
                        <span className="text-md tracking-widest">Hours worked</span>
                    </div>
                    <div className="blue-shadow border-2 rounded-lg  border-gray-300 text-white text-center flex flex-col space-y-4 p-10">
                        <span className="text-4xl tracking-widest">1</span>
                        <span className="text-md tracking-widest">Industry award</span>
                    </div>
                    <div className="blue-shadow border-2 rounded-lg  border-gray-300 text-white text-center flex flex-col space-y-4 p-10">
                        <span className="text-4xl tracking-widest">3</span>
                        <span className="text-md tracking-widest">Years in business</span>
                    </div>
                    <div className="blue-shadow border-2 rounded-lg  border-gray-300 text-white text-center flex flex-col space-y-4 p-10">
                        <span className="text-4xl tracking-widest">15+</span>
                        <span className="text-md tracking-widest">5-Stars Reviews</span>
                    </div>    
                </div>
            </div>
            </div>
    )
}

export default BlueCodeinNumbers;