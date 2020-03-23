import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { purple } from '../../lib/colors'
import { Title, StickyRow, TopRow, Cell } from '../layout/grid'
import { useParams } from 'react-router-dom'
import subtypes from '@hypergraph-xyz/wikidata-identifiers'
import Content from '../content/content'

const Spacer = styled.div`
  display: inline-block;
  width: 62px;
  height: 100%;
  border-right: 2px solid ${purple};
  vertical-align: top;
`

const ProfileContent = ({ p2p, profile, setProfile }) => {
  const { key } = useParams()
  const [content, setContent] = useState()

  useEffect(() => {
    ;(async () => {
      setContent(await p2p.get(key))
    })()
  }, [key])

  return (
    <>
      <TopRow>
        <Title>{profile.rawJSON.title}</Title>
      </TopRow>
      <StickyRow top={116} noBorderTop>
        <Spacer />
        {content && (
          <>
            <Title>{subtypes[content.rawJSON.subtype] || 'Content'}</Title>
            <Cell>v{content.metadata.version}</Cell>
          </>
        )}
      </StickyRow>
      {content && (
        <Content
          p2p={p2p}
          content={content}
          profile={profile}
          setProfile={setProfile}
          backTo='/profile'
        />
      )}
    </>
  )
}

export default ProfileContent
