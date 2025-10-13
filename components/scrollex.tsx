import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function Scrollex() {
  return (
    <div className=" w-[80%] md:w-[50%] mx-auto ">
      <ScrollStack className="h-[50vh] overflow-y-hidden">
        <ScrollStackItem>
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Akara Special</h2>
            <p className="text-orange-100 text-lg">Traditional Nigerian bean cakes made with authentic spices and premium ingredients.</p>
            <div className="mt-4">
              <span className="text-2xl font-bold">₦200</span>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Premium Mix</h2>
            <p className="text-green-100 text-lg">Our signature blend with special herbs and traditional cooking methods.</p>
            <div className="mt-4">
              <span className="text-2xl font-bold">₦250</span>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Traditional Recipe</h2>
            <p className="text-purple-100 text-lg">Classic recipe passed down through generations, maintaining authentic taste.</p>
            <div className="mt-4">
              <span className="text-2xl font-bold">₦180</span>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Spice Blend</h2>
            <p className="text-blue-100 text-lg">Authentic spice mix for making perfect akara at home.</p>
            <div className="mt-4">
              <span className="text-2xl font-bold">₦800</span>
            </div>
          </div>
        </ScrollStackItem>
        
      </ScrollStack>
    </div>
  )
}