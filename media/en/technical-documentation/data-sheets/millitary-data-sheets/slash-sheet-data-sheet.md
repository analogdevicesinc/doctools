<!-- lastmod 2024-01-23 -->
## MILITARY SPECIFICATION MICROCIRCUITS, LINEAR, LOW OFFSET OPERATIONAL AMPLIFIERS, MONOLITHIC SILICON

Reactivated after 5 November 2003 and may be used for new and existing designs and acquisitions

This specification is approved for use by all Departments and Agencies of the Department of Defense.

The requirements for acquiring the product described herein shall consist of this specification sheet and MIL-PRF-38535.

## 1.  SCOPE

- 1.1  Scope.  This specification covers the detail requirements for monolithic silicon, low offset operational amplifiers.  Two product assurance classes and a choice of case outlines and lead finishes are provided and are reflected in the complete part number.  For this product, the requirements of MIL-M-38510 have been superseded by MIL-PRF-38535 (see 6.4).
- 1.2  Part or Identifying Number (PIN).  The PIN is in accordance with MIL-PRF-38535 and as specified herein.
- 1.2.1  Device types.  Devices may be monolithic or they may consist of two separate independent die.  The device types are as follows:
- 1.2.2  Device class.  The device class is the product assurance level as defined in MIL-PRF-38535.
- 1.2.3  Case outline.  The case outlines are as designated in MIL-STD-1835 and as follows:

|   Device type | Circuit                                                                                             |
|---------------|-----------------------------------------------------------------------------------------------------|
|            01 | Single operational amplifier, ultra low offset, internally compensated.                             |
|            02 | Single operational amplifier, low offset, internally compensated.                                   |
|            03 | Single operational amplifier, ultra low offset, internally compensated, ultra low noise.            |
|            04 | Dual operational amplifier, low offset, ultra low noise internally compensated.                     |
|            05 | Single operational amplifier, ultra low offset, internally compensated, ultra low noise, broadband. |
|            06 | Single operational amplifier, ultra low offset, internally compensated, ultra low noise.            |

| Outline letter   | Descriptive designator   |   Terminals | Package style                |
|------------------|--------------------------|-------------|------------------------------|
| C                | GDIP1-T14 or CDIP2-T14   |          14 | Dual-in-line                 |
| G                | MACY1-X8                 |           8 | Can                          |
| P                | GDIP1-T8 or CDIP2-T8     |           8 | Dual-in-line                 |
| 2                | CQCC1-N20                |          20 | Square leadless chip carrier |

Comments, suggestions, or questions on this document should be addressed to:  Defense Supply Center Columbus, ATTN: DSCC-VAS, P.O. Box 3990, Columbus, OH 43218-3990, or emailed to linear@dla.mil. Since contact information can change, you may want to verify the currency of this address information using the ASSIST Online database at https://assist.daps.dla.mil.

## 1.3  Absolute maximum ratings.

| Supply voltage (V CC ) .......................................................................    |  22 V              |
|---------------------------------------------------------------------------------------------------|---------------------|
| Input voltage (V IN ) ........................................................................... |  V CC              |
| Differential input voltage range:                                                                 |                     |
| Device types 01 and 02 ................................................................           |  30 V              |
| Device types 03, 04, 05, and 06 ...................................................               |  0.7 V 1/          |
| Output short-circuit duration .............................................................       | 2/                  |
| Lead temperature (soldering, 60 seconds) ......................................                   | +300  C            |
| Storage temperature range ..............................................................          | -65  C to +150  C |
| Junction temperature (T J ) ................................................................      | +175  C 3/         |
| Maximum power dissipation (P D ) .....................................................            | 500mW 4/            |

## 1.4 Recommended operating conditions.

Supply voltage range (VCC):

Device types 01 and 02 ................................................................

Device types 03, 04, 05, and 06  ...................................................

Ambient operating temperature range (TA) ......................................

## 1.5 Power and thermal characteristics.

| Case outlines   | Maximum allowable power dissipation   | Maximum  JC   | Maximum  JA   |
|-----------------|---------------------------------------|----------------|----------------|
| C               | 400 mWat T A = +125  C               | 28  C/W       | 120  C/W      |
| G               | 330 mWat T A = +125  C               | 60  C/W       | 150  C/W      |
| P               | 400 mWat T A = +125  C               | 28  C/W       | 120  C/W      |
| 2               | 400 mWat T A = +125  C               | 20  C/W       | 120  C/W      |

## 2.  APPLICABLE DOCUMENTS

2.1  General.  The documents listed in this section are specified in sections 3, 4, or 5 of this specification.  This section does not include documents cited in other sections of this specification or recommended for additional information or as examples.  While every effort has been made to ensure the completeness of this list, document users are cautioned that they must meet all specified requirements of documents cited in sections 3, 4, or 5 of this specification, whether or not they are listed.

\_\_\_\_\_\_

1/  If the differential input voltage exceeds  0.7 V, the input current should be limited to  10 mA.

2/  Output may be shorted to ground indefinitely at VS =  15 volts, T A  = 25  C.  Temperature and supply voltages shall be limited to ensure dissipation rating is not exceeded.

3/  For short term test (in the specific burn-in and steady-state life test configuration when required and up to 168 hours maximum), TJ = 175  C.

4/  Maximum power dissipation versus ambient temperature.

## MIL-M-38510/135G

4.5 V dc to



C

20.0 V



4.5 V dc to



-55



18.0 V



C to +125



C

## 2.2  Government documents.

- 2.2.1  Specifications, standards, and handbooks.  The following specifications, standards, and handbooks form a part of this document to the extent specified herein.  Unless otherwise specified, the issues of these documents are those cited in the solicitation or contract.

## DEPARTMENT OF DEFENSE SPECIFICATIONS

MIL-PRF-38535 -Integrated Circuits (Microcircuits) Manufacturing, General Specification for.

## DEPARTMENT OF DEFENSE STANDARDS

MIL-STD-883 -

Test Method Standard, Microcircuits.

MIL-STD-1835 - Electronic Component Case Outlines.

(Copies of these documents are available online at https://assist.daps.dla.mil/quicksearch/ or from the Standardization Document Order Desk, 700 Robbins Avenue, Building 4D, Philadelphia, PA  19111-5094.)

- 2.3  Order of precedence.  Unless otherwise noted herein or in contract, in the event of a conflict between the text of this document and the references cited herein (except for related specification sheets), the text of this document takes precedence.  Nothing in this document, however, supersedes applicable laws and regulations unless a specific exemption has been obtained.

## 3.  REQUIREMENTS

- 3.1  Qualification.  Microcircuits furnished under this specification sheet shall be products that are manufactured by a manufacturer authorized by the qualifying activity for listing on the applicable qualified manufacturers list before contract award (see 4.3 and 6.3).
- 3.2  Item requirements.  The individual item requirements shall be in accordance with MIL-PRF-38535 and as specified herein or as modified in the device manufacturer's Quality Management (QM) plan.  The modification in the QM plan shall not affect the form, fit, or function as described herein.
- 3.3  Design, construction, and physical dimensions.  The design, construction, and physical dimensions shall be as specified in MIL-PRF-38535 and herein.
- 3.3.1  Circuit diagram and terminal connections.  The circuit diagram and terminal connections shall be as specified on figure 1.
- 3.3.2  Schematic circuits.  The schematic circuits shall be maintained by the manufacturer and made available to the qualifying activity and the preparing activity upon request.
- 3.3.3  Case outlines.  The case outlines shall be as specified in 1.2.3.
- 3.4  Lead material and finish.  The lead material and finish shall be in accordance with MIL-PRF-38535 (see 6.6).
- 3.5  Electrical performance characteristics.  The electrical performance characteristics are as specified in table I, and unless otherwise specified, apply over the full recommended ambient operating temperature range for supply voltages from  4.5 V dc to  20 V dc for device types 01 and 02 and for supply voltages from  4.5 V dc to  18 V dc for device types 03, 04, 05, and 06.  Unless otherwise specified, source resistance (RS) shall be 50 ohms for all tests.
- 3.5.1  Offset null circuits.  The nulling inputs shall be capable of being nulled 0.5 mV beyond the specified offset voltage limits for -55  C  TA  125  C using the circuit on figure 2.
- 3.5.2 Instability oscillations.  The devices shall be free of oscillations when operated in the test circuits of this specification sheet.

## MIL-M-38510/135G

## MIL-M-38510/135G

TABLE I.  Electrical performance characteristics.

| Test                                         | Symbol       | Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Limits   | Limits   | Unit     |
|----------------------------------------------|--------------|--------------------------------------------------------------------------------------------------------------|---------------|----------|----------|----------|
|                                              | Symbol       | Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Min      | Max      | Unit     |
| Input offset voltage                         | V IO         | 2/ 3/ 4/ See figure 4, T                                                                                     | 01,03, 05,06  | -25      | 25       |  V      |
| Input offset voltage                         |              | 2/ 3/ 4/ See figure 4, T                                                                                     | 02            | -75      | 75       |  V      |
| Input offset voltage                         |              | 2/ 3/ 4/ See figure 4, T                                                                                     | 04            | -80      | 80       |  V      |
| Input offset voltage                         |              | 2/ 3/                                                                                                        | 01,03, 05,06  | -60      | 60       |  V      |
| Input offset voltage                         |              | -55  C  T A  +125  C                                                                                    | 02            | -200     | 200      |  V      |
| Input offset voltage                         |              | -55  C  T A  +125  C                                                                                    | 04            | -180     | 180      |  V      |
| Input offset voltage                         |              | End-point limit 4/                                                                                           | 01,03, 05,06  | -100     | 100      |  V      |
| Input offset voltage                         |              | End-point limit 4/                                                                                           | 02            | -175     | 175      |  V      |
| Input offset voltage                         |              | End-point limit 4/                                                                                           | 04            | -180     | 180      |  V      |
| Input offset voltage temperature sensitivity |  V IO /  T |                                                                                                              | 01,03, 05,06  | -0.6     | 0.6      |  V/  C |
| Input offset voltage temperature sensitivity |              |                                                                                                              | 02            | -1.3     | 1.3      |  V/  C |
| Input offset voltage temperature sensitivity |              |                                                                                                              | 04            | -1.0     | 1.0      |  V/  C |
| Input bias current                           | +I IB        | T A = 25  C 2/                                                                                              | 01            | -2       | 2        | nA       |
| Input bias current                           |              | T A = 25  C 2/                                                                                              | 02            | -3       | 3        | nA       |
| Input bias current                           |              | T A = 25  C 2/                                                                                              | 03,04, 05,06  | -40      | 40       | nA       |
| Input bias current                           |              | -55  C  T A  +125  C 2/                                                                                 | 01            | -4       | 4        | nA       |
| Input bias current                           |              | -55  C  T A  +125  C 2/                                                                                 | 02            | -6       | 6        | nA       |
| Input bias current                           |              | -55  C  T A  +125  C 2/                                                                                 | 03,04, 05,06  | -60      | 60       | nA       |
| Input bias current                           |              | End-point limit 4/                                                                                           | 01            | -3       | 3        | nA       |
| Input bias current                           |              | End-point limit 4/                                                                                           | 02            | -4.5     | 4.5      | nA       |
| Input bias current                           |              | End-point limit 4/                                                                                           | 03,04, 05,06  | -50      | 50       | nA       |

See footnotes at end of table.

## MIL-M-38510/135G

TABLE I.  Electrical performance characteristics - Continued.

| Test                         | Symbol   | Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Limits   | Limits   | Unit   |
|------------------------------|----------|--------------------------------------------------------------------------------------------------------------|---------------|----------|----------|--------|
|                              | Symbol   | Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Min      | Max      | Unit   |
| Input bias current           | -I IB    | T A = 25  C 2/                                                                                              | 01            | -2       | 2        | nA     |
|                              |          | T A = 25  C 2/                                                                                              | 02            | -3       | 3        | nA     |
|                              |          | T A = 25  C 2/                                                                                              | 03,04, 05,06  | -40      | 40       | nA     |
|                              |          | -55  C  T A  +125  C 2/                                                                                 | 01            | -4       | 4        | nA     |
|                              |          | -55  C  T A  +125  C 2/                                                                                 | 02            | -6       | 6        | nA     |
|                              |          | -55  C  T A  +125  C 2/                                                                                 | 03,04, 05,06  | -60      | 60       | nA     |
|                              |          | End-point limit 4/                                                                                           | 01            | -3       | 3        | nA     |
|                              |          | End-point limit 4/                                                                                           | 02            | -4.5     | 4.5      | nA     |
|                              |          | End-point limit 4/                                                                                           | 03,04, 05,06  | -50      | 50       | nA     |
| Input offset current         | I IO     | T A = 25  C 2/                                                                                              | 01            | -2       | 2        | nA     |
| Input offset current         |          | T A = 25  C 2/                                                                                              | 02            | -2.8     | 2.8      | nA     |
| Input offset current         |          | T A = 25  C 2/                                                                                              | 03,04, 05,06  | -35      | 35       | nA     |
| Input offset current         |          | -55  C  T A  +125  C 2/                                                                                 | 01            | -4       | 4        | nA     |
| Input offset current         |          | -55  C  T A  +125  C 2/                                                                                 | 02            | -5.6     | 5.6      | nA     |
| Input offset current         |          | -55  C  T A  +125  C 2/                                                                                 | 03,04, 05,06  | -50      | 50       | nA     |
| Power supply rejection ratio | +PSRR    | +V CC = 20 V to 5 V, -V CC = -15 V, T A = 25  C                                                             | 01,02         | -10      | 10       |  V/V  |
| Power supply rejection ratio |          | +V CC = 18 V to 5 V, -V CC = -15 V, T A = 25  C                                                             | 03,04, 05,06  | -10      | 10       |  V/V  |
| Power supply rejection ratio | -PSRR    | -V CC = -20 V to -5 V, +V CC = 15 V, T A = 25  C                                                            | 01,02         | -10      | 10       |  V/V  |
| Power supply rejection ratio |          | -V CC = -18 V to -5 V, +V CC = 15 V, T A = 25  C                                                            | 03,04, 05,06  | -10      | 10       |  V/V  |

See footnotes at end of table.

## MIL-M-38510/135G

TABLE I.  Electrical performance characteristics - Continued.

| Test                         | Symbol   | Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Limits   | Limits   | Unit   |
|------------------------------|----------|--------------------------------------------------------------------------------------------------------------|---------------|----------|----------|--------|
|                              | Symbol   | Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Min      | Max      | Unit   |
| Power supply rejection ratio | +PSRR    | +V CC = 20 V to 5 V, -V CC = -15 V, -55  C  T A  +125  C                                                | 01,02         | -20      | 20       |  V/V  |
| Power supply rejection ratio |          | +V CC = 18 V to 5 V, -V CC = -15 V, -55  C  T A  +125  C                                                | 03,04, 05,06  | -16      | 16       |  V/V  |
| Power supply rejection ratio | -PSRR    | -V CC = -20 V to -5 V, +V CC = 15 V, -55  C  T A  +125  C                                               | 01,02         | -20      | 20       |  V/V  |
| Power supply rejection ratio |          | -V CC = -18 V to -5 V, +V CC = 15 V, -55  C  T A  +125  C                                               | 03,04, 05,06  | -16      | 16       |  V/V  |
| Power supply rejection ratio | PSRR     | V CC =  4.5 V to  20 V, T A  +25  C                                                                     | 01,02         | -10      | 10       |  V/V  |
| Power supply rejection ratio |          | V CC =  4.5 V to  18 V, T A  +25  C                                                                     | 03,04, 05,06  | -10      | 10       |  V/V  |
| Power supply rejection ratio |          | V CC =  4.5 V to  20 V, -55  C  T A  +125  C                                                          | 01,02         | -20      | 20       |  V/V  |
| Power supply rejection ratio |          | V CC =  4.5 V to  18 V, -55  C  T A  +125  C                                                          | 03,04, 05,06  | -16      | 16       |  V/V  |
| Common mode rejection mode   | CMRR     | V CM =  13 V, T A  +25  C                                                                                | 01,02         | 110      |          | dB     |
| Common mode rejection mode   |          | V CM =  11 V, T A  +25  C                                                                                | 03,04, 05,06  | 114      |          | dB     |
| Common mode rejection mode   |          | V CM =  13 V, -55  C  T A  +125  C                                                                     | 01,02         | 106      |          | dB     |
| Common mode rejection mode   |          | V CM =  10 V, -55  C  T A  +125  C                                                                     | 03,04, 05,06  | 108      |          | dB     |

See footnotes at end of table.

## MIL-M-38510/135G

TABLE I.  Electrical performance characteristics - Continued.

| Test                           | Symbol      | Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Limits   | Limits   | Unit   |
|--------------------------------|-------------|--------------------------------------------------------------------------------------------------------------|---------------|----------|----------|--------|
|                                | Symbol      | Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Min      | Max      | Unit   |
| Adjustment for input offset    | V IO Adj(+) | T A  +25  C 2/                                                                                            | All           | 0.5      |          | mV     |
| Adjustment for input offset    | V IO Adj(-) | T A  +25  C 2/                                                                                            |               |          | -0.5     | mV     |
| Output short circuit current   | I OS (+)    | t  25 ms 5/                                                                                                 | 03,05, 06     | -70      |          | mA     |
| Output short circuit current   |             | -55  C  T A  +125  C                                                                                    | 04            | -60      |          | mA     |
| Output short circuit current   |             | t  25 ms 5/ T A = +25  C, +125  C                                                                         | 01,02         | -65      |          | mA     |
| Output short circuit current   |             | t  25 ms 5/ T A = -55  C                                                                                   | 01,02         | -70      |          | mA     |
| Output short circuit current   | I OS (-)    | t  25 ms 5/ -55  C  T A  +125  C                                                                       | 03,04, 05,06  |          | 70       | mA     |
| Output short circuit current   |             | t  25 ms 5/ T A = +25  C, +125  C                                                                         | 01,02         |          | 65       | mA     |
| Output short circuit current   |             | t  25 ms 5/ T A = -55  C                                                                                   | 01,02         |          | 70       | mA     |
| Supply current                 | I CC        | T A = +25  C 2/ 6/                                                                                          | 01,02         |          | 4        | mA     |
| Supply current                 |             | T A = +25  C 2/ 6/                                                                                          | 03,04, 05,06  |          | 5        | mA     |
| Supply current                 |             | -55  C  T A  +125  C 2/ 6/                                                                              | 01,02         |          | 5        | mA     |
| Supply current                 |             | -55  C  T A  +125  C 2/ 6/                                                                              | 03,04, 05,06  |          | 6        | mA     |
| Output voltage swing (minimum) | V OP        | R L = 1 k  , -55  C  T A  +125  C                                                                      | 01,02         | -10      | 10       | V      |
| Output voltage swing (minimum) |             | R L = 600  , -55  C  T A  +125  C                                                                      | 03,04, 05,06  | -10      | 10       | V      |
| Output voltage swing (minimum) |             | R L = 2,000  ,                                                                                              | 01,02         | -12      | 12       | V      |
| Output voltage swing (minimum) |             | -55  C  T A  +125  C                                                                                    | 03,04, 05,06  | -11.5    | 11.5     | V      |

See footnotes at end of table.

## MIL-M-38510/135G

TABLE I.  Electrical performance characteristics - Continued.

| Test                                  | Symbol          | - Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Limits   | Limits   | Unit      |
|---------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------|---------------|----------|----------|-----------|
|                                       | Symbol          | - Conditions 1/  V CC =  15 V, unnulled, see figure 3 and reference 3.5 herein, unless otherwise specified   | Device type   | Min      | Max      | Unit      |
| Open loop voltage gain (single ended) | A VS            | - T A = +25  C 7/                                                                                             | 01            | 300      |          | V/mV      |
| Open loop voltage gain (single ended) | A VS            | - T A = +25  C 7/                                                                                             | 02            | 200      |          | V/mV      |
| Open loop voltage gain (single ended) | A VS            | - T A = +25  C 7/                                                                                             | 03,04, 05,06  | 1,000    |          | V/mV      |
| Open loop voltage gain (single ended) | A VS            | - -55  C  T A  +125  C 7/                                                                                 | 01            | 200      |          | V/mV      |
| Open loop voltage gain (single ended) | A VS            | - -55  C  T A  +125  C 7/                                                                                 | 02            | 150      |          | V/mV      |
| Open loop voltage gain (single ended) | A VS            | - -55  C  T A  +125  C 7/                                                                                 | 03,04, 05,06  | 600      |          | V/mV      |
| Slew rate                             | SR(+) and SR(-) | V IN =  5 V, A V = 1, T A = +25  C, see figure 5                                                             | 01,02         | .08      |          | V/  s    |
| Slew rate                             | SR(+) and SR(-) | V IN =  5 V, A V = 1, T A = +25  C, see figure 5                                                             | 03,04, 06     | 1.7      |          | V/  s    |
| Slew rate                             | SR(+) and SR(-) | V IN =  1 V, A V = 5, T A = +25  C, see figure 5                                                             | 05            | 11       |          | V/  s    |
| Input noise voltage density           | En              | f O = 10 Hz, T A = +25  C, see figure 6                                                                       | 01,02         |          | 18       | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 10 Hz, T A = +25  C, see figure 6                                                                       | 03,05         |          | 5.5      | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 10 Hz, T A = +25  C, see figure 6                                                                       | 06            |          | 8        | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 10 Hz, T A = +25  C, see figure 6                                                                       | 04            |          | 6.0      | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 100 Hz                                                                                                   | 01,02         |          | 14       | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 100 Hz                                                                                                   | 03,05         |          | 4.0      | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 100 Hz                                                                                                   | 06            |          | 5.0      | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 100 Hz                                                                                                   | 04            |          | 5.0      | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 1 kHz                                                                                                    | 01,02         |          | 12       | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 1 kHz                                                                                                    | 03,05         |          | 3.8      | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 1 kHz                                                                                                    | 06            |          | 4        | ✓ nV / Hz |
| Input noise voltage density           | En              | f O = 1 kHz                                                                                                    | 04            |          | 3.9      | ✓ nV / Hz |

See footnotes at end of table.

## MIL-M-38510/135G

## TABLE II.  Electrical test requirements.

|                                                                          | Subgroups (see table III)             | Subgroups (see table III)       |
|--------------------------------------------------------------------------|---------------------------------------|---------------------------------|
| MIL-PRF-38535 test requirements                                          | Class S devices                       | Class B devices                 |
| Interim electrical parameters                                            | 1                                     | 1                               |
| Final electrical test parameters 1/                                      | 1, 2, 3, 4, 7                         | 1, 2, 3, 4, 7                   |
| Group A test requirements 2/                                             | 1, 2, 3, 4, 5, 6, 7, 9                | 1, 2, 3, 4, 5, 6, 7, 9          |
| Group B electrical test parameters when using the method 5005 QCI option | 1, 2, 3 and table IV delta limits     | N/A                             |
| Group C end-point electrical 3/ parameters                               | 1, 2, 3 and table IV delta limits     | 1 and table IV delta limits     |
| Group D end-point electrical 3/ parameters                               | 1, 2, 3 and table IV end-point limits | 1 and table IV end-point limits |

1/  Percent defective allowable (PDA) applies to subgroup 1.

2/  Subgroup 9 shall have a sample size series number of 5 for class S and class B devices.

3/  Table IV end-point parameters shall be used for VIO and IIB for class S and class B devices.

## 4.  VERIFICATION

4.1  Sampling and inspection.  Sampling and inspection procedures shall be in accordance with MIL-PRF-38535 or as modified in the device manufacturer's Quality Management (QM) plan.  The modification in the QM plan shall not affect the form, fit, or function as described herein.

4.2  Screening.  Screening shall be in accordance with MIL-PRF-38535 and shall be conducted on all devices prior to qualification and quality conformance inspection.  The following additional criteria shall apply:

- a. The burn-in test duration, test condition, and test temperature, or approved alternatives, shall be as specified in the device manufacturer's QM plan in accordance with MIL-PRF-38535.  The burn-in test circuit shall be maintained under document control by the device manufacturer's Technology Review Board (TRB) in accordance with MIL-PRF-38535 and shall be made available to the acquiring or preparing activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 of MIL-STD-883.
- b. Interim and final electrical test parameters shall be as specified in table II, except interim electrical parameters test prior to burn-in is optional at the discretion of the manufacturer.
- c. Additional screening for space level product shall be as specified in MIL-PRF-38535.

## MIL-M-38510/135G

- 4.3  Qualification inspection.  Qualification inspection shall be in accordance with MIL-PRF-38535.
- 4.4  Technology Conformance inspection (TCI).  Technology conformance inspection shall be in accordance with MIL-PRF-38535 and herein for groups A, B, C, and D inspections (see 4.4.1 through 4.4.4).
- 4.4.1  Group A inspection.  Group A inspection shall be in accordance with table III of MIL-PRF-38535 and as follows:
- a. Tests shall be as specified in table II herein.
- b. Subgroups 8, 10, and 11 shall be omitted.
- 4.4.2  Group B inspection.  Group B inspection shall be in accordance with table II of MIL-PRF-38535.
- 4.4.3  Group C inspection.  Group C inspection shall be in accordance with table IV of MIL-PRF-38535 and as follows:
- a. End-point electrical parameters shall be as specified in table II herein.  Delta limits shall apply to group C inspection and shall consist of tests specified in table IV herein.
- b. The steady-state life test duration, test condition, and test temperature, or approved alternatives, shall be as specified in the device manufacturer's QM plan in accordance with MIL-PRF-38535.  The burn-in test circuit shall be maintained under document control by the device manufacturer's TRB in accordance with MIL-PRF-38535 and shall be made available to the acquiring or preparing activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in test method 1005 of MIL-STD-883.
- 4.4.4  Group D inspection.  Group D inspection shall be in accordance with table V of MIL-PRF-38535.  End-point electrical parameters shall be as specified in table II herein.
- 4.5  Methods of inspection.  Methods of inspection shall be specified and as follows.
- 4.5.1  Voltage and current.  All voltage values given are referenced to the ground terminal of the device under test (DUT).  Current values given are for conventional current and are positive when flowing into the referenced terminal.
- 4.5.2  Life test cool down procedures.  When devices are measured at +25  C following application of the steadystate life or burn-in test condition, they shall be cooled to within 10  C of their power stable condition at room temperature prior to removal of the bias.

<!-- image -->

NOTE:  For case outline G only, the -VCC pin is tied to the case of the can package.

FIGURE 1.  Circuit diagram and terminal connections.

DEVICE  TYPES  01  AND 02

DEVICE  TYPES  03,05  AND 06

<!-- image -->

<!-- image -->

DEVICE  TYPE 04

FIGURE 2.  Offset null circuits.

<!-- image -->

FIGURE 3.  Test circuit for static and slew rate tests.

<!-- image -->

## NOTES:

1. All resistors are  0.1% tolerance and all capacitors are  10% unless specified otherwise.
2. Precautions shall be taken to prevent damage to the DUT during insertion into socket and change of relay state (example: disable voltage supplies and current limit  VCC).
3. Compensation capacitors should be added as required for test circuit stability.  Proper wiring procedures shall be followed to prevent unwanted coupling and oscillations.  Loop response and settling time shall be consistent with the test rate such that any value has settled for at least five loop time constants before the value is measured.
4. Adequate settling time should be allowed such that each parameter has settled to within five percent of its final value.
5. All relays are shown in the normal de-energized state.
6. Saturation of the nulling amp is not allowed on tests where the pin 4 value is measured.
7. The load resistors 1,000  and 2,050  yield effective load resistance of 100  and 2,000  respectively.
8. Any oscillation greater than 300 mV pk-pk in amplitude shall be cause for device failure.
9. Device type 04 only, test both halves for all tests.  The idle half of the dual amplifiers shall be maintained in this configuration where V 1  is midway between +VCC and -VCC, or the manufacturer has the option to connect the idle half in a V ID  configuration such that the inputs are maintained at the same common mode voltage as the DUT.
10. Circuit within dashed area used for devices 03, 04, 05, and 06 only.
11. For devices 01 and 02:   R1 = 500 k   .01%; R2 = 500 k   .01%. For device 03, 04, 05, and 06:   R1 = 50 k   .01%; R2 = 50 k   .01%.
12. When using this test circuit for measuring slew rate, the oscillation detector shall be disabled.
13. For devices 01 and 02:   R3 = 27 k  ,  5%, R4 = 100 k  ,  5%. For devices 03, 04, 05, and 06:   R3 =  0  , R4 = 10 k  ,  5%.

FIGURE 3.  Test circuit for static and slew rate tests - Continued.

## MIL-M-38510/135G

## NOTES:

1. Same configuration used for both amplifiers of device 04.
2. Low thermal EMF sockets are recommended.  The number of solder joints and dissimilar metal junctions are to be minimized.  The test circuit should contain a minimum number of components.  All components should have the lowest possible temperature coefficients.
3. The temperature of the test circuit should be equal to that of the DUT.
4. Resistors 16 k   10.0%, 32   10%, and 16 k   10.0% shall be used together or resistors 50 k   1.0%, 100   1%, and 50 k   1.0% shall be used together.

FIGURE 4.  Voltage offset test circuit.

<!-- image -->

## NOTES:

1. Resistors are  1.0% tolerance and capacitors are  10% tolerance.
2. This capacitance includes the actual measured value with stray and wire capacitance.
3. Precautions shall be taken to prevent damage to the DUT during insertion into socket and in applying power.
4. Pulse input and output characteristics are shown on the next space.
5. Compensation capacitors should be added as required for test circuit stability.  Proper wiring procedures shall be followed to prevent unwanted coupling and oscillations.  Loop response and settling time shall be consistent with the test rate such that any value has settled for at least five loop time constants before the value is measured.
6. For device type 05 only.

FIGURE 5.  Test circuit for slew rate.

<!-- image -->

FIGURE 5.  Test circuit for slew rate - Continued.

<!-- image -->

| Parameter symbol   | Device type        | Input pulse signal at t r  50 ns   | Output pulse signal   | Equation                   |
|--------------------|--------------------|-------------------------------------|-----------------------|----------------------------|
| SR(+)              | 01, 02, 03, 04, 06 | -5 V to +5 V step (AV = 1)          | Waveform 1            | SR(+) =  V O(+) /  t(+)  |
| SR(-)              | 01, 02, 03, 04, 06 | +5 V to -5 V step (AV = 1)          | Waveform 2            | SR(-) =  V O (-) /  t(-) |
| SR(+)              | 05                 | -1 V to +1 V step (AV = 5)          | Waveform 1            | SR(+) =  V O (+) /  t(+) |
| SR(-)              | 05                 | +1 V to -1 V step (AV = 5)          | Waveform 2            | SR(-) =  V O (-) /  t(-) |

## NOTES:

1. Input noise voltage density (En) test:  R1 = 50  , R2 = 10 k  . Input noise current density (In) test:  R1 = 105 k  , R2 = 2 M 

<!-- image -->

.

2. All resistors are metal film and  1% tolerance.  Capacitors are in microfarads and are  10% tolerance.
3. Quan-Tech model 2283 or equivalent.
4. Quan-Tech model 2181 or equivalent.

FIGURE 6.  Noise density test circuit.

## NOTES:

1. All capacitor values are for non polarized capacitors only.
2. Resistors values are  1.0%.

FIGURE 7.  Low frequency test circuit.

<!-- image -->

TABLE III.  Group A inspection for device types 01 and 02.

| Subgroup                       | Symbol      | MIL-STD- 883 method   | Test no.   | Notes /   | Adapter pin number   | Adapter pin number   | Energized relays   | Measured pin   | Measured pin   | Measured pin   | Equation                                    | Device type   | Limits   | Limits   | Unit   |
|--------------------------------|-------------|-----------------------|------------|-----------|----------------------|----------------------|--------------------|----------------|----------------|----------------|---------------------------------------------|---------------|----------|----------|--------|
| Subgroup                       | Symbol      | MIL-STD- 883 method   | Test no.   | Notes /   | 1                    | 2                    | Energized relays   | No.            | Value          | Units          | Equation                                    | Device type   | Min      | Max      | Unit   |
| 1                              | +I IB       | 4001 '                | 1 1 2      |           | 15 15                | -15 -15              | None K1            | 4 4            | E1 E2          | V V            | V IO = E1 +I IB = 2 (E1 - E2)               | 01 02         | -2 -3    | 2 3      | nA '   |
| T A = +25  C 2 T A = +125  C | -I IB       | '                     | 3          |           | 15                   | -15                  | K2                 | 4              | E3             | V              | -I IB = 2 (E3 - E1)                         | 01 02         | -2 -3    | 2 3      | ' '    |
| T A = +25  C 2 T A = +125  C | I IO        | '                     | 4          | 2/        |                      |                      |                    |                |                |                | I IO = 2 (2E1 - E2 -E3)                     | 01 02         | -2 -2.8  | 2 2.8    | nA     |
| T A = +25  C 2 T A = +125  C | +PSRR       | 4003                  | 5          |           | 20 5                 | -15 -15              | None               | 4              | E4 E5          | V '            | +PSRR = 66 (E4 - E5)                        | 01,02         | -10      | 10       |  V/V  |
| T A = +25  C 2 T A = +125  C | -PSRR       | 4003                  | 6          |           | 15 15                | -20 -5               | None               | 4              | E6 E7          | V '            | -PSRR = 66 (E6 - E7)                        | 01,02         | -10      | 10       |  V/V  |
| T A = +25  C 2 T A = +125  C | PSRR        | 4003                  | 7          |           | 4.5 20               | -4.5 -20             | None               | 4              | E8 E9          | V '            | PSRR = 32.25 x (E8 - E9)                    | 01,02         | -10      | 10       |  V/V  |
| T A = +25  C 2 T A = +125  C | CMRR        | 4003                  | 8          |           | 28 2                 | -2 -28               | None               | 4              | E10 E11        | V '            | CMRR = 20 log &#124;26000/(E11 - E10)&#124; | 01,02         | 110      |          | dB     |
| T A = +25  C 2 T A = +125  C | V IO ADJ(+) |                       |            |           | 15                   | -15                  | K5                 | 4              | E12            | '              | V IO ADJ(+) = E1 - E12                      | 01,02         | 0.5      |          | mV     |
| T A = +25  C 2 T A = +125  C | V IO ADJ(-) | 9                     |            |           | 15                   | -15                  | K5,K6              | 4              | E13            | '              | V IO ADJ(-) = E1 - E13                      | 01,02         |          | -0.5     | mV     |
| T A = +25  C 2 T A = +125  C | I OS(+)     | 3011                  | 11         | 3/        | 15                   | -15                  | None               | 5              | I1             | mA             | I OS(+) = I1                                | 01,02         | -65      |          | mA     |
| T A = +25  C 2 T A = +125  C | I OS(-)     | 10 3011               | 12         | 3/        | 15                   | -15                  | None               | 5              | I2             | mA             | I OS(-) = I2                                | 01,02         |          | 65       | mA     |
| T A = +25  C 2 T A = +125  C | I CC        | 4005                  | 13         |           | 15                   | -15                  | None               | 1              | I3             | mA             | I CC = I3                                   | 01,02         |          | 4        | mA     |
|                                | V IO        | 4001                  | 14         | See       | 15                   | -15                  |                    |                | E14            | V              | V IO = E14/1000                             | 01 02         | -60 -200 | 60 200   |  V '  |
|                                | +I IB       | 4001                  | 16 17      | fig. 4    | 15 15                | -15 -15              | None K1            | 4 4            | E15 E16        | ' '            | V IO = E15 +I IB = 2 (E15 - E16)            | 01 02         | -4 -6    | 4 6      | nA '   |
|                                | -I IB       | ' '                   | 18         |           | 15                   | -15                  | K2                 | '              | E17            | '              | -I IB = 2 (E17 - E15) -                     | 01 02         | -4 -6    | 4 6      | ' '    |
|                                | ' I IO      | '                     | 19         | 2/        |                      |                      |                    |                |                |                | I IO = 2 (2E15 - E16 -E17)                  | 01 02         | -4       | 4        | nA     |
|                                | +PSRR       | '                     | 20         |           | 20                   | -15                  | None               | 4              | E18            | V              | +PSRR = 66(E18 - E19)                       | 01,02         | -5.6 -20 | 5.6 20   |  V/V  |
|                                | -PSRR       | '                     | 21         |           | 5 15 15              | -15 -20 -5           | None               | 4              | E19 E20 E21    | V V            | -PSRR = 66(E20 - E21)                       | 01,02         | -20      | 20       |  V/V  |
|                                | PSRR        | '                     | 22         |           | 4.5 20               | -4.5 -20             | None               | 4              | E22 E23        | V V            | PSRR = 32.25 x (E22 - E23)                  | 01,02         | -20      | 20       |  V/V  |
|                                | CMRR        | 4003                  | 23         |           | 28 2                 | -2 -28               | None               | 4              | E24 E25        | V V '          | CMRR = 20 log &#124;26000/(E24 - E25)&#124; | 01,02         | 106      |          | dB     |
|                                | I OS(+)     | 3011                  | 24         | 3/        | 15                   | -15                  | None               | 5              | I4             | mA             | I OS(+) = I4                                | 01,02         | -65      |          | mA     |
|                                | I OS(-)     | 3011                  | 25         | 3/        | 15                   | -15                  | None               | 5              | I5             | mA             | I OS(-) = I5                                | 01,02         |          | 65       | mA     |
|                                | I CC        | 4005                  | 26         |           | 15                   | -15                  | None               | 1              | I6             | mA             | I CC = I6                                   | 01,02         |          | 5        | mA     |

See footnotes at end of table.

TABLE III.  Group A inspection for device types 01 and 02 - Continued.

| Subgroup       | Symbol       | MIL-STD- 883 method   | Test no.   | Notes /    | Adapter pin number   | Adapter pin number   | relays   | Energized   | Measured   | pin   | Equation                                    | Device type    | Limits       | Limits   | Unit     |
|----------------|--------------|-----------------------|------------|------------|----------------------|----------------------|----------|-------------|------------|-------|---------------------------------------------|----------------|--------------|----------|----------|
| Subgroup       | Symbol       | MIL-STD- 883 method   | Test no.   | Notes /    | 1 2                  |                      | 3        | No.         | Value      | Units | Equation                                    | Device type    | Min          | Max      |          |
| 3              | V IO         | 4001 '                | 1 27       | Fig. 4     | 15 -15               |                      | 0        |             | E26        | V     | V IO = E26/1000                             | 01 02          | -60 -200     | 60 200   |  V '    |
| T A = -55  C  | +I IB        | 4001                  | 30 29      |            | 15 15                | -15 -15              | 0 0      | None K1 4 ' | E27 E28    | ' '   | V IO = E27 +I IB = 2 (E27 - E28)            | 01 02          | -4 -6        | 4 6      | nA '     |
| T A = -55  C  | -I IB        | ' '                   | 31         |            | 15                   | -15                  | 0        | K2 '        | E29        | '     | -I IB = 2 (E29 - E27)                       | 01 02          | -4 -6        | 4 6      | ' '      |
| T A = -55  C  | ' I IO       | 4001                  | 32         | 2/         |                      |                      |          |             |            |       | I IO = 2 (2E27 - E28 -E29)                  | 01 02          | -4 -5.6      | 4 5.6    | nA       |
| T A = -55  C  | +PSRR        | 4003                  | 33         |            | 20 5 -15             |                      | 0 0      | None 4      | E30 E31    | V '   | +PSRR = 66 (E30 - E31)                      | 01,02          | -20          | 20       |  V/V    |
| T A = -55  C  | -PSRR        | 4003                  | 34         |            | 15 15 -5             | -15 -20              | 0 0      | None 4      | E32 E33    | V '   | -PSRR = 66 (E32 - E33)                      | 01,02          | -20          | 20       |  V/V    |
| T A = -55  C  |              | 4003                  | 35         |            | 4.5 20 -4.5          |                      | 0        | None 4      | E34 E35    | V '   | PSRR = 32.25 x (E34 - E35)                  | 01,02          | -20          | 20       |  V/V    |
| T A = -55  C  | CMRR         | 4003                  | 36         |            | 28 2                 | -20 -2 -28 -15       | 0 -13 13 | None 4      | E36 E37    | V '   | CMRR = 20 log &#124;26000/(E36 - E37)&#124; | 01,02          | 106          |          | dB       |
| PSRR           | I OS(+)      | 3011                  | 37         | 3/         | 15                   | -10                  | None     | 5           | I7         | mA    | I OS(+) = I7                                | 01,02          | -70          |          | mA       |
| PSRR           | I OS(-)      | 3011                  | 38         | 3/         | 15 -15               | 10                   | None     | 5           | I8         | mA    | I OS(-) = I8                                | 01,02          |              | 70       | mA       |
| PSRR           | I CC         | 3005                  | 39         |            | 15 -15               | 0                    | None     | 1           | I9         | mA    | I CC = I9                                   | 01,02          |              | 5        | mA       |
| 4              | +V OP        | 4004                  | 40 41      |            | -15                  | -15                  | K3 K4    | 5           | E38 E39    | V V   | +V OP = E38 +V OP = E39                     | 01,02 01,02    | 10           |          | V '      |
| T A = +25  C  | -V OP        | 4004                  | 42 43      | 15 15      | -15                  | 15                   |          | K3 K4 5     | E40 E41    | V V   | -V OP = E40 -V OP = E41                     | 12 01,02 01,02 |              | -10 -12  | ' '      |
| T A = +25  C  | A VS (+)     | 4004                  | 44         |            | -15                  |                      | -10      | K4 4        | E42        | V     | A VS (+) = 10/(E1 - E42)                    | 01 02          | 300 200      |          | V/mV     |
| T A = +25  C  | A VS (-)     | 4004                  | 45         | 15         | 15                   | -15                  | 10       | K4 4        | E43        | V     | A VS (-) = 10/(E43 - E1)                    | 01 02          | 300 200      |          | V/mV     |
|                | V IO         | 4001                  | 46         | See fig. 4 | 15 -15               | 0                    |          |             | E44        | V     | V IO = E44/1000                             | 01 02          | -25 -75      | 25 75    |  V      |
| 5              | +V OP        | 4004                  | 47 48      |            | -15                  | -15                  | K3       | K4 5        | E45 E46    | V V   | +V OP = E45 +V = E46                        | 01,02 01,02    | 10           |          | V '      |
| T A = +125  C | -V OP        | 4004                  | 50 49      | 15         | 15 -15               | 15                   | K3 K4    | 5           | E47 E48    | V V   | OP -V OP = E47 -V OP = E48                  | 12 01,02 01,02 |              | -10 -12  | ' '      |
| T A = +125  C |  V IO /     | 4001                  | 15         | See fig. 4 |                      |                      |          |             |            |       |  V IO /  T = (E14 - E44)/100(1000)        | 01             | -0.6         | 0.6      |  V/  C |
| T A = +125  C |  T A VS (+) | 4004                  | 51         | 4/         | -15                  | -10                  | K4       | 4           | E49        | V     | A VS (+) = 10/(E15 - E49)                   | 02 01 02       | -1.3 200 150 | 1.3      | V/mV     |
| T A = +125  C | A VS (-)     | 4004                  | 52         | 15 15      | -15                  | 10                   | K4       | 4           | E50        | V     | A VS (-) = 10/(E50 - E15)                   | 01 02          | 200 150      |          | V/mV     |

See footnotes at end of table.

TABLE III.  Group A inspection for device types 01 and 02 - Continued.

| Subgroup      | Symbol       | MIL-STD- 883 method   | Test no.   | Notes                                    | Adapter pin   | Adapter pin   | nunbers Energized relays   | Measured pin   | Measured pin   | Measured pin      | Equation   |                                                   | Device type   | Limits    | Limits   | Unit      |
|---------------|--------------|-----------------------|------------|------------------------------------------|---------------|---------------|----------------------------|----------------|----------------|-------------------|------------|---------------------------------------------------|---------------|-----------|----------|-----------|
| Subgroup      | Symbol       | MIL-STD- 883 method   | Test no.   | Notes                                    | 1             | 2             | 3                          |                | No.            | Value             | Units      |                                                   | Device type   | Min       | Max      | Unit      |
| 6             | +V OP        | 4004 '                | 53 54      |                                          | 15            | -15           | -15                        | K3 K4          | 5              | E51 E52           | V          | +V OP = E51                                       | 01,02         | 10        |          | V '       |
| 6             | +V OP        | 4004 '                | 53 54      |                                          | 15            | -15           | -15                        | K3 K4          | 5              | E51 E52           | '          | +V OP = E52                                       | 01,02         | 12        |          | V '       |
| T A = -55  C | -V OP        | 4004 '                | 55 56      |                                          | 15            | -15           | 15                         | K3             | 5              | E53 E54           | V '        | -V OP = E53                                       | 01,02         |           | -10      | V '       |
| T A = -55  C | -V OP        | 4004 '                | 55 56      |                                          | 15            | -15           | 15                         | K4             | 5              | E53 E54           | V '        | 01,02                                             |               |           | -12      | V '       |
| T A = -55  C |  V IO /  T | 4001                  | 28         | See fig. 4 4/                            |               |               |                            |                |                |                   |            | -V OP = E54  V IO /  T = (E26 - E44) / 80(1000) | 01 02         | -0.6 -1.3 | 0.6 1.3  |  V/  C  |
| T A = -55  C | A VS(+)      | 4004                  | 57         |                                          | 15            | -15           | -10                        | K4             | 4              | E55               | V          | A VS(+) = 10 / (E27 - E55)                        | 01            | 200       |          | V/mV '    |
| T A = -55  C | A VS(+)      | 4004                  | 57         |                                          | 15            | -15           | -10                        | K4             | 4              | E55               | V          | A VS(+) = 10 / (E27 - E55)                        | 02            | 150       |          | V/mV '    |
| T A = -55  C | A VS(-)      | 4004                  | 58         |                                          | 15            | -15           | 10                         | K4             | 4              | E56               | V          | A VS(-) = 10 / (E56 - E27)                        | 01            | 200       |          | V/mV      |
| T A = -55  C | A VS(-)      | 4004                  | 58         |                                          | 15            | -15           | 10                         | K4             | 4              | E56               | V          | A VS(-) = 10 / (E56 - E27)                        | 02            | 150       |          | V/mV      |
| 7             | SR(+)        | 4002                  | 59         | - 5/ 6/                                  | 15            | -15           | 0                          | K4,K9          | 5              |  V O (+),  t(+) | V /  s    | SR(+) =  V O (+) /  t(+)                        | 01,02         | .08       |          | ' V/  s  |
| T A = +25  C | SR(-)        | 4002                  | 60         | - 5/ 6/                                  | 15            | -15           | 0                          | K4, K9         | 5              |  V O (-),        | V /  s    | SR(-) =  V O (-) /  t(-)                        | 01,02         | .08       |          | V/  s    |
| T A = +25  C |              |                       | 61 62      | f O = 10 Hz f O =                        |               |               |                            |                |                |  t(-) E57 E58    | r nV / Hz  | En = E57 En = E58                                 | 01,02         |           | 18 14    | r nV / Hz |
| En            | Enpp         |                       | 63 64      | 100 Hz f O = 1 kHz See fig. 5 See fig, 6 |               |               |                            |                |                | E59 E60           | En V PP    | = E59 Enpp = E60 / 50000                          | 01,02         |           | 12 0.6   |  V PP    |

See footnotes at end of table.

TABLE III.  Group A inspection for device types 03, 04, 05, and 06 - Continued.

| Subgroup       | Symbol      | MIL-STD- 883 method   | Test no.   | Notes      | Adapter pin number   | Adapter pin number   | Energized relays 3   | Measured pin   | Measured pin   | Measured pin   | Equation                                                                 | Device type   | Limits   | Limits   | Unit   |
|----------------|-------------|-----------------------|------------|------------|----------------------|----------------------|----------------------|----------------|----------------|----------------|--------------------------------------------------------------------------|---------------|----------|----------|--------|
| Subgroup       | Symbol      | MIL-STD- 883 method   | Test no.   | Notes      | 1                    | 2                    | Energized relays 3   | No.            | Value          | Units          | Equation                                                                 | Device type   | Min      | Max      | Unit   |
| 1              | +I IB       | 4001 '                | 1 2        |            | 15 15                | -15 -15              | 0 0 None             | 4 4            | E1 E2          | V V            | V IO = E1 +I IB = 20 (E1 - E2) +I IB = 2 (E1 - E2) - device type 05      | 03,04, 05,06  | -40      | 40       | nA '   |
| T A = +25  C  | -I IB       | '                     | 3          |            | 15                   | -15                  | 0                    | 4              | E3             | V              | -I IB = 20 (E3 - E1) -I IB = 2 (E3 - E1) - device type 05                | 03,04, 05,06  | -40      | 40       | ' '    |
| T A = +25  C  | I IO        | '                     | 4          | 2/         |                      |                      |                      |                |                |                | I IO = 20 (2E1 - E2 -E3) I IO = 2 (2E1 - E2 -E3) - device type 05        | 03,04, 05,06  | -35      | 35       | nA     |
| T A = +25  C  | +PSRR       | 4003                  | 5          |            | 18 5                 | -15 -15              | 0 0 None             | 4              | E4 E5          | V              | +PSRR = 76.9 (E4 - E5)                                                   | 03,04, 05,06  | -10      | 10       |  V/V  |
| T A = +25  C  | -PSRR       | 4003                  | 6          |            | 15 15                | -18 -5               | 0 0 None             | 4              | E6 E7          | ' V            | -PSRR = 76.9 (E6 - E7)                                                   | 03,04, 05,06  | -10      | 10       |  V/V  |
| T A = +25  C  | PSRR        | 4003                  | 7          |            | 4.5 18               | -4.5 -18             | 0 0 None             | 4              | E8 E9          | ' V '          | PSRR = 37.04 x (E8 - E9)                                                 | 03,04, 05,06  | -10      | 10       |  V/V  |
| T A = +25  C  |             | 4003                  | 8          |            | 26 4                 | -4 -26               | -11 11 None          | 4              | E10 E11        | V '            | CMRR = 20 log &#124;22000/(E11 - E10)&#124;                              | 03,04, 05,06  | 114      |          | dB     |
| CMRR           | V IO ADJ(+) |                       |            |            | 15                   | -15                  | 0                    | 4              | E12            | '              | V IO ADJ(+) = E1 - E12                                                   | 03,04, 05,06  | 0.5      |          | mV     |
| CMRR           | V IO ADJ(-) |                       |            |            | 15                   | -15                  | 0 K5,K6              | 4              | E13            | '              | V IO ADJ(-) = E1 - E13                                                   | 03,04, 05,06  |          | -0.5     | mV     |
| CMRR           | I OS(+)     | 9 3011                | 11         | 3/         | 15                   | -15                  | -10 None             | 5              | I1             | mA             | I OS(+) = I1                                                             | 03,05,06 04   | -70 -60  |          | mA     |
| CMRR           | I OS(-)     | 10 3011               | 12         | 3/         | 15                   | -15                  | 10 None              | 5              | I2             | mA             | I OS(-) = I2                                                             | 03,04,05, 06  |          |          | mA     |
| CMRR           | I CC        | 4005                  | 13         |            | 15                   | -15                  | 0 None               | 1              | I3             | mA             | I CC = I3                                                                | 03,04,05, 06  | 70       |          | mA     |
| 2              | V IO        | 4001                  | 14         | See fig. 4 | 15                   | -15                  | 0                    |                | E14            | V              | V IO = E14/1000                                                          | 03,05,06 04   | -60 -180 | 60 180   |  V    |
| T A = +125  C | +I IB       | 4001                  | 16 17      |            | 15 15                | -15 -15              | 0 0 None             | 4 4            | E15 E16        | ' '            | V IO = E15 +I IB = 20 (E15 - E16) +I IB = 2 (E15 - E16) - device type 05 | 03,04, 05,06  | 5 -60    | 60       | ' nA ' |
|                | -I IB       | ' '                   | 18         |            | 15                   | -15                  | 0                    | '              | E17            | '              | -I IB = 20 (E17 - E15) -I IB = 2 (E17 - E15) - device type 05            | 03,04, 05,06  | -60      | 60       | ' '    |
|                | ' I IO      | '                     | 19         | 2/         |                      |                      |                      |                |                |                | I IO = 20 (2E15 - E16 -E17) IO = 2 (2E15 - E16 -E17) - device type 05    | 03,04, 05,06  | -50      | 50       | nA     |
|                | +PSRR       | 4003                  | 20         |            | 18 5                 | -15 -15              | 0 0 None             | 4              | E18 E19        | V '            | +PSRR = 76.9 (E18 - E19)                                                 | 03,04, 05,06  | -16      | 16       |  V/V  |
|                | -PSRR       | 4003                  | 21         |            | 15 15                | -18 -5               | 0 0 None             | 4              | E20            | V              | -PSRR = 76.9 (E20 - E21)                                                 | 03,04, 05,06  | -16      | 16       |  V/V  |
|                | PSRR        | 4003                  | 22         |            | 4.5 18               | -4.5 -18             | 0 0 None             | 4              | E21 E22 E23    | ' V '          | PSRR = 37.04 x (E22 - E23)                                               | 03,04, 05,06  | -16      | 16       |  V/V  |
|                |             | 4003                  | 23         |            | 25 5                 | -5 -25               | -10 10 None          | 4              | E24 E25        | V '            | CMRR = 20 log &#124;20000/(E24 - E25)&#124;                              | 03,04, 05,06  | 108      |          | dB     |

CMRR See footnotes at end of table.

TABLE III.  Group A inspection for device types 03, 04, 05, and 06 - Continued.

| Subgroup       | Symbol   | MIL-STD- 883 method   | Test no.   | Notes /    | Adapter pin number   | Adapter pin number   | Adapter pin number   | Energized relays   | Measured pin   | Measured pin   | Measured pin   | Equation                                                                      | Device type          | Limits   | Limits    | Unit   |
|----------------|----------|-----------------------|------------|------------|----------------------|----------------------|----------------------|--------------------|----------------|----------------|----------------|-------------------------------------------------------------------------------|----------------------|----------|-----------|--------|
| Subgroup       | Symbol   | MIL-STD- 883 method   | Test no.   | Notes /    | 1                    | 2                    | 3                    | Energized relays   | No.            | Value          | Units          | Equation                                                                      | Device type          | Min      | Max       | Unit   |
| 2              | I OS(+)  | 3011                  | 1 24       | 3/         | 15                   | -15                  | -10                  | None               | 5              | I4             | mA             | I OS(+) = I4                                                                  | 03,05,06 04          | -60      |           | mA     |
| T A = +125  C | I OS(-)  | 3011                  | 25         | 3/         | 15                   | -15                  | 10                   | None               | 5              | I5             | mA             | I OS(-) = I5 03,04,05, 06                                                     | -70                  |          |           | mA     |
| T A = +125  C | I CC     | 4005                  | 26         |            | 15                   | -15                  | 0                    | None               | 1              | I6             | mA             | I CC = I6 03,04,05, 06                                                        |                      | 70       |           | mA     |
| 3              | V IO     | 4001 '                | 27         | See fig. 4 | 15                   | -15                  | 0                    |                    |                | E26            | V              | V IO = E26/1000 03,05,06 04                                                   | 6 -180               |          | 60 180    |  V '  |
| T A = -55  C  | +I IB    | 4001 '                | 29 30      |            | 15 15                | -15 -15              | 0 0                  | None K1            | 4 '            | E27 E28        | ' '            | V IO = E27 +I IB = 20 (E27 - E28) +I = 2 (E27 - E28) - device type 05         | -60 03,04, 05,06 -60 |          | 60        | nA '   |
| T A = -55  C  | -I IB    | ' '                   | 31         |            | 15                   | -15                  | 0                    | K2                 | '              | E29            | '              | IB -I IB = 20 (E29 - E27) -I IB = 2 (E29 - E27) - device type 05 03,04, 05,06 |                      | -60      | 60        | ' '    |
| T A = -55  C  | I IO     | 4001                  | 32         | 2/         |                      |                      |                      |                    |                |                |                | I IO = 20 (2E27 - E28 -E29) I IO = 2 (2E27 - E28 -E29) - device type 05       | 03,04, 05,06         | -50      | 50        | nA     |
| T A = -55  C  | +PSRR    | 4003                  | 33         |            | 18 5                 | -15 -15              | 0                    | None               | 4              | E30 E31        | V '            | +PSRR = 76.9 (E30 - E31)                                                      | 03,04, 05,06         | -16      | 16        |  V/V  |
| T A = -55  C  | -PSRR    | 4003                  | 34         |            | 15 15                | -18 -5               | 0 0                  | None               | 4              | E32 E33        | V '            | -PSRR = 76.9 (E32 - E33) 03,04, 05,06                                         |                      | -16      | 16        |  V/V  |
| T A = -55  C  |          | 4003                  | 35         |            | 4.5 18               | -4.5 -18             | 0 0 0                | None               | 4              | E34 E35        | V '            | PSRR = 37.04 x (E34 - E35)                                                    | 03,04, 05,06         | -16      | 16        |  V/V  |
| T A = -55  C  | CMRR     | 4003                  | 36         |            | 25 5                 | -5 -25               | -10 10               | None               | 4              | E36 E37        | V '            | CMRR = 20 log &#124;20000/(E36 - E37)&#124;                                   | 03,04, 05,06         | 108      |           | dB     |
| PSRR           | I OS(+)  | 3011                  | 37         | 3/         | 15                   | -15                  | -10                  | None               | 5              | I7             | mA             | I OS(+) = I7 03,05,06 04                                                      |                      | -60      |           | mA     |
| T A = -55  C  | I OS(-)  | 3011                  | 38         | 3/         | 15                   | -15                  | 10                   | None               | 5              | I8             | mA             | I OS(-) = I8 03,04,05, 06                                                     | -70                  |          |           | mA     |
| T A = -55  C  | I CC     | 3005                  | 39         |            | 15                   | -15                  | 0                    | None               | 1              | I9             | mA             | I CC = I9 03,04,05, 06                                                        |                      | 70       |           | mA     |
| 4              | +V OP    | 4004                  | 40 41      |            | 15                   | -15                  | -15                  | K7 K4              | 5              | E38 E39        | V V            | +V OP = E38 +V OP = E39 03,04,06 05                                           |                      | 6 11.5   |           | V '    |
| T A = +25  C  | -V OP    | 4004                  | 42 43      |            | 15                   | -15                  | 15                   | K7 K4              | 5              | E40 E41        | V V            | -V OP = E40 -V OP = E41                                                       | 10 03,04,06 05       |          | -10 -11.5 | ' '    |
| T A = +25  C  | A VS (+) | 4004                  | 44         |            | 15                   | -15                  | -10                  | K4                 | 4              | E42            | V              | A VS (+) = 10/(E1 - E42)                                                      | 03,04, 05,06         | 1000     |           | V/mV   |
| T A = +25  C  | A VS (-) | 4004                  | 45         |            | 15                   | -15                  | 10                   | K4                 | 4              | E43            | V              | A VS (-) = 10/(E43 - E2) 03,04, 05,06                                         |                      | 1000     |           | V/mV   |
| T A = +25  C  | V IO     | 4001                  | 46         | See fig. 4 | 15                   | -15                  | 0                    |                    |                | E44            | V              | V IO = E44/1000                                                               | 03,05,06 04          | -80      | 25 80     |  V    |
| 5              | +V OP    | 4004                  | 47         |            | 15                   | -15                  | -15                  | K7 K4              | 5              | E45 E46        | V V            | +V OP = E45 +V OP = E46                                                       | -25 03,04,06 05      | 11.5     |           | V '    |
| T A = +125  C | -V OP    | 4004                  | 48 49 50   |            | 15                   | -15                  | 15                   | K7 K4              | 5              | E47 E48        | V V            | -V OP = E47 -V OP = E48                                                       | 10 03,04,06 05       |          | -10 -11.5 | ' '    |

See footnotes at end of table.

- 1/ All tests apply to figure 3, unless otherwise specified.  For devices marked with the 'Q' certification mark, the parameters listed herein may be guaranteed if not tested to the limits specified in accordance with the manufacturer's QM plan.
- / IIO is calculated using data from previous tests.
- / IOS(+) and IOS(-) are measured with the output shorted to ground for less than 25 milliseconds.
- / Δ VIO/ Δ t is calculated using data from previous tests.
- / Slew rate can be measured using figure 5.  All test signals for figure 3 are shown on figure 5.

6/ The oscillation detector will be disconnected during slew rate tests.

- 7/ Slew rate:  For device types 03, 04, and 06 energize relays K4 and K9.  For device type 05 energize relays K4, K9, and K10.

## MIL-M-38510/135G

TABLE IV.  Group C end-point and group B, class S, electrical parameters.

| V CM = 0,  V CC =  15 V for all device types.                                                             | V CM = 0,  V CC =  15 V for all device types.                                                             | V CM = 0,  V CC =  15 V for all device types.                                                             | V CM = 0,  V CC =  15 V for all device types.                                                             | V CM = 0,  V CC =  15 V for all device types.                                                             | V CM = 0,  V CC =  15 V for all device types.                                                             | V CM = 0,  V CC =  15 V for all device types.                                                             | V CM = 0,  V CC =  15 V for all device types.                                                             | V CM = 0,  V CC =  15 V for all device types.                                                             | V CM = 0,  V CC =  15 V for all device types.                                                             |
|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. | T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. | T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. | T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. | T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. | T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. | T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. | T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. | T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. | T A = 25  C for Group C end-point limits, -55  C  T A  +125  C for group B, class S, end-point limits. |
| Test                                                                                                        | Device 01                                                                                                   | Device 01                                                                                                   | Device 01                                                                                                   | Device 01                                                                                                   | Device 02                                                                                                   | Device 02                                                                                                   | Device 02                                                                                                   | Device 02                                                                                                   | Units                                                                                                       |
| Test                                                                                                        | Limit                                                                                                       | Limit                                                                                                       | Delta                                                                                                       | Delta                                                                                                       | Limit                                                                                                       | Limit                                                                                                       | Delta                                                                                                       | Delta                                                                                                       | Units                                                                                                       |
| Test                                                                                                        | Min                                                                                                         | Max                                                                                                         | Min                                                                                                         | Max                                                                                                         | Min                                                                                                         | Max                                                                                                         | Min                                                                                                         | Max                                                                                                         | Units                                                                                                       |
| V IO                                                                                                        | -135                                                                                                        | 135                                                                                                         | -75                                                                                                         | 75                                                                                                          | -300                                                                                                        | 300                                                                                                         | -100                                                                                                        | 100                                                                                                         |  V                                                                                                         |
| +I IB                                                                                                       | -5                                                                                                          | 5                                                                                                           | -1                                                                                                          | 1                                                                                                           | -7.5                                                                                                        | 7.5                                                                                                         | -1.5                                                                                                        | 1.5                                                                                                         | nA                                                                                                          |
| -I IB                                                                                                       | -5                                                                                                          | 5                                                                                                           | -1                                                                                                          | 1                                                                                                           | -7.5                                                                                                        | 7.5                                                                                                         | -1.5                                                                                                        | 1.5                                                                                                         | nA                                                                                                          |
|                                                                                                             | Devices 03, 05, and 06                                                                                      | Devices 03, 05, and 06                                                                                      | Devices 03, 05, and 06                                                                                      | Devices 03, 05, and 06                                                                                      | Device 04                                                                                                   | Device 04                                                                                                   | Device 04                                                                                                   | Device 04                                                                                                   | Units                                                                                                       |
| Test                                                                                                        | Limit                                                                                                       | Limit                                                                                                       | Delta                                                                                                       | Delta                                                                                                       | Limit                                                                                                       | Limit                                                                                                       | Delta                                                                                                       | Delta                                                                                                       | Units                                                                                                       |
|                                                                                                             | Min                                                                                                         | Max                                                                                                         | Min                                                                                                         | Max                                                                                                         | Min                                                                                                         | Max                                                                                                         | Min                                                                                                         | Max                                                                                                         | Units                                                                                                       |
| V IO                                                                                                        | -135                                                                                                        | 135                                                                                                         | -75                                                                                                         | 75                                                                                                          | -280                                                                                                        | 280                                                                                                         | -100                                                                                                        | 100                                                                                                         |  V                                                                                                         |
| +I IB                                                                                                       | -70                                                                                                         | 70                                                                                                          | -10                                                                                                         | 10                                                                                                          | -70                                                                                                         | 70                                                                                                          | -10                                                                                                         | 10                                                                                                          | nA                                                                                                          |
| -I IB                                                                                                       | -70                                                                                                         | 70                                                                                                          | -10                                                                                                         | 10                                                                                                          | -70                                                                                                         | 70                                                                                                          | -10                                                                                                         | 10                                                                                                          | nA                                                                                                          |

## 5.  PACKAGING

5.1  Packaging requirements.  For acquisition purposes, the packaging requirements shall be as specified in the contract or order (see 6.2).  When packaging of materiel is to be performed by DoD or in-house contractor personnel, these personnel need to contact the responsible packaging activity to ascertain packaging requirements.  Packaging requirements are maintained by the Inventory Control Point's packaging activity within the Military Service or Defense Agency, or within the military service's system command.  Packaging data retrieval is available from the managing Military Department's or Defense Agency's automated packaging files, CD-ROM products, or by contacting the responsible packaging activity.

6.  NOTES

(This section contains information of a general or explanatory nature that may be helpful, but it is not mandatory.)

- 6.1  Intended use.  Microcircuits conforming to this specification are intended for logistic support of existing equipment.
- 6.2  Acquisition requirements.  Acquisition documents should specify the following:
- a. Title, number, and date of the specification.
- b. PIN and compliance identifier, if applicable (see 1.2).
- c. Requirements for delivery of one copy of the conformance inspection data pertinent to the device inspection lot to be supplied with each shipment by the device manufacturer, if applicable.
- d. Requirements for certificate of compliance, if applicable.
- e. Requirements for notification of change of product or process to contracting activity in addition to notification to the qualifying activity, if applicable.
- f. Requirements for failure analysis (including required test condition of method 5003 of MIL-STD-883), corrective action, and reporting of results, if applicable.
- g. Requirements for product assurance options.
- h. Requirements for special carriers, lead lengths, or lead forming, if applicable.  These requirements should not affect the part number.  Unless otherwise specified, these requirements will not apply to direct purchase by or direct shipment to the Government.
- i. Requirements for "JAN" marking.
- j. Packaging requirements (see 5.1).

6.3  Qualification.  With respect to products requiring qualification, awards will be made only for products which are, at the time of award of contract, qualified for inclusion in Qualified Manufacturers List QML-38535 whether or not such products have actually been so listed by that date.  The attention of the contractors is called to these requirements, and manufacturers are urged to arrange to have the products that they propose to offer to the Federal Government tested for qualification in order that they may be eligible to be awarded contracts or orders for the products covered by this specification.  Information pertaining to qualification of products may be obtained from DSCC-VQ, P.O. Box 3990, Columbus, Ohio 43128-3990.  An online listing of products qualified to this specification may be found in the Qualified Products Database (QPD) at https://assist.daps.dla.mil.

6.4  Superseding information.  The requirements of MIL-M-38510 have been superseded to take advantage of the available Qualified Manufacturer Listing (QML) system provided by MIL-PRF-38535.  Previous references to MIL-M-38510 in this document have been replaced by appropriate references to MIL-PRF-38535.  All technical requirements now consist of this specification sheet and MIL-PRF-38535.  The MIL-M-38510 specification sheet number and PIN have been retained to avoid adversely impacting existing Government logistics systems and contractor's parts lists.

6.5  Abbreviations, symbols, and definitions.  The abbreviations, symbols, and definitions used herein are defined in MIL-PRF-38535, and MIL-HDBK-1331.

6.6  Logistic support.  Lead materials and finishes (see 3.4) are interchangeable.  Unless otherwise specified, microcircuits acquired for Government logistic support will be acquired to device class B (see 1.2.2), lead material and finish A (see 3.4). Longer length leads and lead forming should not affect the part number.

## MIL-M-38510/135G

## MIL-M-38510/135G

6.7  Substitutability.  The cross-reference information below is presented for the convenience of users.  Microcircuits covered by this specification sheet will functionally replace the listed generic-industry type.  Generic-industry microcircuit types may not have equivalent operational performance characteristics across military or Government temperature ranges or reliability factors equivalent to MIL-M-38510 device types and may have slight physical variations in relation to case size.  The presence of this information should not be deemed as permitting substitution of generic-industry types for MIL-M-38510 types or as a waiver of any of the provisions of MIL-PRF-38535.

|   Military device type | Generic-industry type   |
|------------------------|-------------------------|
|                     01 | OP-07A                  |
|                     02 | OP-07, 714              |
|                     03 | OP-27A                  |
|                     04 | OP-227A                 |
|                     05 | OP-37A                  |
|                     06 | OP-27A                  |

6.8  Changes from previous issue.  Marginal notations are not used in this revision to identify changes with respect to the previous issue due to the extent of the changes.

| Custodians: Army - CR Navy - EC Air Force - 85 NASA - NA DLA - CC              | Preparing activity: DLA - CC (Project 5962-2010-005)   |
|--------------------------------------------------------------------------------|--------------------------------------------------------|
| Review activities: Army - MI, SM Navy - AS, CG, MC, SH, Air Force - 03, 19, 99 |                                                        |

NOTE:  The activities listed above were interested in this document as of the date of this document.  Since organizations and responsibilities can change, you should verify the currency of the information above using the ASSIST Online database at https://assist.daps.dla.mil.