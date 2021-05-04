import { useHistory } from "react-router";
import { getTimelineNameResource } from "../../factories/utils";

import claimsIcon from "../../images/claims-icon.svg";
import alergyIcon from "../../images/alergy-icon.svg";
import proceduresIcon from "../../images/procedures-icon.svg";
import immunizationIcon from "../../images/immunisation-icon.svg";
import conditionsIcon from "../../images/conditions-icon.svg";
import medicationsIcon from "../../images/medications-icon.svg";
import prescriptionsIcon from "../../images/prescription-icon.svg";
import observationIcon from "../../images/observation-icon.svg";
import carePlanIcon from "../../images/careplan-icon.svg";
import diagnosticIcon from "../../images/diagnostic-icon.svg";
import documentIcon from "../../images/document-icon.svg";
import encounterIcon from "../../images/encounter-icon.svg";

import "./index.less";
import { CLAIMS_AND_CLINICAL_RESOURCE } from "../../constants/constants";
import SecondaryButton from "../../components/SecondaryButton";
import Button from "../../components/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";
const TimelineDetails = () => {
  const history = useHistory();

  const { timelineData }: any = history.location.state;

  const { resource } = timelineData;

  const [showRawData, setShowRawData] = useState(false);

  const getResourceImage = (resourceName: string) => {
    if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.allergy) return alergyIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.carePlan)
      return carePlanIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.claims)
      return claimsIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.condition)
      return conditionsIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.diagnosticReport)
      return diagnosticIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.documentReference)
      return documentIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.immunization)
      return immunizationIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.medication)
      return medicationsIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.observation)
      return observationIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.prescription)
      return prescriptionsIcon;
    else if (resourceName == CLAIMS_AND_CLINICAL_RESOURCE.procedure)
      return proceduresIcon;

    return "";
  };

  const RawDataView = ({
    content = "",
    show = false,
    handleClose = () => {},
  }) => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        dialogClassName="modal-90w"
        scrollable
        className="view-data-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="header-title">Raw JSON Output</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-content">{content}</Modal.Body>
      </Modal>
    );
  };

  return (
    <div id="app-timeline-details">
      {
        <RawDataView
          show={showRawData}
          content={resource && JSON.stringify(resource)}
          handleClose={() => {
            setShowRawData(false);
          }}
        />
      }
      <div className="top-section">
        <SecondaryButton
          label="Back"
          className="back-button"
          onClick={() => {
            history.goBack();
          }}
        />

        <Button
          label="View Raw Data"
          className="view-button"
          onClick={() => {
            setShowRawData(true);
          }}
        />
      </div>
      <div className="details-header-container">
        <span className="header-title">
          {getTimelineNameResource(resource?.resourceType)}
        </span>

        <img
          src={getResourceImage(resource?.resourceType)}
          className="header-logo"
        />
      </div>
    </div>
  );
};

export default TimelineDetails;
