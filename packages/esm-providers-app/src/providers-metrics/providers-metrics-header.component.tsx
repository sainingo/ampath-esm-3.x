/* eslint-disable no-console */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from '@carbon/react/icons';
import styles from './providers-header.scss';
import { Button, TextInput, Modal, Select, ComboBox, SelectItem, DatePickerInput, DatePicker } from '@carbon/react';

const MetricsHeader = () => {
  const { t } = useTranslation();
  const metricsTitle = t('providersSummary', 'Providers Summary');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const filterItems = (menu) => {
    return menu?.item?.toLowerCase().includes(menu?.inputValue?.toLowerCase());
  };

  return (
    <div className={styles.metricsContainer}>
      <span className={styles.metricsTitle}>{metricsTitle}</span>
      <div className={styles.actionBtn}>
        <Button
          kind="tertiary"
          renderIcon={(props) => <ArrowRight size={16} {...props} />}
          iconDescription={t('enroll', 'Add new Provider')}
          onClick={() => setIsModalOpen(true)}>
          {t('enroll', 'ENROLL NEW PROVIDER')}
        </Button>
      </div>
      <Modal
        primaryButtonText="ADD NEW PROVIDER"
        secondaryButtonText="CANCEL"
        open={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        //modalLabel="ADMIT BROUGHT IN BODY"
        modalHeading="NEW PROVIDER"
        hasScrollingContent>
        <TextInput
          data-modal-primary-focus
          id="text-input-1"
          labelText="Given Name*"
          placeholder="Enter your given name"
          required
          style={{
            marginBottom: '1rem',
          }}
        />
        <TextInput
          data-modal-primary-focus
          id="text-input-1"
          labelText="Middle Name"
          placeholder="Enter your middle name"
          required
          style={{
            marginBottom: '1rem',
          }}
        />
        <TextInput
          data-modal-primary-focus
          id="text-input-1"
          labelText="Family Name*"
          placeholder="Enter your family name"
          required
          style={{
            marginBottom: '1rem',
          }}
        />
        <div style={{ marginBottom: '20px' }}>
          <Select id="select-1" labelText="Gender*">
            <SelectItem value="" text="Select Gender" />
            <SelectItem value="Option 2" text="Male" />
            <SelectItem value="Option 2" text="Female" />
          </Select>
        </div>
        <DatePicker datePickerType="single">
          <DatePickerInput placeholder="mm/dd/yyyy" labelText="Date of Birth" id="date-picker-single" size="md" />
        </DatePicker>
        <div style={{ marginBottom: '20px' }}>
          <ComboBox
            allowCustomValue
            shouldFilterItem={filterItems}
            required
            onChange={(e) => {
              console.log(e);
            }}
            id="carbon-combobox"
            items={[
              'Married Polygamous',
              'Married Monogamous',
              'Divorced',
              'Widowed',
              'Cohabiting',
              'Single',
              'Not Married',
            ]}
            downshiftProps={{
              onStateChange: () => {
                console.log('the state has changed');
              },
            }}
            titleText="Marital Status*"
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextInput
            data-modal-primary-focus
            id="text-input-1"
            labelText="License Number*"
            placeholder="Enter License Number"
            required
            style={{
              marginBottom: '1rem',
            }}
          />
          <DatePicker datePickerType="single">
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="License Expiry Date"
              id="date-picker-single"
              size="md"
            />
          </DatePicker>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <ComboBox
            allowCustomValue
            shouldFilterItem={filterItems}
            required
            onChange={(e) => {
              console.log(e);
            }}
            id="carbon-combobox"
            items={['TB', 'Malaria']}
            downshiftProps={{
              onStateChange: () => {
                console.log('the state has changed');
              },
            }}
            titleText="Cause of death*"
          />
        </div>
        <div style={{ marginBottom: '20px' }}></div>
      </Modal>
    </div>
  );
};

export default MetricsHeader;
