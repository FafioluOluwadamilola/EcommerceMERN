import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderDetails = () => {

    const { id } = useParams();

    const [order, setOrder] = useState(null);

    useEffect(() => {

        const fetchOrder =async () => {
            const token = localStorage.getItem("token");

            try {
                
                const res = await fetch(
                    `http://localhost:5000/api/orders/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                const data = await res.json();

                setOrder(data);

            } catch (error) {
                console.error(error);
            }
        }

        fetchOrder();

    }, [id]);

    if (!order) {
        return <p className='p-10'>Loading...</p>;
    }

  return (
    <div className='max-w-5xl mx-auto p-10 min-h-screen'>
        
        <h1 className='text-4xl mb-8 font-bold'>
            Order Details
        </h1>

        <div className='bg-white border rounded-2xl p-8 shadow-sm'>

            <div className='mb-8'>

                <h2 className='font-bold text-xl'>
                    Order #{order._id.slice(-6)}
                </h2>

                <p className='text-gray-500'>
                    {new Date(order.createdAt).toLocaleString()}
                </p>

            </div>

            <div className='mb-8'>

                <h3 className='font-bold mb-3'>
                    Shipping Info
                </h3>

                <p>{order.shippingInfo.fullName}</p>
                <p>{order.shippingInfo.address}</p>
                <p>{order.shippingInfo.city}</p>
                <p>{order.shippingInfo.phone}</p>

            </div>

            <div className='mb-8'>

                <h3 className='font-bold mb-3'>
                    Products
                </h3>

                {order.items.map((item) => (

                    <div
                        key={item._id}
                        className='flex justify-between border-b py-3'
                    >

                        <div>

                            <p className='font-medium'>{item.name}</p>

                            <p className='text-gray-500'>Qty: {item.qty}</p>
    
                        </div>

                        <p>
                            $({(item.price * item.qty).toFixed(2)})
                        </p>

                    </div>


                ))}

            </div>

            <div className='flex justify-between text-2xl font-bold'>

                <span>Total</span>

                <span>
                    ${order.totalPrice.toFixed(2)}
                </span>

            </div>

        </div>


    </div>
  )
}

export default OrderDetails