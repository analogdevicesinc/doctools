<!-- lastmod 2022-08-02 -->
## MAX17557EVKIT# Evaluation Kit

## General Description

The MAX17557 5V-output evaluation kit (EV kit) provides a proven design to evaluate the MAX17557 high-voltage, high-efficiency, synchronous step-down DC-DC controller. The EV kit provides 5V/10A at the output from a 6.5V to 60V input supply. The switching frequency of the EV kit is preset to 350kHz for optimum efficiency and component size. The EV kit features Enable/UVLO Input, selectable PWM/DCM modes, resistor-programmable UVLO thresh -old, adjustable soft-start time, open-drain PGOOD output, and overcurrent and overtemperature protection.

## Features

- Operates from a 6.5V to 60V Input Supply
- 5V Output Voltage
- Up to 10A Output Current
- 350kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Selectable PWM/DCM Modes of Operation
- Adjustable Soft-Start Time
- Programmable Soft-Stop Enable or Disable Function
- Open-Drain PGOOD Output
- Overcurrent (OCP) and Overtemperature (OTP) Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17557 5V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17557 5V-output EV kit
- 6.5V to 60V, 10A DC-input power supply
- Load capable of sinking 10A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the V IN  PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive ter -minal of the 10A load to the V OUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the V OUT  PCB pad and the nearest PGND PCB pad.
- 4) Place the shunt on the jumpers JU1, JU2, JU3, and JU4 according to the intended operation (see Tables 1 , 2, 3, and 4 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 5V.

<!-- image -->

## MAX17557EVKIT# Evaluation Kit

## Detailed Description of Hardware

The  MAX17557  5V-output  evaluation  kit  (EV  kit)  is  a proven  design  to  evaluate  the  MAX17557  high-voltage, high-efficiency,  synchronous  step-down  DC-DC  control -ler. The EV kit provides 5V/10A at the output from a 6.5V to  60V  input  supply. The  switching  frequency  of  the  EV kit  is  preset  to  350kHz  for  optimum efficiency and com -ponent  size.  The  EV  kit  features  current  sensing  using either an external current-sense resistor for accuracy or an inductor DCR for improved system efficiency. Current foldback  limits  MOSFET  power  dissipation  under  shortcircuit conditions. The MODE/SYNC PCB pad allows an external  clock  to  synchronize  the  device.  Jumper  JU1 allows the selection of the mode of operation based on light load-performance requirements. The EV kit includes an EN PCB pad and jumper JU3 to enable the output at a desired input voltage. A PGOOD PCB pad is available for monitoring when the converter output is in regulation.

## Evaluates: MAX17557 5V Output-Voltage Application

## Setting the Input Undervoltage Lockout Level

The EN pin can be open or pulled up to a voltage between 1.25V and 5.5V to turn on the controller. Figure 1 shows the possible configurations. The EN pin can be used as input undervoltage lockout detector with a typical hysteresis of 100mV. As shown in Figure 1, the input voltage at which the controller of the IC turns on, can be set with a resistordivider connected to EN from IN to GND. Select R2 = 10kΩ and calculate R1 based on the following equation:

<!-- formula-not-decoded -->

where V INUVLO  is the input voltage at which the controller should be enabled.

See Table 3 for JU3 jumper settings and descriptions of controller enable/undervoltage lockout (EN).

Figure 1. Setting the Input Under Voltage Lockout

<!-- image -->

## MAX17557EVKIT# Evaluation Kit

## Table 1. JU1: MODE/SYNC Selection

| JUMPER   | SHUNT POSITION   | MODE/SYNC PIN        | MAX17557_MODE         |
|----------|------------------|----------------------|-----------------------|
| JU1      | 1-2              | Connected to V CCINT | DCM Mode of Operation |
| JU1      | 2-3              | Connected to GND     | PWM Mode of Operation |

## Table 2. JU2: Overcurrent Protection Mode Select

| JUMPER   | SHUNT POSITION   | ILIMSEL              | MODE           |
|----------|------------------|----------------------|----------------|
| JU2      | 1-2              | Connected to V CCINT | Latch-off Mode |
| JU2      | 2-3              | Connected to GND     | Foldback Mode  |

## Table 3. JU3: Controller Enable/Under Voltage Lock Out (EN) Description

| JUMPER   | SHUNT POSITION   | EN                                            | MAX17557 OUTPUT                                                      |
|----------|------------------|-----------------------------------------------|----------------------------------------------------------------------|
| JU3      | 1-2              | Connected to the input UVLO divider midpoint. | Enabled, UVLO level is set by the resistor divider from V IN to GND. |
| JU3      | 2-3              | Connected to GND                              | Disabled                                                             |

## MODE/SYNC

The device's Mode Selection and External Synchronization (MODE/SYNC)  pin  can  be  used  to  select  the  PWM  or DCM modes of operation. The logic state of the MODE/ SYNC pin is latched when the V CCINT  and EN voltages exceed  the  respective  UVLO  rising  thresholds  and  all internal  voltages  are  ready  to  allow  LX  switching.  State changes on the MODE/SYNC pin are ignored during nor -mal operation. Refer to the MAX17557 IC data sheet for more information on the PWM and DCM modes of opera -tion. Table 1 lists JU1 jumper settings that can be used to configure the desired mode of operation.

The  internal  oscillator  of  the  device  can  be  synchro -nized  to  an  external  clock  signal  on  the  MODE/SYNC pin.  The  external  synchronization  clock  frequency  must be between 1.1 x f SW  and 1.4 x f SW , where f SW is  the frequency of operation set by R3. The minimum external clock high pulse width should be greater than 50ns.

## Adjusting Output Voltage

The output voltage of the converter is set by connecting a resistor-divider to FB from the output to GND (Figure 2). Select R3 using the following equation, based on the off -set introduced on the output voltage by the FB leakage. Let α be the offset introduced on the output voltage:

<!-- formula-not-decoded -->

Figure 2: Adjusting Output Voltage

<!-- image -->

where:

α = offset introduced on the output voltage

I FB = FB leakage current (±100nA max)

For example, for V OUT  = 5V, α = 0.1% of V OUT  (= 5mV).

<!-- formula-not-decoded -->

Calculate R4 with the following equation:

<!-- formula-not-decoded -->

## MAX17557EVKIT# Evaluation Kit

## Soft-Start Capacitor Selection

Soft-start time is programmed by connecting a capacitor from the SS pin to GND. An internal 5µA current source charges  the  capacitor  at  the  SS  pin  providing  a  linear ramping  voltage  for  output-voltage  reference.  The  softstart time is calculated based on the following equation:

<!-- formula-not-decoded -->

## Soft-Stop Enable (SSTPEN):

The device's soft-stop enable pin (SSTPEN) enables or disables the soft-stop functionality during device's power down using the EN pin. Soft-stop time is equal to soft-start time, which can be programmed by connecting a capaci -tor from the SS pin to GND. Connect the SSTPEN pin to V CCINT  or GND to enable or disable the soft-stop func -tion,  respectively.  Table  4  lists  JU4  jumper  settings  that can be used to configure the soft-stop feature.

## Table 4. JU4: SSTPEN Selection

| JUMPER   | SHUNT POSITION   | MODE/SYNC PIN        | MAX17557 CONDITION        |
|----------|------------------|----------------------|---------------------------|
| JU4      | 1-2              | Connected to V CCINT | ENABLE Soft-Stop Function |
| JU4      | 2-3              | Connected to GND     | No Soft-Stop Function     |

## Evaluates: MAX17557 5V Output-Voltage Application

## Frequency Selection (RT)

The selection of switching frequency is a tradeoff between efficiency  and  component  size.  Low-frequency  opera -tion  increases  efficiency  by  reducing  MOSFET  switch -ing  losses  and  gate-drive  losses,  but  requires  a  larger inductor  and/or  capacitor  to  maintain  low  output-ripple voltage.  The  switching  frequency  of  the  device  can  be programmed between 100kHz and 2.2MHz using the RT pin. Connect a resistor from RT to GND to set the regula -tor's switching frequency. Leave RT open for the default 350kHz frequency. The following formula can be used to find the required resistor for a given switching frequency.

<!-- formula-not-decoded -->

where R RT is in k Ω and f SW is in kHz. Leaving the RT pin open causes the device to operate at the default switching frequency of 350kHz.

## MAX17557EVKIT# Evaluation Kit

## MAX17557 EV Kit Performance Report

V IN  = 24V, V SSTPEN  = GND unless otherwise noted.

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17557 5V Output-Voltage Application

<!-- image -->

<!-- image -->

## MAX17557 EV Kit Performance Report (continued)

V IN  = 24V, V SSTPEN  = GND unless otherwise noted.

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: LOAD CURRENT STEPPED  FROM 0.1A TO 5A

## Component List

| SUPPLIER            | WEBSITE                |
|---------------------|------------------------|
| Coilcraft, Inc.     | www.coilcraft.com      |
| Murata Americas     | www.murataamericas.com |
| Panasonic Corp.     | www.panasonic.com      |
| Renesas Electronics | www.renesas.com        |
| Diodes Inc.         | www.diodes.com         |

Note:

Indicate that you are using the MAX17557 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17557EVKIT# | EVKIT  |

## MAX17557 EV System Bill of Materials

|   No. | Description                                              |   Quantity | Designator                   | Part Number                    |
|-------|----------------------------------------------------------|------------|------------------------------|--------------------------------|
|     1 | 0.1µF 10%, 100V ,X7R,Ceramic capacitor (0603)            |          2 | C1,C2                        | MURATA GRM188R72A104KA35       |
|     2 | 4.7µF 20%, 80V ,X7R,Ceramic capacitor (1210)             |          2 | C3,C4                        | MURATA GRM32ER71K475ME14       |
|     3 | 150µF,20%,80V,ELECT,13mm                                 |          1 | C5                           | PANASONIC EEV-FK1K151Q         |
|     4 | 1µF 10%, 16V ,X7R,Ceramic capacitor (0603)               |          1 | C6                           | MURATA GRM188R71C105KA12       |
|     5 | 10µF 10%, 10V ,X7R,Ceramic capacitor (0805)              |          1 | C7                           | MURATA GGRM21BR71A106KE51      |
|     6 | 15000pF,10%,50V,X7R,0402,Ceramic capacitor(0402)         |          1 | C8                           | MURATA GRM155R71H153KA12       |
|     7 | 0.47µF,10%,16V,X7R, Ceramic capacitor(0603)              |          1 | C9                           | MURATA GRM188R71C474KA88       |
|     8 | 0.1µF,10%,50V,X7R, Ceramic capacitor(0402)               |          1 | C10                          | MURATA GRM155R71H104KE14       |
|     9 | 180µF 20%, 6.3V ,X7R,Ceramic capacitor (1210)            |          1 | C11                          | PANASONIC EEFSE0J181R          |
|    10 | 10µF 10%, 10V ,X7R,Ceramic capacitor (1210)              |          2 | C13,C14                      | MURATA GRM32DR71A106KA01       |
|    11 | 1000pF,10%,100V,X7R,0402,Ceramic capacitor(0402)         |          1 | C15                          | MURATA GRM155R72A102KA01       |
|    12 | 10nF,10%,50V,X7R,0402,Ceramic capacitor(0402)            |          1 | C18                          | MURATA GRM155R71H103JA88       |
|    13 | 120pF,2%,50V,X7R,0402,Ceramic capacitor(0402)            |          1 | C19                          | MURATA GRM1555C1H121GA01       |
|    14 | Diode PIV=100V; IF=1A                                    |          1 | D1                           | DIODES INCORPORATED DFLS1100-7 |
|    15 | 3-pin header (36-pin header 0.1' centers )               |          4 | JU1,JU2,JU3,JU4              | Sullins: PEC03SAAN             |
|    16 | INDUCTOR, 3.3µH, 19.4A                                   |          1 | L1                           | COILCRAFT XAL7070-332ME        |
|    17 | N-CHANNEL POWER MOSFET(LFPAK) PD-(45W); I-(25A); V-(60V) |          1 | Q1                           | RENESAS RJK0651DPB-00#J5       |
|    18 | N-CHANNEL POWER MOSFET(LFPAK) D-(65W); I-(45A); V-(60V)  |          1 | Q2                           | RENESAS RJK0653DPB-00#J5       |
|    19 | RES+,0 Ω ,1%,0402                                        |          8 | R1, R4, R7, R9, R12-R14, R19 |                                |
|    20 | RES+,2.2 Ω ,1%,0402                                      |          1 | R2                           |                                |
|    21 | RES+,0.005 Ω ,1%,1.5W,2010                               |          1 | R8                           | TT ELECTRONICS LRMAT2010-R005F |
|    22 | RES+,7.5K Ω OHM,1%,0402                                  |          1 | R17                          |                                |
|    23 | RES+,100K Ω OHM,1%,0402                                  |          1 | R18                          |                                |
|    24 | RES+,95.3K Ω OHM,1%,0402                                 |          1 | R20                          |                                |
|    25 | RES+,17.8K Ω OHM,1%,0402                                 |          1 | R21                          |                                |
|    26 | Buck Controller MAX17557ATP+                             |          1 | U1                           | MAX17557ATP+                   |

Evaluates: MAX17557 5V

Output-Voltage Application

## MAX17557 EV System Schematic

<!-- image -->

## MAX17557EVKIT# Evaluation Kit

## MAX17557 EV System PCB Layout

MAX17557 EV Kit Silk Top

<!-- image -->

## Evaluates: MAX17557 5V Output-Voltage Application

MAX17557 EV Kit Top

<!-- image -->

MAX17557 EV Kit L2-GND

<!-- image -->

## MAX17557 EV System PCB Layout (continued)

MAX17557 EV Kit L3-GND

<!-- image -->

MAX17557 EV Kit Bottom

<!-- image -->

## MAX17557 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/17            | Initial release                                                                                                                                                                                                                                                                                                                                                               | -               |
|                 1 | 3/18            | Changed the document title. Updated the following sections: General Description, Features, Quick Start, and Detailed Description of Hardware . Added Table 1 and Table 4, and updated Table 2 and Table 3. Updated the MAX17557 EV Kit Performance Report, the MAX17557 EV System Bill of Materials, the MAX17557 EV System Schematic, and the MAX17557 EV System PCB Layout. | 1-10            |
|               1.5 |                 | Corrected typo.                                                                                                                                                                                                                                                                                                                                                               | 7               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17557 5V

Output-Voltage Application