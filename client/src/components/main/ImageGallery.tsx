import { usePlacesContext } from '@/context/usePlaceContext';

import { DialogGallery } from './gallery-dialog/DialogGallery';
import ImageContent from './ImageContent';
import Spinner from '../customized/spinner/spinner-08';

import PaginationTabs from './Pagination';

export default function ImageGallery() {
  const { places, isLoading } = usePlacesContext();

  if (isLoading) {
    return (
      <div className=" h-[60vh] col-span-3 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {places.map((place) => (
          <DialogGallery key={place.id} place={place}>
            <ImageContent imageUrl={place.imageUrl} title={place.title} />
          </DialogGallery>
        ))}
      </section>
      <PaginationTabs />
    </>
  );
}
