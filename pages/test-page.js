import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Direct Functionality Consultant</title>
          <meta
            property="og:title"
            content="test-page - Direct Functionality Consultant"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_2ona1f) => (
            <>
              <h1 id={context_2ona1f?.Name}>Heading</h1>
            </>
          )}
          initialData={props.context2ona1fProp}
          persistDataDuringLoading={true}
          key={props?.context2ona1fProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context2ona1fProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        context2ona1fProp: context2ona1fProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
