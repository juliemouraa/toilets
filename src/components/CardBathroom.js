import { Container } from "./CardBathroomStyles";
import { StatusBathroom } from "./StatusBathroom";
import { DataBathroom } from "./DataBathroom";

export function CardBathroom() {
  return (
    <>
      <Container>
          <StatusBathroom />
          <DataBathroom />
      </Container>
    </>
  );
}
