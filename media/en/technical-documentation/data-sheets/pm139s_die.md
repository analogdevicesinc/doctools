<!-- lastmod 2020-12-22 -->
<!-- image -->

## SCOPE

This specification documents the detailed requirements for Analog Devices space qualified die including die qualification as described for Class K in MIL-PRF-38534, Appendix C, Table C-II except as modified herein.

The manufacturing flow described in the STANDARD DIE PRODUCTS PROGRAM brochure at http://www.analog.com/marketSolutions/militaryAerospace/pdf/Die\_Broc.pdf is to be considered a part of this specification.

This data sheet specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at www.analog.com/PM139

- The complete part number(s) of this specification follow: Part Number.

Part Number                                                               Description

PM139-000C                    Quad Low-Power Voltage Comparator

PM139R000C                   Quad Low-Power Voltage Comparator with Radiation Guarantee

## 3.0 Die Information

## 3.1 Die Dimensions

## 3.2 Die Picture 3.2 Die Picture

| Die Size        | DieThickness   | BondPad Metalization   |
|-----------------|----------------|------------------------|
| 51 mil x 48 mil | 19mil±2mil     | AI/Cu                  |

<!-- image -->

InformationfurnishedbyAnalog gDevicesisbelievedtobeaccurateandreliable. However,noresponsibilityisassumedbyAnalog Devicesfor itsuse,norfor any infringementsofpatentsorotherrightsofthirdpartiesthatmayresultfromitsuse. Specificationssubjecttochangewithoutnotice.Nolicenseisgrantedbyimplication orotherwiseunderanypatentorpatentrightsofAnalogDevices.Trademarksand registeredtrademarksarethepropertyoftheirrespectivecompanies.

2. OUT 1

9. IN 3+

- 3.V+

10. IN 4-

4. IN 1- 11. IN 4+

5. IN 1+

12. GND

6. IN 2-

13. OUT 4

7. IN 2+

14.OUT 3

## Quad Low-Power Voltage

PM139

## PM139

## 3.3 AbsoluteMaximumRatings s1/

| Supply Voltage Range                | ...................................................... 36V dc or ±18V dc                 |
|-------------------------------------|------------------------------------------------------------------------------------------|
| Input Voltage Range                 | ......................................................... -0.3V dc to 36V dc             |
| Input Current (V IN < -0.3V)        | ................................................ 50mA                                    |
| Sink Current                        | ...................................................................... 20mAapproximately |
| Storage Temperature                 | ........................................................ -65°C to +150°C                 |
| Ambient Operating Temperature Range | ........................... -55°C to +125°C                                              |
| Junction Temperature (T J           | )………………………….….……....150°C                                                                |

Absolute Maximum Ratings Notes:

1/         Stresses above the absolute maximum rating may cause permanent damage to the device.

Extended operation at the maximum levels may degrade performance and affect reliability.

## 4.0 Die e Qualification

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a) Qual Samples Size and Qual Acceptance Criteria - 25/2
- (b) Qual Sample Package - DIP
- (c) Pre-screen electrical test over temperature performed post-assembly prior to die qualification.

| TableI-DiceElectrical Characteristics        | TableI-DiceElectrical Characteristics   | TableI-DiceElectrical Characteristics           | TableI-DiceElectrical Characteristics   | TableI-DiceElectrical Characteristics   | TableI-DiceElectrical Characteristics   |
|----------------------------------------------|-----------------------------------------|-------------------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|
| Parameter                                    | Symbol Symbol                           | Conditions 1                                    | Limit Min                               | Limit Max                               | Units                                   |
| Input Offset Voltage Input Offset Voltage    | V 10                                    |                                                 |                                         | ±2                                      | mv                                      |
| Input Offset Current Input OffsetCurrent     | 10                                      | I... -I. with output in the linear range -NI+NI |                                         | 25                                      | nA                                      |
| Input Bias Current InputBiasCurrent          | IB                                      | I.. -I. with output in the linear range IN+IN-  |                                         | 100                                     | nA                                      |
| Output Sink Current Output Sink Current      | SINK SINK                               | V.. ≥ 1v, V. = OV, IN- +NI V ≤1.5V              | 6 6                                     |                                         | mA                                      |
| Saturation Voltage Saturation Voltage        | V SAT V SAT                             | V..≥ 1V,V. = OV, IN- +NI ≤ 4mA SINK             |                                         | 400                                     | mV                                      |
| Output Leakage Current OutputLeakage Current | LEAK                                    | V=0V,V≥1VdcV.=30V IN- +NI                       |                                         | 0.5                                     | μA                                      |
| Supply Current  Supply Current               |                                         | R =∞∞,V+=30V L                                  |                                         | 3                                       | mA                                      |
| Input Voltage Common Mode Rejection Ratio    | CMRR                                    | V+ = 15V,V. = 0V to 13.5V, R ≥ 15kQ CM L        | 60.5                                    |                                         | dB                                      |

Table I Notes:

1/ V+ = +5V, V- = 0V, VO = 1.4V, VIN = 0V, and TA = 25°C, unless otherwise specified.

## Table Il - Electrical Characteristics for Qual Samples

|     |    |
|-----|-----|
|     |    |
|     |    |
|     |    |
|     |    |
|     |    |
|   |   |
|    |    |
|    |     |
|    |     |

## Table II Notes:

1/      V+ = +5V, V- = 0V, VO = 1.4V, and VIN = 0V, unless otherwise specified.

2/ Post 100Krad limit

3/ Not tested post irradiation.

| Table Ill- Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table ll with the following exceptions)   | Table Ill- Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table ll with the following exceptions)   | Table Ill- Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table ll with the following exceptions)   | Table Ill- Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table ll with the following exceptions)   | Table Ill- Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table ll with the following exceptions)   | Table Ill- Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table ll with the following exceptions)   | Table Ill- Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table ll with the following exceptions)   | Table Ill- Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table ll with the following exceptions)   | Table Ill- Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table ll with the following exceptions)   |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Parameter                                                                                                                         | Symbol Symbol                                                                                                                     | Sub- groups Sub- groups                                                                                                           | Post Burn In Limit Post Burn In Limit                                                                                             | Post Burn In Limit Post Burn In Limit                                                                                             | Post Life Test Limit                                                                                                              | Post Life Test Limit                                                                                                              | Life Test Delta                                                                                                                   | Units                                                                                                                             |
| Parameter                                                                                                                         | Symbol Symbol                                                                                                                     | Sub- groups Sub- groups                                                                                                           | Min Min                                                                                                                           | Max                                                                                                                               | Min                                                                                                                               | xew                                                                                                                               | Life Test Delta                                                                                                                   | Units                                                                                                                             |
| Input Offset Voltage                                                                                                              | V 10 V I0                                                                                                                         | 1 1                                                                                                                               |                                                                                                                                   | ±3.5                                                                                                                              |                                                                                                                                   | ±5                                                                                                                                | ±1.5                                                                                                                              | mV                                                                                                                                |
| Input Offset Voltage                                                                                                              | V 10 V I0                                                                                                                         | 2,3 2,3                                                                                                                           |                                                                                                                                   |                                                                                                                                   |                                                                                                                                   | ±7                                                                                                                                |                                                                                                                                   |                                                                                                                                   |
| Input Bias Current                                                                                                                | IB IB                                                                                                                             | 1                                                                                                                                 |                                                                                                                                   | ±115 ±115                                                                                                                         |                                                                                                                                   | ±130                                                                                                                              | ±15                                                                                                                               | nA                                                                                                                                |
| Input Bias Current                                                                                                                | IB IB                                                                                                                             | 2, 3 2,3                                                                                                                          |                                                                                                                                   |                                                                                                                                   |                                                                                                                                   | ±330                                                                                                                              |                                                                                                                                   |                                                                                                                                   |
| Input Offset Current                                                                                                              | I 10 10                                                                                                                           | 1 1                                                                                                                               |                                                                                                                                   | ±30 ±30                                                                                                                           |                                                                                                                                   | ±35                                                                                                                               |                                                                                                                                   | nA                                                                                                                                |
| Input Offset Current                                                                                                              | I 10 10                                                                                                                           | 2,3 2,3                                                                                                                           |                                                                                                                                   |                                                                                                                                   |                                                                                                                                   | ±100                                                                                                                              |                                                                                                                                   |                                                                                                                                   |

## 5.0 Life Test/Burn-In Information

- 5.1 HTRB is not applicable for this drawing.
- 5.2 Burn-in is per MIL-STD-883 Method 1015 test condition B or C.
- 5.3 Steady state life test is per MIL-STD-883 Method 1005.

## PM139

| Rev   | Description of Change  Description of Change                                   | Date           |
|-------|--------------------------------------------------------------------------------|----------------|
| A     | Initiate                                                                       | 07-Feb-02      |
| B     | Add CMVR for temperature different than subgroup 1. (OV to 13V)                | 10-Apr-02      |
|       | Add 100Krad irradiation limits to table ll. Update web address.                | 6-Jan-03       |
| D     | Correct die picture. Changed from LCC die picture to DIP die picture.          | 17-Feb-05      |
| E     | Update the 1.0 Scope Description                                               | 13-Jul-07      |
| F     | Update header/footer and add to 1.0 scope description.                         | Feb. 13,2008   |
| G     |                                                                                | March 31, 2008 |
| H     | Updated Section 4.0c note to indicate pre-screen temp testing being performed. | 6-JUN-2009     |
| 一     | Updated fonts and font sizes to ADl standards and updated Die picture          | 1-OCT-2011     |

<!-- image -->