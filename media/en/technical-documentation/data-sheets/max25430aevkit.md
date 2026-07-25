<!-- lastmod 2022-08-02 -->
## MAX25430A Evaluation Kit

## General Description

The MAX25430 EVKIT and collateral provides a convenient platform to the design engineer for rapid evaluation with reduced test and firmware-development time.

The MAX25430A evaluation kit (EV kit) demonstrates the MAX25430A automotive-grade buck-boost controller capable of driving up to 5.0A, Legacy USB Charging support and USB Type-C™ protection for USB host or DFP applications.

The MAX25430A provides CC signal passthrough protec -tion for the Cypress CCG3PA USB-PD controller.

The integrated USB Type-C protection switches provide automotive system-level ESD and 24V short-circuit pro -tection for D+, D-, CC1, CC2, and CC lines when used as VCONN supply. The device also supports legacy USB 2.0 charging modes including BC1.2, Apple® 2.4A, Apple CarPlay®, Apple MFi and USB On-The-Go (OTG).

The  register  set  can  be  reviewed  using  the  Maxim Feather Board I 2 C to USB adapter, and the MAX2543x Graphical User Interface (GUI). Please contact the factory for more details.

The MAX25430 offers a factory option that includes intel -ligent detection and protection to avoid high short-circuit currents  flowing  from  the  car  battery  through  the  cable shield to ground during fault events, preventing car mod -ule damage. To evaluate, refer to the Ordering Information table in the MAX25430 datasheet and order the G-suffix sample from the factory. Once received, replace on the EV Kit and unsolder the bypass short around MOSFET (Q6).

Ordering Information appears at end of data sheet.

Evaluates: MAX25430

## Benefits and Features

- 100W USB-PD REV3.0 Source Charger Solution using a Cypress PD Controller
- Legacy USB 2.0 Charging Support-Meets MFi R3x
- Register Set Accessible with Feather Board and GUI
- Test Points Available for Signal and Converter Analysis
- EV Kit is Ready for Factory IC Option with Customer Cable Shield Short-to-Battery Protection
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

## Quick Start

The following procedure demonstrates the MAX25430A's charging functionality. The register set and GUI are described in the detailed description section.

## EV Kit Content

- MAX25430\_EVKIT\_P3\_00 board is referred to as MAX25430A EV Kit Board
- MAXPD\_CY01\_APPS\_A board is referred to as PD Controller Board
- MAXPD\_FTHR\_APPS\_B board is referred to as Feather Board
- 6ft USB Type-C 5A Cable

## Required Equipment

- MAX25430A EV Kit Board
- PD Controller Board
- 6ft USB Type-C Cable
- 14V/10A DC Power Supply or car battery (V BAT )
- Digital voltmeter (DVM)
- Device with Type-C port for charging

## Initial Setup

The EV kit is fully assembled and tested. Follow the steps below to set up the board for evaluation.

- 1) Verify the jumper settings on the MAX25430A EV Kit Board match the settings in the tables below.

## MAX25430A EV KIT BOARD JUMPER SETTINGS

| OPEN, NO JUMPER      | SHORT PINS 1 AND 2    | SHORT PINS 2 AND 3   |
|----------------------|-----------------------|----------------------|
| J2, J8, J9, J13, J15 | J6, J7, J12, J14, J34 | J1                   |

- 2) Verify the I 2 C address switch (SW1) match the settings in the tables and images in the quick-start guide.

## I 2 C ADDRESS SWITCH SETTINGS

| SWITCH #1   | SWITCH #2   | SWITCH #3   | SWITCH #4   |
|-------------|-------------|-------------|-------------|
| ON          | OFF         | OFF         | OFF         |

## 3) Verify the jumper settings on the PD Controller Board match the settings in the tables PD CONTROLLER BOARD JUMPER SETTINGS

| OPEN, NO JUMPER   | SHORT PINS 1 AND 2   | SHORT PINS 2 AND 3   |
|-------------------|----------------------|----------------------|
| J5, J6, J7, J11   | J8, J9, J10          | J2                   |

- 4) Push the two boards together at J3 (40-pin header) as shown in the Initial EV kit setup below, Figure 1.
- 5) Set the V BAT  power supply to 14V output, 5A current limit. Turn the output off. Connect the negative lead to the GND2 test loop on MAX25430A EV Kit Board. Connect positive lead to VBAT\_FLT test loop on the MAX25430A EV Kit Board.
- 6) Connect the DMM positive lead to the HVBUS test loop on the MAX25430A EV Kit Board and connect the negative lead to the GND4 test loop on the MAX25430A EV Kit Board. Set for the DMM for voltage measurement.
- 7) Turn the V BAT  power supply output on.
- 8) Verify there is 0V on DMM.
- 9) Connect a USB Type-C device such as a laptop or mobile phone that can consume power over a Type-C port to J37 of the MAX25430A EV Kit Board.
- 10) Measure the V BUS to ensure 5V, 9V, 15V, or 20V is being applied to the device.

Evaluates: MAX25430

│

Evaluates: MAX25430

Figure 1 MAX25430 A EV Kit Board Jumper Positions

<!-- image -->

Figure 2 PD Controller Board Jumper Positions

<!-- image -->

│

Evaluates: MAX25430

Figure 3 Initial EV Kit Setup

<!-- image -->

Evaluates: MAX25430

Figure 4 Powered EV Kit with Attached Device

<!-- image -->

│

## MAX25430A Evaluation Kit

## Detailed Description

The MAX25430A EV Kit Board includes the MAX25430\_ EVKIT\_P3, MAXPD\_CY01\_APPS\_A  (PD  Controller Board),  MAXPD\_FTHR\_APPS\_B  (Feather  Board),  and 6ft  USB  Type-C  Cable.    The  PD  Controller  board  con -nected  to  the  MAX25430\_EVKIT\_P3  allows  charging out  of  the  box.  The  Feather  Board  connected  to  the MAX25430\_EVKIT\_P3 and used with the GUI allows reg -ister map reads and writes.

## Table 1. External Switch

|   SW1 PIN | POSITION   | DESCRIPTION                                                              |
|-----------|------------|--------------------------------------------------------------------------|
|         1 | 0          | Switch open                                                              |
|         1 | ON         | ADDR connected to ground setting the I 2 C address to 0x50               |
|         2 | 0          | Switch open                                                              |
|         2 | ON         | ADDR connected to an 8.87k W to ground setting the I 2 C address to 0x51 |
|         3 | 0          | Switch open                                                              |
|         3 | ON         | ADDR connected to a 15.8k W to ground setting the I 2 C address to 0x52  |
|         4 | 0          | Switch open                                                              |
|         4 | ON         | ADDR connected to a 10k W to BIAS setting the I 2 C address to 0x53      |

## Table 2. Jumper Descriptions

| JUMPER   | POSITION   | DESCRIPTION                                                                                            |
|----------|------------|--------------------------------------------------------------------------------------------------------|
| J1       | 1-2        | Feedback network connected to pin 30 of the MAX25430. Do not connect Jumper J1 to position 1-2.        |
| J1       | 2-3*       | Connects pin 30 of the MAX25430 to ground.                                                             |
| J2       | Open*      | Always leave open.                                                                                     |
| J6       | Shunted*   | Shunt to provide V BAT to the MAX20075 (U6). Provides VCONN supply.                                    |
| J7       | Shunted*   | Shunting connects the feedback network setting 5V on VCC_OUT. Leave open if using jumper J8.           |
| J8       | Open*      | Shunting connects the feedback network setting 3.3V on VCC_OUT. Leave open if using jumper J7.         |
| J9       | Open       | Always leave open.                                                                                     |
| J10      | Shorted*   | Provides power to the Active Metering block.                                                           |
| J12      | Shunted*   | Shunt to provide VBAT to the MAX20075 (U7). Provides VDD_OUT.                                          |
| J13      | Open*      | Shunting connects the feedback network setting 5V on VDD_OUT. Leave open if using jumper J14 or J15.   |
| J14      | Shunted*   | Shunting connects the feedback network setting 3.3V on VDD_OUT. Leave open if using jumper J13 of J15. |
| J15      | Open*      | Shunting connects the feedback network setting 1.8V on VDD_OUT. Leave open if using jumper J13 or J14. |
| J34      | 1-2*       | Connects HVEN to a 10k W to V BAT , enabling the IC.                                                   |
| J34      | 2-3        | Connects HVEN to a 10k W to Ground, disabling the IC.                                                  |

Evaluates: MAX25430

Please contact the factory for use of the Feather Board and GUI interface.

## Jumpers and Configuration

The switch SW1 allows the user to set the I 2 C Address. Only one switch should be in the ON position at a single time.

Table 2 shows jumper positions and descriptions.

Table 3 shows test points and descriptions.

Table 4 shows LEDs and descriptions.

│

## MAX25430A Evaluation Kit

## Table 3. Test Points

| TEST POINT   | DESCRIPTION                                                                                        |
|--------------|----------------------------------------------------------------------------------------------------|
| VBAT_FLT     | Main Battery Input. Connect a 4.5V to 36V supply                                                   |
| VBAT         | Main Battery Input, bypassing the reverse battery and input EMI filter.                            |
| HVBUS        | VBUS Output of the MAX25430A                                                                       |
| VDD          | Pin 9 of the MAX25430A, VDD_IO input. This rail also provides power to the PD Controller.          |
| VDD_BMC      | Used with the MAX25430B versions. Pin 13 of the MAX25430, internal 1.125V regulated supply output. |
| VCC          | Pin 16 of the MAX25430A, VCONN input                                                               |
| VDD_USB      | Pin 17 of the MAX25430A, regulated output of the internal 3.3V regulator.                          |
| BIAS         | Pin 29 of the MAX25430A, regulated output of the internal 5V regulator.                            |
| HVCC1        | Pin 25 of the MAX25430A, CC line on the device side.                                               |
| HVCC2        | Pin 24 of the MAX25430A, CC line on the device side.                                               |
| CC1          | Pin 14 of the MAX25430A, CC line on the host side.                                                 |
| CC2          | Pin 15 of the MAX25430A, CC line on the host side.                                                 |
| SHLD_SNS     | Pin 7 of the MAX25430A, shield Short-to-Battery Protection Sense pin.                              |
| GDRV         | Pin 8 of the MAX25430A, shield MOSFET Gate drive output.                                           |

## Table 4. LEDs

| LED   | DESCRIPTION                               |
|-------|-------------------------------------------|
| DS1   | Indicates power good for the VCONN supply |
| DS2   | Indicates power good for the V DD supply. |

## Procedure to Measure Internal Power Supplies

- 1) Repeat steps 1 through 10 in the quick-start guide.
- 2) Connect the DMM positive lead to the BIAS test point on the MAX25430A EV Kit Board. The DMM should read between 4.7V and 5.4V.
- 3) Connect the DMM positive lead to the VDD\_USB test point on the MAX25430A EV Kit Board. The DMM should read between 3.0V and 3.6V.
- 4) Connect the DMM positive lead to the VDD\_BMC test point on the MAX25430A EV Kit Board. The DMM should read 0V.
- 5) Connect the DMM positive lead to the VCC test point on the MAX25430A EV Kit Board. The DMM should read between 4.7V and 5.4V.

## Basic Functionality

Connect a battery voltage supply from 4.5V to 36V to the VBAT\_F and GND test loops. Setting the HVEN switch to ON pulls the HVEN pin to V BAT  and enables the device. The  V BUS  powers  only  after  a  valid  device  attach  has occurred.

The  on-board  MAX20075  power  supplies  make  testing  VCONN  and  I 2 C  communication  easy  for  the  user. Contact the factory for an optimized BOM without external power supplies.

## Fault Diagnostics

The MAX25430A Maxim Auto-Shield protects the power delivery solution against most faults. See the MAX25430 datasheet  for  all  conditions  that  can  trigger  a  FAULT event, action, and recovery. The PD Controller Board is notified using the ALERT pin.

│

Evaluates: MAX25430

## Buck-Boost Controller Operation

To observe the Buck-Boost Controller switching waveforms, copper pads are provided at both switching nodes. The LX1 waveform can be observed by measuring at the two pads near the Q2 MOSFET. The LX2 waveform can be observed by measuring at the two pads near the Q4 MOSFET.

The controller can be turned on with device connection, USB-PD power meter, or Feather Board and GUI.

## VCONN

The  MAX25430  has  built-in  VCONN  switches  that  pro -vide connection from VCC to HVCC when a correct R A is provided on the HVCC line. This is accomplished with the connection of the e-marked cable provided in this kit, forc -ing R A on the HVCC pin, or using the Feather Board and GUI. Details on interfacing with the register set is covered in the MAX25430 datasheet.

The  internal  VCONN  switches  protect  agai nst  overcurrent,  undervoltage,  reverse  overvoltage,  and  short-toground. Details on the event, reporting, debounce, action, and recovery are described in the MAX25430 datasheet.

The fast protection response to short-to-ground event can be observed by using an oscilloscope to monitor HVCC1, CC1, and V CC . Connect a 1kΩ resistor from HVCC1 to ground and a 5.1kΩ from HVCC2 to GND. Using a short wire, connect HVCC1 to ground an observe a very mini -mal drop on V CC voltage and fast disconnect of HVCC1 and CC1 from the V CC  voltage.

## Data Switch Bandwidth

USB  Type-C  connectors  J36  and  J37  can  be  used  to test  data  bandwidth.  Connector  J37  is  on  the  device side and connects to the HVD+, HVD- of the MAX25430. Connector J36 is on the host side and connects to the MAX25430 D+, D- pins.

The MAX25430A EV Kit Board is configured for Auto-DCP and will require the Feather Board and GUI to adjust to High-Speed Passthrough. Before applying the test signal, remove resistors R2 and R3.

The switches are also protected against shorting to battery, and V BUS  with HVD Overvoltage fault discussed in the MAX25430 datasheet.

HVD+,  HVD-  also  have  integrated  ±15kV  Air,  ±8kV Contact ISO 10605 and IEC 61000-4-2 ESD Protection.

## CC Line Protection

The  CC  line  switches  are  protected  against  shorting  to battery, and V BUS  with HCC Overvoltage fault discussed in the MAX25430 datasheet.

HVCC1,  HVCC2  also  have  integrated  ±15kV Air,  ±8kV Contact ISO 10605 and IEC 61000-4-2 ESD Protection.

## Shield-Short-to-Battery

USB  shield  GND  short  to  car  battery  can  occur  when a  customer's  portable  device  cable  is  connected  to  the downstream receptacle, and the far end of this cable falls in to the 12V cigarette lighter receptacle and contacts the 12V center terminal. This condition results in a damaging amount  of  current  flow  if  there  is  insufficient  response time by the cigarette lighter fuse.

The  MAX25430  offers  advanced  integrated  protection for  cable  Shield-Short-to-Battery faults to prevent cable, passenger device, and car module damage. The solution uses fast detection of cable shield overcurrent, fast turnoff of external protection switch, safe dissipation of inrush energy, fault reporting, and auto-retry for fault removal.

To evaluate the Shield Short-to-Battery protection feature of the MAX25430, the correct option should be ordered. The  MAX25430  datasheet  Ordering  Information  section provides the part number and suffix that offer this protection feature.

Once  ordered  and  received,  replace  the  IC  at  U1  and remove  the  short  on  the  copper  pads  labeled  GND SHORT near the SHIELD test point and connector J37. Short location shown in Figure 5.

Figure 5 GND SHORT Location

<!-- image -->

│

## MAX25430A Evaluation Kit

## Vendor-Defined Register Initialization

## References

Vendor-Defined Register Configuration after initialization is in Table 5 .

Table  6 shows  the  reference  specifications,  their  loca -tions, and the common names they are referred to in this document.

## Table 5. Vendor Defined Register Configuration

| ADDRESS   | NAME                    | BIT                | INITIALIZATION VALUE               |
|-----------|-------------------------|--------------------|------------------------------------|
| 0x80      | PWR_OUT_CONTROL         | VOUT_ILIM          | 4A (0x1)                           |
| 0x80      | PWR_OUT_CONTROL         | VOUT_SEL           | 5V (0x0)                           |
| 0x81      | CABLE_COMP_CONTROL      | GAIN               | 40m W (0x05)                       |
| 0x83      | BUCK_BOOST_SETUP        | SLP                | 400mV (0x011)                      |
| 0x83      | BUCK_BOOST_SETUP        | FSW                | 400kHz (0x10)                      |
| 0x83      | BUCK_BOOST_SETUP        | SYNC_DIR           | Input (0x1)                        |
| 0x83      | BUCK_BOOST_SETUP        | Spread Spectrum    | ±9% (0x11)                         |
| 0x84      | WATCHDOG_SETUP          | WD_TIMEOUT         | 1 second (0x00)                    |
| 0x85      | AUTO_SHIELD_SETUP       | RETRY_TIMER        | 16ms (0x11)                        |
| 0x86      | AUTO_CDP_DCP_SETUP      | AUTO_CDP_DCP_MODE  | Auto-DCP / Apple 2.4A (0x10)       |
| 0x87      | IN_THRESH               | IN_UV_THRESH       | 4.5V (0x0)                         |
| 0x88      | VCONN_THRESH            | VCONN_OCP_SEL      | 250 mA(0x0)                        |
| 0x88      | VCONN_THRESH            | VCONN_IN_UV_THRESH | 4.65V (0x7)                        |
| 0x89      | VBUS_THRESH             | VBUS_OV_THRESH     | +12.5 %(0x3)                       |
| 0x89      | VBUS_THRESH             | VBUS_UV_THRESH     | -12.5% (0x3)                       |
| 0x8A      | AUTO_SHIELD_STATUS_MASK | SHIELDING_MASK     | Included in VNDR_ALRT (mask) (0x1) |
| 0x8A      | AUTO_SHIELD_STATUS_MASK | VCONN_IN_UV_MASK   | Not included in VNDR_ALRT (0x0)    |
| 0x8A      | AUTO_SHIELD_STATUS_MASK | IN_OC_MASK         | Not included in VNDR_ALRT (0x0)    |
| 0x8A      | AUTO_SHIELD_STATUS_MASK | VDD_USB_UV_MASK    | Not included in VNDR_ALRT (0x0)    |
| 0x8A      | AUTO_SHIELD_STATUS_MASK | VBUS_UV_MASK       | Not included in VNDR_ALRT (0x0)    |

## Table 6. Reference

| REFERRED TO IN THIS DOCUMENT   | TITLE                                                                                             | LOCATION                                |
|--------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------|
| USB-PD REV3.0                  | The Universal Serial Bus Power Delivery Specification Revision 3.0, Version 1.2 June 21, 2018     | http://www.usb.org                      |
| MAX25430 Data Sheet            | Automotive 100W USB-PD Buck-Boost Port Controller and Protector 19-100826 Revision 0, August 2020 | https://www.maximintegrated.com/en.html |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX25430AEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX25430

│

## MAX25430A EV Kit Bill of Materials

|   ITEM | REF_DES                     | DNI/DNP   |   QTY | MFG PART #                                                                                                                                                  | MANUFACTURER                                                                                                                  | VALUE          | DESCRIPTION                                                                                                         | COMMENTS   |
|--------|-----------------------------|-----------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------|------------|
|      1 | BIAS, VCC, VDD_BMC, VDD_USB | -         |     4 | 5003 KEYSTONE                                                                                                                                               | 5003 KEYSTONE                                                                                                                 | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      2 | BUMP1-BUMP4                 | -         |     4 | SJ-5003(BLACK)                                                                                                                                              | 3M ELECTRONIC SOLUTIONS DIVISION                                                                                              | SJ-5003(BLACK) | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                       |            |
|      3 | C1, C3, C4, C36             | -         |     4 | GRM32ER71H106KA12; CL32B106KBJNNN;UMJ325KB7 106KMH; 12105C106K4Z2A                                                                                          | MURATA;SAMSUNG ELECTRONICS; TAIYO YU                                                                                          | 10UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                           |            |
|      4 | C2, C27                     | -         |     2 | C1608X7R1V105K080AC                                                                                                                                         | TDK                                                                                                                           | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |            |
|      5 | C5                          | -         |     1 | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                                                                                       | TAIYO YUDEN;TDK;SAMSUNG;MURATA                                                                                                | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC                   |            |
|      6 | C6, C9, C11                 | -         |     3 | C3225X7S1H106K250AB; CGA6P3X7S1H106K250AB; GCM32EC71H106K                                                                                                   | TDK;TDK;MURATA                                                                                                                | 10UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                           |            |
|      7 | C7, C10                     | -         |     2 | 8.65081E+11                                                                                                                                                 | WURTH ELECTRONICS INC.                                                                                                        | 56UF           | CAP; SMT (CASE_HA0); 56UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                          |            |
|      8 | C8, C13, C14, C40           | -         |     4 | C0603C104K5RAC; C1608X7R1H104K; ECJ-1VB1H104K; GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NNN; CL10B104KB8NFN; 06035C104KAT2A | KEMET;TDK;PANASONIC;MURATA;TDK; TDK;SAMSUNG;SAMSUNG;AVX                                                                       | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                         |            |
|      9 | C12                         | -         |     1 | C1608C0G1H103J080AA; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01                                                                                                | TDK;TDK;MURATA                                                                                                                | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC to +125 DEGC; TC=C0G                          |            |
|     10 | C15, C19, C22, C24, C25     | -         |     5 | C2012X5R1V106K085AC                                                                                                                                         | TDK                                                                                                                           | 10UF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                            |            |
|     11 | C16                         | -         |     1 | CGA3E1X7R1V105K                                                                                                                                             | TDK                                                                                                                           | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO;                     |            |
|     12 | C17, C20, C21               | -         |     3 | EEH-ZA1V680XP                                                                                                                                               | PANASONIC                                                                                                                     | 68UF           | CAP; SMT (CASE_D8); 68UF; 20%; 35V; ALUMINUM-ELECTROLYTIC                                                           |            |
|     13 | C18, C23                    | -         |     2 | GMK107B7104KAH                                                                                                                                              | TAIYO YUDEN                                                                                                                   | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                          |            |
|     14 | C29, C37                    | -         |     2 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL                                                                                     | MURATA;MURATA;MURATA; TAIYO YUDEN                                                                                             | 4.7UF          | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                  |            |
|     15 | C30, C38, C58, C59          | -         |     4 | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV-FR                                                                               | TDK;MURATA;TDK;TAIYO YUDEN                                                                                                    | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                          |            |
|     16 | C31, C39                    | -         |     2 | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM                                                                                            | MURATA;SAMSUNG ELECTRO-MECHANICS;TA                                                                                           | 22UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                           |            |
|     17 | C32                         | -         |     1 | 0603YC101KAT2A                                                                                                                                              | AVX                                                                                                                           | 100PF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                          |            |
|     18 | C34, C49                    | -         |     2 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; CGA3E1X7R1C105K080AC; 0603YC105KAT2A                                                 | KEMET;MURATA;TDK;TAIYO YUDEN; TDK;AVX                                                                                         | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |            |
|     19 | C35                         | -         |     1 | GRM188Z71C475KE21                                                                                                                                           | MURATA                                                                                                                        | 4.7UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF ; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                         |            |
|     20 | C41, C50                    | -         |     2 | GRM31CR71H225KA88; UMK316B7225K                                                                                                                             | MURATA;TAIYO YUDEN                                                                                                            | 2.2UF          | CAPACITOR; SMT (1206); CERAMIC CHIP; 2.2UF; 50V; TOL=10%                                                            |            |
|     21 | C43                         | -         |     1 | GRM188R61C106KAAL                                                                                                                                           | MURATA                                                                                                                        | 10UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                            |            |
|     22 | C44                         | -         |     1 | C0603C101J1GAC; GRM1885C2A101JA01                                                                                                                           | KEMET;MURATA                                                                                                                  | 100PF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 100V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                  |            |
|     23 | C45                         | -         |     1 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                                                                                   | MURATA;TDK;MURATA                                                                                                             | 1000PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                                  |            |
|     24 | C47                         | -         |     1 | GRM188R71C123KA01                                                                                                                                           | MURATA                                                                                                                        | 0.012UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.012UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R      |            |
|     25 | C51                         | -         |     1 | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01 C1005X7R1C104K050BC;                                                                      | MURATA;PANASONIC; SAMSUNG;MURATA                                                                                              | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEG; TC=X7R                          |            |
|     26 | C53, C55, C64               | -         |     3 | ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5       | TDK;AMERICAN TECHNICAL CERAMICS; AVK;VENKEL LTD.;SAMSUNG ELECTRONICS;MURATA;TDK;YAGEO PHICOMP;TAIYO YUDEN;SAMSUNG ELECTRONICS | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                          |            |

Evaluates: MAX25430

## MAX25430A EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                    | DNI/DNP   |   QTY | MFG PART #                                                            | MANUFACTURER                                      | VALUE                                                                         | DESCRIPTION                                                                                                                                    | COMMENTS   |
|--------|--------------------------------------------|-----------|-------|-----------------------------------------------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|     27 | C56, C57, C65                              | -         |     3 | C0402C102K5RAC; GMC04X7R102K50NT; C0402X7R500-102K; GRM155R71H102KA01 | KEMET;CAL-CHIP ELECTRONIC INC.; VENKEL LTD;MURATA | 1000PF                                                                        | CAPACITOR; SMT; 0402; CERAMIC; 1000pF; 50V; 10%; X7R; -55degC to + 125degC;                                                                    |            |
|     28 | C60, C61                                   | -         |     2 | C1608X7R1H224K080; GRM188R71H224KAC4                                  | TDK;MURATA                                        | 0.22UF                                                                        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                    |            |
|     29 | CC1, CC2, HVCC1, HVCC2                     | -         |     4 | 5009                                                                  | KEYSTONE                                          | N/A                                                                           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                        |            |
|     30 | D1                                         | -         |     1 | BAT54A                                                                | FAIRCHILD SEMICONDUCTOR                           | BAT54A                                                                        | DIODE, SCHOTTKY, PIV=30V, IF(MAX)=0.20A, PD=0.29W, SOT23, COMMON ANODE ;                                                                       |            |
|     31 | D2                                         | -         |     1 | BZT52C10S-7-F                                                         | DIODES INCORPORATED                               | 10V                                                                           | DIODE; ZNR; SMT (SOD-323); VZ=10V; IZ=0.005A                                                                                                   |            |
|     32 | DS1, DS2                                   | -         |     2 | APT1608LZGCK                                                          | KINGBRIGHT                                        | APT1608LZGCK                                                                  | DIODE; LED; GREEN WATER CLEAR; GREEN; SMT (0603); VF=2.65V; IF=0.002A                                                                          |            |
|     33 | GDRV, SHLD_SNS                             | -         |     2 | 5007                                                                  | KEYSTONE                                          | N/A                                                                           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                         |            |
|     34 | GND1, GND2, GND4-GND7, HVBUS, VBAT, VBAT_F | -         |     9 | 5020                                                                  | KEYSTONE                                          | MAXIMPAD                                                                      | EVKIT PART - MAXIM PAD; TEST POINT; PIN DIA=0.094IN; TOTAL LENGTH=0.350IN; BOARD HOLE=0.040IN; NONE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     35 | J1, J34                                    | -         |     2 | TSW-103-23-G-S                                                        | SAMTEC                                            | TSW-103-23-G-S                                                                | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55 DEGC TO +125 DEGC                                                                    |            |
|     36 | J2, J6-J10, J12-J15                        | -         |    10 | PCC02SAAN                                                             | SULLINS                                           | PCC02SAAN                                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC                                                      |            |
|     37 | J3                                         | -         |     1 | SBH11-PBPC-D20-RA-BK                                                  | SULLINS ELECTRONICS CORP                          | SBH11-PBPC-D20-RA-BK                                                          | CONNECTOR; MALE; THROUGH HOLE; HEADER CONNECTOR; RIGHT ANGLE; 40PINS                                                                           |            |
|     38 | J4                                         | -         |     1 | TSW-110-07-G-S                                                        | SAMTEC                                            | TSW-110-07-G-S                                                                | CONNECTOR; MALE; THROUGH HOLE; 0.025 IN SQ POST HEADER; STRAIGHT; 10PINS                                                                       |            |
|     39 | J5                                         | -         |     1 | ESHF-110-01-L-D-SM-K                                                  | SAMTEC                                            | ESHF-110-01-L-D-SM-K                                                          | CONNECTOR; MALE; SMT; SHROUDED AND EJECTOR IDC HEADER; STRAIGHT; 20PINS                                                                        |            |
|     40 | J37                                        | -         |     1 | 2012670005 MOLEX                                                      | 2012670005 MOLEX                                  | 2012670005 CONNECTOR; FEMALE; SMT; USB TYPE C RECEPTACLE; RIGHT ANGLE; 24PINS | 2012670005 CONNECTOR; FEMALE; SMT; USB TYPE C RECEPTACLE; RIGHT ANGLE; 24PINS                                                                  |            |
|     41 | L1                                         | -         |     1 | XAL1060-472ME                                                         | COILCRAFT                                         | 4.7UH                                                                         | INDUCTOR; SMT; COMPOSITE; 4.7UH; 20%; 14A                                                                                                      |            |
|     42 | L2, L4                                     | -         |     2 | LQM21PZ4R7MGR                                                         | MURATA                                            | 4.7UH                                                                         | INDUCTOR; SMT (0805); FERRITE; 4.7UH; 20%; 0.8A                                                                                                |            |
|     43 | L3                                         | -         |     1 | XAL1060-222ME                                                         | COILCRAFT                                         | 2.2UH                                                                         | INDUCTOR; SMT; COMPOSITE; 2.2UH; 20%; 20A                                                                                                      |            |
|     44 | L5                                         | -         |     1 | BLM31SN500SZ1                                                         | MURATA                                            |                                                                               | 50 INDUCTOR; SMT (1206); FERRITE-BEAD; 50 AT 100MHZ; TOL=12.5OHMS; 12A                                                                         |            |
|     45 | MISC1                                      | -         |     1 | FFSD-10-D-02.00-01-N                                                  | SAMTEC                                            | FFSD-10-D-02.00-01-N                                                          | CABLE ASSEMBLY; IDC RIBBON CABLE ASSEBLY; FEMALE-FEMALE; DOUBLE END; 0.05IN PITCH; 20 PINS                                                     |            |
|     46 | Q1-Q4                                      | -         |     4 | NVMFS5C460NLAFT1G                                                     | ON SEMICONDUCTOR                                  | NVMFS5C460NLAFT1G                                                             | TRAN; NCH; POWER MOSFET; SO-8FL; PD-(50W); I-(78A); V-(40V)                                                                                    |            |
|     47 | Q5                                         | -         |     1 | FDWS9509L-F085                                                        | ON SEMICONDUCTOR                                  | FDWS9509L-F085                                                                | TRAN; PCH; POWER-56; PD-(107W); I-(-65A); V-(-40V)                                                                                             |            |
|     48 | Q6                                         | -         |     1 | SIS434DN-T1-GE3                                                       | VISHAY                                            | SIS434DN-T1-GE3                                                               | TRAN; NCH; N-CHANNEL 40-V (D-S) MOSFET; POWERPAK1212-8; PD-(52W); I-(35A); V-(40V)                                                             |            |
|     49 | R1-R3, R12, R15, R22, R23, R30             | -         |     8 | RC0402JR-070RL; CR0402-16W-000RJT                                     | YAGEO PHYCOMP;VENKEL LTD.                         |                                                                               | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                        |            |
|     50 | R4, R8                                     | -         |     2 | CRCW040223K2FK                                                        | VISHAY DALE                                       | 23.2K                                                                         | RESISTOR; 0402; 23.2K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                      |            |
|     51 | R5, R11                                    | -         |     2 | PF0603FRE7T0R01Z                                                      | YAGEO                                             |                                                                               | 0.01 RESISTOR; 0603; 0.01 OHM; 1%; 50PPM; 0.33W; THICK FILM                                                                                    |            |
|     52 | R6, R24                                    | -         |     2 | ERJ-2RKF5102                                                          | PANASONIC                                         | 51K                                                                           | RESISTOR; 0402; 51K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                          |            |
|     53 | R7, R25                                    | -         |     2 | CRCW040240K2FK                                                        | VISHAY DALE                                       | 40.2K                                                                         | RESISTOR; 0402; 40.2K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                      |            |
|     54 | R9, R20, R26, R29, R54-R56                 | -         |     7 | ERJ-2RKF1002                                                          | PANASONIC                                         | 10K                                                                           | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                         |            |
|     55 | R10                                        | -         |     1 | ERJ-2RKF8061                                                          | PANASONIC                                         | 8.06K                                                                         | RESISTOR; 0402; 8.06K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                       |            |
|     56 | R13, R14, R18, R19, R50                    | -         |     5 | CRCW06030000Z0EAHP                                                    | VISHAY DRALORIC                                   |                                                                               | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM                                                                                         |            |
|     57 | R16                                        | -         |     1 | TLR2BPDTD3L00F75                                                      | KOA SPEER ELECTRONICS INC                         |                                                                               | 0.003 RES; SMT (1206); 0.003; 1%; +/-75PPM/DEGC; 1.5W                                                                                          |            |

## MAX25430A EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                                                                   | DNI/DNP   |   QTY | MFG PART #                                                                                                                                  | MANUFACTURER                                            | VALUE            | DESCRIPTION                                                                                                                                                                                           | COMMENTS                                       |
|--------|---------------------------------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
|     58 | R17                                                                                                                       | -         |     1 | TLR3A10KR0025F                                                                                                                              | TE CONNECTIVITY                                         |                  | 0.0025 RES; SMT (2512); 0.0025; 1%; +/-150PPM/DEGC; 1W                                                                                                                                                |                                                |
|     59 | R21, R27, R28, R32, R42, R46, R47                                                                                         | -         |     7 | ERJ-2GE0R00                                                                                                                                 | PANASONIC                                               |                  | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                                |                                                |
|     60 | R31, R33                                                                                                                  | -         |     2 | CRCW04024K70FK; MCR01MZPF4701                                                                                                               | VISHAY DALE;ROHM SEMICONDUCTOR                          | 4.7K             | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                             |                                                |
|     61 | R34                                                                                                                       | -         |     1 | CRCW060366K5FK; ERJ-3EKF6652                                                                                                                | VISHAY DALE;PANASONIC                                   | 66.5K            | RESISTOR; 0603; 66.5K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                              |                                                |
|     62 | R35                                                                                                                       | -         |     1 | CRCW06038K87FK                                                                                                                              | VISHAY DALE                                             | 8.87K            | RESISTOR; 0603; 8.87K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                               |                                                |
|     63 | R36                                                                                                                       | -         |     1 | AC0603FR-0715K8L; CRCW060315K8FK; ERJ-3EKF1582                                                                                              | YAGEO;VISHAY;PANASONIC                                  | 15.8K            | RES; SMT (0603); 15.8K; 1%; +/-100PPM/DEGC; 0.1W                                                                                                                                                      |                                                |
|     64 | R37                                                                                                                       | -         |     1 | TNPW0603200KBE; RN731JTTD2003                                                                                                               | VISHAY DALE;KOA SPEER ELECTRONICS                       | 200K             | RESISTOR; 0603; 200K OHM ; 0.1%; 100PPM; 0.1W; THICK FILM                                                                                                                                             |                                                |
|     65 | R38                                                                                                                       | -         |     1 | TNPW060320R0BE                                                                                                                              | VISHAY DALE                                             |                  | 20 RESISTOR; 0603; 20 OHM; 0.1%; 25PPM; 0.10W; THICK FILM                                                                                                                                             |                                                |
|     66 | R39-R41                                                                                                                   | -         |     3 | CRG0603F10K                                                                                                                                 | TE CONNECTIVITY                                         | 10K              | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                 |                                                |
|     67 | R49                                                                                                                       | -         |     1 | CSRF0603FT5L00                                                                                                                              | STACKPOLE ELECTRONICS INC                               |                  | 0.005 RES; SMT (0603); 0.005; 1%; +/-150PPM/DEGC; 0.25W                                                                                                                                               |                                                |
|     68 | R57                                                                                                                       | -         |     1 | ERJ-8CWFR020                                                                                                                                | PANASONIC                                               |                  | 0.02 RESISTOR; 1206; 0.02 OHM; 1%; 75PPM; 1W; THICK FILM                                                                                                                                              |                                                |
|     69 | SHIELD                                                                                                                    | -         |     1 | 5006                                                                                                                                        | KEYSTONE                                                | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                |                                                |
|     70 | SHUNT_J1, SHUNT_J6, SHUNT_J7, SHUNT_J10, SHUNT_J12, SHUNT_J14, SHUNT_J34                                                  | -         |     7 | QPC02SXGN-RC                                                                                                                                | SULLINS ELECTRONICS CORP.                               | QPC02SXGN-RC     | CONNECTOR; FEMALE; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                                                                                                      |                                                |
|     71 | SW1                                                                                                                       | -         |     1 | TDA04H0SB1                                                                                                                                  | C&K COMPONENTS                                          | TDA04H0SB1       | SWITCH; SPST; 24V; 0.025A;TDA SERIES; ULTRA-MINIATURE SURFACE MOUNT HALF-PITCH DIP SWITCH; RCOIL=0.1 OHM; RINSULATION=100M OHM                                                                        |                                                |
|     72 | U1                                                                                                                        | -         |     1 | MAX25430AATLF/V+                                                                                                                            | MAXIM                                                   | MAX25430AATLF/V+ | EVKIT PART - IC; MAX25430AATLG/V+; AUTOMOTIVE 100W USB-PD BUCK-BOOST PORT CONTROLLER AND PROTECTOR; TQFN40-EP; PACKAGE OUTLINE DRAWING: 21-0141; PACKAGE CODE: T4066-5C; LAND PATTERN NUMBER: 90-0055 |                                                |
|     73 | U2                                                                                                                        | -         |     1 | MAX4372FEUK+                                                                                                                                | MAXIM                                                   | MAX4372FEUK+     | IC; AMP; LOW-COST; MICROPOWER; HIGH-SIDE CURRENT-SENSE AMPLIFIER WITH VOLTAGE OUTPUT; SOT23-5                                                                                                         |                                                |
|     74 | U3                                                                                                                        | -         |     1 | MAX4372TEUK+                                                                                                                                | MAXIM                                                   | MAX4372TEUK+     | IC; AMP; LOW-COST; MICROPOWER; HIGH-SIDE CURRENT-SENSE AMPLIFIER WITH VOLTAGE OUTPUT; GAIN=20V/V; SOT23- 5                                                                                            |                                                |
|     75 | U4                                                                                                                        | -         |     1 | MAX4372HEUK+                                                                                                                                | MAXIM                                                   | MAX4372HEUK+     | IC; AMP; LOW-COST; MICROPOWER; HIGH-SIDE CURRENT-SENSE AMPLIFIER WITH VOLTAGE OUTPUT; SOT23-5                                                                                                         |                                                |
|     76 | U6, U7                                                                                                                    | -         |     2 | MAX20075ATCA                                                                                                                                | MAXIM                                                   | MAX20075ATCA     | IC; CONV; 36V 1A MINI BUCK CONVERTER WITH 5UA IQ; TDFN12-EP                                                                                                                                           |                                                |
|     77 | VDD                                                                                                                       | -         |     1 | 5005                                                                                                                                        | KEYSTONE                                                | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                  | INSTAL KEYSTONE 5010 (LONG LOOP RED TESTPOINT) |
|     78 | PCB                                                                                                                       | -         |     1 | MAX25430                                                                                                                                    | MAXIM                                                   | PCB              | PCB:MAX25430                                                                                                                                                                                          | -                                              |
|     79 | C26, C42, C46, C48                                                                                                        | DNP       |     0 | CC0603JRNPO9BN331                                                                                                                           | YAGEO                                                   | 330PF            | CAP; SMT (0603); 330PF; 5%; 50V; C0G; CERAMIC CHIP                                                                                                                                                    |                                                |
|     80 | C28                                                                                                                       | DNP       |     0 | UMK107AB7105KA; CC0603KRX7R9BB105 C0603C104K5RAC;                                                                                           | TAIYO YUDEN;YAGEO                                       | 1UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                              | PACKOUT                                        |
|     81 | C33                                                                                                                       | DNP       |     0 | C1608X7R1H104K; ECJ-1VB1H104K; GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NNN; CL10B104KB8NFN; 06035C104KAT2A | KEMET;TDK;PANASONIC;MURATA; TDK;TDK;SAMSUNG;SAMSUNG;AVX | 0.1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                                                                                                           |                                                |
|     82 | CSN1, CSN2, CSP1, CSP2, DH1_GATE, DH2_GATE, DL1_GATE, DL2_GATE, DM, DP, HVBUS_I, HVDM, HVDP, LX1, LX2, OUT, VBAT_I, VCC_I | DNP DNP   |     0 | N/A                                                                                                                                         | N/A                                                     | MICRO_TP         | TEST POINT; MICRO_TP; PAD DIA: 0.8128 MM(32MILS) SOLDERMASK: 0.9144 MM(36MILS) THERMAL RELIEF/ANTIPAD: 1.574MM(62MILS); SMD                                                                           |                                                |
|     83 | J36                                                                                                                       |           |     0 | DX07P024MJ1                                                                                                                                 | JAE ELECTRONIC INDUSTRY                                 | DX07P024MJ1      | CONNECTOR; FEMALE; SMT; USB 3.1; SUPERSPEED; RIGHT ANGLE; 24PINS                                                                                                                                      | PACKOUT                                        |

## MAX25430A EV Kit Schematic

<!-- image -->

## MAX25430A EV Kit Schematic (continued)

<!-- image -->

│

## MAX25430A EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX25430

## MAX25430A EV Kit Schematic (continued)

<!-- image -->

│

## MAX25430A EV Kit Schematic (continued)

<!-- image -->

│

## MAX25430A EV Kit Schematic (continued)

<!-- image -->

│

## MAX25430A EV Kit Schematic (continued)

<!-- image -->

MAXPD\_CY01\_APPS\_A Schematic (PD Controller Board) (continued)

<!-- image -->

Evaluates: MAX25430

MAXPD\_CY01\_APPS\_A Schematic (PD Controller Board) (continued)

<!-- image -->

│

## MAXPD\_CY01\_APPS\_A Schematic (PD Controller Board) (continued)

<!-- image -->

│

## MAXPD\_CY01\_APPS\_A Schematic (PD Controller Board) (continued)

<!-- image -->

│

## MAXPD\_FTHR\_APPS\_B Schematic (Feather Board)

。

<!-- image -->

│

MAXPD\_FTHR\_APPS\_B Schematic (Feather Board) (continued)

<!-- image -->

## MAXPD\_FTHR\_APPS\_B Schematic (Feather Board) (continued)

<!-- image -->

│

## MAXPD\_FTHR\_APPS\_B Schematic (Feather Board) (continued)

<!-- image -->

│

## MAXPD\_FTHR\_APPS\_B Schematic (Feather Board) (continued)

<!-- image -->

│

## MAXPD\_FTHR\_APPS\_B Schematic (Feather Board) (continued)

<!-- image -->

## MAX25430A EV Kit Layout

MAX24530A EV Kit PCB Layout - Top Silkscreen

<!-- image -->

MAX24530A EV Kit PCB Layout - Top View

<!-- image -->

MAX25430A EV Kit PCB Layout - Layer 2

<!-- image -->

MAX25430A EV Kit PCB Layout - Layer 3

<!-- image -->

│

## MAX25430A EV Kit Layout (continued)

MAX25430A EV Kit PCB Layout - Layer 4

<!-- image -->

MAX25430A EV Kit PCB Layout - Layer 5

<!-- image -->

MAX25430A EV Kit PCB Layout - Layer 6

<!-- image -->

MAX25430A EV Kit PCB Layout - Layer 7

<!-- image -->

│

## MAX25430A EV Kit Layout (continued)

MAX25430A EV Kit PCB Layout - Bottom View

<!-- image -->

MAX25430A EV Kit PCB Layout - Bottom Silkscreen

<!-- image -->

│

## MAX25430A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------|-----------------|
|                 0 | 8/20            | Initial release                         | -               |
|                 1 | 8/20            | Changed Evaluates in header to MAX25430 | 1-33            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX25430