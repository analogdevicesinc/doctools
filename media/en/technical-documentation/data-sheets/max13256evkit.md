<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX13256 evaluation kit (EV kit) is a fully assembled and tested  PCB  that  contains  the  MAX13256  10W  isolated  H-bridge  DC-DC  converter.  The  EV  kit  operates from an 8V to 36V DC power source and the on-board 1:1 turns-ratio transformer from HALO sets the output voltage range from 6.8V to 34.8V with a 300mA current limit.

The  EV  kit  provides  greater  than  90%  overall  efficiency  at  +24V  between  2.2W  and  up  to  8.3W  output power  using  an  H-bridge  DC-DC  converter  topology. Input-ripple  current  and  radiated  noise  are  minimized by  the  inherent  balanced  nature  of  the  design  with no interruption in the input current. Undervoltage lockout  (UVLO),  adjustable  current  limit,  and  thermal shutdown provide for a robust 10W isolated supply. The surface-mount  transformer  provides  galvanic  isolation with the output powered from a full-wave rectifier circuit, reducing the output-voltage ripple.

The  EV  kit  circuit  is  configured  as  a  full-wave  rectifier, with an output voltage that follows the input voltage but is  configurable  for  other  topologies  including  a  voltage doubler, bipolar outputs, half-wave rectification, and  a push-pull rectifier.

Use HALO's TGMR-512V6LF transformer for 4:1 turns-ratio operation providing up to 1A load capability.

The device is available in a 10-pin (3mm x 3mm) TDFN package with an exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1, C4        |     2 | 1 F F Q 10%, 50V C0G ceramic capacitors (0805) Murata GRM21BR71H105K  |
| C2, C3, C8    |     0 | Not installed, capacitors (0603)                                      |
| C5            |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K |
| C6            |     1 | 2.2 F F Q 10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C225K |
| C7            |     0 | Not installed, capacitor (0805)                                       |
| D1-D4         |     4 | 40V, 1A Schottky diodes (SMB) Fairchild MBRS140                       |
| D5            |     1 | Red LED (0603)                                                        |
| GND, SGND     |     2 | Black test points                                                     |
| JU1           |     1 | 3-pin header                                                          |
| JU2, JU4      |     2 | 2-pin headers                                                         |
| JU3           |     1 | Not installed, 2-pin header                                           |

<!-- image -->

- S 8V to 36V Input Supply Range
- S Up to 90% Efficiency
- S Full-Wave Rectified Output
- S Configurable for a Voltage Doubler, Bipolar Half-Wave Rectifier, and Push-Pull Rectifier Outputs
- S Internal or External Clock Operation Option
- S Designed for 1500VRMS Isolation
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| R1            |     1 | 1k I Q 1% resistor (0603)                                    |
| R2            |     1 | 750 I Q 5% resistor (0603)                                   |
| R3            |     1 | 49.9k I Q 1% resistor (0603)                                 |
| R4            |     1 | 10k I Q 5% resistor (0603)                                   |
| R5-R8         |     0 | Not installed, resistors (0603)                              |
| R9, R10       |     2 | 0 I Q 5% resistors (0603)                                    |
| T1            |     1 | 1:1, 300mA turns transformer (6 Gull Wing) HALO TGMR-511V6LF |
| U1            |     1 | H-bridge transformer driver (10 TDFN-EP) Maxim MAX13256ATB+  |
| U2            |     1 | 5V LDO (6 TDFN-EP) Maxim MAX15007BATT+                       |
| -             |     3 | Shunts                                                       |
| -             |     1 | PCB: MAX13256 EVALUATION KIT                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX13256 Evaluation Kit

## Evaluates: MAX13256

Features

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power until all connections are completed.

- 1) Verify  that  jumpers  JU1,  JU2,  and  JU4 are in their default positions, as shown in Tables 1, 2, and 3.
- 2) Set the DC power supply to 24V.
- 3) Set  the  electronic  load  to  200mA  and  disable the output.
- 4) Connect  the  voltmeter  between  the  +VOUT  and SGND PCB pads on the EV kit.
- 5) Connect  the  ammeter  between  the  +VOUT  PCB pad on the EV kit and the positive terminal on the electronic load. The  negative terminal on the electronic load is connected to the SGND PCB pad on the EV kit.
- 6) Connect  the  power  supply  between  the  VDD  and GND PCB pads on the EV kit.
- 7) Turn on the power supply.
- 8) Enable the electronic load.
- 9) Verify that the ammeter reads approximately 200mA.
- 10)  Verify that the voltmeter reads approximately 22.8V.

## Detailed Description

The MAX13256 EV kit is a 10W, isolated H-bridge DC-DC converter  that  provides  an  unregulated  output  that  is two  diode-voltage  drops  less  than  its  input  supply, with  respect  to  the  isolated  ground.  In  the  default configuration, the maximum load is limited by the device and the on-board transformer.

<!-- image -->

## MAX13256 Evaluation Kit

## Evaluates: MAX13256

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| HALO Electronics, Inc.                 | 650-903-3800 | www.haloelectronics.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX13256 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX13256	EV	kit
- +24V,	1A	DC	power	supply
- Electronic	load	capable	of	200mA
- Ammeter
- Voltmeter

The  device  is  an  integrated  primary-side  controller and  H-bridge  driver  for  isolated  power-supply  circuits. The  device  contains  an  on-board  oscillator,  protection  circuitry,  and  internal  MOSFETs  to  provide  up  to 300mA of  current  to  the  transformer's  primary  winding. The  device  can  be  operated  using  the  internal  425kHz oscillator,  or  driven  by  an  external  clock  to  synchronize multiple  devices  and  control  EMI  behavior.  Regardless of  the  clock  source  being  used,  an  internal  flip-flop stage guarantees a fixed 50% duty cycle, preventing DC current  flow  in  the  transformer  as  long  as  the  clock's period is constant.

The  device  operates  from  a  single-supply  voltage  and includes  UVLO  and  an  active-low  enable  input  for controlled startup. If the input voltage at VDD falls below 6.3V, or the EN input is pulled above 2V, the device shuts down and ST1 and ST2 are high impedance.

The  device  features  an  adjustable  output  current  limit at  the  transformer  driver  outputs  (ST1  and  ST2).  When the  current  reaches  the  limit  for  longer  than  the  1.2ms blanking  time,  the  drive  outputs  are  disabled  and the FAULT output  asserts.  The  drivers  are  reenabled after  the  38.2ms  autoretry  time.  If  a  continuous  fault condition is present, the duty cycle of the fault current is approximately 3%.

The  EV  kit  PCB  is  designed  for  1500V RMS   isolation, with  300  mil  spacing  between  the  GND  and  SGND planes.  The  bottom  PCB  GND  plane  under  device  U1 is  utilized  as  a  thermal  heatsink  for  power  dissipation of the device's thermally enhanced TDFN package with exposed pad. Test points GND and SGND are provided on the PCB for probing the respective ground planes, or to  connect  the  GND  and  SGND  planes  for  nonisolated evaluation of the circuit.

## Clock Source

The  device has two modes  of  operation: internal oscillator  or  external  clock.  To  use  the  internal  425kHz oscillator,  place  a  shunt  in  the  1-2  position  on  jumper JU2.  When  using  an  external  clock,  remove  the  shunt from  JU2  and  apply  a  clock  signal  on  the  CLK  PCB pad  on  the  EV  kit.  An  internal  flip-flop  divides  the external clock by two, generating a switching signal with a guaranteed  50%  duty  cycle.  As  a  result,  the  device outputs switch at 1/2 the external clock frequency.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. EN (JU1)

| SHUNT POSITION   | EN PIN          | DEVICE OPERATION    |
|------------------|-----------------|---------------------|
| 1-2              | Connects to 5V  | Disables the device |
| 2-3*             | Connects to GND | Enables the device  |

## Table 2. Clock Mode (JU2)

| SHUNT POSITION   | CLK PIN          | OSCILLATOR/CLOCK OPERATION                                            |
|------------------|------------------|-----------------------------------------------------------------------|
| Installed*       | Connected to GND | Internal oscillator                                                   |
| Not installed    | Not con- nected  | External clock; apply a clock signal to the CLK PCB pad on the EV kit |

## Table 4. Output Configurations

| CONFIGURATION        | C7            | C8            | D1            | D2        | D3            | D4            | R7            | R8            | R9    | R10           |
|----------------------|---------------|---------------|---------------|-----------|---------------|---------------|---------------|---------------|-------|---------------|
| Full-wave rectifier* | Not installed | Not installed | Installed     | Installed | Installed     | Installed     | Not installed | Not installed | 0 I   | 0 I           |
| Half-wave rectifier  | Not installed | Not installed | Not installed | Installed | Not installed | Not installed | 0 I           | Not installed | 0 I   | 0 I           |
| Voltage doubler      | Not installed | Installed     | Installed     | Installed | Not installed | Not installed | 0 I           | Not installed | 0 I   | Not installed |
| Bipolar outputs      | 1 F F         | Not installed | Installed     | Installed | Installed     | Installed     | Not installed | Installed     | 10k I | 0 I           |
| Push-pull rectifier  | Not installed | Not installed | Not installed | Installed | Not installed | Installed     | Not installed | 0 I           | 0 I   | 0 I           |

## On-Board LDO for Disabling the MAX13256

The  EV  kit  features  an  on-board  5V  LDO  (U2)  for disabling  the  MAX13256  and  powering  the  LED  connected to FAULT .  Install  a  shunt  in  the  1-2  position  on jumper JU1 to connect the EN pin of the device to the 5V from the LDO output and disable the device. Ensure that the voltage on EN never exceeds 6V.

Jumper JU4 is used to disable and enable the LDO, as shown in Table 3.

## Overcurrent Limiting

Resistor R1 sets the current-limit threshold to 650mA. To change  the  current-limit  threshold,  replace  resistor  R1 with  a  0603  surface-mount  resistor  using  the  following equation:

<!-- formula-not-decoded -->

where ILIM is the desired current threshold in the range of 215mA &lt; ILIM &lt; 650mA.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13256 Evaluation Kit

## Evaluates: MAX13256

## Table 3. LDO Enable (JU4)

| SHUNT POSITION   | LDO'S EN PIN    | LDO OPERATION    |
|------------------|-----------------|------------------|
| Installed        | Connects to GND | Disables the LDO |
| Not installed*   | Not connected   | Enables the LDO  |

An overcurrent  or  overtemperature  condition  triggers  a fault on the device and the red LED (D5) turns on.

## Evaluating Other

## Transformer Configurations

The  EV  kit  PCB  layout  provides  an  easy  method  to reconfigure transformer T1 secondary windings for other configurations,  including  a  half-wave  rectifier,  voltage doubler,  bipolar  outputs,  and  other  full-wave-rectifier configurations. Use Table 4 to reconfigure the device for the appropriate output configuration.

## Output Snubbers

For  VDD  greater  than  27V,  use  a  simple  RC  snubber circuit on ST1 and ST2 to ensure that the peak voltage is  less  than  40V  during  switching.  Maxim  recommends installing  91 I 0603  surface-mount  resistors  at  R5  and R6, and 330pF 0603 surface-mount capacitors at C2 and C3 when operating under these conditions.

## MAX13256 Evaluation Kit

## Evaluates: MAX13256

<!-- image -->

Figure 1. MAX13256 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX13256 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX13256 Evaluation Kit

## Evaluates: MAX13256

Figure 3. MAX13256 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX13256 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX13256EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX13256 Evaluation Kit

## Evaluates: MAX13256

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.