<!-- lastmod 2022-08-02 -->
## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## General Description

The MAX17690E evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the operation of  an  isolated  16.5W  no-opto  flyback  DC-DC  converter with secondary-side synchronous rectification. This circuit is implemented using the MAX17690, a no-opto, flyback controller  in  a  16-pin  TQFN  package  with  an  exposed pad.  The  synchronous  rectification  on  the  secondaryside is enabled by replacing the secondary diode with a MOSFET to achieve 84.7% efficiency. The circuit uses the MAX17606, a secondary-side synchronous rectifier driver in a 6-pin SOT23 package for driving the secondary-side MOSFET.

The  EV  kit  output  is  configured  for  an  isolated  +3.3V and  provides  up  to  5A  of  output  current.  The  EV  kit  is programmed to operate at a 200kHz switching frequency. The transformer provides the galvanic isolation between input and output, up to 1500V RMS . The EV kit regulates the  output  voltage  within  ±5%  over  the  line,  load,  and temperature without using the auxiliary winding/optocoupler for output voltage feedback.

## Features

- 18V to 36V Input Range
- Isolated Output: 3.3V/5A DC
- Compact Design with High Frequency (200kHz) Switching
- No Optocoupler/Third Winding Required to Derive Feedback Signal
- 84.7% Peak Efficiency
- Galvanic Isolation up to 1500V RMS
- Proven PCB Layout
- Fully Assembled and Tested

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification

## Quick Start

## Recommended Equipment

- One 18V-36V DC, 1.5A power supply
- 16.5W resistive load with 5A sink capacity
- Four digital multimeters (DMM)
- MAX17690EVKITE#

## Warning

- Do not turn on the power supply until all connections are completed.
- Wear protective eye gear at all times.
- Do not touch any part of the circuit with bare hands/ conductive materials when powered up.
- Make  sure all high-voltage capacitors are fully discharged  before  handling.  Allow  5  minutes  after disconnecting  input  power  source  before  touching circuit parts.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## Equipment Setup and Test Procedure

- 1) Set the power supply to +24VDC. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the VOUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Connect the resistive load across the output terminals.
- 4) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 5) Enable the power supply.
- 6) Verify that the output voltmeter displays 3.3V and, if required,  measure  the  output  current  using  a  DMM programmed in ammeter mode.
- 7) If  required,  vary  the  input  voltage  from  18V  to  36V, and the load current from 50mA to 5A. Verify that the output voltage is 3.3V ±5%.

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification

## Detailed Description

The MAX17690 EV kit provides a proven design to evaluate the  MAX17690,  a  high-efficiency  no-opto  DC-DC  flyback controller. The device uses a novel sampling technique to eliminate the optocoupler/third winding in sensing the output voltage across the isolation boundary. The MAX17606, a secondary-side synchronous driver, is used, along with the MAX17690, to improve the converter efficiency.

This EV kit provides the programmable soft-start feature to limit the inrush current. The EN/UVLO is used to start the converter at the desired input voltage. The OVI is used to  turn-off  the  converter  at  the  desired  input  overvoltage level.  The  MAX17690 provides overcurrent and thermal protection.  The  details  of  soft-start  time  programming, programming the output voltage, peak-current-limit setting, switching frequency setting, and the EN/UVLO, OVI settings are described in the MAX17690 IC data sheet.

The MAX17606 has provision to program the turn-off trip point of the secondary synchronous rectifier. An external resistor (R18) connects the drain of the external MOSFET to IC's DRN pin. This resistor sets the turn-off trip point using  the  precise  internal  current  source.  After  the synchronous  rectifier  is  turned-off  to  avoid  the  false tripping  due  to  DCM  ringing,  the  MAX17606  programs the  minimum  turn-off  time.  The  MAX17606  uses  the resistor (R20) connected between TOFF pin to GND0 to program  the  minimum  turn-off  time.  For  selecting  R18, R20 and other components related to MAX17606, refer the MAX17606 IC data sheet.

## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## EV Kit Performance Report

EFFICIENCY vs. LOAD CURRENT

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| SUMIDA          | www.sumida.com    |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |

Note: Indicate that you are using the MAX17690E EV when contacting these component suppliers.

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification

<!-- image -->

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17690EVKITE# | EV Kit |

#Denotes RoHS compliant.

│

## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## MAX17690E EV Kit Bill of Materials

| Designation       |   Qty | Description                                                                                  |
|-------------------|-------|----------------------------------------------------------------------------------------------|
| C1                |     1 | 47uF±20%, 50V, ALUMINUM-ELECTROLYTIC SMT (CASE_E) PANASONIC EEE-FK1H470P                     |
| C2, C19, C25      |     3 | 4.7uF±10%, 50V, X7R Ceramic capacitor (1210) KEMET C1210C475K5RAC; MURATA GRM32ER71H475KA88K |
| C4, C16, C17      |     3 | 2.2uF±10%, 50V, X7R Ceramic capacitor (0805) TDK C2012X7R1H225K                              |
| C5                |     1 | 6800pF±10%, 100V, X7R Ceramic capacitor (0805) KEMET C0805C682K1RAC                          |
| C6                |     1 | 0.047uF±10%, 16V, X7R Ceramic capacitor (0402) MURATA GRM155R71C473KA01                      |
| C7                |     1 | 0.047uF±10%, 50V, X7R Ceramic capacitor (0402) MURATA GRM155R71H473KE14                      |
| C8                |     1 | 330pF±10%, 50V, X7R Ceramic capacitor (0402) MURATA GRM155R71H331KA01                        |
| C9                |     1 | 220pF±10%, 100V, X7R Ceramic capacitor (0402) MURATA GRM155R72A221KA01                       |
| C10, C11, C20-C23 |     6 | 100uF±20%, 6.3V, X7U Ceramic capacitor (1210) MURATA GRM32EE70J107ME15L                      |
| C12               |     1 | 100pF±10%, 50V, X7R Ceramic capacitor (0402) PANASONIC ECJ-0EB1H101K                         |
| C13               |     1 | 3300pF±10%, 2000V, X7R Ceramic capacitor (1210) AVX 1210GC332KAT1A                           |
| C14               |     1 | 1uF±10%, 50V, X7R Ceramic capacitor (0805) MURATA GRM21BR71H105KA12                          |
| C15               |     1 | 0.01uF±10%, 50V, X7R Ceramic capacitor (0402) KEMET C0402C103K5RAC                           |
| C24, C26          |     2 | 0.1uF±10%, 50V, X7R Ceramic capacitor (0603) KEMET C0603C104K5RAC                            |
| C27               |     1 | 0.47uF±10%, 50V, X7R Ceramic capacitor (0805) KEMET C0805C474K5RAC                           |
| C28               |     1 | 0.022uF±10%, 16V, X7R Ceramic capacitor (0402) MURATA GRM155R71C223KA01                      |
| C30, C31          |     2 | 0.1uF±10%, 16V, X7R Ceramic capacitor (0402) TDK C1005X7R1C104K050BC                         |
| C32               |     1 | 2.2uF±10%, 16V, X7S Ceramic capacitor (0603) MURATA GRM188C71C225KE11D                       |
| D1                |     1 | 100V/2A, (POWERDI-123), DIODE DIODES INCORPORATED DFLS2100                                   |
| D2, D4            |     2 | 100V/0.3A, (SOD-123), DIODE DIODES INCORPORATED 1N4148W-7-F                                  |
| D3                |     1 | 3.6V/1.5W, (DO-214AC), DIODE, ZNR CENTRAL SEMICONDUCTOR CMZ5914B VISHAY BZG05C3V6-M3-08      |
| D5                |     1 | 100V/0.25A, (SOD-323F), DIODE DIODES INCORPORATED 1N4148WSF                                  |

Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification

## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## MAX17690E EV Kit Bill of Materials (continued)

| Designation   |   Qty | Description                                                                                           |
|---------------|-------|-------------------------------------------------------------------------------------------------------|
| L1            |     1 | 10uH±20%, 3.1A inductor COILCRAFT XAL4040-103ME                                                       |
| Q1            |     1 | 150V/16A/40W, 8-PowerWDFN, POWER TRANSISTOR ON SEMICONDUCTOR FDMC86240                                |
| Q2            |     1 | 30V/30A/6W, SO-8, POWER TRANSISTOR VISHAY SILICONIX SI4164DY-T1-GE3                                   |
| R1            |     1 | 20kΩ±1% resistor, 0402 VISHAY DALE CRCW040220K0FKEDC                                                  |
| R2            |     1 | 619kΩ±1% resistor, 0402 PANASONIC ERJ-2RKF6193X                                                       |
| R3            |     1 | 27.4kΩ±1% resistor, 0402 VISHAY DALE CRCW040227K4FKED                                                 |
| R4            |     1 | 158kΩ±1% resistor, 0402 PANASONIC ERJ-2RKF1583X                                                       |
| R5            |     1 | 10kΩ±1% resistor, 0402 VISHAY DALE CRCW040210K0FK                                                     |
| R6            |     1 | 121kΩ±1% resistor, 0402 PANASONIC ERJ-2RKF1213                                                        |
| R7            |     1 | 17.8kΩ±1% resistor, 2010 PANASONIC ERJ-12SF1782                                                       |
| R8            |     1 | 118kΩ±1% resistor, 0402 PANASONIC ERJ-2RKF1183                                                        |
| R9            |     1 | 24.9kΩ±1% resistor, 0402 VISHAY DALE CRCW040224K9FKEDC                                                |
| R10           |     1 | 4.87kΩ±1% resistor, 0402 VISHAY DALE CRCW04024K87FK                                                   |
| R11           |     1 | 47Ω±1% resistor, 1210 VISHAY DRALORIC CRCW121047R0JNEAHP                                              |
| R12           |     1 | 0.012Ω±1% resistor, 1206 PANASONIC ERJ-8CWFR012V                                                      |
| R13, R19      |     2 | OPEN                                                                                                  |
| R14, R22      |     2 | 0Ω resistor, 0402 PANASONIC ERJ-2GE0R00X                                                              |
| R15           |     1 | 1kΩ±1% resistor, 0402 VISHAY DALE CRCW04021K00FK                                                      |
| R16, R21      |     2 | 4.99Ω±1% resistor, 0402 VISHAY DALE CRCW04024R99FKED                                                  |
| R17           |     1 | 10Ω±1% resistor, 0402 VISHAY DALE CRCW040210R0FK                                                      |
| R18           |     1 | 1kΩ±1% resistor, 0402 PANASONIC ERJ-2RKF1001X                                                         |
| R20           |     1 | 75kΩ±1% resistor, 0402 VISHAY DALE CRCW040275K0FK                                                     |
| T1            |     1 | 10-pin SMT, 8.2uH, 8A, (3-5):(9,10-6,7) = 1:0.2 SUMIDA CEP1311F_13324-T204                            |
| U1            |     1 | MAX17690, TQFN16-EP, NO-OPTO ISOLATED FLYBACK CONTORLLER IC MAXIM MAX17690ATE+                        |
| U2            |     1 | MAX17606, TSOT23-6, SECONDARY-SIDE SYNCHRONOUS MOSFET DRIVER FOR FLYBACK CONVERTER MAXIM MAX17606AZT+ |

## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## MAX17690E EV Kit Schematic

<!-- image -->

│

## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## MAX17690E EV Kit PCB Layouts

Silk\_Top

<!-- image -->

Top

<!-- image -->

│

## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification

## MAX17690E EV Kit PCB Layouts (continued)

INNERLAYER2

<!-- image -->

INNERLAYER3

<!-- image -->

│

## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## MAX17690E EV Kit PCB Layouts (continued)

<!-- image -->

## Bottom

Silk\_Bot

<!-- image -->

│

## MAX17690EVKITE# No-Opto Flyback Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification