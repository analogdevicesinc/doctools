<!-- lastmod 2022-08-03 -->
## MAX16545BEVKIT120# Evaluation Kit

## General Description

This evaluation kit (EV kit) serves as a reference for evaluating Maxim's MAX16545B/MAX16545C integrated protection ICs on a 12V bus. The MAX16545B/MAX16545C are circuit-breaker protection ICs with an integrated low resistance MOSFET and lossless current sense circuitry featuring PMBus control and reporting.

The  MAX16545BEVKIT120#  is  assembled  with  two MAX16543 follower ICs, increasing the total current capability to  120A.  One  or  both  follower  ICs  can  be  removed  to reduce the capability to 90A or 60A in a smaller footprint.

With appropriate changes to external components, this EV kit  can be used to evaluate many of Maxim's monolithic hot-swap and protection devices, such as the MAX16550, MAX16545, and MAX16551.

## Features

- 12V Nominal Operating Voltage
- Up to 120A Load Current Capability
- Resistor-Configurable Overcurrent Threshold
- Resistor-Configurable Undervoltage Lockout
- Power-Good Output
- PMBus Configuration, Control, and Monitoring

Evaluates: MAX16545B/MAX16545C, MAX16543

## Quick Start

## Required Equipment

- MAX16545BEVKIT120# assembly
- 12V DC power supply with adequate current output (up to 120A)
- Voltmeter

## Optional Equipment

- Oscilloscope
- MAXPOWERTOOL002# USB-to-SMBus interface device
- PC with Maxim PowerTool PMBus GUI installed
- Electronic load for testing, or +12V circuitry to be powered from the EV kit output

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect  the  MAXPOWERTOOL002  dongle  to  the PC. The dongle LED should be green
- 2) Turn on the power supply and set the supply to 12V, then disable the power supply
- 3) Check  that  a  shunt  is  installed  across  pins  1-2  on jumper  J1  to  connect  the  3.3V  aux  supply  to  the circuitry
- 4) Check that switch S2 is in the off position

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX16545BEVKIT120# Evaluation Kit

- 5) Connect the power supply positive lead to J3 (V IN )
- 6) Connect the power supply negative (ground) lead to J4 (GND)
- 7) Enable the power supply
- 8) Check that there is no current (or very little current) drawn from the supply
- 9) Use the multimeter to verify that +12V power is not present  at  the  output  (between  V OUT   and  GND banana jacks J2 and J9)

## Evaluates: MAX16545B/MAX16545C, MAX16543

- 10) Check that the GUI shows a connection to a 'VT505/ MAX16545' device as shown in Figure 1.
- 11) Switch on S2 to enable the EV kit output. Check that the toggle of S2 illuminates green. The GUI should not show that the output is enabled, as shown in Figure 2.
- 12) Use the multimeter to verify that the voltage between the V OUT  and GND connectors JMP2 to JMP9 is 12V
- 13) Apply load to the EV kit output
- 14) Switch off S2 to disable the output if desired

Figure 1. PowerTool GUI connected to a disabled MAX16545B/MAX16545C device

<!-- image -->

Figure 2. PowerTool GUI connected to an enabled MAX16545B/MAX16545C device

<!-- image -->

## Detailed Description of Hardware

Please refer to the MAX16545B/MAX16545C device data sheets for details of the application circuit, device configuration  through  external  component  selection,  and  PMBus telemetry and control.

In general, the device provides controlled turn-on of the output when the EN/UVLO pin is above 1V. If at any time the load current exceeds the adjustable protection limits, the  device  disconnects  the  output  and  indicates  a  fault condition. If the input voltage falls low enough to bring the EN/UVLO pin below 950mV, the device also shuts off the output to protect against undervoltage conditions.

Cable lugs on the EV kit allow  for  connection  of  heavy cables or wires to carry the high current that this EV kit is capable of controlling.

│

## MAX16545BEVKIT120# Evaluation Kit

An indicator LED in the toggle of the enable switch S2 is shows the status of the FAULT and PWRGD signals:

- Green indicates that the PWRGD output is asserted (high)
- Amber indicates that the ALERT output is asserted (low)
- Red indicates that the FAULT output is asserted (low)

If  a  fault  condition  occurs,  it  can  be  cleared  (without cycling power) either by PMBus command from the GUI, or by toggling switch S2 off and back on again.

## Table 1. Configuration for 120A Capability

| REF DES   | QTY    | VALUE   |
|-----------|--------|---------|
| R9        | Change | 2.26K   |
| R23       | Change | 53.6k   |

## Table 2. Configuration for 90A Capability

| REF DES       | QTY    | VALUE        |
|---------------|--------|--------------|
| C33, C48      | Remove | 0.1UF        |
| C28, C31, C50 | Remove | 1UF          |
| C29           | Remove | 0.01UF       |
| C24           | Remove | 10UF         |
| C35           | Remove | 1UF          |
| R21           | Remove | 10K          |
| R15, R19      | Remove | 499          |
| R9            | Change | 3.01K        |
| R17           | Remove | 1K           |
| R23           | Change | 71.5k        |
| U3            | Remove | MAX16543GPC+ |

## Evaluates: MAX16545B/MAX16545C, MAX16543

## Reducing the Current Capability

As delivered, the EVKIT is equipped with a full complement of MAX16545B/MAX16545C and MAX16543 devices and their external discrete components. While the ICs are capable of handling up to 120A current, the maximum telemetry value and Moderate OCP are configured to 60A by resistors R9 and R23.

To configure the EV kit current-capability to 120A, 90A, or 60A, change and remove ICs and discrete components as listed below in Table 1, Table 2, and Table 3.

## Table 3. Configuration for 60A Capability

| REF DES                     | QTY    | VALUE        |
|-----------------------------|--------|--------------|
| C32, C33, C43, C48          | Remove | 0.1UF        |
| C6, C28, C30, C31, C50, C58 | Remove | 1UF          |
| C29, C59                    | Remove | 0.01UF       |
| C24, C53                    | Remove | 10UF         |
| C34, C35                    | Remove | 1UF          |
| R20, R21                    | Remove | 10K          |
| R2, R15, R18, R19           | Remove | 499          |
| R16, R17                    | Remove | 1K           |
| U2, U3                      | Remove | MAX16543GPC+ |

## Ordering Information

| PART               | TYPE                |
|--------------------|---------------------|
| MAX16545BEVKIT120# | 120A Evaluation Kit |

│

## MAX16545BEVKIT120# Evaluation Kit

## MAX16545B EV Kit Bill of Materials

| REF DES                             |   QTY | PART #                   | MANUFACTURER                 | VALUE                    |
|-------------------------------------|-------|--------------------------|------------------------------|--------------------------|
| C5, C18, C25, C32, C33, C43, C48    |     7 | GRM155R71E104KE14        | MURATA                       | 0.1UF                    |
| C6, C14, C17, C28, C30, C31, C50    |     7 | GRM188R71E105KA12        | MURATA                       | 1UF                      |
| C9                                  |     1 | C1005X7R1E473K050BC      | TDK                          | 0.047UF                  |
| C15, C16, C29                       |     3 | C0402C103K5RAC           | KEMET                        | 0.01UF                   |
| C19                                 |     1 | C0402X7R160-223JNP       | VENKEL LTD                   | 0.022UF                  |
| C23                                 |     1 | C1005X7R1E224K050BB      | TDK                          | 0.22UF                   |
| C24, C53                            |     2 | TMK212BBJ106KG-T         | TAIYO YUDEN                  | 10UF                     |
| C34, C35                            |     2 | C1005X5R1E105K050        | TDK                          | 1UF                      |
| C61, C63                            |     2 | GRM31CR71E106KA12        | MURATA                       | 10UF                     |
| C114, C160-C163                     |     5 | CGA2B3X7R1H104K050BB     | TDK                          | 0.1UF                    |
| D2                                  |     1 | SMDJ13A                  | LITTELFUSE                   | 13V                      |
| D3                                  |     1 | V8PAL45-M3/I             | VISHAY                       | V8PAL45-M3/I             |
| J1                                  |     1 | TSW-101-07-L-D           | SAMTEC                       | TSW-101-07-L-D           |
| J2-J4, J9                           |     4 | 111-2223-001             | EMERSON NETWORK POWER        | 111-2223-001             |
| J6                                  |     1 | AWHW16G-0202-T           | ASSMANN                      | AWHW16G-0202-T           |
| J10, J11                            |     2 | TSW-102-07-T-S           | SAMTEC                       | TSW-102-07-T-S           |
| JMP1-JMP4, JMP7, JMP8, JMP11, JMP12 |     8 | B2APCB                   | INTERNATIONAL HYDRAULICS INC | B2APCB                   |
| MECH1-MECH4                         |     4 | NYLON_ STANDOFF_6-32_1/4 | MAXIM                        | NYLON_ STANDOFF_6-32_1/4 |
| R1, R5, R8, R11, R12, R20, R21      |     7 | ERJ-2RKF1002             | PANASONIC                    | 10K                      |
| R2, R15, R18, R19                   |     4 | ERJ-2RKF4990             | PANASONIC                    | 499                      |
| R3                                  |     1 | CRCW040220K0FK           | VISHAY DALE                  | 20K                      |
| R4                                  |     1 | CRCW04022K26FK           | VISHAY DALE                  | 2.26K                    |
| R9                                  |     1 | CR0402-16W-4421FT        | VENKEL LTD                   | 4.42K                    |

│

Evaluates: MAX16545B/MAX16545C,

MAX16543

## MAX16545BEVKIT120# Evaluation Kit

Evaluates: MAX16545B/MAX16545C,

MAX16543

## MAX16545B EV Kit Bill of Materials (continued)

| REF DES                      |   QTY | PART #          | MANUFACTURER                        | VALUE         |
|------------------------------|-------|-----------------|-------------------------------------|---------------|
| R13, R14, R84, R85, R88, R90 |     6 | CRCW0402100KFK  | VISHAY                              | 100K          |
| R16, R17                     |     2 | RCC-0402PW1001F | INTERNATIONAL MANUFACTURING SERVICE | 1K            |
| R22                          |     1 | ERJ-2RKF1781    | PANASONIC                           | 1.78K         |
| R23                          |     1 | ERJ-2RKF1073    | PANASONIC                           | 107K          |
| R86, R87                     |     2 | CRCW04022K00FK  | VISHAY DALE                         | 2K            |
| R103                         |     1 | CRCW0402221RFK  | VISHAY DALE                         | 221           |
| R104                         |     1 | CRCW0402150RFK  | VISHAY DALE                         | 150           |
| S2                           |     1 | G12JPCF         | NKK SWITCHES                        | G12JPCF       |
| TP1, TP2, TP4-TP6            |     5 | 5127            | KEYSTONE                            | N/A           |
| TP17                         |     1 | 5012            | KEYSTONE                            | N/A           |
| TP18                         |     1 | 5126            | KEYSTONE                            | N/A           |
| TP20                         |     1 | 5013            | KEYSTONE                            | N/A           |
| TP21                         |     1 | 5014            | KEYSTONE                            | N/A           |
| U1                           |     1 | MAX16545BGPF+   | MAXIM                               | MAX16545BGPF+ |
| U2, U3                       |     2 | MAX16543GPC+    | MAXIM                               | MAX16543GPC+  |
| U4                           |     1 | MAX15006AATT+   | MAXIM                               | MAX15006AATT+ |
| U9, U14                      |     2 | NC7WZ38K8X      | FAIRCHILD SEMICONDUCTOR             | NC7WZ38K8X    |
| U11                          |     1 | NC7SZ08L6X      | FAIRCHILD SEMICONDUCTOR             | NC7SZ08L6X    |
| U12                          |     1 | NC7SZ14M5X      | FAIRCHILD SEMICONDUCTOR             | NC7SZ14M5X    |

│

## MAX16545B EV Kit Schematic

<!-- image -->

## MAX16545B EV Kit Schematic (continued)

<!-- image -->

## MAX16545B EV Kit Schematic (continued)

<!-- image -->

## MAX16545B EV Kit PCB Layout Diagrams

<!-- image -->

MAX16545B EV Kit-Silk\_Top

<!-- image -->

MAX16545B EV Kit-LAYER\_2

MAX16545B EV Kit-Top

<!-- image -->

MAX16545B EV Kit-LAYER\_3

<!-- image -->

│

## MAX16545B EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX16545B EV Kit-LAYER\_4

<!-- image -->

MAX16545B EV Kit-Bottom

MAX16545B EV Kit-LAYER\_5

<!-- image -->

MAX16545B EV Kit-Silk\_Bot

<!-- image -->

│

## MAX16545BEVKIT120# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/19            | Initial release | -               |
|                 1 | 3/20            | Added MAX16545C | All             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX16545B/MAX16545C,

MAX16543