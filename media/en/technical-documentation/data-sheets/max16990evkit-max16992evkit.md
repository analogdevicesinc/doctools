<!-- lastmod 2022-08-04 -->
## MAX16990/MAX16992 Evaluation Kits

## General Description

The  MAX16990/MAX16992  evaluation  kits  (EV  kits) are  fully  assembled  and  tested  PCBs  that  contain  a 16W DC-DC converter for front-end preboost automotive applications. The devices integrate a low-side FET driver and current-mode control-loop circuitry for output-voltage regulation,  making  them  ideal  for  automotive  boost  or SEPIC  converters.  The  MAX16990  integrated  driver switches  at  400kHz,  while  the  MAX16992  integrated driver switches at 2.2MHz using the default configuration. The  MAX16990  can  be  synchronized  with  an  external clock source within the 100kHz to 1MHz range, and the MAX16992 within the 1MHz to 2.5MHz range.

The  EV  kits  operate  from  a  DC  supply  voltage  of  4.5V (3V  in  bootstrapped  mode)  up  to  36V. The  EV  kits  can withstand  a  42V  load-dump  condition  for  up  to  400ms. Each  EV  kit  demonstrates  the  device  features,  such as  dynamic  adjustable  output  voltage,  external  clock synchronization, two-phase operation configurability, cycle-by-cycle  current  limit,  hiccup  mode,  and  thermal shutdown.  The  boost  converter  regulates  8V  and  can supply a current up to 2A. Each EV kit includes an external p-MOSFET (P1) that can be used to disconnect the boost  output  from  the  load  in  a  fault  condition.  The  EV kits also demonstrate a reference MAX16990 design for automotive applications.

## Features

- 4.5V (3V in Bootstrapped Mode) Up to 36V Input Voltage Range
- 8V Up to 2A Output
- Demonstrates External Clock Synchronization
- Demonstrates SUP UVLO
- Demonstrates Cycle-by-Cycle Current Limit and Hiccup Mode
- Thermal-Shutdown Protection
- PGOOD Flag
- Demonstrates Dynamic Adjustable Output
- Switched Output Option
- Demonstrates Two Phases of Operation
- Proven PCB Layout and Thermal Design
- Fully Assembled and Tested

Evaluate: MAX16990/MAX16992

## Quick Start

## Required Equipment

- MAX16990 or MAX16992 EV kit
- 3V to 36V, 10A DC power supply
- Digital voltmeter (DVM)
- 2A load

## Output Testing

Each  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  Verify that a shunt is installed on pins 1-2 on jumper JU1 (device enabled).
- 2)  Verify  that  a  shunt  is  installed  on  jumper  JU3  (FB internal reference).
- 3)  Verify  that  a  shunt  is  installed  on  pins  1-2  (normal mode) or 2-3 (bootstrapped mode) on jumper JU2.
- 4)  Connect the power supply to the VBAT PCB pad and the power supply's ground to the PGND PCB pad.
- 5)  Connect DVM across the VOUT and AGND test point.
- 6)  Turn on the power supply and set it to 4.5V.
- 7)  Measure  the  voltage  from  the  VOUT  PCB  pad  to AGND and verify that it is 8V.
- 8)  Apply the 2A load on the VOUT or SWITCHED VOUT PCB pad.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX16990/MAX16992 Evaluation Kits

## Detailed Description of Hardware

The MAX16990/MAX16992 EV kits are fully assembled and tested PCBs that contain a 16W DC-DC converter for front-end preboost automotive applications. The devices integrate a low-side FET driver and current-mode controlloop circuitry for output-voltage regulation, making them ideal  for  automotive  boost  or  SEPIC  converters.  The MAX16990  integrated  driver  switches  at  400kHz,  while the  MAX16992  integrated  driver  switches  at  2.2MHz using  the  default  configuration.  The  MAX16990  can  be synchronized  with  an  external  clock  source  within  the 100kHz  to  1MHz  range,  and  the  MAX16992  within  the 1MHz to 2.5MHz range.

The EV kits operate from a DC supply voltage of 4.5V (3V in bootstrapped mode) up to 36V. The EV kits can withstand a 42V load-dump condition for up to 400ms. Each EV kit demonstrates the device features such as dynamic adjustable output voltage, external clock synchronization, two-phase  operation  configurability,  cycle-by-cycle  current limit, hiccup mode, and thermal shutdown. The boost converter regulates 8V and can supply a current up to 2A. The EV kits include an external p-MOSFET (P1) that can be used to disconnect the boost output from the load in a

## Table 1. Enable (JU1)

| SHUNT POSITION   | EN PIN                              | EV KIT OPERATION            |
|------------------|-------------------------------------|-----------------------------|
| 1-2*             | Connected to SUP                    | Enabled                     |
| 2-3              | Connected toAGND                    | Disabled                    |
| Unconnected      | Connected to an external controller | External controller enabled |

* Default position.

## Table 2. Bootstrap Mode (JU2)

| SHUNT POSITION   | SUP PIN           | EV KIT OPERATION   |
|------------------|-------------------|--------------------|
| 1-2*             | Connected to SUP  | Normal             |
| 2-3              | Connected to VOUT | Bootstrapped       |

* Default position.

## Evaluate: MAX16990/MAX16992

fault condition. The EV kits also demonstrate a reference MAX16990 design for automotive applications.

## Enable

The EV kits feature an enable input that can be used to enable and disable the device and place it in shutdown mode. To enable the EV kits whenever power is applied to VIN and PGND, place the jumper on pins 1-2 on jumper JU1.

To enable the EV kit from an external enable signal, leave jumper JU1 disconnected. In this  configuration,  apply  a logic signal on the ENABLE input pad on the EV kit. The enable (EN) input should not be left unconnected.

Refer  to  the  EN  pin  description  in  the  MAX16990/ MAX16992 IC data sheet for additional information. See Table 1 for jumper JU1 settings.

## Bootstrap Mode

For applications where the input voltage goes below 4.5V, use the device in bootstrapped mode, placing the jumper on  pins  2-3  on  JU2.  In  bootstrapped  configuration,  the device is supplied by the output of the boost regulator itself and does not trigger the UVLO, even if the input voltage goes down to 3V. See Table 2 for jumper JU2 settings.

## MAX16990/MAX16992 Evaluation Kits

## Output-Voltage Adjustment

The  output  voltage  of  the  device  can  be  dynamically adjusted,  feeding  an  analog  voltage  to  the  REFIN  pin. The external voltage applied to the REFIN pin is used as FB reference. Remove jumper JU3 to apply an external voltage to the REFIN pin. With the JU3 jumper installed, REFIN is shorted to PVL and an internal 1V FB reference is  used for loop regulation. See Table 3 for jumper JU3 settings.

## External Clock Synchronization

The device can be synchronized using an external clock applied  to  the  FSET/SYNC  pin. A  falling  clock  edge  on FSET/SYNC  turns  on  the  external  MOSFET  by  driving DRV  high  after  a  short  delay.  The  MAX16990  can  be synchronized  with  an  external  clock  source  within  the 100kHz  to  1MHz  range,  and  the  MAX16992  within  the 1MHz to 2.5MHz range.

## Two-Phase Configuration

To configure the device in two phases, use two EV kits and follow the instructions below:

## Master EV kit:

- 1)  Install	R8	(1kΩ).

## Table 3. Output-Voltage Adjustment (JU3)

| SHUNT POSITION   | REFIN PIN        | EV KIT OPERATION           |
|------------------|------------------|----------------------------|
| Installed        | Connected to PVL | Internal 1V reference      |
| Not Installed    | Open             | External voltage reference |

Evaluate: MAX16990/MAX16992

## Slave EV kit:

- 1)  Remove R2 and R1.
- 2)  Remove C2, C3, and R5.
- 3)  Install	R11	(0Ω).

## Make the following connections:

- 1)  Connect  the  PGND  PCB  pad  on  the  master  to  the PGND PCB pad on the slave.
- 2)  Connect  the  AGND  PCB  pad  on  the  master  to  the AGND PCB pad on the slave.
- 3)  Connect  the  VBAT  PCB  pad  on  the  master  to  the VBAT PCB pad on the slave.
- 4)  Connect  the  VOUT  PCB  pad  on  the  master  to  the VOUT PCB pad on the slave.
- 5)  Connect  the  COMP  PCB  pin  on  the  master  to  the COMP pin on the slave through a BNC cable.
- 6)  Connect  the  SYNCO  PCB  pin  on  the  master  to  the FSET/SYNC pin on the slave.

│

## MAX16990/MAX16992

## Evaluation Kits

## Component Lists

## MAX16990 EV Kit

| DESIGNATION                                      |   QTY | DESCRIPTION                                                            |
|--------------------------------------------------|-------|------------------------------------------------------------------------|
| AGND                                             |     1 | Black test point                                                       |
| C1, C7                                           |     2 | 47µF ±10%, 16V X5R ceramic capacitors (1210) Murata GRM32ER61C476K     |
| C2                                               |     1 | 0.068µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C683K   |
| C3                                               |     1 | 150pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H151J      |
| C4                                               |     1 | 47µF, 50V aluminum electrolytic capacitor (SMD) Panasonic EEE-1HA470XP |
| C5, C11                                          |     2 | 1µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K      |
| C6                                               |     1 | 2.2µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A225K     |
| C8                                               |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K    |
| C9, C10                                          |     0 | Not installed, ceramic capacitors (0603)                               |
| C12                                              |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K     |
| COMP                                             |     1 | SMAfemale vertical-mount PCB Johnson 142-0701-201                      |
| D1                                               |     1 | 40V, 5A Schottky diode (SMC) ON Semi MBRS540T3G                        |
| D2                                               |     1 | 7.5A, 45V Schottky diode (D2PAK) ON Semi MBRB1545CTG                   |
| D4, D5                                           |     2 | 18V zener diodes (SOT523) Diodes Inc. BZX84C18T-7-F                    |
| EN, FB, FSET/SYNC, PGOOD, PVL, REFIN, SUP, SYNCO |     8 | Red test points                                                        |

Evaluate: MAX16990/MAX16992

* EP = Exposed pad.

| DESIGNATION       |   QTY | DESCRIPTION                                                                  |
|-------------------|-------|------------------------------------------------------------------------------|
| JU1, JU2          |     2 | 3-pin headers, 2.54mm Sullins PEC36SAAN                                      |
| JU3               |     1 | 2-pin header, 2.54mm Sullins PEC36SAAN                                       |
| L1                |     1 | 4.7µH, 6A inductor (7mm x 6.9mm) Würth 744311470                             |
| N1                |     1 | 60V, 10A n-channel MOSFET (SO8) Fairchild FDS5670                            |
| N2, N3            |     2 | 60V, 115mA, n-channel MOSFETs (SOT23) Fairchild 2N7002                       |
| P1                |     1 | 55V, 80A p-channel MOSFET (D2PAK) STMicroelectronics STB80PF55               |
| R1                |     1 | 90.9kΩ ±1% resistor (0603)                                                   |
| R2                |     1 | 13kΩ ±1% resistor (0603)                                                     |
| R3                |     1 | 0.022Ω, 0.5W ±1% current-sense resistor (1812) Panasonic ERJ-L12KF22MU       |
| R4                |     1 | 1kΩ ±1% resistor (0603)                                                      |
| R5                |     1 | 6.81kΩ ±1% resistor (0603)                                                   |
| R6                |     1 | 10kΩ ±5% resistor (0603)                                                     |
| R7                |     1 | 68.1kΩ ±1% resistor (0603)                                                   |
| R8, R11, R14, R15 |     0 | Not installed, resistors (0603)                                              |
| R9, R12           |     2 | 0Ω ±5% resistors (0603)                                                      |
| R10               |     1 | 4.7kΩ ±5% resistor (0603)                                                    |
| R13               |     1 | 1kΩ ±5% resistor (0603)                                                      |
| U1                |     0 | Automotive current-mode boost controller (12 TQFN-EP*) Maxim MAX16990ATCE/V+ |
| -                 |     1 | PCB: MAX16990 EVKIT                                                          |

│

## MAX16990/MAX16992 Evaluation Kits

## Component Lists (continued)

## MAX16992 EV Kit**

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1, C8        |     0 | Not installed, capacitors                                         |
| C2            |     1 | 6200pF ±5%, 50V X7R ceramic capacitor (0603) AVX 06035C622JAT2A   |
| C7            |     1 | 47µF ±10%, 16V X5R ceramic capacitor (1210) Murata GRM32ER61C476K |
| L1            |     1 | 0.47µH, 18A inductor (7mm x 6.9mm) Würth 744314047                |

## Component Suppliers

| SUPPLIER                       | WEBSITE                |
|--------------------------------|------------------------|
| Diodes Incorporated            | www.diodes.com         |
| Murata Americas                | www.murataamericas.com |
| ON Semiconductor               | www.onsemi.com         |
| Panasonic Corp.                | www.panasonic.com      |
| STMicroelectronics             | www.us.st.com          |
| Vishay                         | www.vishay.com         |
| Würth Electronik GmbH & Co. KG | www.we-online.com      |

Note:

Indicate that you are using the MAX16990 or MAX16992 when contacting these component suppliers.

Evaluate: MAX16990/MAX16992

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| R7            |     1 | 12.1kΩ ±1% resistor (0603)                                                   |
| U1            |     0 | Automotive current-mode boost controller (12 TQFN-EP*) Maxim MAX16992ATCE/V+ |
| -             |     1 | PCB: MAX16990 EVKIT                                                          |

│

Figure 1. MAX16990 EV Kit Schematic

<!-- image -->

## MAX16990/MAX16992 Evaluation Kits

Figure 2. MAX16990 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluate: MAX16990/MAX16992

Figure 3. MAX16990 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16990 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

## MAX16990/MAX16992 Evaluation Kits

Figure 5. MAX16990 EV Kit PCB Layout-PVL Layer 3

<!-- image -->

## Evaluate: MAX16990/MAX16992

Figure 6. MAX16990 EV Kit PCB Layout-AGND and PGND Solder Side

<!-- image -->

│

## MAX16990/MAX16992 Evaluation Kits

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16990 EVKIT# | EV Kit |
| MAX16992 EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluate: MAX16990/MAX16992

│

## MAX16990/MAX16992 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	iPSlieG.	0a[iP	InteJrateG	reserYes	tKe	riJKt	to	cKanJe	tKe	circuitr\	anG	sSeci¿cations	ZitKout	notice	at	an\	tiPe.

│

Evaluate: MAX16990/MAX16992