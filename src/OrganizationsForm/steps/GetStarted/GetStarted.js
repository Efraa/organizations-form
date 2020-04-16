import React, { useEffect } from 'react'
import { forms } from '../../../helpers/constants'
import { useForm } from '../../../hooks/useForm'
import { types } from '../../../data'

// Components
import { Col, Row } from 'reactstrap'
import { Input } from '../../../components/Input'
import { Textarea } from '../../../components/Textarea'
import { Select } from '../../../components/Select'

export const GetStarted = ({ form }) => {
  const { data, onChange, setStepName, setData } = useForm(form)
  const { name, dean, type, slogan } = data

  useEffect(() => {
    setStepName(forms.GET_STARTED)
  }, [setStepName])

  return (
    <Row>
      <Col xs={12}>
        <Input
          label="Organization name"
          value={name}
          name="name"
          placeholder="Enter your name"
          onChange={e => onChange(e)}
        />
      </Col>
      <Col xs={12} lg={6}>
        <Input
          label="Organization dean"
          value={dean}
          name="dean"
          placeholder="Dean name"
          onChange={e => onChange(e)}
        />
      </Col>
      <Col xs={12} lg={6}>
        <Select
          options={types}
          label="Organization type"
          placeholder="Select type..."
          value={type}
          onChange={type => setData({ type })}
        />
      </Col>

      <Col xs={12}>
        <Textarea
          label="Slogan"
          placeholder="Enter slogan"
          name="slogan"
          onChange={e => onChange(e)}
          value={slogan}
        />
      </Col>
    </Row>
  )
}
