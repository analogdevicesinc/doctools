<!-- lastmod 2022-08-02 -->
## MAX25432B Evaluation Kit

## General Description

The MAX25432 EV kit and collateral provides a convenient platform to the design engineer for rapid evaluation with reduced test and firmware-development time.

The MAX25432B  evaluation kit (EV kit) features MAX25432BATLG/V+  automotive  100W  USB-PD  PPS buck-boost  port  controller  and  protector  for  head-unit, multi-media  hub,  rear-seat  infotainment,  and  dedicated charging port (DCP) applications.

The IC  combines  an  automotive-grade  buck-boost  controller capable of full range PPS 3.3V-21V at up to 6.35A, a USB-PD analog front-end (AFE), legacy USB charging support and USB Type-C ®  protection switches for automotive USB host or DFP applications.

The integrated USB Type-C protection switches provide automotive system-level ESD and 24V short-circuit protection for D+, D-, CC1, CC2, and VCONN. The device also supports legacy USB 2.0 charging modes including BC1.2, Apple ® 2.4A, Apple CarPlay ® , Apple MFi and USB On-The-Go (OTG).

The  USB-PD  source  capabilities  and  I 2 C  registers  can be  changed  using  the  PC  GUI  software  available  for download.

The EV kit also allows evaluation of the intelligent shield short-to-battery  detection  and  protection  available  on MAX25432.  This  feature  protects  against  high  shortcircuit  currents  flowing  from  the  car  battery  through  the cable  shield  to  module  ground  during  fault  events,  preventing car module damage.

Automotive USB-PD reference designs are also available. contact Maxim Integrated for more information.

## Features

- 100W USB-PD Rev. 3.0 with PPS for CDP and DCP Applications
- Legacy USB 2.0 Charging Support-Meets MFi R3x
- Programmable Fixed and Augmented PDOs Using the Feather Board and GUI
- Test Points Available for Signals and Buck-Boost analysis
- Fully Assembled and Tested, Proven PCB Layout

Apple Inc. registered trademark. Apple CarPlay is a registered trademark of Apple Inc.

USB Type-C is a registered trademark of the USB

Implementers Forum, Inc.

## Quick Start

The following procedure demonstrates how to setup the MAX25432B for evaluation.

## EV Kit Content

- One MAX25432B main board (p/n MAX25432\_EVKIT\_P1\_01)
- One Feather board and 20-pin ribbon cable (p/n MAXPD\_FTHR\_APPS\_B)
- One Pico board and 10-pin ribbon cable (p/n MAX32625PICO)
- One Maxim USB-C breakout board (p/n MAX25410\_PT\_LABS\_A)
- One 6ft USB Type-C 5A cable
- Two USB Micro-B cables

## Required Equipment

- One MAX25432B EV kit main board
- One Feather board
- One USB Type-C cable
- One 14V/8A DC power supply or car battery (V BAT ). Not included.
- One USB-PD device with PPS such as a smartphone or a PD trigger. Not included.

Note: Example  of  PD  trigger  devices  that  support  PPS are USBCEE CCPROG PAT, Passmark or AVHzY.

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX25432

Figure 1. MAX25432B EV Kit (Top View, Main Board)

<!-- image -->

## Initial Setup

The EV kit is fully assembled, tested, and configured. Verify the jumper configuration on the main board as shown in Figure 2 .

Figure 2. Jumper Configuration

<!-- image -->

│

Follow the steps below to set up the board for evaluation when no PC is available.

Once a USB-PD device is connected as shown in Figure 3, the EV kit and the device will agree on a Power Delivery contract, and fast charging will begin.

Figure 3. EV Kit Setup 1

<!-- image -->

Evaluates: MAX25432

Evaluates: MAX25432

Follow the steps below to set up the board for evaluation when a PC is available, see Figure 4 .

This setup requires the installation of the Maxim automotive USB EV kit PC GUI software available on the MAX25432 EV kit product webpage.

Figure 4. EV Kit Setup 2

<!-- image -->

## PC GUI Software

The MAX25432BEVKIT# features a graphical user interface (GUI) that can be used to configure the TCPM as well as access the internal IC registers. Download the latest software, then connect the Feather board between the computer and the main board using the provided Micro-B and ribbon cable as shown in Figure 4 .

Figure 5. Maxim Automotive USB PC GUI software

<!-- image -->

## Detailed Description

## Enabling VBUS

Make sure  the  jumpers  are  set  correctly  and  the  steps described in either Setup 1 or 2 have been followed.

When  the  EV  kit  is  in  TCPM  mode,  VBUS  powers-up after  a  valid Type-C device is connected on the Type-C receptacle (J37).

Note: It  is  recommended  to  connect  HVEN  to  V CC instead  of  V BAT   when  connecting  the  Feather  board  to the main board.

The on-board MAX20075 power supplies make VCONN and I 2 C communication testing convenient for the user. Additionally, their voltage can be changed using jumpers for compatibility with other systems.

Contact the factory for an optimized BOM without external power supplies.

## TCPM Mode

The Type-C Port Manager (TCPM), located in the Feather board,  is  used  to  control  the  MAX25432  autonomously over I 2 C.

TCPM  operation  is  the  default  power-up  mode  in  both Setup 1 and 2. While the TCPM is running, the user can monitor the VBUS voltage and current as well as override MAX25432 registers.

Reference TCPM  open-source code files for the MAX25432B  are  available  for  download  on  the  EV  kit webpage.

## Non-TCPM Mode

The user can change to the non-TCPM mode by turning off the TCPM Enable switch in the GUI.

This mode disables the TCPM stack from controlling the MAX25432 and lets the user manually control the registers through the GUI.

Important: Do not connect a USB device to the EV kit, such as a phone or power bank, when the TCPM is disabled. VBUS can be programmed to voltages exceeding 5V and could damage the USB device.

## Constant Voltage Operation (CV)

To evaluate CV operation with an e-load, first follow the steps described in either Setup 1 or 2.

In  TCPM  mode,  enable  VBUS  by  connecting  a  USB-C device such as a PD Trigger.

In  non-TCPM  mode,  enable  VBUS  manually  using  the GUI.

Make sure the e-load is programmed as constant current or constant resistance (CR) mode before enabling it. Verify the load current stays below the programmed VBUS\_ILIM target in order to stay in CV. In CV, MAX25432 regulates VBUS to the desired VBUS voltage target.

## Current Limit Operation (CL)

To evaluate CL operation with an e-load, first follow the steps  described  in  either  Setup  1  or  2.  Enable  VBUS using  an  external  PD  Trigger  device  in  TCPM  mode. Select the desired PPS APDO voltage and current. Make sure the e-load is programmed as Constant Resistance (CR) mode before enabling it. Finally, dial the load cur -rent past the requested PPS current and observe VBUS voltage decrease.

Note: Using an e-load in CC mode and entering CL mode with  MAX25432 will cause the VBUS to shut-down and flag  the  VBUS  short  to  ground  fault.  This  is  one  of  the protection  mechanisms  built-in  the  MAX25432  and  will not damage the IC or EV kit. To avoid this, make sure the e-load is programmed as constant resistance mode (CR) before enabling it.

In non-TCPM mode, set the desired VBUS voltage target and enable VBUS. Verify the CL\_EN bit is set to 1 and the VBUS\_ILIM target is set to the desired value. Finally, dial the load current past the VBUS\_ILIM target and observe VBUS voltage decreasing.

## Changing the USB-PD Source Capabilities

The  source  capabilities  containing  the  programmable data  objects  (PDOs)  can  be  changed  using  the  GUI  in TCPM mode. Go to the TCPM tab on the GUI to change the source capabilities.

## Fault Diagnostics

The MAX25432B Maxim Auto-Shield protects the application  against  many  faults  related  to  Type-C,  power delivery, and automotive events. Refer to the MAX25432 data sheet for all conditions that can trigger a fault event, action, and recovery. The Feather board is notified using the ALERT pin.

## MAX25432B Evaluation Kit

## Buck-Boost Controller Operation

To  observe  the  buck-boost  controller  switching  waveforms, copper pads are available at various nodes.

Figure 6 shows recommended probe locations.

## VCONN

The MAX25432 has built-in VCONN switches that, when enabled by the TCPM, provide the connection from VCC to  HVCC1 or  HVCC2 when the correct Ra and Rd are provided on the HVCC lines. This is accomplished with the connection of the e-marked cable provided in this kit, forcing Ra on one of the HVCC pins. Details on interfac -ing  with  the  register  set  are  covered  in  the  MAX25432 data sheet.

The  internal  VCONN  switches  protect  the  VCC  supply against  overcurrent,  undervoltage,  reverse  overvoltage, and  short-to-ground.  Details  on  the  event,  reporting, debounce,  action,  and  recovery  are  described  in  the MAX25432 data sheet.

The  fast  protection  response  to  short-to-ground  events can  be  observed  by  using  an  oscilloscope  to  monitor HVCC1, CC1, and VCC.

To evaluate the feature in TCPM mode, connect a 1kΩ resistor from HVCC1 to ground and a 5.1kΩ from HVCC2 to GND. HVCC1 will then be sourcing VCONN, which can range from 3.3V to 5V depending on the selected VCC voltage.  Using  a  short  wire,  connect  HVCC1  to  ground and observe a very minimal drop on VCC voltage and fast disconnect of HVCC1 and CC1 from the VCC voltage.

## Data Switch Bandwidth

USB  Type-C  connectors  J36  and  J37  can  be  used  to test USB 2.0 high-speed bandwidth. Connector J37 is on the device side and connects to the HVD+, HVD- of the

Figure 6. Buck-Boost Signals Location

<!-- image -->

## Evaluates: MAX25432

MAX25432. Connector J36 is on the host side and con -nects to the MAX25432 D+, D- pins.

Before connecting a USB host to the Type-C plug remove the DCP-short resistor populated between R2 and R3.

The switches are also protected against shorting to battery and VBUS with HVD overvoltage fault discussed in the MAX25432 data sheet.

HVD+, HVD- also have integrated ±15kV Air, ±8kV contact ISO 10605 and IEC 61000-4-2 ESD protection.

## CC Line Protection

The  CC  line  switches  are  protected  against  shorting  to battery and VBUS with HCC overvoltage fault discussed in the MAX25432 data sheet.

HVCC1,  HVCC2  also  have  integrated  ±15kV Air,  ±8kV Contact ISO 10605 and IEC 61000-4-2 ESD protection.

## Shield-Short-to-Battery Protection

A  shield  short-to-car-battery  event  can  occur  when  a customer's  portable  device  cable  is  connected  to  the downstream receptacle, and the far end of this cable falls in to the 12V cigarette lighter receptacle and contacts the 12V center terminal. This condition results in a damaging amount of current flow, with insufficient response time by the cigarette lighter fuse.

The  MAX25432  offers  advanced  integrated  protection for  cable  shield-short-to-battery  faults  preventing  cable, passenger device, and car module damage. The solution uses fast detection of cable shield over-current, fast turnoff of external protection switch, safe dissipation of inrush energy, fault reporting, and auto-retry for fault removal.

The  normally  open  ground  logic  ensures  no  damaging current flows on Type-C to Type-C user cables by keeping the downstream connector ground open when no device is attached.

Figure 7. DP/DM 0Ω Short

<!-- image -->

│

## MAX25432B Evaluation Kit

Therefore,  the  main  board  Type-C  connector's  ground and shield pins are floating when no Rd is detected. When a valid Rd resistor is detected, MAX25432 enables GDRV to  5V,  turning  the  external  shield  FET  fully  ON,  which connects  the  connector  ground  to  EV  kit  ground.  Refer to the MAX25432 data sheet for more information on the normally open ground function.

If  the  shield-short-to-battery  protection  feature  is  not needed, the shield FET can be easily bypassed by shorting the GND SHORT pads next to the J37 connector.

## Table 1. ADDR Switch

|   SW1 PIN | POSITION   | DESCRIPTION                                                              |
|-----------|------------|--------------------------------------------------------------------------|
|         1 | 0          | Switch open                                                              |
|         1 | ON*        | ADDR connected to ground, setting the I 2 C address to 0x50              |
|         2 | 0*         | Switch open                                                              |
|         2 | ON         | ADDR connected to an 8.87kΩ to ground, setting the I 2 C address to 0x51 |
|         3 | 0*         | Switch open                                                              |
|         3 | ON         | ADDR connected to a 15.8kΩ to ground, setting the I 2 C address to 0x52  |
|         4 | 0*         | Switch open                                                              |
|         4 | ON         | ADDR connected to a 10kΩ to BIAS, setting the I 2 C address to 0x53      |

## Table 2. Jumper Descriptions

| JUMPER   | NAME ON PCB   | POSITION   | DESCRIPTION                                                                                |
|----------|---------------|------------|--------------------------------------------------------------------------------------------|
| J1       | EXT_FB        | Open*      | Not used. Always leave open.                                                               |
| J2       | VOUT_FB       | Open*      | Not used. Always leave open.                                                               |
| J4       | J4            | 2-3*       | Connects HVEN to VCC. Powers-up the MAX25432B.                                             |
| J6       | VCC_EN        | 1-2*       | Provides VBAT power to the VCC regulator.                                                  |
| J7       | 5.0V          | 1-2*       | Sets VCC = 5V. Leave open if using jumper J8.                                              |
| J8       | 3.3V          | 1-2        | Sets VCC = 3.3V. Leave open if using jumper J7.                                            |
| J9       | LOOP_INJECT   | Open*      | Not used. Always leave open.                                                               |
| J10      | METERING_EN   | Open*      | Not used. Always leave open. Leaving open disables the on-board active metering circuitry. |
| J12      | VDD_EN        | 1-2*       | Provides VBAT power to the VDD regulator.                                                  |
| J13      | 5.0V          | 1-2        | Sets VCC = 5V. Leave open if using jumper J14 or J15.                                      |
| J14      | 3.3V          | 1-2*       | Sets VCC = 3.3V. Leave open if using jumper J13 or J15.                                    |
| J15      | 1.8V          | 1-2        | Sets VCC = 1.8V. Leave open if using jumper J13 or J14.                                    |
| J34      | HVEN H        | 1-2        | 10kΩ pullup from VBAT to HVEN.                                                             |
| J34      | HVEN L        | 2-3*       | 10kΩ pulldown from GND to HVEN.                                                            |

*Default position

Evaluates: MAX25432

Note: GDRV can also be used as an active-high Type-C attach indicator.

## Jumpers and Configuration

The switch SW1 allows the user to set the I 2 C address. Only one switch must be in the ON position at a single time.

Table 2 shows jumper positions and descriptions.

│

## MAX25432B Evaluation Kit

Table 3 shows test points and their descriptions.

## Table 3. Test Points

| TEST POINT   | DESCRIPTION                                                                                                                                                                |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VBAT_FLT     | Main battery input with reverse battery protection and EMI filtering. Connect a 4.5V to 36V supply.                                                                        |
| VBAT         | Main battery input with no reverse battery and input EMI filter. Direct supply to the MAX25432B's IN pin and on-board VCC and VDD regulators.                              |
| VBUS         | VBUS output of the MAX25432B's external power stage.                                                                                                                       |
| VDD          | On-board VDD regulator output and MAX25432B's I2C pullup voltage rail. Connected to pin 9 of the MAX25432B (VDD_IO).                                                       |
| VDD_BMC      | Regulated output of the MAX25432B's internal 1.125V regulator, referenced to SHLD_SNS. Pin 13 of the MAX25432B.                                                            |
| VCC          | On-board VCC regulator output and MAX25432B's integrated VCONN switch input. Connected to pin 16 of the MAX25432B (VCONN).                                                 |
| VDD_USB      | Regulated output of the MAX25432B's internal 3.3V regulator. Pin 17 of the MAX25432B.                                                                                      |
| BIAS         | Regulated output of the MAX25432B's internal 5V regulator. Pin 29 of the MAX25432B.                                                                                        |
| HVCC1, HVCC2 | MAX25432B's high-voltage tolerant CC lines. CC passthrough and VCONN switch outputs. Pin 25 and 24 of the MAX25432B.                                                       |
| CC1, CC2     | MAX25432B's integrated Type-C and USB-PD PHY interface. Low voltage side of the CC passthrough switches. Pin 14, 15 of the MAX25432B.                                      |
| SHLD_SNS     | MAX25432B's shield short-to-battery protection sense pin on G-suffix parts and USB-PD PHY ground offset compensation input on all MAX25432B parts. Pin 7 of the MAX25432B. |
| GDRV         | Shield MOSFET gate drive output. Pin 8 of the MAX25432B.                                                                                                                   |

Table 4 shows LEDs and descriptions.

## Table 4. LEDs

| LED   | DESCRIPTION                                     |
|-------|-------------------------------------------------|
| DS1   | Indicates power good for the VCC (VCONN) supply |
| DS2   | Indicates power good for the VDD (I2C) supply.  |

│

Evaluates: MAX25432

## Troubleshooting

| PROBLEM                                                                                          | POSSIBLE CAUSE                                                           | SOLUTION                                                                                                                                                                                                                                                                     |
|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VBUS or VCONN does not come up                                                                   | VCC supply is off and therefore HVEN is low                              | Verify VCC supply green LED is on. Verify VCC_EN jumper is on. If VCC does not work, move the HVEN-VCC jumper on J4 to the HVEN-H position on J34 to enable MAX25432.                                                                                                        |
| VBUS or VCONN does not come up                                                                   | Internal BIAS LDO voltage is below its UVLO threshold (3.0V)             | Verify VBAT is above 4.5V Verify no extra loads are applied on the BIAS pin.                                                                                                                                                                                                 |
| VBUS or VCONN does not come up                                                                   | The I2C is not working                                                   | Verify the SW1 switch is in the correct position. Verify the VDD supply is on Verify the Feather board is connected to the main board and its LED is solid green or blue. Verify all jumper positions are correct. Repeat the steps described in Initial Setup or GUI setup. |
| VBUS or VCONN does not come up                                                                   | VBUS: AType-C device is not attached in TCPM mode                        | Connect a Type-C device to J37. Alternatively, use an Rd pulldown resistor (5.1kΩ) on HVCC1 or HVCC2.                                                                                                                                                                        |
| VBUS or VCONN does not come up                                                                   | VCONN: An e-marked cable and Type-C device are not attached in TCPM mode | Connect an e-marked cable and a Type-C device to J37. Alternatively, use an Ra (1kΩ) and an Rd (5.1kΩ) pulldown resistor on HVCC1 and HVCC2 in either orientation.                                                                                                           |
| VBUS or VCONN does not come up                                                                   | A fault has occurred                                                     | Read the MAX25432 fault registers using the GUI to determine the cause.                                                                                                                                                                                                      |
| The GUI cannot find a target                                                                     | See I2C is not working                                                   | -                                                                                                                                                                                                                                                                            |
| No USB data when connecting an upstream USB Host to the Main Board through the Type-C plug (J36) | The DP/DM pins are shorted with a 0Ω resistor                            | Remove the 0Ω resistor between DP and DM pins. Then, verify the Charge Mode is selected to Passthrough (SDP) or Auto-CDP using the GUI.                                                                                                                                      |
| The VCC LED is off                                                                               | The VCC regulator's output is off                                        | Verify VCC_EN jumper is on. Verify VBAT is above the selected VCC voltage.                                                                                                                                                                                                   |
| The VDD LED is off                                                                               | The VDD regulator's output is off                                        | Verify VDD_EN jumper is on. Verify VBAT is above the selected VDD voltage.                                                                                                                                                                                                   |
| The VDD LED is off                                                                               | The VDD target voltage is 1.8V                                           | None. LED will not light up for 1.8V.                                                                                                                                                                                                                                        |

If none of those steps help to resolve the issue, contact Maxim Integrated for assistance.

Evaluates: MAX25432

## MAX25432B Evaluation Kit

## EV Kit Specifications (Main Board)

The below table lists the EV kit electrical specifications, default BOM and configuration.

Contact  Maxim  for  recommended  BOM  to  target  other switching frequencies and/or power levels.

## Unused EV Kit Features

The following EV kit features are not used and are provided for reference only.

## Table 5. EV Kit Specification Table

| NAME                                                                           | VALUE                                                                                                    |
|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Ambient temperature range                                                      | -40°C to +125°C                                                                                          |
| Input supply range                                                             | 4.5V to 36V 16.7A peak (with R CS1 = 3m)                                                                 |
| VBUS output range                                                              | 3.3V to 21V in CV, down to 2.85V in CL 6.35A Max DC output current                                       |
| Switching frequency                                                            | Default: 400kHz 220k, 300k and 2.2MHz available                                                          |
| Efficiency                                                                     | 96.5% at V IN = 14V, V OUT = 20V, I OUT = 5A, 400kHz - Default EV kit BOM and configuration              |
| Inductor                                                                       | 4.7µH, 25.4A I SAT , 5.7mΩ                                                                               |
| Input capacitors                                                               | 2 x 56µF (Hybrid polymer) + 3 x 10µF (MLCC)                                                              |
| Output capacitors                                                              | 2 x 68µF (Hybrid polymer) + 5 x 10µF (MLCC) Additional 100µF (Aluminum) on CSN2 for Quadramax compliance |
| Buck-boost power MOSFETS                                                       | 40V, 7.2mΩ max (4.5V), 5 x 6mm NVMFS5C460NLAFT1G                                                         |
| Integrated VCONN switch                                                        | 3.3V-5.0V operation, 50mA to 500mAOCP                                                                    |
| Overvoltage and ESD protection on VBUS, HVCC1/2, HVD± and connector GND/Shield | 24V DC ±15kV Air/±8kV contact ISO 10605 and IEC 61000-4-2                                                |

## Table 6. Reference

| REFERRED TO IN THIS DOCUMENT   | TITLE                                                                                              | LOCATION                                |
|--------------------------------|----------------------------------------------------------------------------------------------------|-----------------------------------------|
| USB-PD Rev. 3.0                | The Universal serial bus power delivery specification revision 3.0, version 1.2 June 21, 2018      | http://www.usb.org                      |
| MAX25432 data sheet            | Automotive 100W USB-PD Buck-boost port controller and protector 19-100826, Revision 0, August 2020 | https://www.maximintegrated.com/en.html |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX25432BEVKIT# | EV Kit |

Evaluates: MAX25432

## Main Board :

- Active metering (U2, U3, U4)
- EXT FB, VOUT\_FB, and LOOP\_INJECT (J1, J2, J9)

## Feather Board :

- Active metering (U4, U7, U8)
- FB DRIVE DAC (U9)

## References

Table  6 shows  the  reference  specifications,  their  locations, and the common names they are referred to in this document.

│

## MAX25432B EV Kit Bill of Materials

| REF_DES                     | DNI/DNP   | QTY   | MFG PART #                                                                                                                                                            | DESCRIPTION                                                                                                              |
|-----------------------------|-----------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| BIAS, VCC, VDD_BMC, VDD_USB | -         | 4     | 5003 TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                              | 5003 TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| BUMP1-BUMP4                 | -         | 4     | SJ-5003(BLACK)                                                                                                                                                        | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                            |
| C1, C36                     | -         | 2     | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                                                                                                    | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                                                            |
| C2, C16, C27                | -         | 3     | C1608X7R1V105K080AC                                                                                                                                                   | CAP; SMT (0603); 1UF; 10%; 35V; X7R; CERAMIC                                                                             |
| C3, C4, C13, C14, C40       | -         | 5     | CGA2B3X7R1H104K050BB; GCM155R71H104KE02; CGA2B3X7R1H104K050BE                                                                                                         | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                           |
| C5                          | -         | 1     | UMK107BJ105KA;C1608X5R1H105K080AB; CL10A105KB8NNN;GRM188R61H105KAAL                                                                                                   | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                                                             |
| C6, C9, C11                 | -         | 3     | C3225X7S1H106K250AB; CGA6P3X7S1H106K250AB; GCM32EC71H106K; CGA6P3X7S1H106K250AE                                                                                       | CAP; SMT (1210); 10UF; 10%; 50V; X7S; CERAMIC                                                                            |
| C7, C10                     | -         | 2     | 8.65E+11 CAP; SMT (CASE_HA0); 56UF; 20%; 50V;                                                                                                                         | ALUMINUM-ELECTROLYTIC                                                                                                    |
| C8, C18, C30, C38, C58, C59 | -         | 6     | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV-FR                                                                                         | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                           |
| C12                         | -         | 1     | GRM155R61A333KA01                                                                                                                                                     | CAP; SMT (0402); 0.033UF; 10%; 10V; X5R; CERAMIC                                                                         |
| C15, C19, C22, C24, C25     | -         | 5     | C2012X5R1V106K085AC                                                                                                                                                   | CAP; SMT (0805); 10UF; 10%; 35V; X5R; CERAMIC                                                                            |
| C17, C20, C21               | -         | 3     | EEH-ZA1V680XP                                                                                                                                                         | CAP; SMT (CASE_D8); 68UF; 20%; 35V; ALUMINUM-ELECTROLYTIC                                                                |
| C26, C42                    | -         | 2     | C1005C0G1H271J050BA                                                                                                                                                   | CAP; SMT (0402); 270PF; 5%; 50V; C0G; CERAMIC                                                                            |
| C28                         | -         | 1     | UMK107AB7105KA;CC0603KRX7R9BB105                                                                                                                                      | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                                                             |
| C29, C37                    | -         | 2     | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; GRM31CR71H475KA12L                                                                           | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                           |
| C31, C39                    | -         | 2     | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM;                                                                                                     | CAP; SMT (1210); 22UF; 10%; 25V; X7R; CERAMIC                                                                            |
| C32                         | -         | 1     | C1210C226K3RAC7210 C0402C101J3GACAUTO                                                                                                                                 | CAP; SMT (0402); 100PF; 5%; 25V; C0G; CERAMIC                                                                            |
| C33, C68                    | -         | 2     | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV                                                                                 | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                          |
| C34, C49                    | -         | 2     | C0603C105K4RAC;C1608X7R1C105K080AC; EMK107B7105KA;CGA3E1X7R1C105K080AC; 0603YC105KAT2A                                                                                | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                                                             |
| C35                         | -         | 1     | GRM188Z71C475KE21                                                                                                                                                     | CAP; SMT (0603); 4.7UF; 10%; 16V; X7R; CERAMIC                                                                           |
| C41, C50                    | -         | 2     | GRM31CR71H225KA88;UMK316B7225K                                                                                                                                        | CAP; SMT (1206); 2.2UF; 10%; 50V; X7R; CERAMIC                                                                           |
| C43                         | -         | 1     | GRM188R61C106KAAL                                                                                                                                                     | CAP; SMT (0603); 10UF; 10%; 16V; X5R; CERAMIC                                                                            |
| C45                         | -         | 1     | GRM155R71H102JA01;GCM155R71H102JA37                                                                                                                                   | CAP; SMT (0402); 1000PF; 5%; 50V; X7R; CERAMIC                                                                           |
| C47                         | -         | 1     | C0402C123K4RAC; GRM155R71C123KA01; CC0402KRX7R7BB123                                                                                                                  | CAP; SMT (0402); 0.012UF; 10%; 16V; X7R; CERAMIC                                                                         |
| C51                         | -         | 1     | C0402C103K4RACAUTO                                                                                                                                                    | CAP; SMT (0402); 0.01UF; 10%; 16V; X7R; CERAMIC                                                                          |
| C53, C55, C64               | -         | 3     | C1005X7R1C104K050BC;ATC530L104KT16; 0402YC104KAT2A;C0402X7R160-104KNE; CL05B104KO5NNNC;GRM155R71C104KA88; C1005X7R1C104K;CC0402KRX7R7BB104; EMK105B7104KV;CL05B104KO5 | CAP; SMT (0402); 0.1UF; 10%; 16V; X7R; CERAMIC                                                                           |
| C60, C61                    | -         | 2     | C1608X7R1H224K080; GRM188R71H224KAC4                                                                                                                                  | CAP; SMT (0603); 0.22UF; 10%; 50V; X7R; CERAMIC                                                                          |
| C70                         | -         | 1     | LMK105B7474KV;GRM155R71A474KE01                                                                                                                                       | CAP; SMT (0402); 0.47UF; 10%; 10V; X7R; CERAMIC                                                                          |
| C74                         | -         | 1     | EEV107M035A9H                                                                                                                                                         | CAP; SMT; 100UF; 20%; 35V; ALUMINUM-ELECTROLYTIC ;                                                                       |
| CC1, CC2,                   | -         | 4     |                                                                                                                                                                       | 5009 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN;                                               |
| HVCC1, HVCC2                | -         | 1     | BAT54AW-7-F                                                                                                                                                           | YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; DIODE; SCH; SMT (SOT-323); PIV=30V; IF=0.2A                            |
| D1                          |           |       | BZT52C10S-7-F                                                                                                                                                         | DIODE; ZNR; SMT (SOD-323); VZ=10V; IZ=0.005A                                                                             |
| D2 DS1, DS2                 | - -       | 1 2   | APT1608LZGCK                                                                                                                                                          | DIODE; LED; GREEN WATER CLEAR; GREEN; SMT (0603); VF=2.65V; IF=0.002A                                                    |
| GDRV, SHLD_SNS              | -         | 2     | 5007                                                                                                                                                                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |

Evaluates: MAX25432

## MAX25432B EV Kit Bill of Materials (continued)

| REF_DES                                                                | DNI/DNP   | QTY   | MFG PART #                                                   | DESCRIPTION                                                                                                                                         |
|------------------------------------------------------------------------|-----------|-------|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| GND1, GND2, GND4-GND7, VBAT, VBAT_FLT, VBUS                            | -         | 9     |                                                              | 5020 EVKIT PART - MAXIM PAD; TEST POINT; PIN DIA=0.094IN; TOTAL LENGTH=0.350IN; BOARD HOLE=0.040IN; NONE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| J1, J2, J6-J10, J12-J15                                                | -         | 11    | PCC02SAAN                                                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC                                                           |
| J3                                                                     | -         | 1     | SBH11-PBPC-D20-RA-BK                                         | CONNECTOR; MALE; THROUGH HOLE; HEADER CONNECTOR; RIGHT ANGLE; 40PINS                                                                                |
| J4                                                                     | -         | 1     | TSW-110-07-G-S                                               | CONNECTOR; MALE; THROUGH HOLE; 0.025 IN SQ POST HEADER; STRAIGHT; 10PINS                                                                            |
| J5                                                                     | -         | 1     | ESHF-110-01-L-D-SM-K                                         | CONNECTOR; MALE; SMT; SHROUDED AND EJECTOR IDC HEADER; STRAIGHT; 20PINS                                                                             |
| J34                                                                    | -         | 1     | TSW-103-23-G-S                                               | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55 DEGC TO +125 DEGC                                                                         |
| J36                                                                    | -         | 1     | DX07P024MJ1                                                  | CONNECTOR; FEMALE; SMT; USB 3.1; SUPERSPEED; RIGHT ANGLE; 24PINS                                                                                    |
| J37                                                                    | -         | 1     |                                                              | 2012670005 CONNECTOR; FEMALE; SMT; USB TYPE C RECEPTACLE; RIGHT ANGLE; 24PINS                                                                       |
| L1                                                                     | -         | 1     | XAL1010-472ME                                                | INDUCTOR; SMT; SHIELDED; 4.7UH; TOL=+/-20%; 17.5A                                                                                                   |
| L2, L4                                                                 | -         | 2     | LQM21PZ4R7MGR                                                | INDUCTOR; SMT (0805); FERRITE; 4.7UH; 20%; 0.8A                                                                                                     |
| L3                                                                     | -         | 1     | XAL1060-222ME                                                | INDUCTOR; SMT; COMPOSITE; 2.2UH; 20%; 20A                                                                                                           |
| L5                                                                     | -         | 1     | BLM31SN500SZ1                                                | INDUCTOR; SMT (1206); FERRITE-BEAD; 50 AT 100MHZ; TOL=12.5OHMS; 12A                                                                                 |
| MISC1                                                                  | -         | 1     | FFSD-10-D-02.00-01-N                                         | CABLE ASSEMBLY; IDC RIBBON CABLE ASSEBLY; FEMALE-FEMALE; DOUBLE END; 0.05IN PITCH; 20 PINS                                                          |
| Q1-Q4                                                                  | -         |       | NVMFS5C460NLAFT1G                                            | TRAN; NCH; POWER MOSFET; SO-8FL; PD-(50W); I-(78A); V-(40V)                                                                                         |
| Q5                                                                     | -         | 4     | FDWS9509L-F085                                               | TRAN; PCH; POWER-56; PD-(107W); I-(-65A); V-(-40V)                                                                                                  |
| Q6                                                                     | -         | 1     | NVTFS5C466NLTAG                                              | TRAN; NCH MOSFET; WDFN8; PD-(38W); I-(51A); V-(40V)                                                                                                 |
| R1, R12-R15, R18, R19, R22, R23, R30, R44, R45, R48, R50-R52, R61, R62 | -         | 1     | 18 RC0402JR-070RL; CR0402-16W-000RJT                         | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                                             |
| R4, R8                                                                 | -         |       | 2 CRCW040223K2FK;RC0402FR-0723K2L                            | RES; SMT (0402); 23.2K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                 |
| R5                                                                     | -         |       | 1 PF0603FRE7T0R01Z                                           | RES; SMT (0603); 0.01; 1%; +/-50PPM/DEGC; 0.3300W                                                                                                   |
| R6, R24                                                                | -         | 2     | ERJ-2RKF5102                                                 | RES; SMT (0402); 51K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                   |
| R7, R25                                                                | -         |       | 2 CRCW040240K2FK                                             | RES; SMT (0402); 40.2K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                 |
| R9, R20, R26, R29, R39, R40, R54-R56                                   | -         | 9     | ERJ-2RKF1002                                                 | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                   |
| R10                                                                    | -         | 1     | ERJ-2RKF8061                                                 | RES; SMT (0402); 8.06K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                 |
| R11                                                                    | -         | 1     | RC1608J000CS;CR0603-J/-000ELF;RC0603JR-070RL                 | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                                             |
| R16, R17                                                               | -         | 2     | KRL2012E-M-R003-F                                            | RES; SMT (0508); 0.003; 1%; +/-50PPM/DEGC;1W                                                                                                        |
| R27, R28, R32, R42, R46, R47                                           | -         |       | 6 ERJ-2GE0R00                                                | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                         |
| R31, R33                                                               | -         | 2     | CRCW04024K70FK;MCR01MZPF4701                                 | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                  |
| R34                                                                    | -         | 1     | CRCW040213K7FK                                               | RES; SMT (0402); 13.7K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                 |
| R35                                                                    | -         | 1     | CRCW06038K87FK;RMCF0603FT8K87                                | RES; SMT (0603); 8.87K; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                 |
| R36                                                                    | -         | 1     | AC0603FR-0715K8L;CRCW060315K8FK;ERJ-3EKF1582                 | RES; SMT (0603); 15.8K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                 |
| R37                                                                    | -         | 1     | CRCW040242K2FK;RC0402FR-0742K2L                              | RES; SMT (0402); 42.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                 |
| R38                                                                    | -         | 1     | TNPW060320R0BE                                               | RES; SMT (0603); 20; 0.10%; +/-25PPM/DEGK; 0.1000W                                                                                                  |
| R41                                                                    | -         | 1     | CRG0603F10K                                                  | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                   |
| R49                                                                    | -         | 1     | CRCW0402499RFK                                               | RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                   |
| R57                                                                    | -         | 1     | KRL2012E-M-R005-F-T5;KRL2012E-M-R005-F                       | RES; SMT (0508); 0.005; 1%; +/-50PPM/DEGC;1W                                                                                                        |
| R63                                                                    | -         | 1     | CRCW0805100KFK;RK73H2ATTD1003;ERJ-6ENF1003                   | RES; SMT (0805); 100K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                  |
|                                                                        | -         |       | 5006 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD |                                                                                                                                                     |
|                                                                        |           |       |                                                              | HOLE=0.063IN;                                                                                                                                       |
| SHIELD                                                                 |           | 1     |                                                              | BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; CONNECTOR; FEMALE; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                   |
| SHUNT_J4, SHUNT_J6, SHUNT_J7, SHUNT_J12, SHUNT_J14, SHUNT_J34 SW1      | - -       | 6 1   | QPC02SXGN-RC TDA04H0SB1                                      | SWITCH; SPST; 24V; 0.025A;TDA SERIES; ULTRA-MINIATURE SURFACEMOUNT HALF-PITCH DIP SWITCH; RCOIL=0.1 OHM; RINSULATION=100MOHM                        |

│

## MAX25432B EV Kit Bill of Materials (continued)

| REF_DES                                                                                                                                                                           | DNI/DNP QTY   |   DNI/DNP QTY | MFG PART #                                                                                                                                                             | DESCRIPTION                                                                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| U1                                                                                                                                                                                | -             |             1 | MAX25432BATLG/V+                                                                                                                                                       | EVKIT PART - IC; MAX25432BATLG/V+; AUTOMOTIVE 100W USB-PD-PPS BUCK-BOOST PORT CONTROLLER AND PROTECTOR; TQFN40-EP; PACKAGE OUTLINE DRAWING: 21-0141; PACKAGE CODE: T4066+5C; LAND PATTERN NUMBER: 90-0055 |
| U2, U3                                                                                                                                                                            | -             |             2 | MAX4372FEUK+                                                                                                                                                           | IC; AMP; LOW-COST; MICROPOWER; HIGH-SIDE CURRENT-SENSE AMPLIFIER WITH VOLTAGE OUTPUT; SOT23-5                                                                                                             |
| U4                                                                                                                                                                                | -             |             1 | MAX4372HEUK+                                                                                                                                                           | IC; AMP; LOW-COST; MICROPOWER; HIGH-SIDE CURRENT-SENSE AMPLIFIER WITH VOLTAGE OUTPUT; SOT23-5                                                                                                             |
| U6, U7                                                                                                                                                                            | -             |             2 | MAX20075ATCA                                                                                                                                                           | IC; CONV; 36V 1A MINI BUCK CONVERTER WITH 5UA IQ; TDFN12-EP                                                                                                                                               |
| VBUS_HOST                                                                                                                                                                         | -             |             1 | ANY                                                                                                                                                                    | TEST POINT; MICRO_TP; PAD DIA: 0.8128 MM(32MILS) SOLDERMASK: 0.9144 MM(36MILS) THERMAL RELIEF/ANTIPAD: 1.574MM(62MILS);SMD                                                                                |
| VDD                                                                                                                                                                               | -             |             1 |                                                                                                                                                                        | 5005 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                 |
| PCB                                                                                                                                                                               | -             |             1 | MAX25432                                                                                                                                                               | PCB:MAX25432                                                                                                                                                                                              |
| BST1, BST2, CSN1, CSN2, CSN2_S, CSP1, CSP2, CSP2_S, DH1_GATE, DH2_GATE, DL1_GATE, DL2_GATE, DM, DP, HVDM, HVDP, ICOMP, LX1, LX2, OUT, OUT_S, SHLD_S, VBAT_I, VBUS_I, VCC_I, VCOMP | DNP           |             0 | N/A                                                                                                                                                                    | TEST POINT; MICRO_TP; PAD DIA: 0.8128 MM(32MILS) SOLDERMASK: 0.9144 MM(36MILS) THERMAL RELIEF/ANTIPAD: 1.574MM(62MILS);SMD                                                                                |
| C23                                                                                                                                                                               | DNP           |             0 | C0402C103K5RAC;GRM155R71H103KA88; C1005X7R1H103K050BE;CL05B103KB5NNN; UMK105B7103KV                                                                                    | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                           |
| C44                                                                                                                                                                               | DNP           |             0 | C0402C101J3GACAUTO                                                                                                                                                     | CAP; SMT (0402); 100PF; 5%; 25V; C0G; CERAMIC                                                                                                                                                             |
| C46, C48                                                                                                                                                                          | DNP           |             0 | C1005C0G1H271J050BA                                                                                                                                                    | CAP; SMT (0402); 270PF; 5%; 50V; C0G; CERAMIC                                                                                                                                                             |
| C52                                                                                                                                                                               | DNP           |             0 | UMK325AB7106MMHP                                                                                                                                                       | CAP; SMT (1210); 10UF; 20%; 50V; X7R; CERAMIC                                                                                                                                                             |
| C54, C62                                                                                                                                                                          | DNP           |             0 | YFF31AH2A104MT0Y0N                                                                                                                                                     | CAP; SMT (1206); 0.1UF; 20%; 100V; CERAMIC                                                                                                                                                                |
| C56, C57, C65                                                                                                                                                                     | DNP           |             0 | C0402C102K5RAC; GMC04X7R102K50NT; C0402X7R500-102K; GRM155R71H102KA01                                                                                                  | CAP; SMT (0402); 1000PF; 10%; 50V; X7R; CERAMIC;                                                                                                                                                          |
| C63                                                                                                                                                                               | DNP           |             0 | C0603C104K5RAC;C1608X7R1H104K; ECJ-1VB1H104K;GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA;CL10B104KB8NNN; CL10B104KB8NFN;06035C104KAT2A;06035C104KAT4A | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC;                                                                                                                                                           |
| C66                                                                                                                                                                               | DNP           |             0 | GRM155R71H102JA01;GCM155R71H102JA37                                                                                                                                    | CAP; SMT (0402); 1000PF; 5%; 50V; X7R; CERAMIC                                                                                                                                                            |
| C67                                                                                                                                                                               | DNP           |             0 | CGA2B3X7R1H104K050BB;GCM155R71H104KE02; CGA2B3X7R1H104K050BE                                                                                                           | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                            |
| C71                                                                                                                                                                               | DNP           |             0 | C0402X7R500-222KNE;GRM155R71H222KA01; C1005X7R1H222K050BA                                                                                                              | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                                                                                                                                                           |
| C72, C73                                                                                                                                                                          | DNP           |             0 | C0402C101K5GAC; C1005C0G1H101K050BA                                                                                                                                    | CAP; SMT (0402); 100PF; 10%; 50V; C0G; CERAMIC                                                                                                                                                            |
| L6                                                                                                                                                                                | DNP           |             0 | PA4341.471NLT                                                                                                                                                          | INDUCTOR; SMT; SHIELDED; 0.47UH; 20%; 17.5A                                                                                                                                                               |
| L7                                                                                                                                                                                | DNP           |             0 | TFM252012ALMAR22MTAA                                                                                                                                                   | INDUCTOR; SMT; THIN FILM; 0.22UH; 20%; 6.7A                                                                                                                                                               |
| R2, R3, R21, R60                                                                                                                                                                  | DNP           |             0 | RC0402JR-070RL; CR0402-16W-000RJT                                                                                                                                      | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                                                                                                   |
| R43                                                                                                                                                                               | DNP           |             0 | ERJ-U6QJR22                                                                                                                                                            | RES; SMT (0805); 0.22; 5%; 0 TO +/-150PPM/DEGC; 0.2500W                                                                                                                                                   |
| R53                                                                                                                                                                               | DNP           |             0 | RC0402FR-0710KL                                                                                                                                                        | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                         |
| R58, R59                                                                                                                                                                          | DNP           |             0 | ERJ-2GE0R00                                                                                                                                                            | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                               |
| TOTAL                                                                                                                                                                             |               |               |                                                                                                                                                                        | 185                                                                                                                                                                                                       |

Evaluates: MAX25432

## MAX25432B EV Kit Schematic

<!-- image -->

## MAX25432B EV Kit Schematic (continued)

<!-- image -->

│

## MAX25432B EV Kit Schematic (continued)

<!-- image -->

│

## MAX25432B EV Kit Schematic (continued)

<!-- image -->

│

## MAX25432B EV Kit Schematic (continued)

<!-- image -->

## MAX25432B EV Kit Schematic (continued)

<!-- image -->

│

## MAX25432B EV Kit Schematic (continued)

<!-- image -->

│

## MAX25432B EV Kit Schematic (continued)

<!-- image -->

## MAX25432B EV Kit PCB Layout

MAX24532B EV Kit PCB Layout-Top View with Silkscreen

<!-- image -->

MAX25432B EV Kit PCB Layout-Layer 3

<!-- image -->

MAX25432B EV Kit PCB Layout-Layer 2

<!-- image -->

MAX25432B EV Kit PCB Layout-Layer 4

<!-- image -->

│

## MAX25432B EV Kit PCB Layout (continued)

MAX25432B EV Kit PCB Layout-Layer 5

<!-- image -->

MAX25432B EV Kit PCB Layout-Layer 7

<!-- image -->

MAX25432B EV Kit PCB Layout-Layer 6

<!-- image -->

MAX25432B EV Kit PCB Layout-Bottom View with Silkscreen

<!-- image -->

│

## MAX25432B EV Kit PCB Layout (continued)

MAX25432B EV Kit PCB Layout-Fab Drawing

<!-- image -->

│

## MAX25432B EV Kit Feather Board Schematic

<!-- image -->

│

G

## MAX25432B EV Kit Feather Board Schematic (continued)

<!-- image -->

## MAX25432B EV Kit Feather Board Schematic (continued)

<!-- image -->

│

## MAX25432B EV Kit Feather Board Schematic (continued)

<!-- image -->

## MAX25432B EV Kit Feather Board Schematic (continued)

## INTERFACE CONNECTORS

<!-- image -->

ESHF-110-01-L-D-SM-K

<!-- image -->

│

## MAX25432B EV Kit Feather Board Schematic (continued)

<!-- image -->

│

## MAX25432B EV Kit Feather Board PCB Layout

<!-- image -->

Feather Board PCB Layout - Top View with Silkscreen

<!-- image -->

Feather Board PCB Layout-Layer 3

Feather Board PCB Layout - Layer 2

<!-- image -->

Feather Board PCB Layout-Layer 4

<!-- image -->

│

## MAX25432B EV Kit Feather Board PCB Layout (continued)

Feather Board PCB Layout-Layer 5

<!-- image -->

Feather Board PCB Layout-Bottom View with Silkscreen

<!-- image -->

│

## Maxim USB-C Breakout Board Schematic

<!-- image -->

│

## Maxim USB-C Breakout Board Schematic (continued)

<!-- image -->

## Maxim USB-C Breakout Board PCB Layout

Maxim USB-C Breakout Board PCB Layout-Top View with Silkscreen

<!-- image -->

Maxim USB-C Breakout Board PCB Layout-Layer 3

<!-- image -->

Maxim USB-C Breakout Board PCB Layout-Layer 2

<!-- image -->

Maxim USB-C Breakout Board PCB Layout-Bottom View with Silkscreen

<!-- image -->

│

## Annex 1: Feather Board Firmware Update

The Maxim Feather board already comes preprogrammed. Follow this procedure to update the Feather Board's firmware to the latest revision.

## Hardware required

- 1 Feather Board: MAXPD\_FTHR\_APPS\_B or later revision.
- 1 Programmer: Pico board (MAX32625PICO, included with above).
- 2 Micro-B USB cables.
- 1 10-pin ribbon cable.
- 2 available USB ports on a PC with USB Write access.

## Software required

- Download the latest Feather Board firmware on the EV kit webpage (.bin file).
- Download and install the latest EV kit software on the EV kit webpage.

Figure 8. Pico Board DAPLink Setup Message

<!-- image -->

Figure 9. Pico Board DAPLink Setup Complete

<!-- image -->

Evaluates: MAX25432

## Programming steps

- 1) On the computer, plug in the Pico board first using one of the provided Micro-B cables, and wait until it installs itself as a DAP drive.
- 2) Then connect the provided 10-pin mini flat cable from the Pico board to the Feather board.
- 3) Then plug in the Feather board to another USB port on your computer, using the second Micro-B cable provided.
- 4) Drag and drop the *.bin file into the DAP drive (Pico board). The Pico board starts blinking.
- 5) Wait for the blinking to stop, about 10sec.
- 6) Now remove the ribbon cable and cycle the power to the Feather board by unplugging the USB cable, and plugging it back in. Look for the LEDs to cycle through the colors and then turn OFF.
- 7) When all is finished, launch the GUI and make sure that the Feather Board is detected.

│

Figure 10. Setup to Perform a Feather Board Firmware Update

<!-- image -->

Figure 11. Drag and Drop the .bin File Onto the Pico DAP Drive

<!-- image -->

Figure 12. Feather Board HID Setup Message

<!-- image -->

Figure 13. Feather Board HID Setup Complete

<!-- image -->

## How to verify the Feather Board firmware revision

- 1) Launch the EV kit software.
- 2) Click on Enable Target .
3. 3)
4. The firmware revision is displayed in the log panel.

Figure 14. Feather Board Detection on the EV Kit GUI Software

<!-- image -->

## Annex 2: Maxim USB-C Breakout Board

The Maxim USB-C breakout board allows for easy monitoring and pass-through of certain signals present on Type-C connectors.

Figure 15. Maxim USB-C Breakout Board (Top View)

<!-- image -->

## Table 7. Connector Descriptions

| NAME           | DESCRIPTION                                                                                                                             |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| J1             | Type-C Plug. Connects to EVKIT receptacle (J37). Labeled 'P'.                                                                           |
| J2             | Type-C Receptacle. Connects to Type-C cable or EV Kit plug (J36). Labeled 'R'.                                                          |
| J3, J6         | VBUS RC Load header. Can be used to connect load resistors and capacitors from VBUS to GND to test hot plug or soft start events.       |
| J4, J7, J5, J8 | CC1/CC2 RC Load header. Can be used to connect load resistors and capacitors from CC1/CC2 to GND to test hot plug or soft start events. |

## Table 8. Jumper Descriptions

| NAME             | POSITION   | DESCRIPTION                                                                                                                                                                                                                               |
|------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CC1_JMP, CC2_JMP | 1-2*       | Connects CC1 or CC2 from the plug to the receptacle. When open, provides a header for current monitoring.                                                                                                                                 |
| VBUS_JMP         | 1-2*       | Connects VBUS from the plug to the receptacle. When open, and R1 is removed, provides a header for current monitoring. For high surge currents (>5A), it is recommended to use the two copper pads on the back side to reduce parasitics. |
| DP_JMP, DM_ JMP  | 1-2*       | Connects D+ or D- from the plug to the receptacle. When open, provides a header for current monitoring.                                                                                                                                   |

*Default position

Note: This board does not support USB 2.0 high speed, SBU or USB3.x signals.

Evaluates: MAX25432

│

## Annex 3: Bode Plot Measurements

Figure 16 shows figures to perform Bode plot measurements on the EV kit main board.

## CV Mode

Figure 16. Schematic Changes for Bode Plot in CV

<!-- image -->

│

Figure 17. Probe Connections for Bode Plot in CV

<!-- image -->

Figure 18. Bottom Layout for Bode Plot in CV

<!-- image -->

│

## CL Mode

Figure 19. Schematic Changes for Bode Plot in CL

<!-- image -->

Figure 20. Probe Connections for Bode Plot in CL

<!-- image -->

│

Figure 21. Bottom Layout for Bode Plot in CL

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX25432