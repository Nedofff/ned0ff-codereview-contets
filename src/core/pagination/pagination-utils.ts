export const setupPaginationHandler = ({
  itemsPerPage,
  withAdvertising = true,
  countAdvertising = 1,
}: {
  itemsPerPage: number;
  withAdvertising?: boolean;
  countAdvertising?: number;
}) => ({
  handlePagination: (currentPage: string | number | undefined) => {
    const page = Number(currentPage);

    if (isNaN(page)) {
      return {
        skip: 0,
        limit: itemsPerPage,
      };
    }

    const offset = page !== 1 && withAdvertising ? countAdvertising : 0;
    const placeForAdvertising =
      page === 1 && withAdvertising ? countAdvertising : 0;

    const skip = (page - 1) * itemsPerPage - offset;
    const limit = itemsPerPage - placeForAdvertising;

    return {
      skip,
      limit,
    };
  },
  getTotalPages: (totalItems: number) => Math.ceil(totalItems / itemsPerPage),
});
