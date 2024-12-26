import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import TransitMap from '../app/components/TransitMap';
import { StmRouter } from '@/app/_stm/StmRouter';

export default function Page({
    vehiclePositions,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
      return <TransitMap vehiclePositions={vehiclePositions} />;
}

export const getServerSideProps = (async () =>{
    const vehiclePositions = await StmRouter.vehiclePositions;
    return {
        props: {
            vehiclePositions: vehiclePositions,
        },
    };
}) satisfies GetServerSideProps<{ vehiclePositions: string }>;