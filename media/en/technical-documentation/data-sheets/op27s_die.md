<!-- lastmod 2023-12-05 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detailed requirements for Analog Devices space qualified die including die qualification as described for Class K in MIL-PRF-38534, Appendix C, Table C-II except as modified herein.

The manufacturing flow described in the STANDARD DIE PRODUCTS PROGRAM brochure at http://www.analog.com/aerospace is to be considered a part of this specification.

This data sheet specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at www.analog.com/OP27

- The complete part number(s) of this specification follow:

## Part Number

## Description

OP27-000C

Low-Noise Precision Operational Amplifier

OP27R000C

Radiation Tested Low-Noise Precision Operational Amplifier

## Die Information

## 3.1 Die Dimensions

| DieSize        | Die Thickness   | Bond Pad Metalization   |
|----------------|-----------------|-------------------------|
| 66 mil x95 mil | 19 mil± 2mil    | AI/Cu                   |

## 3.2 Die Picture

<!-- image -->

1. BALANCE
2. -INPUT
3. +INPUT
4. -VS
5. NC
6. OUT
7. +VS
8. BALANCE

## Low-Noise Precision

## Operational

OP27

Supply Voltage (VS)      .................................................................

±22V

Input Voltage 2/    .........................................................................

±22V

Output Short Circuit Duration    ....................................................

Indefinite

Differential Input Voltage 3/   ........................................................

±0.7V

Differential Input Current 3/   ........................................................

±25mA

Storage Temperature Range    ...................................................

-65  C to +150  C

Operating Temperature Range ...................................................

-55  C to +125  C

Junction Temperature (TJ)………………………………..………...    150°C

## Absolute Maximum Ratings Notes

- 1/ Stresses above the absolute maximum rating may cause permanent damage to the device.  Extended operation at the maximum levels may degrade performance and affect reliability.
- 2/ For supply voltages less than ±22V, the absolute maximum input voltage is equal to the supply voltages.
- 3/ The device inputs are protected by back-to-back diodes.  Current limiting resistors are not used in order to achieve low noise.  If differential input voltage exceeds ±0.7V, the input current should be limited to 25mA.

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a) Qual Sample Size and Qual Acceptance Criteria - 10/0
- (b) Qual Sample Package - DIP
- (c) Pre-screen electrical test over temperature performed post-assembly prior to die qualification.

|    |    |    |
|----|----|-----|
|    |   |     |
|    |    |    |
|    |   |     |
|    |   |     |
|    |    |    |
|   |    |     |

Table I Notes:

1/ VS = ±15V, TA = 25  C, unless otherwise specified.

|    |    |
|----|-----|
|    |    |
|   |     |
|   |     |
|    |    |
|   |    |
|   |     |
|   |     |

Table II Notes:

1/ VS = ±15V, RS = 50  , unless otherwise specified.

2/ This parameter not tested post irradiation.

3/ Devices tested at 100Krad irradiation.

| TableIll-LifeTestEndpointandDeltaParameter (Product is tested in accordance with Table ll with the following exceptions)   | TableIll-LifeTestEndpointandDeltaParameter (Product is tested in accordance with Table ll with the following exceptions)   | TableIll-LifeTestEndpointandDeltaParameter (Product is tested in accordance with Table ll with the following exceptions)   | TableIll-LifeTestEndpointandDeltaParameter (Product is tested in accordance with Table ll with the following exceptions)   | TableIll-LifeTestEndpointandDeltaParameter (Product is tested in accordance with Table ll with the following exceptions)   | TableIll-LifeTestEndpointandDeltaParameter (Product is tested in accordance with Table ll with the following exceptions)   | TableIll-LifeTestEndpointandDeltaParameter (Product is tested in accordance with Table ll with the following exceptions)   | TableIll-LifeTestEndpointandDeltaParameter (Product is tested in accordance with Table ll with the following exceptions)   | TableIll-LifeTestEndpointandDeltaParameter (Product is tested in accordance with Table ll with the following exceptions)   |
|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Parameter                                                                                                                  |                                                                                                                            | Sub- groups                                                                                                                | PostBurnInLimit                                                                                                            | PostBurnInLimit                                                                                                            | Post Life Test Limit                                                                                                       | Post Life Test Limit                                                                                                       | Life Test Delta                                                                                                            |                                                                                                                            |
| Parameter                                                                                                                  |                                                                                                                            | Sub- groups                                                                                                                | Min                                                                                                                        | Max                                                                                                                        | Min                                                                                                                        | Max                                                                                                                        | Life Test Delta                                                                                                            |                                                                                                                            |
| put Offset Voltage Input Offset Voltage                                                                                    | Vos Vos                                                                                                                    | 4                                                                                                                          | -60                                                                                                                        | 60                                                                                                                         | -135                                                                                                                       | 135                                                                                                                        | ±75                                                                                                                        | μV μV                                                                                                                      |
| put Offset Voltage Input Offset Voltage                                                                                    | Vos Vos                                                                                                                    | 5,6                                                                                                                        |                                                                                                                            |                                                                                                                            | -170                                                                                                                       | 170                                                                                                                        |                                                                                                                            | μV μV                                                                                                                      |
| nputBiasCurrent Input Bias Current                                                                                         | IiB IiB                                                                                                                    | 1                                                                                                                          | -55                                                                                                                        | 55                                                                                                                         | -65                                                                                                                        | 65                                                                                                                         | ±10                                                                                                                        | nA nA                                                                                                                      |
| nputBiasCurrent Input Bias Current                                                                                         | IiB IiB                                                                                                                    | 2,3                                                                                                                        |                                                                                                                            |                                                                                                                            | -85                                                                                                                        | 85                                                                                                                         |                                                                                                                            | nA nA                                                                                                                      |

## 5.0 Life Test/Burn-In Information

- 5.1 HTRB is not applicable for this drawing.
- 5.2 Burn-in is per MIL-STD-883 Method 1015 test condition B or C.
- 5.3 Steady state life test is per MIL-STD-883 Method 1005.

| Rev   | Description of Change                                                                                                                | Date           |
|-------|--------------------------------------------------------------------------------------------------------------------------------------|----------------|
| A     | Initiate                                                                                                                             | 3-Nov-111      |
| B     | Delete post burn-in temp limit from Table Ill; Add Document Number and Absolute Max Ratings                                          | 263-Nov-111    |
| C     | Delete VOS adjust from Table I and Il, Delete 600ohm gain, change PSRR range  from ±4V to ±18V to ±4.5V to ±18V. Update web address. | 20-Dec-01      |
| D     | Update web address                                                                                                                   | Aug.5, 2003    |
| E     | Add radiation limits and part number for rad guarantee.                                                                              | Sept. 30, 2003 |
| F     | Update header/footer and add to 1.0 Scope description.                                                                               | Feb.26,2008    |
| G     | Add Junction Temperature(TJ)...150°C to 3.3 Absolute Max Ratings                                                                     | March 27,2008  |
| H     | Updated Section 4.0c note to indicated pre-screen temp testing being performed.                                                      | June6,2009     |
| 一     | Updated fonts and sizes to ADl standard                                                                                              | Oct 3, 2011    |

<!-- image -->