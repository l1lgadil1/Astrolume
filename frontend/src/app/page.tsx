import { Button } from '@/shared/ui/button';
import { HeaderPlaceholder } from './_widgets/header/header-placeholder';
export default function Home() {
    return (
        <main className="grow p-10">
            <HeaderPlaceholder />
            <Button>Add</Button>
        </main>
    );
}
