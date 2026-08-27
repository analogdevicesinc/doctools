<!-- lastmod 2019-05-31 -->
<!-- image -->

## FEATURES

- ·JFETSwitchesRatherThan CMOs
- HighlyResistant to Static Discharge Damage
- Low"ON" Resistance .... 2200Typ
- No SCR Latch-UpProblems
- Digital InputsCompatibleWithTTLand CMos
- 125°CTemperatureTestedDiceAvailable
- MUX-08 Pin Compatible With DG508,HI-508A,IH5108, IH6108,LF11508/12508/13508,AD7506
- and MUX08BRC/883 is Obsolete

## ORDERINGINFORMATION

See the updated Ordering Guide section at the end of this data sheet for ordering information.

Several products are now obsolete, including the MUX-24 and MUX08BRC/883.

For products that are available as of the current revision of this data sheet, see the updated Outline Dimensions and Ordering Guide sections.

## GENERALDESCRIPTION

TheMUx-08isamonolithiceight-channelanalogmultiplexerwhichconnectsasingleoutputtooneoftheeight analog inputs depending upon the state of a 3-bit binary address.

TheMUx-24isamonolithicfour-channeldifferentialanalog multiplexerconfigured ina doublepole,four-position(plus OFF)electronicswitcharray.Atwo-bitbinaryinputaddress connectsapairofindependentanaloginputsfromeach four-channelinputsectiontothecorrespondingpairof independentanalogoutputs.

All switches in the MUX-08/MUX-24 are turned OFF by package selectfunction.

Rev. C

## 8-Chan JFET Analog Multiplexers (Overvoltage &amp; Power Supply Loss Protected)

[MUX-08](https://www.analog.com/MUX08?doc=MUX08.pdf)

FabricatedwithPrecisionMonolithics'highperformance Bipolar-JFET technology, these devices offer low, constant "ON"resistance, low leakage currents and fast settling time withlowcrosstalktosatisfyawidevarietyofapplications. Thesemultiplexersdonotsufferfromlatch-uporstatic chargeblow-outproblemsassociatedwithsimilarCMoS parts.Thedigitalinputs are designed tooperatefromboth TTLandCMOSlevelswhilealwaysprovidingadefinite break-before-makeactionwithouttheneedforexternalpullupresistorsoverthefulloperatingtemperaturerange.

## The MUX-24 and MUX08BRC/883 are no longer available.

<!-- image -->

## MUX-08

## ABSOLUTE MAXIMUMRATINGS (Note 1)

| Operating TemperatureRange                             |
|--------------------------------------------------------|
| MUX-08/24-AQ,BQ,BRC -55°℃ to +125℃                     |
| MUX-02/24-EQ,FQ ...-25℃to+85°℃                         |
| MUX-08/24-EP ..0Cto+70°℃                               |
| MUX-08/24-FP,FS -40℃ to +85℃                           |
| Junction Temperature (T) -65°℃ to +150℃                |
| StorageTemperatureRange -65°℃to+150°℃                  |
| P-Suffix......... -65℃to +125℃                         |
| Lead Temperature(Soldering,60sec) 300℃                 |
| MaximumJunctionTemperature... 150℃                     |
| V+ Supply to V-Supply .36V                             |
| Logic I nput. Vol.tage....... (-4V or V-) to V+ Supply |

Analog Input Voltage... V-- Supply -20V to V+ Supply +20V Maxim.u. Curent. Througgh .Any Pin..... 2.smA.

| PACKAGE TYPE           |   BJA (Note 2) |    | UNITS   |
|------------------------|----------------|----|---------|
| 16-Pin Hermetic DIP(Q) |            100 | 16 | CW      |
| 16-Pin Plastic DIP (P) |             82 | 39 | CW      |
| 20-Contact LCC (RC)    |             98 | 38 | CW      |
| 16-Pin SO (S)          |            111 | 35 | CW      |

## NOTES:

- 1.AbsolutemaximumratingsapplytobothDiCEandpackagedparts,unless otherwisenoted.
- 2.O.Ais specified for worst casemounting conditions,i.e.,Ois specified for devicesolderedtoprintedcircuitboardforSOpackage.

ELECTRICAL CHARACTERISTICS at V+ =+15V, V-=-15V and TA= 25°C, unless otherwise noted.

|                                                               |                |                                                       |               | MUX-08A/E   | MUX-08A/E   | MUX-08A/E   | MUX-08B/F   | MUX-08B/F   | MUX-08B/F   |       |
|---------------------------------------------------------------|----------------|-------------------------------------------------------|---------------|-------------|-------------|-------------|-------------|-------------|-------------|-------|
| PARAMETER                                                     | SYMBOL         | CONDITIONS                                            |               | MIN         | TYP         | MAX         | MIN         | TYP         | MAX         | UNITS |
| “ON"Resistance                                                | RON            | Vs≤10V,Is≤200μA                                       |               | 一           | 220         | 300         | 一           | 300         | 400         |       |
| Ron With Applied Voltage                                      | △RON           | -10V ≤Vs≤10V, Is= 200μA                               |               |             | 1           | 5           | 二           | 3           | 1           | %     |
| Ron Match Between Switches                                    | RoN Match      | Vs=0V,Is= 200μA                                       |               |             | 7           | 15          |             | 6           | 20          | %     |
| AnalogVoltage Range                                           | VA             | (Note 6)                                              |               | +10 -10     | + 10.4 -15  | 二           | +10 -10     | + 10.4 -15  | 一 二         | V     |
| Source Current(Switch“OFF")                                   | IS(OFF)        | Vs= 10V, VD=-10V (Note 1)                             |               |             | 0.01        | 1.0         | -           | 0.01        | 2.0         | nA    |
| Drain Current (Switch“OFF")                                   | ID(OFF)        | Vs= 10V,VD=-10V (Note 1)                              | MUX-08 MUX-24 | 一 一         | 0.05 0.1    | 1.0 1.0     | 一           | 0.05 0.1    | 2.0 2.0     | nA    |
| Leakage Current(Switch"ON")                                   | 1D(ON) +ISiON) | Vo= 10V (Note 1)                                      | MUX-08 MUX-24 | 一           | 0.1 0.05    | 1.0 1.0     | 一 一         | 0.1 0.05    | 2.0 2.0     | nA    |
| Digital Input Current                                         | IN             | ViN= 0.4V to 15V                                      |               | 二           | 1           | 10          | 二           | 1           | 10          | μA    |
| Digital“O"Enable Current                                      | IINL (EN)      | VEN = 0.4V                                            |               | 二           | 4           | 10          | 二           | 4           | 10          | μA    |
| Digital Input Capacitance                                     | CDIG           |                                                       |               | 一           | 3           | 二           | 一           | 3           | 一           | pF    |
| Switching Time (tTRAN)                                        | tPHL tPLH      | (Test Circuit) (Notes 2,5)Figure 1                    |               |             | 1.5 1.0     | 2.1 1.3     | 一 一         | 1.5 1.0     | 2.1 1.3     | sn    |
| Output Settling Time                                          | ts             | 10V Stcp to 0.10% 10V Step to 0.05% 10V Step to 0.02% |               | 一 一         | 2.2 2.7 3.4 | - 一         | 一 一 一       | 2.2 2.7 3.4 | 一 一         | μS    |
| Break-Before-MakeDelay                                        | tOPEN          | Figure 3(Test Circuit)                                |               |             | 0.8         |             | 一           | 1.0         | 二           | μS    |
| Enable Delay "ON"                                             | tON (EN)       | (Note 5)Figure 2 (Test Circuit)                       |               | 一           | 1           | 2           |             | 1           | 2           | μS    |
| Enable Delay“OFF"                                             | tOFF (EN)      | (Note 5)Figure 2 (Test Circuit)                       | MUX-08 MUX-24 |             | 0.1 0.2     | 0.4 0.5     | 一           | 0.2 0.3     | 0.4 0.6     | μS    |
| "OFF"Isolation                                                | ISOOFF         | (Note 4)Figure 5 (Test Circuit)                       | MUX-08 MUX-24 | 一 二         | 60 66       |             | 一           | 60 66       | - 二         | dB    |
| Crosstalk                                                     | CT             | (Note 3)Figure 4 (Test Circuit)                       | MUX-08 MUX-24 | 一 一         | 70 76       | 一           |             | 70 76       | 一           | dB    |
| Source Capacitance                                            | Cs (OFF)       | Switch"OFF", Vs = OV, VD= 0V                          | MUX-08 MUX-24 | 二           | 2.5 2       | 一           | 一           | 2.5 2       | 一 二         | pF    |
| Drain Capacitance                                             | CDIOFF)        | Switch “OFF", Vs = OV, VD = 0V                        | MUX-08 MUX-24 | 一 二         | 7 4         | 一 一         | 一 一         | 7 4         | 一 一         | pF    |
| Input to Output Capacitance                                   | CDS:OFF)       | (Note 4)                                              | MUX-24 MUX-08 | 一 一         | 0.15 0.3    | 一 一         | 一 一         | 0.15 0.3    | 二           | pF    |
| Positive Supply Current (AllDigital Inputs Logic“0"or"1")     | 1+             | V+= 15V V+=5V                                         |               | 一 一         | 10 8        | 12 一        | 一           | 6 5         | 12 一        | mA    |
| Negative Supply Current (All Digital Inputs Logic “0o" or"1") |                | V+ =-15V V+=-5V                                       |               | 一 一         | 3.0 2.5     | 3.8         | 一 一         | 2.0 1.8     | 3.8 一       | mA    |

- 5.Sample tested.

<!-- image -->

## ELECTRICAL CHARACTERISTICS at V+ = 15V, V-= -15V and -55°C ≤ TA≤ 125° C, unless otherwise noted.

| 425  MUX-08A  MUX-08B  ，  PARAMETER  SYMBOL CONDITIONS  MIN  TYP  MAX  MIN  TYP  MAX  SLINN  "ON"Resistance  RON  Vs≤10V,1s ≤200μA  二  二  二  二  500  RonWithAppliedVoltage  △RON  -10V ≤Vs ≤ 10V, Is = 200μA  二  1.5  一  一  4.5  一  。  %  Ron Match Between Switches  Ron Match Vs=0V,Is=200μA  二  10  二  二  15  二  %  Analog Voltage Range  VA  (Note 6)  +10  + 10.4  一  +10  + 10.4  一  V  -10  -15  -10  -15  一  Source Current(Switch“OFF")  Is (OFF)  Vs= 10V, V = -10V (Notes 1, 7)  二  二  25  二  二  50  nA  Drain Current (Switch “OFF")  ID(OFF)  Vs= 10V, V = -10V  MUX-08  一  100  一  一  500  nA  (Notes 1, 7)  MUX-24  一  二  50  一  500  LeakageCurrent(Switch"ON")  ID(ON)  +ls(ON)  V= 10V (Notes 1,7)  MUX-08  MUX-24  一  一  一  100  50  一  一  一  500  500  nA  Digital"1"Input Voltage  VINH  (Note 6)  2  二  2  V  Digital"O"Input Voltage  VINL  (Note 6)  二  二  0.7  一  二  0.7  V  Digital Input Current  IiN  VIN=0.4Vto15V  一  二  20  二  二  20  MA  Digital"O"Enable Current  INL (EN)  VEN=0.4V  二  一  20  一  二  20  μA  AllDigital Inputs Logic  Positive Supply Current  I+  "0" or "1”  一  15  一  15  mA  All Digital Inputs  Negative Supply Current  —  Logic "0" or ""  5  5  mA   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

ELECTRICAL CHARACTERISTICS at V+ = 15V, V- = -15V and -25°C ≤ TA +85°C for MUX-08EQ/FQ and MUX-24EQ/FQ: 0°C≤ TA≤ +70°C for MUX-08EP and MUX-24EP; -40°C≤ T,≤ +85°C for MUX-08FP/FS and MUX-24FP/FS, unless otherwise noted.

|                             |                |                                     | MUX-08E       | MUX-08E            | MUX-08E   | MUX-08F   | MUX-08F    | MUX-08F   |       |
|-----------------------------|----------------|-------------------------------------|---------------|--------------------|-----------|-----------|------------|-----------|-------|
| PARAMETER                   | SYMBOL         | CONDITIONS                          |               | MIN TYP            | MAX       | MIN       | TYP        | MAX       | UNITS |
| "ON"Resistance              | RON            | Vs≤10V. 1s≤200μA                    |               | 二                  | 二 400     | 一         | 二          | 500       | 0     |
| RonWithAppliedVoltage       | RON            | -10V ≤Vs ≤ 10V, Is= 200μA           |               | 一 1.5              | 一         |           | 4.5        |           | %     |
| RonMatchBetweenSwitches     | RoN Match      | Vs=0V,Is=200μA                      |               | 一                  | 10 二      | 一         | 15         |           | %     |
| Analog Voltage Range        | VA             | (Note 6)                            |               | +10 -10 + 10.4 -15 | 一         | +10 -10   | + 10.4 -15 | 一 二       | V     |
| Source Current(Switch“OFF") | IS(OFF)        | Vs = 10V. VD= -10V (Notcs 1,7)      |               | 二                  | 二 10      | 二         |            | 10        | nA    |
| Drain Current (Switch“OFF") | I(OFF)         | Vs=10V,VD=10V (Notes 1, 7)          | MUX-08 MUX-24 | 一                  | 100 一 50  |           | 一 一        | 100 50    | nA    |
| Leakage Current(Switch“ON") | lD(ON) +1s(ON) | V= 10V (Notes 1, 7)                 | MUX-08 MUX-24 | 一 一 一 二            | 100 50    | 二 一       | 二 一        | 100 50    | nA    |
| Digital “1" Input Voltage   | VINH           | (Note 6)                            |               | 2                  | 一 二       | 2         | 一          | 二         | V     |
| Digital“O"Input Voltage     | VINE           | (Note 6)                            |               | 二                  | 二 0.8     | 二         |            | 0.8       | V     |
| Digital Input Current       | IIN            | VIn = 0.4V to 15V                   |               | 二                  | 20        |           | 一          | 20        | MA    |
| Digital"O"Enable Current    | IINL(EN)       | VEN = 0.4V                          |               | 一                  | 20        |           |            | 20        | μA    |
| Positive Supply Current     | I+             | All Digital Inputs Logic "O” or“1”  |               |                    | 一 15      | 一         | -          | 15        | mA    |
| Negative Supply Current     |                | All Digital Inputs Logic "o" or "1" |               |                    | 5         |           |            | 5         | mA    |

## NOTES:

- 1.Conditionsapplied toleakagetestsinsureworstcaseleakages.Exceed-
- 2.F R=10MΩ,C=10pF.
- 3.Crosstalkismeasuredbydrivingchannel8withchannel4"ON". RL= 1MQ,CL=10pF,Vs=5V RMS,f=500kHz.
- 4."OFF"isolation ismeasured by drivingchannel8with ALLchannels"OFF". RL=1kfl,CL=10pF,Vs=5V RMS,f=500kHz.Cpsis computed from the OFFisolationmeasurement.
- 6.Guaranteed by leakage currenl and Ronlests,
- 7.Leakage tests are performed only on military temperature grades at 125°C.

## MUX-08

## DICECHARACTERISTICS(125°CTESTEDDICEAVAILABLE)

<!-- image -->

## MUX-08

DIESIZE0.093X0.059 inch,5487sq.mil: (2.362×1.500mm,3543sq.mm)

- 1.A0

9. S8

2. ENABLE

10. S7

3. V-(SUBSTRATE)

11. S6

4. S1

12.S5

- 5.S2

13.V+

6. S3

14.GND

- 7.S4

15.A2

8. DRAIN

16.A1

WAFERTESTLIMITS atV+=15V,V-=-15V,TA=25°C,unlesSotherwisenoted.(Note1)

| MUX-24NT   | MUX-24N   | MUX-24G   |
|------------|-----------|-----------|

## NOTE:

Electrical tests are performed at wafer probe to the limits shown.Due to variations in assemblymehtods and normal yield loss, yield after packaging is not guaranteed for standard product dice.Consult factory to negotiate specifications based on dicelot qualification through sample lot assembly and testing.

TYPICALELECTRICALCHARACTERISTICSatV+=15V,V-=-15VandTA=25°CforMUX-08/24N&amp;G,TA=125°Cfor MUx-08/24NT,unlessotherwisenoted.

| MUX-24NT   | MUX-24N   | MUX-24G   |
|------------|-----------|-----------|

## NOTES:

1.Thedatashownisextrapolatedfrommeasurementsmadeonthe packaged devices.

2. Guaranteed by leakage current and Ron tests.

MUX-08 LOGIC STATE

| A2   | A1   | Ao   | EN   | "ON" CHANNEL   |
|------|------|------|------|----------------|
| X    |      |      | L    | NONE           |
| L    | L    | L    | H    | 1              |
| L    | L    | H    | H    | 2              |
| L    | H    | L    | H    | 3              |
| L    | H    | H    | H    | 4              |
| H    | L    | L    | H    | 5              |
| H    | L    | H    | H    | 6              |
| H    | H    | L    | H    | 7.             |
| H    | H    | H    | H    | 8              |

## TYPICAL PERFORMANCE CHARACTERISTICS (Applies to all grades, unless otherwise noted.)

MUX-08 BREAK-BEFORE-MAKE SWITCHING

<!-- image -->

RL=1kS2,CL=10pF,V1.8=10V

TIME =200ns/DIV

VOLTAGE=2V/DIV

MUX-08 SMALL-SIGNAL SWITCHING WITH FILTERING

<!-- image -->

RL=1MS2,CL=500pF,V1=500mV,V8=+500mV VOLTAGE=500mV/DIV TIME = 1μs/DIV

## NOTE:

Top waveforms:Digital Input 5V/DIV Bottomwaveforms:MultiplexerOutput

MUX-08 LARGE-SIGNAL SWITCHING

R=1MS,C=10pF,V--10V,V8+10V

<!-- image -->

VOLTAGE=5V/DIV

TIME = 1μs/DIV

MUX-08 SMALL-SIGNAL SWITCHING WITH2μ8SAMPLE TIME

<!-- image -->

RL=1MS2,CL=10pF,V1=500mV,Vg=+500mV VOLTAGE = 500mV/DIV TIME - 500ns/DIV

MUX-08 SMALL-SIGNAL SWITCHING

<!-- image -->

RL=1MS2,CL=10pF,V1==500mV.V8=+500mV VOLTAGE =500mV/DIV TIME = 1μs/DIV

MUX-08 SMALL-SIGNALSWITCHING WITHFILTERINGAND 2.5μ8 SAMPLE TIME

<!-- image -->

RL=1MΩ,CL=500pF,V1=-500mV,Vg=+500mV VOLTAGE-500mV/DIV TIME = 500ns/DIV

MUX-08

## TYPICAL PERFORMANCE CHARACTERISTICS (Applies to all grades, unless otherwise noted.)

MUX-08CROSSTALKAND OFFISOLATIONPERFORMANCE OF CHANNEL8

<!-- image -->

FREQUENCY (Hz)

ENABLE DELAY TIMES VS TEMPERATURE

<!-- image -->

TEMPERATURE (°C)

RoN vs SWITCH CURRENT (Is)

<!-- image -->

MUX-08CROSSTALKAND OFFISOLATIONPERFORMANCE OF CHANNEL8

<!-- image -->

FREQUENCY (H)

"ON"RESISTANCE(RON) VS ANALOG VOLTAGE(VA)

<!-- image -->

Ron vs TeMPerATURE

TEMPERATURE (°C)

<!-- image -->

TRANSITION TIMES vs TEMPERATURE

<!-- image -->

Ron vs SWItCH vOLTAGE (VsD)

<!-- image -->

SWITCH LEAKAGE CURRENTSVS ANALOGINPUTVOLTAGE

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS (Applies to all grades, unless otherwise noted.)

SWITCHLEAKAGE CURRENTS VSTEMPERATURE

<!-- image -->

TEMPERATURE (°C)

MUX-24 SMALL-SIGNAL SWITCHING

<!-- image -->

RL=1MS2,CL=10pF,V1=-500mV,

V4=+500mV

VOLTAGE = 500mV/DIV, TIME = 1μs/DIV

MUX-24 SMALL-SIGNAL SWITCHING WITH FILTERING AND 2.5μs SAMPLE TIME

<!-- image -->

V4=+500mV

RL-1MS2,CL=500pF,V1=-500mV,

VOLTAGE=500mV/DIV,TIME=500ns/DIV

## NOTE:

Topwaveforms:Digital Input5V/DIV

Bottomwaveforms:MultiplexerOutput

## SUPPLY CURRENTS VS TEMPERATURE

<!-- image -->

MUX-24 SMALL-SIGNAL SWITCHING WITHFILTERING

<!-- image -->

RL=1MS2,CL=500pF,V1=-500mV,

V4 =+500mV

VOLTAGE - 500mV/DIV, TIME - 1μs/DiV

MUX-24 BREAK-BEFORE-MAKE SWITCHING

<!-- image -->

RL=1kΩ,CL=10pF,V1,4=10V

VOLTAGE=2V/DIV,TIME=200ns/DIV

MUX-08 SWITCHCAPACITANCES VS ANALOG INPUT VOLTAGE

<!-- image -->

MUX-24 SMALL-SIGNAL SWITCHING WITH 2μS SAMPLE TIME

<!-- image -->

RL=1MS2,CL=10pF,V1=-500mV,

V4=+500mV

VOLTAGE=500mV/DIV,TIME=500ns/DIV

MUX-24 LARGE-SIGNAL SWITCHING

<!-- image -->

RL-1MS,CL-10pF,V1-10V.V4=+10V

VOLTAGE=5V/DIV, TIME = 1μs/DIV

MUX-08

DIGITAL INPUT CURRENTS VS TEMPERATURE

<!-- image -->

## A.C. TEST CIRCUITS

## TRANSITION TIME TEST CIRCUIT

MUX-24 SWITCH CAPACITANCES VS ANALOGINPUTVOLTAGE

<!-- image -->

MUX-24 CROSSTALKANDOFF ISOLATIONPERFORMANCE OF CHANNEL 3A

<!-- image -->

FREQUENCY (Hz)

BREAK-BEFORE-MAKE TEST CIRCUIT

<!-- image -->

## ENABLE DELAYTIMETEST CIRCUIT

<!-- image -->

<!-- image -->

## CROSSTALKMEASUREMENTCIRCUIT

<!-- image -->

## A.C.TEST CIRCUITS

## OFF-ISOLATION MEASUREMENTCIRCUIT

<!-- image -->

## SWITCHING TIMEWAVEFORMS

<!-- image -->

## APPLICATIONSINFORMATION

These analog muitiplexers employ ion-implanted JFETs in a switchconfigurationdesignedtoassurebreak-before-make action.Theturn-offtimeismuchfasterthantheturn-ontime to guarantee thisfeature over thefull operating temperature andinputvoltagerange.FabricatedwithBipolar-JFETprocessing,special handling as required with CMos devices,is not necessaryto preventdamage to this multiplexer. Because the digital inputs onlyrequire a 2.oVlogic"1"input level, power-consuming pull-up resistors are not required for TTL compatibilitytoinsurebreak-makeswitchingasismostoften thecasewithCMOSmultiplexers.The digital inputsutilize PNPinput transistors where input currentismaximum at the logic"o"level and drops to thatof areverse-biased diode (about 10nA) as the input voltage is raised above = 1.4V.

The "ON"' resistance, Ron, of the analog switches is constant over thewideinputvoltagerangeof-15Vto+11Vwith VsuPPLy = ±15V. Higher input voltage is tolerable provided thatsome form of current limitingisemployed(suchas that uonoung buipeeoxe piose on abeis indino dwe-do ue jo temperature andpower dissipationrequirements.Fornormal operation,however,positiveinputvoltages should berestricted to11V(or4Vlessthan thepositivesupply).Thisassures that the Vgs of an "OFF" switch remains greater than its Vp, and prevents that channel from being falsely turned "ON". When operating with negative input voltages, the gate-tochanneldiodewillbe turnedon if thevoltagedropacross an "ON" switch exceeds -0.6V. While this condition will cause an error in the output, it will not damage the switch. In lab tests, the multiplexer output has been loaded with a 0.01μFcapacitorin the circuit ofFigure1.WithV=-10V and V8 = +10V, the logic input was driven at a 1kHz rate.The positive-going slew rate was 0.3V/μs which is equivalent to a normal lpss of 3mA. The negative-going slew rate was 0.7V/μs which is equivalent to a "reverse" Ipss of 7mA. Note that when switch 1 is first turned"ON"it has a drop of -20V acrossitsterminals.Inspite ofthatfact,the currentis limited to approximately twice its normal Ipss.

## CROSSTALKANDOFF-ISOLATION

Crosstalk and off-isolation performance is influenced by the type of package selected. Epoxy (P) packaged devices typicallyexhibita12dBimprovementin off-isolation (f=5ookHz)performance when compared to ceramic (Q) packaged devices.Epoxy packaged devices typically exhibit a 15dBimprovementin crosstalk(f=500kHz)performance when compared to ceramic (Q)packaged devices.

## SINGLESUPPLYOPERATIONOFJFETMULTIPLEXERS

PMl'sJFET multiplexerswill operatefroma singlepositive supply voltagewiththenegative supply pin at ground potential. The analog signal range will include ground.

For complete single supply operation information,refer to application note,AN-32.

## MUX-08

## SIMPLIFIEDMUX-08SCHEMATIC

<!-- image -->

ThesimplifiedMUX-08/MUX-24schematicshowsthatlogic trippointsaredeterminedbytwoforwarddiodedrops.An internalclampingdiodebetweenV-andgroundprevents excessivecurrentflowbetweenV+andgroundintheevent that V-becomes opencircuit.The decoding matrix is accomplished by a programmed diode array.The switch cell consists of P channel JFET's with appropriateblocking diodeswhichruggedizes thecircuit'sovervoltage andsupply loss characteristics.

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

## OVERVOLTAGE/POWER-LOSSMEASUREMENTTESTCIRCUIT

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

Dimensions shown in inches and (millimeters)

Rev. C | Page 12 of 14

## ORDERING GUIDE

| Model 1        | Temperature Range   | Package Description     | Package Option   |
|----------------|---------------------|-------------------------|------------------|
| MUX08EPZ       | 0°C to 70°C         | 16-Lead PDIP            | N-16             |
| MUX08EQ        | -25°C to +85°C      | 16-Lead CERDIP          | Q-16             |
| MUX08FPZ       | -40°C to +85°C      | 16-Lead PDIP            | N-16             |
| MUX08FQ        | -25°C to +85°C      | 16-Lead CERDIP          | Q-16             |
| MUX08FSZ       | -40°C to +85°C      | 16-Lead SOIC_N          | R-16             |
| MUX08NBC       | 25°C                | DIE                     |                  |
| 5962-8771601EA | -55°C to +125°C     | 16-Lead CERDIP          | Q-16             |
| 5962-87716022A | -55°C to +125°C     | 20-Terminal Ceramic LCC | E-20-1           |
| 5962-8771602EA | -55°C to +125°C     | 16-Lead CERDIP          | Q-16             |
| MUX08AQ/883C   | -55°C to +125°C     | 16-Lead CERDIP          | Q-16             |
| MUX08BQ/883C   | -55°C to +125°C     | 16-Lead CERDIP          | Q-16             |

1  Z = RoHS Compliant Part COMPLIANT TO JEDEC STANDARDS MS-012-AC

<!-- image -->

CONTROLLING DIMENSIONSARE IN MILLIMETERS; INCH DIMENSIONS (IN PARENTHESES) ARE ROUNDED-OFF MILLIMETER EQUIVALENTS FOR REFERENCE ONLY AND ARE NOT APPROPRIATE FOR USE IN DESIGN.

Figure 9. 16-Lead Standard Small Outline Package [SOIC\_N] Narrow Body

(R-16)

Dimensions shown in millimeters and (inches)

060606-A

## MUX-08

## REVISION HISTORY

| 5/2019-Rev. B to RevC                                                                                   |
|---------------------------------------------------------------------------------------------------------|
| Obsoleted MUX-24 and MUX08BRC/883.....................Universal                                         |
| Deleted MUX-24 Functional Diagram...........................................1                           |
| Changes to Features Section, Ordering information Section, and                                          |
| General Description Section............................................................1                |
| Changed MUX-08A/E MUX-24A/E Column to MUX-08A/E                                                         |
| Column, Electrical Characteristics Table and MUX-08B/F MUX-24B/F Column to MUX-08B/F Column, Electrical |
| Characteristics Table.........................................................................2         |
| Changed MUX-08A/MUX-24AColumn toMUX-08AColumn and MUX-08B/MUX-24B Column to MUX-08B Column,             |

| Electrical Characteristics Table, and MUX-08E/MUX-24E Column to MUX-08EColumn and MUX-08F/MUX-24F Column to   |
|---------------------------------------------------------------------------------------------------------------|
| MUX-08F Column, Electrical Characteristics Table........................3                                     |
| Change to 'ON' Resistance Parameter, MUX-08A......................3                                           |
| Deleted MUX-24 Dice Characteristics...........................................4                               |
| Deleted MUX-24 Logic State Table ................................................5                            |
| Deleted Differential Multiplexers and Figure 6 ..........................10                                   |
| Added Outlines Dimension Section.............................................12                               |
| Added Ordering Guide ..................................................................13                     |

<!-- image -->