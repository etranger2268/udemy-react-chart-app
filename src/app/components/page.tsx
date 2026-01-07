import ThreeBoxContent from '@/app/components/_components/ThreeBoxContent';

export default function ComponentsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <ThreeBoxContent
        title1="これはタイトルです。"
        content1="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
        title2="これはタイトルです。"
        content2="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
        title3="これはタイトルです。"
        content3="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
      />
    </div>
  );
}
