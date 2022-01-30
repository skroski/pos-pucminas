
import { PageTitle } from '..';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import '../../../../apps/eagency/src/app/tailwind.css'
/* eslint-disable-next-line */
export interface UiHeaderProps {}


export function UiHeader(props: UiHeaderProps) {
  return (
    <>
      <h1 className="text-red-700">Duplo D - Consiliadora de Projetos</h1>

      <PageTitle/>
    </>
  );
}

export default UiHeader;
