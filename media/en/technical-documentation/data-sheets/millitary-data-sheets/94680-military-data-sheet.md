<!-- lastmod 2024-01-23 -->
<!-- image -->

| REVISIONS   |
|-------------|

1. SCOPE
2. 1.1  Scope.  This drawing documents two product assurance class levels consisting of high reliability (device class Q and M) and space application (device class V).  A choice of case outlines and lead finishes are available and are reflected in the Part or Identifying Number (PIN).  When available, a choice of Radiation Hardness Assurance (RHA) levels is reflected in the PIN.
3. 1.2  PIN.  The PIN is as shown in the following example:
4. 1.2.1  RHA designator.  Device classes Q and V RHA marked devices meet the MIL-PRF-38535 specified RHA levels and are marked with the appropriate RHA designator.  Device class M RHA marked devices meet the MIL-PRF-38535, appendix A specified RHA levels and are marked with the appropriate RHA designator.  A dash (-) indicates a non-RHA device.
5. 1.2.2  Device type(s).  The device type(s) identify the circuit function as follows:
6. 1.2.3  Device class designator.  The device class designator is a single letter identifying the product assurance level as follows:

<!-- image -->

|   Device type | Generic number   | Circuit function                                              |
|---------------|------------------|---------------------------------------------------------------|
|            01 | OP-27B           | Low noise precision operational amplifier                     |
|            02 | OP-27A           | Radiation hardened, low noise precision operational amplifier |
|            03 | OP-27A           | Radiation hardened, low noise precision operational amplifier |

## Device class

M

Q or V

Device requirements documentation

Vendor self-certification to the requirements for MIL-STD-883 compliant, nonJAN class level B microcircuits in accordance with MIL-PRF-38535, appendix A

Certification and qualification to MIL-PRF-38535

- 1.2.4  Case outline(s).  The case outline(s) are as designated in MIL-STD-1835 and as follows:
- 1.2.5  Lead finish.  The lead finish is as specified in MIL-PRF-38535 for device classes Q and V or MIL-PRF-38535, appendix A for device class M.

| Outline letter   | Descriptive designator   |   Terminals | Package style                |
|------------------|--------------------------|-------------|------------------------------|
| G                | MACY1-X8                 |           8 | Can                          |
| H                | GDFP1-F10 or CDFP2-F10   |          10 | Flat pack                    |
| P                | GDIP1-T8 or CDIP2-T8     |           8 | Dual-in-line                 |
| 2                | CQCC1-N20                |          20 | Square leadless chip carrier |

## STANDARD MICROCIRCUIT DRAWING

DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990

| SIZE A   |                  | 5962-94680   |
|----------|------------------|--------------|
|          | REVISION LEVEL F | SHEET 2      |

## 1.3  Absolute maximum ratings.  1/

Supply voltage (VS) ......................................................................................

 22 V

Internal power dissipation    ...........................................................................  500 mW

Input voltage   ................................................................................................

 22 V 2/

Output short-circuit duration  ........................................................................    Indefinite

Differential input voltage  ..............................................................................

 0.7 V 3/

Differential input current  ..............................................................................



25 mA

3/

Storage temperature range  .........................................................................  -65

 C to +150  C

Operating temperature range  ......................................................................  -55

 C to +125  C

Lead temperature (soldering, 60 seconds)  ..................................................  +300

 C

Junction temperature range (TJ) ..................................................................  -65

 C to +150  C

Thermal resistance, junction-to-case (  JC) ..................................................  See MIL-STD-1835

Thermal resistance, junction-to-ambient (  JA):

Cases G and H   .........................................................................................  150

 C/W

Case P  .....................................................................................................  119

 C/W

Case 2   ......................................................................................................  110

 C/W

## 1.4  Recommended operating conditions.

Supply voltage (VS)  .....................................................................................  4.5 V to  18 V

Source resistor (RS)  ....................................................................................  50



Ambient operating temperature range (TA)  .................................................  -55  C to +125  C

## 1.5  Radiation features:

Device type 02:

Maximum total dose available (dose rate = 50 - 300 rads(Si)/s) .................    100 krads(Si) 4/

Device type 03:

Maximum total dose available (dose rate  10 mrads(Si)/s) ........................  50 krads(Si) 5/

\_\_\_\_\_

1/ Stresses above the absolute maximum rating may cause permanent damage to the device.  Extended operation at the maximum levels may degrade performance and affect reliability.

2/ For supply voltages less than  22 V, the absolute maximum input voltage is equal to the supply voltages.

3/ The device inputs are protected by back-to-back diodes.  Current limiting resistors are not used in order to achieve low noise.  If differential input voltage exceeds  0.7 V, the input current should be limited to 25 mA.

4/ These parts may be dose rate sensitive in a space environment and may demonstrate enhanced low dose rate effects. Radiation end point limits for the noted parameters are guaranteed only for the conditions as specified in MIL-STD-883, method 1019, condition A.

5/ For device type 03, radiation end point limits for the noted parameters are guaranteed for the conditions specified in MIL-STD-883, test method 1019, condition D.

| STANDARD MICROCIRCUIT DRAWING                   | SIZE A   |                  | 5962-94680   |
|-------------------------------------------------|----------|------------------|--------------|
| DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990 |          | REVISION LEVEL F | SHEET 3      |

## 2.  APPLICABLE DOCUMENTS

- 2.1  Government specification, standards, and handbooks.  The following specification, standards, and handbooks form a part of this drawing to the extent specified herein.  Unless otherwise specified, the issues of these documents are those cited in the solicitation or contract.

## DEPARTMENT OF DEFENSE SPECIFICATION

MIL-PRF-38535 -Integrated Circuits, Manufacturing, General Specification for.

## DEPARTMENT OF DEFENSE STANDARDS

MIL-STD-883 -

Test Method Standard Microcircuits.

MIL-STD-1835  -

Interface Standard Electronic Component Case Outlines.

## DEPARTMENT OF DEFENSE HANDBOOKS

MIL-HDBK-103  -

List of Standard Microcircuit Drawings.

MIL-HDBK-780  -

Standard Microcircuit Drawings.

(Copies of these documents are available online at http://quicksearch.dla.mil/ or from the Standardization Document Order Desk, 700 Robbins Avenue, Building 4D, Philadelphia, PA  19111-5094.)

- 2.2  Order of precedence.  In the event of a conflict between the text of this drawing and the references cited herein, the text of this drawing takes precedence.  Nothing in this document, however, supersedes applicable laws and regulations unless a specific exemption has been obtained.

## 3.  REQUIREMENTS

- 3.1  Item requirements.  The individual item requirements for device classes Q and V shall be in accordance with MIL-PRF-38535 as specified herein, or as modified in the device manufacturer's Quality Management (QM) plan.  The modification in the QM plan shall not affect the form, fit, or function as described herein.  The individual item requirements for device class M shall be in accordance with MIL-PRF-38535, appendix A for non-JAN class level B devices and as specified herein.
- 3.2  Design, construction, and physical dimensions.  The design, construction, and physical dimensions shall be as specified in MIL-PRF-38535 and herein for device classes Q and V or MIL-PRF-38535, appendix A and herein for device class M.
- 3.2.1  Case outlines.  The case outlines shall be in accordance with 1.2.4 herein.
- 3.2.2  Terminal connections.  The terminal connections shall be as specified on figure 1.
- 3.2.3  Radiation exposure circuit.  The radiation exposure circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing and acquiring activity upon request.
- 3.3  Electrical performance characteristics and postirradiation parameter limits.  Unless otherwise specified herein, the electrical performance characteristics and postirradiation parameter limits are as specified in table I and shall apply over the full ambient operating temperature range.
- 3.4  Electrical test requirements.  The electrical test requirements shall be the subgroups specified in table IIA.  The electrical tests for each subgroup are defined in table I.
- 3.5  Marking.  The part shall be marked with the PIN listed in 1.2 herein.  In addition, the manufacturer's PIN may also be marked.  For packages where marking of the entire SMD PIN number is not feasible due to space limitations, the manufacturer has the option of not marking the "5962-" on the device.  For RHA product using this option, the RHA designator shall still be marked.  Marking for device classes Q and V shall be in accordance with MIL-PRF-38535.  Marking for device class M shall be in accordance with MIL-PRF-38535, appendix A.
- 3.5.1  Certification/compliance mark.  The certification mark for device classes Q and V shall be a "QML" or "Q" as required in MIL-PRF-38535.  The compliance mark for device class M shall be a "C" as required in MIL-PRF-38535, appendix A.

## STANDARD MICROCIRCUIT DRAWING

DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990

| SIZE A   |                  | 5962-94680   |
|----------|------------------|--------------|
|          | REVISION LEVEL F | SHEET 4      |

| TABLE I. Electrical performance characteristics.   | TABLE I. Electrical performance characteristics.   | TABLE I. Electrical performance characteristics.                       | TABLE I. Electrical performance characteristics.                       | TABLE I. Electrical performance characteristics.   | TABLE I. Electrical performance characteristics.   | TABLE I. Electrical performance characteristics.   | TABLE I. Electrical performance characteristics.   |
|----------------------------------------------------|----------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|
| Test                                               | Symbol                                             | Conditions 1/ 2/ 3/ -55  C  TA  +125  C unless otherwise specified | Conditions 1/ 2/ 3/ -55  C  TA  +125  C unless otherwise specified | Group A subgroups                                  | Device type                                        | Limits 4/                                          | Unit                                               |
|                                                    |                                                    |                                                                        |                                                                        |                                                    |                                                    | Min Max                                            |                                                    |
| Input offset voltage                               | VOS                                                |                                                                        |                                                                        | 1                                                  | 01                                                 |                                                    | 60  V                                             |
|                                                    |                                                    |                                                                        |                                                                        | 2, 3                                               |                                                    |                                                    | 200                                                |
|                                                    |                                                    |                                                                        |                                                                        | 1                                                  | 02, 03                                             | -25 25                                             |                                                    |
|                                                    |                                                    |                                                                        |                                                                        | 2, 3                                               |                                                    | -60                                                | 60                                                 |
|                                                    |                                                    |                                                                        | M,D,P,L,R                                                              | 1                                                  | 02                                                 | -100                                               | 100                                                |
|                                                    |                                                    |                                                                        | M,D,P,L                                                                | 1                                                  | 03                                                 | -100                                               | 100                                                |
| Average input offset 5/                            | TCVOS                                              | TA = +125  C, -55  C                                                 | TA = +125  C, -55  C                                                 | 2, 3                                               | 01                                                 |                                                    | 1.3  V/  C                                       |
| voltage                                            |                                                    |                                                                        |                                                                        | 2, 3                                               | 02, 03                                             | -0.6                                               | 0.6                                                |
| Input offset current                               | IOS                                                |                                                                        |                                                                        | 1                                                  | 01                                                 |                                                    | 50 nA                                              |
|                                                    |                                                    |                                                                        |                                                                        | 2, 3                                               |                                                    |                                                    | 85                                                 |
|                                                    |                                                    |                                                                        |                                                                        | 1                                                  | 02, 03                                             | -35                                                | +35                                                |
|                                                    |                                                    |                                                                        |                                                                        | 2, 3                                               |                                                    | -50                                                | +50                                                |
|                                                    |                                                    |                                                                        | M,D,P,L,R                                                              | 1                                                  | 02                                                 | -100                                               | 100                                                |
|                                                    |                                                    |                                                                        | M,D,P,L                                                                | 1                                                  | 03                                                 | -100                                               | 100                                                |
|                                                    | IB                                                 |                                                                        |                                                                        | 2, 3                                               |                                                    | -95                                                |                                                    |
|                                                    |                                                    |                                                                        |                                                                        |                                                    |                                                    |                                                    | +95                                                |
|                                                    |                                                    |                                                                        |                                                                        | 1                                                  | 02, 03                                             | -40                                                | +40                                                |
|                                                    |                                                    |                                                                        |                                                                        | 2, 3                                               |                                                    | -60                                                | +60                                                |
|                                                    |                                                    |                                                                        | M,D,P,L,R                                                              | 1                                                  | 02                                                 | -1000                                              | 1000                                               |
|                                                    |                                                    |                                                                        | M,D,P,L                                                                | 1                                                  | 03                                                 | -1000                                              | 1000                                               |
| Input voltage range                                | IVR                                                | 5/ 6/                                                                  | 5/ 6/                                                                  | 1                                                  | 01, 02,                                            | -11                                                | +11 V                                              |
|                                                    |                                                    |                                                                        |                                                                        | 2, 3                                               | 03                                                 | -10.3                                              | +10.3                                              |
| Power supply rejection 5/                          | PSRR                                               | VS =  4 V to  18 V                                                   | VS =  4 V to  18 V                                                   | 1                                                  | 01                                                 |                                                    | 10  V/V                                           |
| ratio                                              |                                                    | VS =  4.5 V to  18 V                                                 | VS =  4.5 V to  18 V                                                 | 2, 3                                               |                                                    |                                                    | 20                                                 |
|                                                    |                                                    | VS =  4 V to  18 V                                                   | VS =  4 V to  18 V                                                   | 1                                                  | 02, 03                                             |                                                    | 10                                                 |
|                                                    |                                                    | VS =  4.5 V to  18 V                                                 | VS =  4.5 V to  18 V                                                 | 2, 3                                               |                                                    |                                                    | 16                                                 |

<!-- image -->

## TABLE I.  Electrical performance characteristics - Continued.

SIZE

A

| Test                         |       | Symbol   | Conditions 1/ 2/ 3/ -55  C  ￿ TA ￿  +125  C unless otherwise specified         | Group A subgroups   | Device type   | Limits 4/   | Limits 4/   | Unit   |
|------------------------------|-------|----------|------------------------------------------------------------------------------------|---------------------|---------------|-------------|-------------|--------|
|                              |       |          |                                                                                    |                     |               | Min         | Max         |        |
| Output voltage swing         | 5/    | VOUT     | RL  2 k                                                                          | 1                   | 01            | -12         | +12         | V      |
| Output voltage swing         |       | VOUT     | RL  600                                                                          |                     |               | -10         | +10         |        |
| Output voltage swing         |       | VOUT     | RL  2 k                                                                          | 2, 3                |               | -11         | +11         |        |
| Output voltage swing         |       | VOUT     | RL  2 k                                                                          | 1                   | 02, 03        | -12         | +12         |        |
| Output voltage swing         |       | VOUT     | RL  600                                                                          |                     |               | -10         | +10         |        |
| Output voltage swing         |       | VOUT     | RL  2 k                                                                          | 2, 3                |               | -11.5       | 11.5        |        |
| Supply current               |       | IS       | No load, TA = +25  C                                                              | 1                   | 01, 02, 03    |             | 4.67        | mA     |
| Supply current               |       | IS       | M,D,P,L,R                                                                          | 1                   | 02            |             | 4.7         |        |
| Supply current               |       | IS       | M,D,P,L                                                                            | 1                   | 03            |             | 4.7         |        |
| Power dissipation            | 5/    | PD       | No load, TA = +25  C                                                              | 1                   | 01, 02, 03    |             | 140         | mW     |
| Offset adjustment range      | 5/    | VOS ADJ  | RPK = 10 k  , TA = +25  C                                                        | 1                   | 01, 02, 03    | -0.5        | +0.5        | mV     |
| Output short-circuit current | 5/    | +ISC     | TA = 25  C                                                                        | 1                   | 01, 02, 03    |             | +70         | mA     |
| Output short-circuit current |       | -ISC     | TA = 25  C                                                                        | 1                   | 01, 02, 03    | -70         |             |        |
| Input noise voltage          | 5/ 7/ | EN       | fo = 1 Hz to 100 Hz, TA = +25  C                                                  | 4                   | 01, 02, 03    |             | 50          | nVRMS  |
| Input noise current          | 5/ 7/ | IN       | fo = 1 Hz to 100 Hz, TA = +25  C                                                  | 4                   | 01, 02, 03    |             | 40          | pARMS  |
| Slew rate 5/                 |       | SR       | VOUT =  5 V, RL  2 k  , CL = 100 pF, TA = +25  C, measured at -2.5 V to +2.5 V | 4                   | 01, 02, 03    | 1.7         |             | V/  s |
| Gain bandwidth               | 5/    | GBW      | TA = +25  C                                                                       | 4                   | 01, 02, 03    | 5.0         |             | MHz    |
| Common mode rejection ratio  | 5/    | CMRR     | VCM = IVR =  11 V                                                                 | 1                   | 01            | 106         |             | dB     |
| Common mode rejection ratio  |       | CMRR     | VCM = IVR =  10.3 V                                                               | 2,3                 |               | 100         |             |        |
| Common mode rejection ratio  |       | CMRR     | VCM = IVR =  11 V                                                                 | 1                   | 02, 03        | 114         |             |        |
| Common mode rejection ratio  |       | CMRR     | VCM = IVR =  10.3 V                                                               | 2,3                 |               | 108         |             |        |

See footnotes at end of table.

## STANDARD MICROCIRCUIT DRAWING

DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990

REVISION LEVEL

F

5962-94680

SHEET

6

## TABLE I.  Electrical performance characteristics - Continued.

| Test                      | Symbol   | Conditions 1/ 2/ 3/ -55  C ￿  TA  ￿+125  C unless otherwise specified   | Group A subgroups   | Device type   | Limits 4/   | Limits 4/   | Unit   |
|---------------------------|----------|-----------------------------------------------------------------------------|---------------------|---------------|-------------|-------------|--------|
|                           |          |                                                                             |                     |               | Min         | Max         |        |
| Large signal voltage gain | AVO      | VOUT =  10 V, RL  2 k                                                    | 1                   | 01            | 1000        |             | V/mV   |
| Large signal voltage gain | AVO      | VOUT =  10 V, RL  600                                                    | 1                   | 01            | 800         |             | V/mV   |
| Large signal voltage gain | AVO      | VOUT =  10 V, RL  2 k                                                    | 2,3                 | 01            | 500         |             | V/mV   |
| Large signal voltage gain | AVO      | VOUT =  10 V, RL  2 k                                                    | 1                   | 02, 03        | 1000        |             | V/mV   |
| Large signal voltage gain | AVO      | M,D,P,L,R                                                                   | 1                   | 02            | 100         |             | V/mV   |
| Large signal voltage gain | AVO      | M,D,P,L                                                                     | 1                   | 03            | 100         |             | V/mV   |
| Large signal voltage gain | AVO      | VOUT =  10 V, RL  600                                                    | 1                   | 02, 03        | 800         |             | V/mV   |
| Large signal voltage gain | AVO      | VOUT =  10 V, RL  2 k                                                    | 2,3                 | 02, 03        | 600         |             | V/mV   |

- Device 03 supplied to this drawing have been characterized through all levels P and L of irradiation. However, device 02 is only tested at the 'R' level and device type 03 is only tested at the 'L' level.  Pre and Post irradiation values are identical unless otherwise specified in Table I.  When performing post irradiation electrical measurements for

any RHA level, TA = +25  C.

- 2/ Unless otherwise specified,  VS =  15 V and source resistance (RS) = 50  .
- 3/ The 02 device may be low dose rate sensitive in a space environment and may demonstrate enhanced low dose rate effects.  Radiation end point limits for the noted parameters are guaranteed only for the conditions as specified in MIL-STD-883, method 1019, condition A for device type 02.  Device type 03, has been tested at low dose rate.
- 4/ The algebraic convention, whereby the most negative value is a minimum and the most positive is a maximum, is used in this table.  Negative current shall be defined as conventional current flow out of a device terminal.
- 5/ This parameter is not tested post-irradiation.
- 6/ Input voltage range is defined as the VCM range used for the CMRR test.
- 7/ This test shall be 100% tested at preburn-in of interim electrical parameters and guaranteed to the limits specified in table I herein.

## STANDARD MICROCIRCUIT DRAWING

DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990

| SIZE A   |                  | 5962-94680   |
|----------|------------------|--------------|
|          | REVISION LEVEL F | SHEET 7      |

| Device types    | 02              | 02, 03          | 01 and 02       |
|-----------------|-----------------|-----------------|-----------------|
| Case outlines   | G, P            | H               | 2               |
| Terminal number | Terminal symbol | Terminal symbol | Terminal symbol |
| 1               | BALANCE         | NC              | NC              |
| 2               | -INPUT          | NULL            | BALANCE         |
| 3               | +INPUT          | -INPUT          | NC              |
| 4               | -VS SEE NOTE 1  | +INPUT          | NC              |
| 5               | NC              | -VS             | -INPUT          |
| 6               | OUT             | NC              | NC              |
| 7               | +VS             | OUT             | +INPUT          |
| 8               | BALANCE         | +VS             | NC              |
| 9               | ---             | NULL            | NC              |
| 10              | ---             | NC              | -VS             |
| 11              | ---             | ---             | NC              |
| 12              | ---             | ---             | NC              |
| 13              | ---             | ---             | NC              |
| 14              | ---             | ---             | NC              |
| 15              | ---             | ---             | OUT             |
| 16              | ---             | ---             | NC              |
| 17              | ---             | ---             | +VS             |
| 18              | ---             | ---             | NC              |
| 19              | ---             | ---             | NC              |
| 20              | ---             | ---             | BALANCE         |

## NOTES:

1.  For case outline G only, the -VS pin is tied to the case of the can package.
2.  NC = No connection

FIGURE 1.  Terminal connections.

| STANDARD MICROCIRCUIT DRAWING                   | SIZE A   |                  | 5962-94680   |
|-------------------------------------------------|----------|------------------|--------------|
| DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990 |          | REVISION LEVEL F | SHEET 8      |

- 3.6  Certificate of compliance.  For device classes Q and V, a certificate of compliance shall be required from a QML-38535 listed manufacturer in order to supply to the requirements of this drawing (see 6.6.1 herein).  For device class M, a certificate of compliance shall be required from a manufacturer in order to be listed as an approved source of supply in MIL-HDBK-103 (see 6.6.2 herein).  The certificate of compliance submitted to DLA Land and Maritime-VA prior to listing as an approved source of supply for this drawing shall affirm that the manufacturer's product meets, for device classes Q and V, the requirements of MILPRF-38535 and herein or for device class M, the requirements of MIL-PRF-38535, appendix A and herein.
- 3.7  Certificate of conformance.  A certificate of conformance as required for device classes Q and V in MIL-PRF-38535 or for device class M in MIL-PRF-38535, appendix A shall be provided with each lot of microcircuits delivered to this drawing.
- 3.8  Notification of change for device class M.  For device class M, notification to DLA Land and Maritime-VA of change of product (see 6.2 herein) involving devices acquired to this drawing is required for any change that affects this drawing.
- 3.9  Verification and review for device class M.  For device class M, DLA Land and Maritime, DLA Land and Maritime's agent, and the acquiring activity retain the option to review the manufacturer's facility and applicable required documentation.  Offshore documentation shall be made available onshore at the option of the reviewer.
- 3.10  Microcircuit group assignment for device class M.  Device class M devices covered by this drawing shall be in microcircuit group number 49 (see MIL-PRF-38535, appendix A).

## 4.  VERIFICATION

- 4.1  Sampling and inspection.  For device classes Q and V, sampling and inspection procedures shall be in accordance with MIL-PRF-38535 or as modified in the device manufacturer's Quality Management (QM) plan.  The modification in the QM plan shall not affect the form, fit, or function as described herein.  For device class M, sampling and inspection procedures shall be in accordance with MIL-PRF-38535, appendix A.
- 4.2  Screening.  For device classes Q and V, screening shall be in accordance with MIL-PRF-38535, and shall be conducted on all devices prior to qualification and technology conformance inspection.  For device class M, screening shall be in accordance with method 5004 of MIL-STD-883, and shall be conducted on all devices prior to quality conformance inspection.

## 4.2.1  Additional criteria for device class M.

- a. Burn-in test, method 1015 of MIL-STD-883.
- (1) Test condition A, B, C, or D.  The test circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 of MIL-STD-883.
- (2) TA = +125  C, minimum.
- b. Interim and final electrical test parameters shall be as specified in table IIA herein.

## 4.2.2  Additional criteria for device classes Q and V.

- a. The burn-in test duration, test condition and test temperature, or approved alternatives shall be as specified in the device manufacturer's QM plan in accordance with MIL-PRF-38535.  The burn-in test circuit shall be maintained under document revision level control of the device manufacturer's Technology Review Board (TRB) in accordance with MIL-PRF-38535 and shall be made available to the acquiring or preparing activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 of MIL-STD-883.
- b. Interim and final electrical test parameters shall be as specified in table IIA herein.
- c. Additional screening for device class V beyond the requirements of device class Q shall be as specified in MIL-PRF-38535, appendix B.
4. 4.3  Qualification inspection for device classes Q and V.  Qualification inspection for device classes Q and V shall be in accordance with MIL-PRF-38535.  Inspections to be performed shall be those specified in MIL-PRF-38535 and herein for groups A, B, C, D, and E inspections (see 4.4.1 through 4.4.4).

## STANDARD MICROCIRCUIT DRAWING

DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990

| SIZE A   |                  | 5962-94680   |
|----------|------------------|--------------|
|          | REVISION LEVEL F | SHEET 9      |

TABLE IIA.  Electrical test requirements.

| Test requirements                                 | Subgroups (in accordance with MIL-STD-883, method 5005, table I)   | Subgroups (in accordance with MIL-PRF-38535, table III)   | Subgroups (in accordance with MIL-PRF-38535, table III)   |
|---------------------------------------------------|--------------------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|
|                                                   | Device class M                                                     | Device class Q                                            | Device class V                                            |
| Interim electrical parameters (see 4.2)           | 1                                                                  | 1                                                         | 1                                                         |
| Final electrical parameters (see 4.2)             | 1,2,3,4 1/                                                         | 1,2,3,4 1/                                                | 1,2,3,4 1/ 2/                                             |
| Group A test requirements (see 4.4)               | 1,2,3,4                                                            | 1,2,3,4                                                   | 1,2,3,4                                                   |
| Group C end-point electrical parameters (see 4.4) | 1                                                                  | 1                                                         | 1 2/                                                      |
| Group D end-point electrical parameters (see 4.4) | 1                                                                  | 1                                                         | 1                                                         |
| Group E end-point electrical parameters (see 4.4) | ---                                                                | ---                                                       | 1,4                                                       |

TABLE IIB.  Burn-in and operating life test delta parameters.  TA = +25  C. 1/ 2/

| Parameter   | Device type   | Limit   | Limit   | Delta    |
|-------------|---------------|---------|---------|----------|
|             |               | Min     | Max     |          |
| VIO         | 02, 03        | -135    | +135    |  75  V |
| I IB        | 02, 03        | -70     | +70     |  10 nA  |

- 1/  Deltas are performed at room temperature.
- 2/  240 hour burn-in and 1,000 hour operating group C life test.
- 4.4  Conformance inspection.  Technology conformance inspection for classes Q and V shall be in accordance with MIL-PRF-38535 including groups A, B, C, D, and E inspections, and as specified herein.  Quality conformance inspection for device class M shall be in accordance with MIL-PRF-38535, appendix A and as specified herein.  Inspections to be performed for device class M shall be those specified in method 5005 of MIL-STD-883 and herein for groups A, B, C, D, and E inspections (see 4.4.1 through 4.4.4).
- 4.4.1  Group A inspection.
- a. Tests shall be as specified in table II herein.
- b. Subgroups 5, 6, 7, 8, 9, 10, and 11 in table I, method 5005 of MIL-STD-883 shall be omitted.
- 4.4.2  Group C inspection.  The group C inspection end-point electrical parameters shall be as specified in table IIA herein.

| STANDARD MICROCIRCUIT DRAWING                   | SIZE A   |                  | 5962-94680   |
|-------------------------------------------------|----------|------------------|--------------|
| DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990 |          | REVISION LEVEL F | SHEET 10     |

- 4.4.2.1  Additional criteria for device class M.  Steady-state life test conditions, method 1005 of MIL-STD-883:
- a. Test condition A, B, C, or D.  The test circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1005 of MIL-STD-883.
- b. TA = +125  C, minimum.
- c. Test duration:  1,000 hours, except as permitted by method 1005 of MIL-STD-883.
- 4.4.2.2  Additional criteria for device classes Q and V.  The steady-state life test duration, test condition and test temperature, or approved alternatives shall be as specified in the device manufacturer's QM plan in accordance with MIL-PRF-38535.  The test circuit shall be maintained under document revision level control by the device manufacturer's TRB in accordance with MIL-PRF-38535 and shall be made available to the acquiring or preparing activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1005 of MIL-STD-883.
- 4.4.3  Group D inspection.  The group D inspection end-point electrical parameters shall be as specified in table IIA herein.
- 4.4.4  Group E inspection.  Group E inspection is required only for parts intended to be marked as radiation hardness assured (see 3.5 herein).
- a. End-point electrical parameters shall be as specified in table IIA herein.
- b. For device classes Q and V, the devices or test vehicle shall be subjected to radiation hardness assured tests as specified in MIL-PRF-38535 for the RHA level being tested.  For device class M, the devices shall be subjected to radiation hardness assured tests as specified in MIL-PRF-38535, appendix A for the RHA level being tested.  All device classes must meet the postirradiation end-point electrical parameter limits as defined in table I at TA = +25  C  5  C, after exposure, to the subgroups specified in table IIA herein.
- 4.4.4.1  Total dose irradiation testing.  Total dose irradiation testing shall be performed in accordance with MIL-STD-883 method 1019, condition A for device type 02, condition D for device type 03 and as specified herein.
5.  PACKAGING
- 5.1  Packaging requirements.  The requirements for packaging shall be in accordance with MIL-PRF-38535 for device classes Q and V or MIL-PRF-38535, appendix A for device class M.
6.  NOTES
- 6.1  Intended use.  Microcircuits conforming to this drawing are intended for use for Government microcircuit applications (original equipment), design applications, and logistics purposes.
- 6.1.1  Replaceability.  Microcircuits covered by this drawing will replace the same generic device covered by a contractor prepared specification or drawing.
- 6.1.2  Substitutability.  Device class Q devices will replace device class M devices.
- 6.2  Configuration control of SMD's.  All proposed changes to existing SMD's will be coordinated with the users of record for the individual documents.  This coordination will be accomplished using DD Form 1692, Engineering Change Proposal.
- 6.3  Record of users.  Military and industrial users should inform DLA Land and Maritime when a system application requires configuration control and which SMD's are applicable to that system.  DLA Land and Maritime will maintain a record of users and this list will be used for coordination and distribution of changes to the drawings.  Users of drawings covering microelectronic devices (FSC 5962) should contact DLA Land and Maritime-VA, telephone (614) 692-8108.
- 6.4  Comments.  Comments on this drawing should be directed to DLA Land and Maritime-VA, Columbus, Ohio 43218-3990, or telephone (614) 692-0540.

6.5  Abbreviations, symbols, and definitions.  The abbreviations, symbols, and definitions used herein are defined in

MIL-PRF-38535 and MIL-HDBK-1331.

## STANDARD MICROCIRCUIT DRAWING

DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990

| SIZE A   |                  | 5962-94680   |
|----------|------------------|--------------|
|          | REVISION LEVEL F | SHEET 11     |

## 6.6  Sources of supply.

- 6.6.1  Sources of supply for device classes Q and V.  Sources of supply for device classes Q and V are listed in MIL-HDBK-103 and QML-38535. The vendors listed in QML-38535 have submitted a certificate of compliance (see 3.6 herein) to DLA Land and Maritime-VA and have agreed to this drawing.

- 6.6.2  Approved sources of supply for device class M.  Approved sources of supply for class M are listed in MIL-HDBK-103. The vendors listed in MIL-HDBK-103 have agreed to this drawing and a certificate of compliance (see 3.6 herein) has been submitted to and accepted by DLA Land and Maritime-VA.

## STANDARD MICROCIRCUIT DRAWING

DLA LAND AND MARITIME COLUMBUS, OHIO 43218-3990

| SIZE A   |                  | 5962-94680   |
|----------|------------------|--------------|
|          | REVISION LEVEL F | SHEET 12     |

## STANDARD MICROCIRCUIT DRAWING BULLETIN

DATE:  17-09-12

Approved sources of supply for SMD 5962-94680 are listed below for immediate acquisition information only and shall be added to MIL-HDBK-103 and QML-38535 during the next revision.  MIL-HDBK-103 and QML-38535 will be revised to include the addition or deletion of sources.  The vendors listed below have agreed to this drawing and a certificate of compliance has been submitted to and accepted by DLA Land and Maritime-VA.  This information bulletin is superseded by the next dated revision of MIL-HDBK-103 and QML-38535.  DLA Land and Maritime maintains an online database of all current sources of supply at https://landandmaritimeapps.dla.mil/programs/smcr/.

| Standard microcircuit drawing PIN 1/   | Vendor CAGE number   | Vendor similar PIN 2/   |
|----------------------------------------|----------------------|-------------------------|
| 5962-9468001M2A                        | 3/                   | OP27BRC/883C            |
| 5962R9468002VGA                        | 24355                | OP27AJ/QMLR             |
| 5962R9468002VHA                        | 24355                | OP27AL/QMLR             |
| 5962R9468002VPA                        | 24355                | OP27AZ/QMLR             |
| 5962R9468002V2A                        | 24355                | OP27ARC/QMLR            |
| 5962L9468003VHA                        | 24355                | OP27AL/QMLL             |

- 1/  The lead finish shown for each PIN representing a hermetic package is the most readily available from the manufacturer listed for that part.  If the desired lead finish is not listed contact the vendor to determine its availability.
- 2/  Caution.  Do not use this number for item acquisition. Items acquired to this number may not satisfy the performance requirements of this drawing.
- 3/  Not available from an approved source of supply.

Vendor CAGE number

Vendor name and address

24355

Analog Devices Route 1 Industria P.O. Box 9106 Norwood, MA  02 Point of contact: l Park 062 7910 Triad Center Drive

Greensboro, NC  27409-9605

The information contained herein is disseminated for convenience only and the Government assumes no liability whatsoever for any inaccuracies in the information bulletin.