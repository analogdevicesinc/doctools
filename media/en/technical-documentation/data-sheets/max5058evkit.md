<!-- lastmod 2022-08-02 -->
## General Description

The MAX5058 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains a high-efficiency, 50W, isolated, synchronously rectified forward converter  in  the  industry-standard  1/8th  brick  pinout.  The  circuit  is  configured  for  a  +3.3V  output  voltage  and  provides up to 15A of output current. The circuit can be powered from either a +36V to +72V or -36V to -72V DC source in applications such as telecom/datacom (48V modules), industrial environments, or in automotive 42V power systems.

Using a clamped two-transistor power topology on the primary side and synchronous rectifiers on the secondary side achieves high efficiency up to 91% and is achieved at 9A. The efficiency improvement on the secondary side is  achieved through synchronous rectification using the MAX5058 secondary-side synchronous rectifier driver and feedback generator controller IC, which drives two n-channel MOSFETs. Additionally, the recovery of stored leakage and magnetizing inductance energy at the primary side contributes to the overall efficiency improvement. The primary side uses a MAX5051 parallelable, clamped, two-switch power-supply controller IC. Galvanic isolation up to 500V is achieved with an optocoupler, pulse-signal transformer, and planar surface-mount power transformer.

Operation at 250kHz allows the use of small magnetics and output capacitors. The EV kit provides cycle-bycycle current-limit protection. Additional steady-state fault protection is provided by an integrating fault protection  that  reduces  average dissipated power during continuous short-circuit conditions. The MAX5051 also has a programmable undervoltage lockout (UVLO). Multiple MAX5058 EV kits can be paralleled for increased power capability when high output current is required. Margin-up/down capability enables an increase or decrease in the output voltage. The EV kit demonstrates the MAX5058 look-ahead signal capability,  on-board error amplifier, and reference voltage source. Remote-load voltage sensing allows accurate voltage regulation at the load.

Warning: The MAX5058 EV kit is designed to operate with high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriate to working with highvoltage electrical equipment.

<!-- image -->

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

The user must supply an additional 100µF bulk storage capacitor between the EV kit's +VIN and -VIN input terminals before powering up or the MAX5058 EV kit may be damaged.

Features

- ♦ 50W High-Efficiency, Isolated Forward Converter
- ♦ Synchronously Rectified
- ♦ Differential Load-Share Bus for Paralleling
- ♦ ±36V to ±72V Input Range
- ♦ +3.3V Output at 15A
- ♦ VOUT Regulation Better than ±0.5% Over Line and Load
- ♦ 89% Efficiency at 48V and 9A
- ♦ Cycle-by-Cycle Current-Limit Protection
- ♦ Programmable Integrating Fault Protection
- ♦ 1/8th Brick Module Pinout
- ♦ 250kHz Switching Frequency
- ♦ Soft-Start
- ♦ Margin-Up/Down Capability
- ♦ Remote-Load Voltage Sensing
- ♦ On-Board Error Amplifier and Reference Voltage Source
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX5058EVKIT | 0°C to +50°C* | 28 TSSOP-EP  |

* With 100LFM airflow.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX5058 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1            |     1 | 100pF ±2%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101G       |
| C2            |     1 | 390pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H391J       |
| C3            |     1 | 4.7µF ±10%, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A475K         |
| C4            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475K        |
| C5, C40       |     2 | 4700pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H472K    |
| C6            |     1 | 0.1µF ±10%, 250V X7R ceramic capacitor (1206) TDK C3216X7R2E104K        |
| C7            |     1 | 0.22µF ±10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1C224K        |
| C8            |     1 | 4.7µF ±10%, 16V X7R ceramic capacitor (1206) TDK C3216X7R1C475K         |
| C9, C29       |     2 | 1µF ±10%, 16V X7R ceramic capacitors (0805) Taiyo Yuden EMK212BJ105KG   |
| C10, C11      |     2 | 0.47µF ±10%, 100V X7R ceramic capacitors (1206) TDK C3216X7R2A474K      |
| C12           |     1 | 1µF ±20%, 100V X7R ceramic capacitor (1210) TDK C3225X7R2A105M          |
| C13, C14, C15 |     3 | 270µF, 4V aluminum organic capacitors (X) Kemet A700X277M004ATE015      |
| C16           |     1 | 3.3µF ±10%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ335KG |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| C17           |     1 | 0.33µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A334K                 |
| C18, C24      |     2 | 1000pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H102J                 |
| C19, C30, C33 |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K                   |
| C20, C37      |     2 | 220pF ±10%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H221K                 |
| C21           |     1 | 4.7µF, 80V electrolytic capacitor (6.3mm x 5.8mm) Cornell-Dubilier AFK475M80D16B |
| C22           |     1 | 2200pF ±10%, 2kV X7R ceramic capacitor (1812) TDK C4532X7R3D222K                 |
| C23           |     1 | 1000pF, 250V X7Rceramic capacitor (0603) Murata GRM188R72E102K                   |
| C25           |     1 | 0.047µF ±10%, 100V X7R ceramic capacitor (0805) TDK C2012X7R2A473K               |
| C26, C31      |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K                 |
| C27           |     1 | 0.15µF ±10%, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ154KA          |
| C28           |     1 | 0.047µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E473K                |
| C32           |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E105K                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION          |   QTY | DESCRIPTION                                                                             |
|----------------------|-------|-----------------------------------------------------------------------------------------|
| C34                  |     1 | 330pF ±5%, 250V C0G ceramic capacitor (0603) TDK C1608C0G2E331J                         |
| C35, C36             |     2 | 1µF ±10%, 50V X7R ceramic capacitors (1206) TDK C3216X7R1H105K                          |
| C38                  |     1 | 0.068µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H683K                       |
| C39                  |     0 | Not installed, ceramic capacitor (0603)                                                 |
| D1                   |     1 | 150mA, 100V Schottky diode (SOD-123) Vishay BAT46W                                      |
| D2, D3               |     2 | 1A, 100V Schottky diodes (SMA) Diodes Incorporated B1100                                |
| D4                   |     1 | 3A, 20V Schottky diode (SMA) Diodes Incorporated B320A                                  |
| D5, D6, D8, D10, D11 |     5 | 250mA, 100V fast-switching diodes (SOD-323) Diodes Incorporated 1N4448HWS               |
| D7, D9               |     2 | 100mA, 30V Schottky diodes (SOD-523) Central Semiconductor CMOSH-3                      |
| L1                   |     1 | 2.4µH, 20A inductor Payton 50661 or Coilcraft A9860-B* or Pulse Engineering PA1494-242* |
| N1, N2               |     2 | 100V, 7.3A n-channel MOSFETs (SO-8) International Rectifier IRF7495                     |
| N3, N4               |     2 | 30V, 20A n-channel MOSFETs (SO-8) International Rectifier IRF7832                       |
| N5                   |     1 | 170mA, 100V n-channel MOSFET (SOT23) Fairchild BSS123                                   |
| R1, R2               |     2 | 19.1k Ω ±0.1%, 25ppm resistors (0603) Panasonic ERA3EEB1912V                            |
| R3                   |     1 | 2.2k Ω ±5% resistor (0603)                                                              |

## MAX5058 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| R4            |     1 | 1M Ω ±1% resistor (0603)                                     |
| R5            |     1 | 38.3k Ω ±1% resistor (0603)                                  |
| R6            |     1 | 1M Ω ±1% resistor (0805)                                     |
| R7, R35       |     2 | 0 Ω ±5% resistors (0603)                                     |
| R8, R9        |     2 | 8.2 Ω ±5% resistors (0603)                                   |
| R10           |     1 | 20 Ω ±5% resistor (1206)                                     |
| R11           |     1 | 360 Ω ±5% resistor (0603)                                    |
| R12           |     1 | 34.8k Ω ±0.5%, 100ppm resistor (0603) Panasonic ERA3EKD3482V |
| R13           |     1 | 47 Ω ±5% resistor (1206)                                     |
| R14           |     1 | 270 Ω ±5% resistor (0603)                                    |
| R15           |     1 | 31.6k Ω ±1% resistor (0603)                                  |
| R16           |     1 | 10.5k Ω ±1% resistor (0603)                                  |
| R17           |     1 | 0.027 Ω ±1% 0.5W resistor (1206) IRC LRF-1206-01-R027-F      |
| R18           |     1 | 4.7 Ω ±5% resistor (1206)                                    |
| R19           |     1 | 475 Ω ±1% resistor (0805)                                    |
| R20, R36      |     2 | 0.004 Ω ±1% resistors (1206) IRC LRF-1206-01-R004-F          |
| R21           |     1 | 24.9k Ω ±1% resistor (0805)                                  |
| R22           |     1 | 15k Ω ±5% resistor (1206)                                    |
| R23, R24      |     2 | 10 Ω ±5% resistors (0805)                                    |
| R25           |     1 | 47.5k Ω ±1% resistor (0603)                                  |
| R26           |     1 | 0.002 Ω ±5% resistor (2512) IRC LRF-2512-01-R002-J           |
| R27           |     1 | 10 Ω ±5% resistor (0603)                                     |
| R28           |     1 | 301 Ω ±1% resistor (0805)                                    |
| R29           |     1 | 1 Ω ±5% resistor (0603)                                      |
| R30           |     1 | 2k Ω ±1% resistor (0603)                                     |
| R31           |     1 | 220 Ω ±5% resistor (0603)                                    |
| R32           |     1 | 698k Ω ±1% resistor (0805) Panasonic ERJA6ENF6983V           |
| R33           |     1 | 604k Ω ±1% resistor (0805) Panasonic ERJ6ENF6043V            |
| R34           |     1 | 220k Ω ±5% resistor (0603)                                   |
| R37, R38      |     2 | 10 Ω ±5% resistors (0603)                                    |
| R39           |     1 | 2k Ω ±5% resistor (1206)                                     |
| R40           |     1 | 32.4k Ω ±1% resistor (0603)                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5058 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| T1            |     1 | Planar transformer Pulse Engineering PA0370                                              |
| T2            |     1 | Drive transformer Pulse Engineering PE-68386                                             |
| U1            |     1 | Parallelable, clamped, two-switch power-supply controller MAXIM MAX5051AUI (28 TSSOP-EP) |
| U2            |     1 | High-voltage optocoupler (Ultra-small flat-lead) CEL/NEC PS2913-1-M                      |

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                                                                                                   |
|--------------------|-------|---------------------------------------------------------------------------------------------------------------|
| U3                 |     1 | Secondary-side synchronous rectifier driver and feedback generator controller MAXIMMAX5058EUI(28-pinTSSOP-EP) |
| +VIN, -VIN, ON/OFF |     3 | 0.040in PC pins                                                                                               |
| VOUT, SGND         |     2 | 0.062in PC pins                                                                                               |
| None               |     1 | MAX5058 PC board                                                                                              |

## Component Suppliers

| SUPPLIER                                 | PHONE        | FAX          | WEBSITE                  |
|------------------------------------------|--------------|--------------|--------------------------|
| CEL/NEC; California Eastern Laboratories | 800-997-5227 | 408-588-2213 | www.cel.com              |
| Coilcraft                                | 847-639-6400 | 847-639-1469 | www.coilcraft.com        |
| Cornell Dubilier                         | 508-996-8564 | 508-336-3830 | www.cornell-dubilier.com |
| Diodes Inc                               | 805-446-4800 | 805-446-4850 | www.diodes.com           |
| Fairchild                                | 888-522-5372 | -            | www.fairchildsemi.com    |
| International Rectifier                  | 310-322-3331 | 310-726-8721 | www.irf.com              |
| IRC                                      | 361-992-7900 | 361-992-3377 | www.irctt.com            |
| Kemet                                    | 864-963-6300 | 864-963-6322 | www.kemet.com            |
| Murata                                   | 770-436-1300 | 770-436-3030 | www.murata.com           |
| Panasonic                                | 714-373-7366 | 714-737-7323 | www.panasonic.com        |
| Payton Planar Magnetics Ltd.             | 561-969-9585 | 561-989-9587 | www.paytongroup.com      |
| Pulse Engineering                        | 858-674-8100 | 858-674-8262 | www.pulseeng.com         |
| Taiyo Yuden                              | 800-348-2496 | 847-925-0899 | www.t-yuden.com          |
| TDK                                      | 847-803-6100 | 847-390-4405 | www.component.tdk.com    |
| Vishay                                   | -            | -            | www.vishay.com           |

Note: Indicate that you are using the MAX5058 when contacting these component suppliers.

## Quick Start

## Required Equipment

- ± 36V to ± 72V power supply capable of providing up to 3A
- Voltmeter
- A fan to provide at least 100LFM airflow for extended operation at 15A

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 100µF, 100V bulk storage capacitor to be connected to the input terminals of the EV kit

The MAX5058 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

<!-- image -->

## No Load Output

- 1) Connect a voltmeter to the VOUT and SGND pins to measure the output voltage.
- 2) Connect the positive terminal of a 36V to 72V power supply to the +VIN terminal. Connect the power supply's ground to the -VIN terminal.
- 3) Turn on the power supply above 36V and verify that the voltmeter reads +3.3V.

Note: For improved voltage regulation at the load, connect a 22-gauge twisted-pair cable from the VS+ and VS- terminals of the MAX5058 EV kit, to the load positive  and  ground terminals, respectively. Connect the VOUT and SGND terminals to the load with power cables sized to carry the full load current, up to 15A.

## Detailed Description

The MAX5058 EV kit is a 50W, isolated, synchronously rectified forward converter that provides +3.3V at up to 15A output. The circuit can be powered from a ± 36V to ± 72V DC source. The user must supply an additional 100µF bulk storage capacitor between the +VIN and -VIN input terminals before powering up or the MAX5058 EV kit may be damaged. This capacitor should be rated for 100V and be able to carry 1.5A of ripple current. Lower ripple-current-rated capacitors should be acceptable for short-term operation.

The 50W forward converter achieves high efficiency by using a clamped two-transistor power topology at the primary input and synchronous rectifiers on the secondary output side. A MAX5051 parallelable, clamped, two-switch, power-supply controller IC switches the two primary-side, 100V-rated transistors, N1 and N2. A MAX5058 secondary-side synchronous rectifier driver and feedback generator controller IC drives two surface-mount SO-8 n-channel 30V-rated MOSFETs configured as synchronous rectifiers on the secondary side. MOSFET N3 provides secondary-side rectification and MOSFET N4 synchronously rectifies the current flowing through freewheeling diode D4.

The PC board footprint is minimized by using surfacemount SO-8 n-channel MOSFETs on the primary side. Cycle-by-cycle current limiting protects the converter against short circuits at the output. For a continuous short circuit at the output, the MAX5051's fault integration feature provides hiccup fault protection, thus greatly minimizing excessive temperature rise. Current-sense resistor  R17 senses the current through the primary of transformer T1 and both primary-side transistors N1 and N2 are turned off when the trip level of 154mV (typ) is reached. The programmable integrating fault protection allows transient overload conditions to be ignored and is configured by resistor R4 and capacitor C7.

<!-- image -->

## MAX5058 Evaluation Kit

The planar surface-mount transformer features a bias winding that, along with diode D5, current-limiting resistor R18, and reservoir capacitor C21, powers the MAX5051 once the input voltage is stable. Upon initial input voltage application, bootstrap resistor R22 and capacitor C21 enable the MAX5051 to startup within approximately 70ms. No reset windings are required on the transformer with a clamped two-transistor power topology, simplifying transformer design and maximizing the available copper window in the transformer. When both external primary-side transistors turn off, Schottky diodes D2 and D3 recover the magnetic energy stored in the core and feed it back to the input supply. The transformer provides galvanic isolation up to 500V.

On the transformer's secondary side, the MAX5058 built-in  error  amplifier,  reference  voltage  source,  and feedback resistors R1 and R2 provide voltage feedback to the primary side through optocoupler U2.

Resistor R12 sets the reference voltage for the MAX5058 to 1.657V. Margin-up/down capability enables an increase or decrease in the output voltage by 5% and is configurable by replacing resistors R32 and R33. On the primary side, the MAX5051 receives the voltage-feedback signal from biasing resistor R3 and compensation resistor/capacitor networks R11/C17 and C24 connected to optocoupler U2.

Pulse transformer T2 provides a galvanically isolated signal to the MAX5058 secondary-side synchronous rectifier driver circuit from the MAX5051 PWM primaryside signal. This look-ahead signal avoids large current spikes resulting from a shorted transformer secondary when the freewheeling synchronous rectifier (N4) and primary-side MOSFETs concurrently conduct.

The MAX5051 controller switches at a 250kHz frequency set by resistor R21 and capacitor C1. The duty cycle is varied to control energy transfer to the output. The maximum duty cycle is 50% for the EV kit's synchronously rectified forward converter design and is limited by the MAX5051.

The MAX5058 EV kit features output-voltage soft-start, thus eliminating any output-voltage overshoots. Softstart  allows  the  output  voltage  to  slowly  ramp  up  in  a controlled manner within approximately 3ms. Capacitor C5 sets the soft-start time. The brownout UVLO threshold voltage is set by resistors R5 and R6. This prevents the power supply from operating below the minimum input supply voltage.

Multiple MAX5058 EV kits can be easily paralleled for increased power capabilities when high output current is  required.  Parallel-connected resistors R20 and R36 facilitate  current  sharing  when  multiple  MAX5058 EV

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5058 Evaluation Kit

kits  are  connected in parallel. Test points TP7 (SFP) and TP8 (SFN) provide access to the MAX5058 IC's simple 2-wire, differential current-share bus (contact factory for more details).

Remote-load voltage sensing is provided by interfacing points VS+ and VS-, which use the MAX5058 built-in remote-sense amplifier. A 22-gauge twisted-pair cable should be used for connecting the remote-load voltagesensing terminals. This will provide accurate voltage regulation at the load when long leads are used to provide power from the EV kit to the load. If the load is located next to the MAX5058 EV kit, connect VS- to SGND and connect VS+ to the VOUT pin.

The output voltage can be margined up or down (increased or decreased) 5% by applying a logic-high signal at the TPMU (MRGU) test point and TPMD (MRGD) test point, respectively. Resistors R32 and R33 set the margin up and down at 5%, respectively.

A secondary-side thermal overtemperature warning is provided by the MAX5058 through an open-drain thermal flag signal available at test point TP2. Use test point TP3 (SGND) as a secondary-side ground path for TP2.

The 4-layer PC board layout and component placement has been designed to have an industry-standard 1/8th brick pinout. The actual PC board dimensions of the power-supply board are somewhat larger than that of 1/8th brick power supplies (58.42mm x 41.65mm). Both outer layers of the PC board are 2oz copper for increased current-carrying capability.

## Evaluating Other Output Voltages, Current Limits, Soft-Starts, UVLOs, and OutputVoltage Margining Up/Down

## VOUT Output Voltage

The MAX5058 EV kit's output (VOUT) is configured to +3.3V by feedback resistors R1, R2, and the MAX5058 reference voltage set by resistors R12 and R32 (1.657V as configured). To generate output voltages other than +3.3V (from +2.5V to +3.5V, limited by the output capacitor voltage rating), select different voltagedivider resistors (R1, R2) and consult the MAX5058 data sheet's Calculation Procedure for Output-VoltageSetting Resistors and Margining section. Resistor R1 is typically chosen to be less than 25k Ω .  Using the desired output voltage, resistor R2 is then found by the following equation:

<!-- formula-not-decoded -->

where V V as configured IREF 1 675 = . ( ).

Resistors R1 and R2 preferably should have 0.1% tolerance. Additionally, U2 and resistor R19 limit the minimum output voltage (VOUT) to +2.5V. The maximum output current should be limited to less than 15A. Refer to the MAX5058 data sheet's Calculation Procedure for Output-Voltage-Setting Resistors and Margining section for additional information.

For improved point-of-load voltage regulation, connect the VS+ and VS- terminals to the load's positive and negative input power terminals, respectively. A 22-gauge twisted-pair wire should be used for this dedicated connection. Connect the appropriately sized main power cables from the EV kit's VOUT and SGND pins.

## Current Limiting

The MAX5058 EV kit features cycle-by-cycle current l i miting  of  the  transformer  primary  current.  The MAX5051 controller turns off both external primary-side switching transistors (N1, N2) when the voltage at the CS pin of the MAX5051 reaches 154mV (typ). Currentsense resistor R17 (R17 = 27m Ω ) limits the peak primary  current to approximately 5.7A (154mV/0.027 Ω ≈ 5.7A). This limits short-circuit current on the secondary output (VOUT) to 20A with a 50m Ω short  at  the  terminals (see Figure 7). To evaluate lower current limits, current-sense resistor R17 must be replaced with a different value surface-mount resistor (1206 size) as determined by the following equation:

<!-- formula-not-decoded -->

where VSENSE = 0.154V, NS = 2, NP = 8, and IOUTMAX = maximum DC output current (15A or less). Note that some fine tuning may be required when selecting the current-limit  resistor.  There  are  errors  introduced  as  a result of the presence of the transformer, output inductor ripple current, and propagation delays.

## Soft-Start

The MAX5051 controller limits the output voltage rate of rise with a soft-start feature. Capacitor C5 sets the ramp time to 91µs. To evaluate other soft-start ramp times replace capacitor C5 with another surface-mount capacitor (0603 size) as determined by the following equation:

<!-- formula-not-decoded -->

where softstart\_time is the desired soft-start time in seconds. Consult the MAX5051 data sheet for additional information on the soft-start feature.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Undervoltage Lockout (UVLO)

The MAX5058 EV kit features a UVLO circuit that prevents operation below the programmed input-supply startup voltage. Resistors R5 and R6 set the EV kit's input voltage brownout UVLO. To evaluate other input UVLO voltages, replace resistor R6 with another surface-mount resistor (0805 size). Using the desired startup voltage, resistor R6 is then found by the following equation:

<!-- formula-not-decoded -->

where VINSTARTUP is the desired startup voltage at which the EV kit starts and resistor R5 is typically 38.3k Ω . Consult the MAX5051 data sheet for additional information on the UVLO feature.

## Synchronously Rectified Forward DC-DC Converter Waveforms

<!-- image -->

Figure 1. Efficiency vs. Output Current for Nominal (48V) Input Voltage at TA = +25°C

<!-- image -->

Figure 3. Turn-On Transient at Full Load (Resistive Load) (4ms/div)

<!-- image -->

Figure 2. Power Dissipation vs. Load Current for Nominal (48V) Input Voltage at TA = +25°C

<!-- image -->

Figure 4. Turn-On Transient at Zero Load (4ms/div)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5058 Evaluation Kit

## VOUT Margining Up and Down

The MAX5058 EV kit features a margin-up/down capability to increase or decrease the output voltage by 5%. The percentage of margining is configurable by replacing resistors R32 and R33 on the secondary side. To increase the output voltage, apply a logic-high signal (2.4V up to 4V) at the TPMU (MRGU) test point to increase the output voltage or apply a logic-high signal (2.4V up to 4V) at the TPMD (MRGD) test point to decrease the output voltage. Refer to the MAX5058 data sheet for more information on the voltage-margining feature.

## MAX5058 Evaluation Kit

<!-- image -->

Figure 5. Output-Voltage Response to Step Change in Load Current (50%-75%-50% of IOUT(MAX): di/dt = 5A/ms) (7.5A11.25A-7.5A)

<!-- image -->

Figure 7. Load Current (15A/div) as a Function of Time when the Converter Attempts to Turn On into a 0.050 Ω (Also Acting as the Current-Sense Resistor) Short Circuit

Figure 6. Output-Voltage Ripple at the Nominal Input Voltage and Rated Load Current (50mV/div)

<!-- image -->

Figure 8. MOSFET N1 Source to Primary Ground (-VIN) Waveform

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5058 Evaluation Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX5058 Evaluation Kit

<!-- image -->

Figure 10. MAX5058 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 12. MAX5058 EV Kit PC Board Layout-Inner Layer, GND Plane

Figure 11. MAX5058 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 13. MAX5058 EV Kit PC Board Layout-Inner Layer, VCC Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 14. MAX5058 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX5058 Evaluation Kit

Figure 15. MAX5058 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.