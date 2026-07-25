<!-- lastmod 2022-06-30 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detail requirements for space qualified product manufactured on Analog Devices, Inc.'s QML certified line per MIL-PRF-38535 Level V except as modified herein.

The manufacturing flow described in the STANDARD SPACE LEVEL PRODUCTS PROGRAM brochure is to be considered a part of this specification. http://www.analog.com/aerospace

This data sheet specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at www.analog.com/REF43

## 2.0 Part Number . The complete part number(s) of this specification follow:

Part Number

## Description

REF43-803J

+2.5V Low-Power Precision Voltage Reference

REF43-803L

+2.5V Low-Power Precision Voltage Reference

REF43-803RC

+2.5V Low-Power Precision Voltage Reference

REF43-803Z

+2.5V Low-Power Precision Voltage Reference

REF43R803J

Radiation Tested, +2.5V Low-Power Precision Voltage Reference

REF43R803L

Radiation Tested, +2.5V Low-Power Precision Voltage Reference

REF43R803RC

Radiation Tested, +2.5V Low-Power Precision Voltage Reference

REF43R803Z

Radiation Tested, +2.5V Low-Power Precision Voltage Reference

## 2.1 Case Outline

Letter

Descriptive designator¹

## Case Outline (Lead Finish per MIL-PRF-38535)

J

MACY1-X8

8-Lead Can

L

GDFP1-F10

10-lead cerpac

RC

CQCC1-N20

20-Terminal leadless chip carrier

Z

GDIP1-T8

8-Lead ceramic dual-in-line package (CERDIP)

¹ See MIL-STD-1835

## 3.0 Absolute Maximum Ratings . (TA = 25°C, unless otherwise noted)

| Supply voltage .............................................................................................................................40V   |
|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Power dissipation...................................................................................................................500mW         |
| Output short circuit duration ................................................................................................Indefinite          |
| Storage Temperature range........................................................................................-65° to +150°C                   |
| Operating temperature range .....................................................................................-55° to +125°C                   |
| Lead temperature (soldering, 60 sec) ................................................................................... +300°C                   |
| Junction Temperature (T J ) .................................................................................................... +175°C           |

## REF43

## 3.1 Thermal Characteristics :

8 pin hermetic cerdip (Z)

|    |    |
|-----|-----|

<!-- image -->

<!-- image -->

Figure 1 - Terminal connections.

<!-- image -->

* Reserved for factory testing. Make no electrical connection to these pins.

## 4.0 Electrical Table : See notes at end of table

|    |
|-----|
| I L |

## TABLEINOTES:

- Vin = 5V, unless otherwise specified. NOTE: Output decoupling is not generally required or recommended on the REF43.In applications that require output decoupling,carewill need tobetaken when choosing thecapacitor due to the ESRofthe capacitor.lf capacitorswith very lowESR arechosen it maybe resistance when low ESR capacitors are used will help with the stability of the REF43 when power is applied over the entire temperature range.Contact ADI Aerospaceapplicationsformoredetailedapplicationinformation.
- GuaranteedbyLoadregulationtest.
- Output voltage temperature coefficient is measured by the box method.The tempco is defined as the slope of the diagonal of abox drawn around the output voltage plotted against temperature.Vout is measured at Tmin and Tmax.The lowest of these readings is subtracted from the highest reading and the resultingdifferenceisdividedby(TmAx-Tmin).
- Nottestedpost-irradiation.

## 4.1 Electrical Test Requirements :

| TableIl                                 | TableIl                                               |
|-----------------------------------------|-------------------------------------------------------|
| Test Requirements                       | Subgroups (in accordance with MIL-PRF-38535,TableIII) |
| InterimElectricalParameters             | 1                                                     |
| FinalElectricalParameters               | 1,2,3,8 1/ 2/                                         |
| GroupATestRequirements                  | 1,2,3,7,8                                             |
| Group C end-point electrical parameters | 1 2/                                                  |
| Group D end-point electrical parameters | 1                                                     |
| Group E end-point electrical parameters | 1                                                     |

- 1/P PDA applies to subgroup1.Delta'sexcluded fromPDA.
- 2/See table Illfor delta measurement parameters.See TableIfor test conditions.

## 4.2 Table III. Lifetest / Burn-in delta limits.

| Table Ill   | Table Ill        | Table Ill         | Table Ill   | Table Ill   |
|-------------|------------------|-------------------|-------------|-------------|
| TEST TITLE  | BURN-IN ENDPOINT | LIFETEST ENDPOINT | DELTA LIMIT | UNITS       |
| VO          | 2.50 ±0.0025     | 2.50 ±0.005       | ±0.0025     | V           |
| ISY         | 450              | 495               | ±45         |             |

## 5.0 Life Test/Burn-In Circuit:

- 5.1 HTRB is not applicable for this drawing.
- 5.2 Burn-in is per MIL-STD-883 Method 1015 test condition B.
- 5.3 Steady state life test is per MIL-STD-883 Method 1005.

| Rev   | Description of Change Description of Change                                                                                        | Date           |
|-------|------------------------------------------------------------------------------------------------------------------------------------|----------------|
| A     | Initiate                                                                                                                           | 26-May-00      |
| B     | Add subgroup 8 to table Il, Add L package, update table Ill                                                                        | Mar. 27, 2001  |
|       | Update web address. Table ll - delete subgroup 7 from final electrical parameters and add subgroup 7 to Group A Test Requirements. | Feb.14, 2002   |
| D     | Update web address. Delete burn-in circuit.                                                                                        | May 29, 2003   |
| E     | columnonelectricaltable                                                                                                            | Feb.03,2005    |
| F     | Update Table I Load Regulation specs                                                                                               | April 27,2006  |
|       | Update Table I Load Regulation specs.                                                                                              | Feb.13,2007    |
| H     | Update header/footer and add to 1.0 Scope description.                                                                             | Feb.21, 2008   |
|       | Add temperature junction (Ti)..+175°C to 3.0 Absolute Max. Ratings.                                                                | April 4, 2008  |
| J     | Correct typo in Section 2 part numbers to be "R803" parts.                                                                         | Sep. 5, 2008   |
| K     | Add application note on output capacitive load sensitivity when using low ESR capacitors.                                          | Oct.5,2012     |
| L     | Correct typo on Theta JC/JA symbol                                                                                                 | Oct.15, 2012   |
| M     | Change Load Regulation limit for RC package for Sub Group 1                                                                        | March 30, 2016 |

<!-- image -->