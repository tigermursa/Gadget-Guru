import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const FlashSale = () => {
  return (
    <div className="">
      <div className="flex justify-between ">
        <h1>Flash Sale</h1>
        <Button>View All</Button>
      </div>
      {/* cards */}
      <div className="flex justify-center ">
        <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <Card className="py-4 max-w-[350px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1585144860106-998ca0f2922a?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={270}
                  height={270}
                />
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="py-4 max-w-[350px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1585144860106-998ca0f2922a?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={270}
                  height={270}
                />
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="py-4 max-w-[350px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1585144860106-998ca0f2922a?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={270}
                  height={270}
                />
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="py-4 max-w-[350px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1585144860106-998ca0f2922a?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={270}
                  height={270}
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
