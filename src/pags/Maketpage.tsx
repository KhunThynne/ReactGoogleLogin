import ContainerT from "../components/Container"



const generateRandomString = (length: any) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

const getRandomInt = (min: any, max: any) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const list = ["Red", "Black", "Green", "Yellow"];

const getRandomItem =(arr:any) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Generate a random integer between 1 and 100
const randomInteger = getRandomInt(1, 100);
console.log(randomInteger);

// Generate a random string of length 10
const randomText = generateRandomString(10);
console.log(randomText);


const ListC = (props: any) => {
    return (
        <>





            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                <div className="border" style={{ height: "150px" }}> </div>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className=""></span>
                            {props.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{props.type}</p>
                </div>
                <p className="text-sm font-medium text-gray-900"> {props.price} ฿</p>
            </div>





        </>
    );
};


const MarketPage: React.FC = () => {
    const L = (size: any) => {
        var box = []
        for (let i = 0; i < size; i++) {
            box.push(<div key={i} >

                <ListC name={generateRandomString(getRandomInt(5, 15))} price={getRandomInt(5, 10000)} type={getRandomItem(list)} />



            </div>)
        }
        return box
    }


    return (
        <>

            <ContainerT >
                <div className="border-4 border-double" style={{ minHeight: "100vh" }}>
                    <h4 className="pt-5 text-start px-5 ">ตัวอย่างระบบ <p className="text-dark" style={{ fontSize: "16px" }}>Ecommerce Web Application </p>

                    </h4>

                    <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 md:py-6">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your products layout. </h2>

                        <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
                            {L(100)}
                        </div>
                    </div>


                </div>
            </ContainerT>

        </>
    )
}

export default MarketPage
