export const UPDATE_STARTSHIP = 'UPDATE_STARTSHIP';

export function updateStartship(product: any) {
  return {
    type: UPDATE_STARTSHIP,
    payload: product
  }
}
