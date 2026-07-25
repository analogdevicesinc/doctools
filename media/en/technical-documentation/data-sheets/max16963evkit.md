<!-- lastmod 2022-08-02 -->
## MAX16963 Evaluation Kit

## General Description

The MAX16963 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX16963 dual synchronous step-down converter IC with integrated high-side and low-side switches. The EV kit output is configured for 1.2V and 1.8V outputs up to 1.5A each. The EV kit  circuit  operates  at  the  IC's  internally  set  2.2MHz switching  frequency  and  features  PCB  pads  to  monitor the IC power-good output signals (PG1, PG2) and jump -ers to enable the EV kit outputs (EN1, EN2).

The  MAX16963  EV  kit  is  designed  to  operate  from  a single DC power supply that is capable of up to 5.5V at 3A for full range operation.  The EV kit is shipped with a MAX16963RAUEA/V+  IC  in  a  16-pin  TSSOP  package with exposed pad

## Features

- 2.7V to 5.5V Input Voltage Range
- Dual Outputs (1.2V at 1.5A, 1.8V at 1.5A)
- Fixed 2.2MHz Switching Frequency
- Forced-PWM and Skip-Mode Operation
- External Synchronization
- High Efficiency
- Power-Good Outputs (PG1, PG2)
- Overcurrent and Thermal-Shutdown Protection
- Fully Assembled and Tested

Evaluates: MAX16963

## Quick Start

## Required Equipment

- Adjustable DC power supply capable of 5.5V at 3A
- Two electronic loads capable of sinking up to 1.5A each.
- Four digital voltmeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed .

- 1) Verify that shunts are installed at jumpers EN1 (output 1 enabled), EN2 (output 2 enabled) and PWM (forcedPWM mode).
- 2) Connect the power-supply positive and ground termi -nals to the VSUP and PGND test points, respectively.
- 3) Connect electronic loads to the VOUT1, VOUT2 and PGND test points, observing the proper polarities.
- 4) Connect  voltmeters  to  the  VOUT1,  VOUT2,  and PGND test points.
- 5) Connect voltmeters to the PG1, PG2, and PGND test points.
- 6) Turn on the power supply.
- 7) Set the power-supply voltage to 5V.
- 8) Enable the electronic loads and set them to 1.5A.
- 9) Verify  that  the  voltmeter  connected  to  VOUT1  measures 1.2V.
- 10)  Verify that the voltmeter connected to PG1 measures approximately 5V.
- 11) -sures 1.8V.
- 12)   Verify that the voltmeter connected to PG2 measures approximately 5V

.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The  MAX16963  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  contains  all  the  components  necessary to evaluate the performance of the MAX16963 dual synchronous step-down converter IC. The IC is available in  a  16-pin  TSSOP  package  and  features  an  exposed pad  for  thermal  dissipation.  The  EV  kit  circuit  uses  a MAX16963R dual step-down converter IC to implement a  dual  step-down  synchronous  DC-DC  converter  circuit with  a  fixed  2.2MHz  switching  frequency.  The  EV  kit  is designed to operate from a single DC power supply that can provide up to 5.5V at 3A.

The IC features a fixed 2.2MHz switching frequency, an 8ms soft-start time, and a SYNC input that can be used to  synchronize  the  IC  to  frequencies  in  the  1.7MHz  to 2.4MHz range.

The  EV  kit  is  configured  for  1.2V  at  VOUT1  using resistors R6 and R8, and 1.8V at VOUT2 using resistors R11 and R12. Each output is capable of providing up to 1.5A output current. The EV kit can be configured to oper -ate in forced fixed-frequency PWM mode or low-quiescent current  skip  mode  using  a  jumper  at  PWM.  PCB  test points are available for monitoring the circuit power-good outputs (PG1, PG2) and the SYNC input.

## Configuring the Output Voltage (VOUT1, VOUT2)

The EV kit VOUT1 output is set to 1.2V using resistors R6 and R8, and the VOUT2 output is set to 1.8V using resistors R11 and R12.  To reconfigure the EV kit outputs, use the equations below:

<!-- formula-not-decoded -->

where V OUTS = 0.8V; R6, R8, R11, and R12 are in kΩ and VOUT\_ is in volts.

The external feedback resistive dividers must be frequency compensated  for  proper  operation.  Place  a  capacitor across  each  high-side  resistor  in  the  resistive-divider networks.  Use  the  following  equations  to  determine  the value of the capacitors:

<!-- formula-not-decoded -->

## Mode of Operation (PWM)

Jumper PWM configures the IC for forced-PWM or skipmode  operation.  Install  a  shunt  to  operate  the  EV  kit

in  forced-PWM  mode.  Remove  the  shunt  to  operate  in skip mode.

## Enable Control (EN1, EN2)

Jumpers EN1 and EN2 configure the on/off state of the EV kit outputs (VOUT1, VOUT2).  Install a shunt on an EN jumper to enable its respective output. Remove a shunt from and EN jumper to disable its respective output.  See Table 2 for proper EN configuration.

## Power-Good Outputs (PG1, PG2)

The EV kit circuit provides test points to monitor the status of the power-good outputs (PG1, PG2).  PG\_ outputs can be used as system-reset signals during power-up. A PG\_ is high when its respective VOUT\_ is between 92% and 110% of its programmed output voltage. PG\_ is pulled low when its respective VOUT\_ is below 92% of its nominal set  voltage  or  above  110%  of  its  nominal  set  voltage. PG1, PG2 are pulled up to VSUP using resistors R1 and R14, respectively.

## Synchronization Input (SYNC)

The EV kit's SYNC test point can be used to synchronize the IC with an external 1.7MHz to 2.4MHz digital clock. When SYNC is driven with an external digital clock, the IC synchronizes to the rising edge of the external clock.

The  digital  square-wave  clock  source  must  have  a frequency between 1.7MHz and 2.4MHz and comply with the following voltage levels:

- Logic-low = 0 to 0.4V
- Logic-high = 1.8V to VSUP

To  use  external  synchronization,  connect  an  external square-wave source to the SYNC and PGND pads.

## Table 1. Mode of Operation (PWM)

| SHUNT POSITION   | PWM PIN                         | MODE            |
|------------------|---------------------------------|-----------------|
| Installed        | Connected to VSUP               | Forced-PWM mode |
| Not installed    | Connected to ground through R10 | Skip mode       |

## Table 2. Enable Control (EN1, EN2)

| SHUNT POSITION   | EN_ PIN                             | VOUT_    |
|------------------|-------------------------------------|----------|
| Installed        | Connected to VSUP                   | Enabled  |
| Not installed    | Connected to ground through R13, R2 | Disabled |

│

## MAX16963 Evaluation Kit

## Component List

| DESIGNATORS   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1, C2        |     2 | 10μF ±10%, 10V X7R ceramic capacitors (1206) Murata GRM31CR71A106K                     |
| C3, C9        |     2 | 47μF ±20%, 6.3V X7R ceramic capacitors (1210) Murata GRM32ER70J476K                    |
| C5            |     1 | 1μF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A105K                       |
| C8            |     1 | 47μF ±20%, 10V aluminum electrolytic capacitor (5.3mm x 5.3mm) Panasonic EEE-HA1A470WR |
| C4, C10       |     0 | Not installed, ceramic capacitors (1210)                                               |
| C13           |     1 | 22pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H220J                       |
| C14           |     1 | 47pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H470J                       |
| EN1, EN2, PWM |     3 | 2-pin headers Sullins PEC36SAAN                                                        |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| Coilcraft       | 847-639-6400 | www.coilcraft.com      |
| Murata Americas | 770-436-1300 | www.murataamericas.com |
| Panasonic Corp  | 714-373-7366 | www.panasonic.com      |

Note:

Indicate that you are using the MAX16963 when contacting these component suppliers.

Evaluates: MAX16963

*EP = Exposed pad.

| DESIGNATORS             |   QTY | DESCRIPTION                                                                         |
|-------------------------|-------|-------------------------------------------------------------------------------------|
| L1, L2                  |     2 | 1μH, 3.5A inductors Coilcraft XAL4020-102                                           |
| PG1, PG2, SYNC          |     3 | Small red test points Keystone 5000                                                 |
| PGND (x2), PGND1, PGND2 |     4 | Black multipurpose test points, 63mil drill size Keystone 5011                      |
| R1, R9, R10, R14        |     4 | 20kΩ ±5% resistors (0603)                                                           |
| R2, R13                 |     2 | 100kΩ ±5% resistors (0603)                                                          |
| R6                      |     1 | 26.1kΩ ±1% resistor (0603)                                                          |
| R8, R11                 |     2 | 49.9kΩ 1% resistors (0603)                                                          |
| R12                     |     1 | 64.9kΩ ±1% resistor (0603)                                                          |
| R15                     |     1 | 10Ω ±5% resistor (0603)                                                             |
| U1                      |     1 | Dual 2.2MHz, low-voltage step- down converter (16 TSSOP-EP*) Maxim MAX16963RAUEA/V+ |
| VOUT1, VOUT2, VSUP      |     3 | Red multipurpose test points, 63mil drill size Keystone 5010                        |
| -                       |     3 | Shunts Kycon SX1100-B                                                               |
| -                       |     1 | PCB: MAX19693 EVKIT                                                                 |

│

Evaluates: MAX16963

Figure 1. MAX16963 EV Kit Schematic

<!-- image -->

## MAX16963 Evaluation Kit

Figure 2. MAX16963 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX16963

Figure 3. MAX16963 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16963 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

│

Figure 5. MAX16963 EV Kit PCB Layout-SGND Layer 3

<!-- image -->

## Evaluates: MAX16963

Figure 6. MAX16963 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX16963EVKIT# | EV Kit |

## MAX16963 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX16963