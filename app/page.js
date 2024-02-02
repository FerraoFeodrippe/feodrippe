import Link from "next/link";

export const metadata = {
  title: 'Feodrippe Metadata Test',
}

function Home(){
    return (
        <div>
          <p>Index Feodrippe Home</p>
          <Link href="/treeprun">
            Tree Pruning
          </Link>
        </div>
      )
}

export default Home
