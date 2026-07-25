<!-- lastmod 2022-08-02 -->
## MAX1749A Evaluation Kit

## General Description

The  MAX17497A  evaluation  kit  (EV  kit)  demonstrates the  MAX17497A  controller  IC  offline  AC-DC  flyback converter design and features an integrated step-down regulator.  The  EV  kit  circuit  uses  the  MAX17497AATE current-mode  fixed-frequency  flyback  converter  in  a 16-pin TQFN package with an exposed pad.

The EV kit demonstrates the IC's cycle-by-cycle current limit, soft-start, and UVLO features optimized for universal offline applications (+85V AC to +265V AC). The EV kit circuit is configured for output voltages of +12V and +3.3V and provides up to 300mA and 600mA of current from the respective outputs.

The transformer secondary +12V output is used as the input source for the IC step-down regulator that provides +3.3V at VOUT2.

Warning: The  EV  kit  is  designed  to  operate  with  high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this  EV  kit  or  power  the  sources  connected  to  it  must be  careful  to  follow  safety  procedures  appropriate  to working with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1, C12       |     2 | 0.1 F F Q 10%, 630V film capacitors Panasonic ECQ-E6104KF                   |
| C2, C3        |     2 | 100 F F, 400V electrolytic capacitors (25mm x 25mm) Panasonic ECO-S2GP101CA |
| C4            |     1 | 2.2 F F Q 10%, 50V X7R ceramic capacitor (1206) Murata GRM31CR71H225K       |
| C5            |     1 | 0.47 F F Q 10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H474K      |
| C6            |     1 | 0.047 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H473K     |

## Features

- +85V AC to +265V AC Input Voltage Range
- Dual Non-Isolated Outputs
- +12V Provides Up to 300mA (VOUT1)
- +3.3V Provides Up to 600mA (VOUT2)
- 250kHz Switching Frequency
- RESETN Open-Drain Output
- Undervoltage Lockout (UVLO)
- Low-Cost Flyback Design
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C7            |     1 | 2.2 F F Q 10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C225K   |
| C8            |     1 | 330pF Q 20%, 100V X7R ceramic capacitor (0603) Murata GRM188R72A331M    |
| C9            |     1 | 0.022 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E223K |
| C10           |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K   |
| C11           |     1 | 10 F F Q 10%, 16V X7R ceramic capacitor (1206) Murata GRM31CR71C106K    |

<!-- image -->

Evaluates: MAX1749A

## MAX1749A  Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C13           |     1 | 22 F F Q 10%, 25V X7R ceramic capacitor (1210) Murata GRM32ER71E226K |
| C14           |     0 | Not installed, ceramic capacitor (1210)                              |
| C15           |     1 | 10 F F Q 10%, 25V X7R ceramic capacitor (1206) Murata GRM31CR71E106K |
| D1            |     1 | 1000V, 1A diode (41 DO1) Fairchild 1N4007                            |
| D2            |     1 | 100V, 300mA diode (SOD123) Diodes Inc. 1N4148W-7-F                   |
| D3            |     1 | 800V, 1A diode (SMA) Diodes Inc. US1K-TP                             |
| D4            |     1 | 18V zener diode (SOD123) Rohm BZT52C18-7-F                           |
| D5            |     1 | 200V, 1A Schottky diode (SMA) Micro Comm SS1200-LTP                  |
| D6            |     1 | 200V zener diode (SMA) Micro Comm 3SMAJ5956B                         |
| L1            |     1 | 1000 F H, 120mA inductor (6.5mm x 6.5mm) Bourns SRR0604-102KL        |
| L2            |     1 | 15 F H, 1A inductor (4mm x 4mm) Coilcraft LPS4018-153ML              |
| N1            |     1 | 800V, 1A n-channel MOSFET (DPAK) Fairchild FQD1N80TM                 |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Bourns, Inc.                           | 408-496-0706 | www.bourns.com              |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| EPCOS AG                               | 732-906-4300 | www.epcos.com               |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NXP Semiconductors                     | 408-474-8142 | www.nxp.com                 |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| ROHM Co., Ltd.                         | 858-625-3630 | www.rohm.com                |

Note: Indicate that you are using the MAX17497A when contacting these component suppliers.

Evaluates: MAX1749A

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| N2            |     1 | 800V, 200mA n-channel MOSFET (SOT223) Fairchild FQT1N80TF-WS                  |
| Q1            |     1 | 30V, 100mA BJT transistor (SOT23) NXP Semi BC849W.115                         |
| R1-R4         |     4 | 1.2M I Q 5% resistors (1206)                                                  |
| R5-R8         |     4 | 3M I Q 5% resistors (1206)                                                    |
| R9-R12        |     4 | 845K I Q 1% resistors (1206)                                                  |
| R13           |     1 | 44.2K I Q 1% resistor (0603)                                                  |
| R14, R20, R22 |     3 | 10K I Q 0.1% resistors (0603)                                                 |
| R15           |     1 | 27.4K I Q 1% resistor (0603)                                                  |
| R16           |     1 | 49.9K I Q 0.5% resistor (0603)                                                |
| R17           |     1 | 442K I Q 1% resistor (0603)                                                   |
| R18           |     1 | 3.32K I Q 1% resistor (0603)                                                  |
| R19           |     1 | 10 I Q 1% resistor (0603)                                                     |
| R21           |     0 | Not installed, resistor (0603)                                                |
| R23           |     1 | 220 I Q 1% resistor (0603)                                                    |
| RT1           |     1 | 10 I current-limiting thermistor EPCOS B57153S0100M000                        |
| T1            |     1 | 1:0.25 transformer (15 EFD) Coilcraft CR8076-AL                               |
| U1            |     1 | Offline 250kHz peak-current- mode converter (16 TQFN-EP*) Maxim MAX17497AATE+ |
| -             |     1 | PCB: MAX17497A EVALUATION KIT                                                 |

## Quick Start

## Required Equipment

- MAX17497A EV kit
- AC source (+85V AC to +265V AC)
- Three voltmeters
- 300mA load
- 600mA load

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation. Warning:  Exercise caution  when  connecting  and  measuring  offline voltages.

- 1) Connect the first voltmeter to the VOUT1 and PGND PCB pads.
- 2) Connect  the  second  voltmeter  to  the  VOUT2  and PGND PCB pads.
- 3) Connect the 300mA load to VOUT1 and PGND PCB pads.
- 4) Connect the 600mA load to VOUT2 and PGND PCB pads.
- 5) Connect the +85V AC to +265V AC power supply to the LINE and NEUTRAL PCB pads.
- 6) Turn on the AC power supply.
- 7) Verify  that  the  voltmeter  at  VOUT1  reads  approximately +12V.
- 8) Verify  that  the  voltmeter  at  VOUT2  reads  approximately +3.3V.

## Detailed Description of Hardware

The  MAX17497A  EV  kit  is  a  5.58W,  nonisolated  flyback  DC-DC  converter  that  provides  dual  outputs  of +12V/300mA  and +3.3V/600mA at VOUT1 and VOUT2, respectively. The circuit can be powered from a +85V AC to +265V AC power source connected at the LINE and NEUTRAL PCB pads.

The transformer secondary +12V output (VOUT1) is used as the input source for the IC integrated regulator, which provides +3.3V at VOUT2.

The  EV  kit  circuit  VOUT1  voltage  is  set  to  +12V  using the  transformer  T1  secondary  output  and  feedback

## Evaluates: MAX1749A

resistors  R17  and  R16.  Capacitor  C5  sets  VOUT1  softstart to 5.6ms. VOUT2 uses the IC integrated step-down regulator,  whose  output  is  internally  set  to  +3.3V.  The VOUT2 step-down converter output has an internal 2ms soft-start time.

The  IC  IN  pin  circuit  preregulation  circuitry  consists  of transistor  Q1,  resistors  R5-R8,  capacitors  C4  and  C5, and  diode  D2  and  allows  the  startup  of  the  converter. During  startup,  when  the  input  voltage  is  applied,  the R5-R8 startup  resistors  charge  the  C4  and  C5  startup capacitors, causing the voltage at the IN pin to increase towards the rising IN UVLO threshold (+20V typ). During this time, the IC draws a low startup current through the resistors.  When  the  voltage  at  IN  reaches  the  rising  IN UVLO threshold, the IC commences switching operations and  drives  external  MOSFET  N1,  whose  drain  is  connected to the IC LXF input. Since this current cannot be supported by the current through the startup resistors, IN is bootstrapped by VOUT1. VOUT1 then provides power to IN upon reaching its regulated +12V output. If the IN voltage falls below its UVLO falling threshold (+4.5V, typ) before VOUT1 is energized, the controllers turn off and reinitiate the startup process.

The EV kit provides cycle-by-cycle primary-side currentlimit protection using MOSFET N1 and the IC LXF input. Resistor R15 sets the current limit to 548mA. The EV kit features  zener  clamp  snubber  network  (D6  and  D3)  to minimize leakage-energy ringing and clamp the voltage at the drain of MOSFET N1 during switching.

The  EV  kit  provides  VOUT1  and  VOUT2  PCB  pads  for monitoring the circuit's outputs and various PCB pads for monitoring the circuit's inputs and outputs.

## Output Voltages (VOUT1, VOUT2)

The EV kit's VOUT1 voltage is set to +12V using the T1 secondary output and feedback resistors R17 and R16.

VOUT2  is  set  internally  to  +3.3V  by  the  IC  and  uses VOUT1 as it input power source.

Refer  to  the Programming  the  Output  Voltage  of  the Flyback/Boost Converter (SSF) section  in  the  MAX17497A/ MAX17497B IC data sheet for additional information on setting the VOUT1 voltage.

## MAX1749A  Evaluation Kit

## Current Limiting

The  IC  features  current  limiting  for  the  transformer's primary  side  by  monitoring  the  peak  current  entering the  IC  LXF  input.  Resistor  R15  sets  the  EV  kit  circuit current limit to 548mA. The IC turns off switching MOSFET N1  when  the  peak  current  at  the  LXF  pin  reaches  the current limit.

To reconfigure the peak current limit to a different value, use the following equation to choose a new R15 resistor:

<!-- formula-not-decoded -->

where I PEAK  is in amps and R15 is in k I .

When the instantaneous peak current through the LXF pin reaches a level 20% higher than the programmed peak current limit, then the IC enters into hiccup mode, which keeps the respective converters in shutdown mode and retries  after  32ms.  This  limits  the  average  short-circuit current equal to:

<!-- formula-not-decoded -->

where t HICCUP  is 32ms and t SS  is the short-circuit time duration.

Evaluates: MAX1749A

## Undervoltage (UVLO) and Overvoltage (OVI) Lockout

The  EV  kit  features  UVLO  and  OVI  circuit  protection that  prevent  operation  below  the  programmed  input supply  start  voltage.  Resistors  R9-R12  set  the  undervoltage-threshold  level.  Resistors  R13  and  R14  set  the overvoltage-threshold  levels.  The  EV  kit  circuit  undervoltage  and  overvoltage  are  set  to  +78V  and  +422V, respectively. To reconfigure the OVLO and UVLO, refer to the Startup Voltage and Input Overvoltage-Protection Setting  (EN/UVLO,  OVI) section  in  the  MAX17497A/ MAX17497B IC data sheet.

## Open-Drain Output (RESETN)

The EV kit provides a PCB pad to monitor the status of the open-drain output (RESTN). RESETN is high when VOUT is  within  5%  of  its  regulated  voltage.  When  VOUT  falls below 92% (typ) of its regulated voltage, RESETN is pulled low. RESETN is pulled up to VCC through resistor R20.

## Evaluates: MAX17497A

Figure 1. MAX17497A EV Kit Schematic

<!-- image -->

## MAX17497A Evaluation Kit

Figure 2. MAX17497A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX17497A EV Kit PCB Layout-Component Side

<!-- image -->

## Evaluates: MAX17497A

Figure 4. MAX17497A EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX17497A EV Kit Component Placement GuideSolder Side

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17497AEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX1749A

## MAX1749A  Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                  | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------|-----------------|
|                 0 | 5/12            | Initial release                                              | -               |
|                 1 | 11/12           | Revised Component List , EV kit specifications, and Figure 1 | 1-6             |
|                 2 | 8/15            | Updated General Description                                  | 1, 3            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-462, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

Evaluates: MAX1749A